// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// External Modules
import { QRCodeModule } from 'angularx-qrcode';

import { OtpService } from './service/otp.service';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QRCodeModule,
  ],
  providers: [OtpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
