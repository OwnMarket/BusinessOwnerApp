import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { UserProvider } from '../../providers/user.provider';
import { LoginModel } from '../../models/login.model';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  params: any = {};

  constructor(
    navCtrl: NavController, 
    private _menuCtrl: MenuController,
    _userProvider: UserProvider) {

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
        var model = new LoginModel();
        model.username = params.username;
        model.password = params.password;

        _userProvider.login(model).subscribe((res) => {
          navCtrl.setRoot(HomePage)
        });
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
    this._menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this._menuCtrl.enable(true);
  }
}
