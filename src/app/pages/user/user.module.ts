import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';
import {MappinIconComponent} from '../../components/mappin-icon/mappin-icon.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UserPageRoutingModule
    ],
    exports: [
        MappinIconComponent
    ],
    declarations: [UserPage, MappinIconComponent]
})
export class UserPageModule {}
