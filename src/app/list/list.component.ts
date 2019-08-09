import { Component, OnInit } from '@angular/core';
import { OtpService } from '../service/otp.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public constructor(public otp: OtpService) { }

  public ngOnInit() { }

}
