import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { MapModule } from '../map/map.module';
import { PinButtonModule } from '../pin-button/pin-button.module';
import { MenuButtonModule } from '../menu-button/menu-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MapModule,
    PinButtonModule,
    MenuButtonModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}