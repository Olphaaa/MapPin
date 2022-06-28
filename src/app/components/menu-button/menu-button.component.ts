import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}


  login() {
    console.log('login');
    this.router.navigate(['./login']);
  }
}
