import { Component, OnInit } from '@angular/core';

import * as Categories from './categories';

@Component({
  selector: 'app-pin-modal',
  templateUrl: './pin-modal.component.html',
  styleUrls: ['./pin-modal.component.scss'],
})
export class PinModalComponent implements OnInit {
  categories = Categories.getCategories();

  constructor() { }

  ngOnInit() {}

}
