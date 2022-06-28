import * as L from 'leaflet';
import {Inject, Injectable} from '@angular/core';
import {HttpServicePinsService} from './http-service-pins.service';
import {Manager} from '../../@entities/manager/manager';
import {Icon} from '../../@entities/category/icons';
import {Item} from '../../@entities/category/items';

@Injectable({
  providedIn: 'root'
})
export class PinRefreshTimerService {
  private secondes = 10;

  constructor(private httpServicePins: HttpServicePinsService, @Inject(Manager) private manager) { }

  public initTimer() {
    setInterval(() => {
      this.refreshPins();
    }, this.secondes * 1000);
  }

  private refreshPins() {
    this.httpServicePins.getPins().subscribe(
      (data: any) => {
        for (const d of data) {
          const icon = Icon.getIcon(Item.getItemById(d.itemUuid));
          const truc = L.marker([d.latitude, d.longitude], {icon});
          truc.addTo(this.manager.map);
        }
      },
      (error: any) => {
        console.error(error);
      });
  }
}
