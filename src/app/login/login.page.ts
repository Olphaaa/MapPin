import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = {};
  password = {};

  constructor() { }

  ngOnInit()   {
  }

  loginForm() {
    console.log('info' , this.email);
    console.log('info' , this.password);
  }
}
