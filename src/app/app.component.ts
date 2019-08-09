import { Component } from '@angular/core';

import { OtpService } from './service/otp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(public otp: OtpService) { }
}
