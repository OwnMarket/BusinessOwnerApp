import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  params: any = {};

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private menuCtrl: MenuController) {

    this.params.data = {
      "logo": "assets/images/logo/logo.gif",
      "register": "Register",
      "username": "Username",
      "city": "City",
      "country": "Country",
      "password": "Password",
      "email": "Email",
      "button": "submit",
      "skip": "Skip"
    };

    this.params.events = {
      onRegister: function(params) {
          navCtrl.setRoot(HomePage)
      },
      onSkip: function(params) {
          navCtrl.push(LoginPage);
      }
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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
