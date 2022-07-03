import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login/login.service';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService, public toastController: ToastController) {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: [''],
      confirmPassword: ['']
    });
  }

  ngOnInit() {
  }

  signUp() {
    this.checkPasswords();
    const user = {username: this.formGroup.value.email, password: this.formGroup.value.password};
    this.loginService.signUp(user).subscribe(
      (data) => {
        console.log('data', data);
        this.loginService.login(user).subscribe(
          () => {
            this.router.navigate(['/login']);
          },
          async (error) => {
            const toast = await this.toastController.create({
              message: error.message,
              duration: 3000
            });
            await toast.present();
            console.log('error', error);
          }
        );
      },
      async (error) => {
        const toast = await this.toastController.create({
          message: error.message,
          duration: 3000
        });
        await toast.present();
        console.log('error', error);
      });
  }

  private checkPasswords() {
    if (this.formGroup.value.password !== this.formGroup.value.confirmPassword) {
      this.formGroup.controls.confirmPassword.setErrors({incorrect: true});
    }
  }
}
