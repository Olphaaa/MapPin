import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinsPageRoutingModule } from './pins-routing.module';

import { PinsPage } from './pins.page';
import {PinComponent} from '../../components/pin/pin.component';
import {AddPinBtnComponent} from '../../components/add-pin-btn/add-pin-btn.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinsPageRoutingModule
  ],
  declarations: [PinsPage, PinComponent, AddPinBtnComponent]
})
export class PinsPageModule {}
