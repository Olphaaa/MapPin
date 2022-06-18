import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinButtonComponent } from './pin-button.component';
import { PinModalModule } from './pin-modal/pin-modal.module';



@NgModule({
  declarations: [
    PinButtonComponent,
  ],
  imports: [
    CommonModule,
    PinModalModule
  ],
  exports: [
    PinButtonComponent
  ]
})
export class PinButtonModule { }
