import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { LoginLayout1Module } from '../../components/login/layout-1/login-layout-1.module';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    LoginLayout1Module
  ],
})
export class LoginPageModule {}
