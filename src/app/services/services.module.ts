import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpServicePinsService} from './pinService/http-service-pins.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HttpServicePinsService
  ]
})
export class ServicesModule { }
