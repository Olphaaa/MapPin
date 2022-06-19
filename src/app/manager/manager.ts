import { Injectable } from "@angular/core";
import * as L from 'leaflet';

@Injectable({
    providedIn: 'root',
  })
  export class Manager {
    private map: L.Map;
  }
  