import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryModalComponent } from './category-modal.component';
import { ItemModalModule } from '../item-modal/item-modal.module';



@NgModule({
  declarations: [
    CategoryModalComponent
  ],
  imports: [
    CommonModule,
    ItemModalModule
  ],
  exports: [
    CategoryModalComponent
  ]
})
export class CategoryModalModule { }
