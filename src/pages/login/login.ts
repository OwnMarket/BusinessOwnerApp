import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  params: any = {};

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
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
    // the root left menu should be disabled on this page
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }
}
