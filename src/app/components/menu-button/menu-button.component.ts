import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StorageService, StorageType} from '../../services/storage/storage.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit {

  isUserConnected: boolean;

  constructor(private router: Router, private storageService: StorageService) { }

  ngOnInit() {
    this.checkUserConnected();
  }


  onClick() {
    if (this.checkUserConnected()) {
      this.router.navigate(['/user']);
    }
    this.router.navigate(['/login']);
  }

  private checkUserConnected(): boolean {
    this.isUserConnected = this.storageService.getStorageItem(StorageType.TOKEN) !== null;
    return this.isUserConnected;
  }
}
