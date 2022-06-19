import { Component, Inject, OnInit, } from '@angular/core';

import {  ModalController } from '@ionic/angular';
import { Manager } from '../manager/manager';
import { MapComponent } from '../map/map.component';
import { CategoryModalComponent } from './category-modal/category-modal.component';

import * as L from 'leaflet';
import { Icon } from '../category/icons';

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

      let item = event.data.item;
      let category = event.data.category;

      let icon = Icon.getIcon(item);

      let location = this.manager.gps.getLocation();

      let marker = L.marker([ location.lat + (-0.5 + Math.random()), location.lng + (-0.5 + Math.random())], { icon });

      marker.addTo( this.manager.map);
     
    });
    
    return await modal.present();
  }

  ngOnInit() {}

}
