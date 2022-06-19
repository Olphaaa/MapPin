import { Component, OnInit, AfterViewInit, OnDestroy, AfterViewChecked, Inject } from '@angular/core';

import * as L from 'leaflet';
import { Manager } from '../manager/manager';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy, AfterViewChecked {
  private map;

  dump(obj) {
    var out = '';
    for (var i in obj) {
        out += i + ": " + obj[i] + "\n";
    }

    return out;
  }

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

    this.loadMarkers();
  
    this.map.on('click', (e) => {
      console.log(e)

      this.markers.forEach(element => {
         let icon = element.getIcon();
         
         icon.options.iconSize = [50, 50];

         element.setIcon(icon);
      });
    });

    this.map.on('zoom', (e) => {
      console.log(e.target.getZoom());
    });

    this.map.locate({
      setView: true,
      zoom: 4
    
    });
  }

  static icons = {
    FAVICON: L.icon({ 
      iconUrl: 'assets/item/cepe.png', 
      iconSize: [70, 70],
    }),
  };

  private markers = [];

  private loadMarkers(): void { 

    this.markers.push(L.marker([ 45.0278762, 3.9420117 ], { icon: MapComponent.icons.FAVICON }));
    this.markers.push(L.marker([ 45.0278762, 3.9425200 ], { icon: MapComponent.icons.FAVICON }));
    this.markers.forEach(element => {
      element.addTo(this.map);
    });
  }

  constructor(@Inject(Manager) private manager) { }

  ngOnInit() {
    this.initMap();
  }


  ngOnDestroy() {
    this.map.remove();
  }

  ngAfterViewChecked(): void {
    this.map.invalidateSize(true);
    //this.map.center = this.center;
  }

}
