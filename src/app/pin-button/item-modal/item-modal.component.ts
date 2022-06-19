import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss'],
})
export class ItemModalComponent implements OnInit {
  items = [];
  modal: any;
  category;

  constructor() { }

  ngOnInit() {
    this.items = this.category.items;
  }

  selectItem(id: string) {
   // let item = this.items.find(i => i.id === id)
   this.modal.dismiss({
      item: id
   })
  }

}
