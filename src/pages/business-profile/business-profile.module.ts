import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessProfilePage } from './business-profile';

@NgModule({
  declarations: [
    BusinessProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessProfilePage),
  ],
})
export class BusinessProfilePageModule {}
