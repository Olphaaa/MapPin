import {Component, Inject, OnInit,} from '@angular/core';

import {ModalController, ToastController} from '@ionic/angular';
import {Manager} from '../../@entities/manager/manager';
import {CategoryModalComponent} from './category-modal/category-modal.component';

import * as L from 'leaflet';
import {Icon} from '../../@entities/category/icons';
import {HttpServicePinsService} from '../../services/pinService/http-service-pins.service';
import {Pin} from '../../@entities/pin/pin';
import {Item} from '../../@entities/category/items';
import {Location} from '../../@entities/gps/location';
import {StorageService, StorageType} from '../../services/storage/storage.service';

@Component({
  selector: 'app-pin-button',
  templateUrl: './pin-button.component.html',
  styleUrls: ['./pin-button.component.scss'],
})
export class PinButtonComponent implements OnInit {

  constructor(private modalController: ModalController, @Inject(Manager) private manager,
              private httpServicePins: HttpServicePinsService, public toastController: ToastController) {
  }


  async ngOnInit() {
    this.showAllMarkers();
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: CategoryModalComponent,
      cssClass: 'custom-modal'
    });

    modal.onDidDismiss().then((event) => {
      if (!event.data) {return;}
      const item = event.data.item;
      const location: Location = this.manager.gps.getLocation();

      const latitude = location.lat;
      const longitude = location.lng;
      const date: number = Date.now() / 60;
      const itemUuid = item.id;
      const pinToAdd = {latitude, longitude, date, itemUuid};

      if (latitude != null || longitude != null) {
        this.httpServicePins.addPin(pinToAdd).subscribe(
          () => {
            this.showAllMarkers();
          },
          async (error: any) => {
            const toast = await this.toastController.create({
              message: error.message,
              duration: 3000
            });
            await toast.present();
            console.error('add', error);
          });
      }
    });
    return await modal.present();
  }

  private showAllMarkers() {
    this.httpServicePins.getPins().subscribe(
      (data: Pin[]) => {
        for (const d of data) {
          const icon = Icon.getIcon(Item.getItemById(d.itemUuid));
          const truc = L.marker([d.latitude, d.longitude], {icon});
          truc.addTo(this.manager.map);
        }
      },
      async (error: any) => {
        const toast = await this.toastController.create({
          message: error.message,
          duration: 3000
        });
        await toast.present();
        console.error(error);
      }
    );
  }
}
