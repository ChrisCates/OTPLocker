import { TestBed } from '@angular/core/testing';

import { OtpService } from './otp.service';

describe('OtpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtpService = TestBed.get(OtpService);
    expect(service).toBeTruthy();
  });
});
