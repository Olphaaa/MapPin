import { Component, OnInit } from '@angular/core';
import {  ModalController } from '@ionic/angular';

import * as Categories from '../categories';
import { ItemModalComponent } from '../item-modal/item-modal.component';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss'],
})
export class CategoryModalComponent implements OnInit {
  categories = [];
  modal: any;

  constructor(private modalController: ModalController) {
    
  }

  ngOnInit() {
    this.categories = Categories.getCategories();
  }

  async showItemModal(category) {
    const modal = await this.modalController.create({
      component: ItemModalComponent,
      cssClass: 'custom-modal',
      componentProps: { 
        category
      }
    });

    this.modal.style["display"] = "none";

    modal.onDidDismiss().then((event) => {
      if (event.data) {
        this.modal.dismiss(event.data);
        return;
      }

      this.modal.style["display"] = "block";

    });

    await modal.present();

    return 
  }

  selectCategory(id: string) {
    let category = Categories.getCategories().find(c => c.id === id)

    this.showItemModal(category);
  }

}
