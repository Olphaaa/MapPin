import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinButtonComponent } from './pin-button.component';
import { CategoryModalModule } from './category-modal/category-modal.module';



@NgModule({
  declarations: [
    PinButtonComponent,
  ],
  imports: [
    CommonModule,
    CategoryModalModule
  ],
  exports: [
    PinButtonComponent
  ]
})
export class PinButtonModule { }
