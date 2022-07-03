import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageService, StorageType} from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServicePinsService {

  // eslint-disable-next-line max-len
  private authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4OGNlOWE4ZS0wYTVmLTQ2NWMtOTBhNS0xM2Q4OTk1MTNjNDYiLCJpYXQiOjE2NTU4MzA5MTJ9.YhYq5r3GdKaL15KBqtGX3b7nh2IPu07nsCqHYpNvYSU';
  private baseUrl = 'https://api.mappin.sunei.fr/pin';
  private secondes = 10;

  constructor(private http: HttpClient, private storageService: StorageService) {}

  getPins() {
    const token = this.storageService.getStorageItem(StorageType.TOKEN);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.baseUrl, { headers });
  }


  addPin(pin: any) {
    const token = this.storageService.getStorageItem(StorageType.TOKEN);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(this.baseUrl, pin, { headers });
  }

}
