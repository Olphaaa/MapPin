import { Injectable } from "@angular/core";
import * as L from 'leaflet';
import { Gps } from "../gps/gps";

@Injectable({
    providedIn: 'root',
  })
  export class Manager {
    private map: L.Map;
    private gps: Gps = new Gps();
  }
