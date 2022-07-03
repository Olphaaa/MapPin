import {Component, OnInit} from '@angular/core';
import {StorageService, StorageType} from '../../services/storage/storage.service';
import {User} from '../../@entities/user/user';
import {LoginService} from '../../services/login/login.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  connectedUser: User;

  constructor(private storageService: StorageService, private loginService: LoginService,
              private router: Router, public toastController: ToastController) { }

  ngOnInit() {
    this.getUserConnected();
  }

  onLogOut() {
    this.storageService.removeStorageItem(StorageType.TOKEN);
    this.router.navigate(['/login']);
  }

  private getUserConnected() {
    const token = this.storageService.getStorageItem(StorageType.TOKEN);
    this.loginService.getUserInfos(token).subscribe(
      (user: User) => {
        this.connectedUser = user;
      },
      async (error) => {
        console.log(error);
        const toast = await this.toastController.create({
          message: error.message,
          duration: 3000
        });
        await toast.present();
      });
  }
}
