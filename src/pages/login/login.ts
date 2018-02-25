import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  params: any = {};

  constructor(
    navCtrl: NavController, 
    private menuCtrl: MenuController) {

    this.params.data = {
      "username": "Username",
      "password": "Password",
      "register": "Register",
      "login": "Login",
      "skip": "Skip",
      "logo": "assets/images/logo/logo.gif"
    }

    this.params.events = {
      onLogin: function (params) {
          console.log('onLogin:' + JSON.stringify(params));
          sessionStorage.setItem('logged', 'yes');
          navCtrl.setRoot(HomePage);
      },
      onRegister: function (params) {
          navCtrl.push(RegisterPage);
      }
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
}
