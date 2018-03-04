import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountPage } from './account';
import { SecuritySettingsPageModule } from './security-settings/security-settings.module';
import { ProfilePageModule } from './profile/profile.module';
import { TabsLayout3Module } from '../../components/tabs/layout-3/tabs-layout-3.module';

@NgModule({
  declarations: [
    AccountPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountPage),
    TabsLayout3Module,
    ProfilePageModule,
    SecuritySettingsPageModule
  ],
})
export class AccountPageModule {}
