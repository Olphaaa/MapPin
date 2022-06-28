import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button.component';
import {IonicModule} from '@ionic/angular';




@NgModule({
  declarations: [
    MenuButtonComponent,
  ],
    imports: [
        CommonModule,
        IonicModule
    ],
  exports: [
    MenuButtonComponent
  ]
})
export class MenuButtonModule { }
