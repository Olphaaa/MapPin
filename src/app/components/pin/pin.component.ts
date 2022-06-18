import {Component, Input, OnInit} from '@angular/core';
import Pin from '../../@entities/Pin';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
})
export class PinComponent implements OnInit {

  @Input() pin: Pin;

  constructor() { }

  ngOnInit() {
    console.log(this.pin);
  }

}
