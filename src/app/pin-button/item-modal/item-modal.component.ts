import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss'],
})
export class ItemModalComponent implements OnInit {
  modal: any;
  category;

  constructor() { }

  ngOnInit() {
   
  }

  selectItem(category, item) {
   this.modal.dismiss({
    category,
    item
   })
  }

}
