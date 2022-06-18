import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button.component';



@NgModule({
  declarations: [
    MenuButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuButtonComponent
  ]
})
export class MenuButtonModule { }
