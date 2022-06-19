import { Component, Inject, OnInit, } from '@angular/core';

import {  ModalController } from '@ionic/angular';
import { Manager } from '../manager/manager';
import { MapComponent } from '../map/map.component';
import { CategoryModalComponent } from './category-modal/category-modal.component';

import * as L from 'leaflet';

@Component({
  selector: 'app-pin-button',
  templateUrl: './pin-button.component.html',
  styleUrls: ['./pin-button.component.scss'],
})
export class PinButtonComponent implements OnInit {

  constructor(private modalController: ModalController, @Inject(Manager) private manager) {
    
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: CategoryModalComponent,
      cssClass: 'custom-modal'
    });

    modal.onDidDismiss().then((event) => {
      if (!event.data) return;

      let marker = L.marker([ 45.7626843, 3.0960833 ], { icon: MapComponent.icons.FAVICON });
  
      marker.addTo( this.manager.map);
    });
    
    return await modal.present();
  }

  ngOnInit() {}

}
