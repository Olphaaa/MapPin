import { Component, OnInit, } from '@angular/core';

import {  ModalController } from '@ionic/angular';
import { PinModalComponent } from './pin-modal/pin-modal.component';


@Component({
  selector: 'app-pin-button',
  templateUrl: './pin-button.component.html',
  styleUrls: ['./pin-button.component.scss'],
})
export class PinButtonComponent implements OnInit {

  constructor(private modalController: ModalController) {
    
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: PinModalComponent,
      cssClass: 'custom-modal '
    });
    
    return await modal.present();
  }

  ngOnInit() {}

}
