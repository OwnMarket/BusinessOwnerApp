import { Component } from '@angular/core';
import { NavController, MenuController, IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { UserProvider } from '../../providers/user.provider';
import { LoginModel } from '../../models/login.model';
import { ToastMessageProvider } from '../../providers/toast-message.provider';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  params: any = {};

  constructor(
    private navCtrl: NavController, 
    private _menuCtrl: MenuController,
    private _userProvider: UserProvider,
    private _toastr: ToastMessageProvider) {

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

        _userProvider
          .login(model)
          .subscribe((res) => {
            navCtrl.setRoot(HomePage)
          }, (res) => {
            _toastr.showMessage("Wrong credentials!");
            console.log(res);
          });
      },
      onRegister: function (params) {
          navCtrl.push(RegisterPage);
      }
    };
  }

  ionViewDidEnter() {
    this._menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this._menuCtrl.enable(true);
  }

  ngOnInit(){
    if(this._userProvider.getToken()){
      this.navCtrl.setRoot(HomePage);
    }
  }
}
