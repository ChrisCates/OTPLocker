import { Injectable } from '@angular/core';
import { encode } from 'hi-base32';

declare const OTPAuth;

@Injectable({ providedIn: 'root' })
export class OtpService {
  public items = [];
  public codes = [];

  public constructor() {
    try {
      const storage = localStorage.getItem('otplocker');
      if (storage) {
        this.codes = JSON.parse(storage).map(item => {
          return this.createAuth(item.code, item.type, item.sha, item.encoding);
        });
      }
      console.log(storage, this.items);
    } catch (error) {
      console.log('Could not parse local Storage');
    }

    setInterval(() => { console.log(this.items); }, 1000);
  }

  public createSecret(length: number = 36): string {
    const randomString = (Math.random() * 100).toString(16);
    return encode(randomString, true).slice(0, length);
  }

  public createAuth(code: string = this.createSecret(), type: string = 'TOTP', sha: string = 'SHA1', encoding: string = 'B32') {
    const secret = encoding === 'raw' ? OTPAuth.Secret.fromRaw(code) : OTPAuth.Secret.fromB32(code);

    this.items.unshift({ code, type, sha, encoding });
    this.updateStorage();

    if (type.toUpperCase() === 'TOTP') {
      return new OTPAuth.TOTP({
        issuer: 'OTPLOCKER',
        label: 'OTPLOCKER',
        algorithm: sha,
        digits: 6,
        period: 30,
        secret,
      });
    } else {
      return new OTPAuth.HOTP({
        issuer: 'OTPLOCKER',
        label: 'OTPLOCKER',
        algorithm: sha,
        digits: 6,
        secret,
      });
    }
  }

  public getTimer(): number {
    if (new Date().getSeconds() >= 30) {
      return 30 - (new Date().getSeconds() - 30);
    } else {
      return 30 - new Date().getSeconds();
    }
  }

  public updateStorage(): void {
    const storage = this.items;
    localStorage.setItem('otplocker', JSON.stringify(storage));
  }

}
