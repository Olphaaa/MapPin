import { Component, OnInit, AfterViewInit, OnDestroy, AfterViewChecked, Inject } from '@angular/core';
import { Platform } from '@ionic/angular';

import * as L from 'leaflet';
import { Gps } from '../../@entities/gps/gps';
import { Manager } from '../../@entities/manager/manager';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy, AfterViewChecked {
  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 46.895566, 2.2611308 ],
      zoom: 5,
      attributionControl: false,
      preferCanvas: true,
      touchZoom: true,
      zoomControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    this.manager.map = this.map;
  }

  constructor(
      public platform: Platform,
      @Inject(Manager) private manager
    ) { }

  ngOnInit() {
    if(this.platform.is('android')) {
      this.manager.gps.requestPermissions();
    }

    this.initMap();
  }


  ngOnDestroy() {
    this.map.remove();
  }

  ngAfterViewChecked(): void {
    this.map.invalidateSize(true);
  }

}
