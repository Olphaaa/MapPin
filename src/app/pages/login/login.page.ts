import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login/login.service';
import {StorageService, StorageType} from '../../services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formGroup: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private loginService: LoginService, private storageService: StorageService) {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['']
    });
  }

  ngOnInit()   {
  }

  logForm() {
    console.log('info', this.formGroup.value);
    const user = {username: this.formGroup.value.email, password: this.formGroup.value.password};
    this.loginService.login(user).subscribe(
      (data) => {
        console.log('data', data);
        this.storageService.setStorageItem(StorageType.TOKEN, data.token);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log('error', error);
      });
  }



  onSignUp() {
    this.router.navigate(['./register']);
  }
}
