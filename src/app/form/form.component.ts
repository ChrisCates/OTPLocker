import { Component, OnInit } from '@angular/core';
import { OtpService } from '../service/otp.service';

export interface FormInterface {
  secret: string;
  type: string;
  sha: string;
  encoding: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormInterface = {
    secret: '',
    type: 'TOTP',
    sha: 'SHA1',
    encoding: 'B32',
  };

  public constructor(public otp: OtpService) { }

  public ngOnInit() { }

  public addCode(): void {
    this.otp.codes.unshift(this.otp.createAuth(this.form.secret, this.form.type, this.form.sha, this.form.encoding));
    this.form.secret = '';

  }

  public generateCode(): void {
    this.otp.codes.unshift(this.otp.createAuth());
  }

}
