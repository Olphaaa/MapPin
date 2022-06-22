import { Component } from '@angular/core';
import {PinRefreshTimerService} from './services/pinService/pin-refresh-timer.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private pinService: PinRefreshTimerService) {
    pinService.initTimer();
  }
}
