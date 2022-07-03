import {Component, OnInit} from '@angular/core';
import {HttpServicePinsService} from '../../services/pinService/http-service-pins.service';
import {Pin} from '../../@entities/pin/pin';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private pins: Pin[] = [];

  constructor(private httpServicePins: HttpServicePinsService, public toastController: ToastController) {}

  ngOnInit(): void {
    this.getPins();
  }

  private getPins() {
    this.httpServicePins.getPins().subscribe(
      (data: any) => {
        this.pins = data;
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
