import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecuritySettingsPage } from './security-settings';

@NgModule({
  declarations: [
    SecuritySettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(SecuritySettingsPage),
  ],
})
export class SecuritySettingsPageModule {}
