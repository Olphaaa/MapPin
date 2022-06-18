import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pin-btn',
  templateUrl: './add-pin-btn.component.html',
  styleUrls: ['./add-pin-btn.component.scss'],
})
export class AddPinBtnComponent implements OnInit {

  public image: string;

  constructor() { }

  ngOnInit() {
  }

  onClick($event: MouseEvent) {
    console.log('clicked');
  }
}
