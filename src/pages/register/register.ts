import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  params: any = {};

  constructor(
    navCtrl: NavController, 
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
      onRegister: function(params){
        navCtrl.setRoot(HomePage)
      },
      onSkip: function(params){
        navCtrl.setRoot(LoginPage)
      }
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
}
