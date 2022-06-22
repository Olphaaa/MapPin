import {Component, OnInit} from '@angular/core';
import {HttpServicePinsService} from '../../services/pinService/http-service-pins.service';
import {Pin} from '../../@entities/pin/pin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private pins: Pin[] = [];

  constructor(private httpServicePins: HttpServicePinsService) {}

  ngOnInit(): void {
    this.getPins();
  }

  private getPins() {
    this.httpServicePins.getPins().subscribe(
      (data: any) => {
        this.pins = data;
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
