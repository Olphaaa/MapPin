import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';

import { Location } from './location';

export class Gps {
    location: Location;

    constructor() { 
      this.watch();
    }

    async requestPermissions() {
        const permResult = await Geolocation.requestPermissions();
        console.log('Perm request result: ', permResult);
    }

    watch() {
      Geolocation.watchPosition({ enableHighAccuracy: true }, (position) => {
        this.location = new Location(position.coords.latitude, position.coords.longitude);
      });

    }

    getLocation(): Location {
      return this.location;
    }

    /*async getCurrentCoordinate() {
        if (!Capacitor.isPluginAvailable('Geolocation')) {
          console.log('Plugin geolocation not available');
          return;
        }

        let result = await Geolocation.getCurrentPosition();

        let { latitude, longitude } = result.coords;

      
        return { latitude, longitude };
      }*/
}