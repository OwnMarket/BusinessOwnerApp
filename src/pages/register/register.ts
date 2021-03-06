import { Component } from '@angular/core';
import { NavController, MenuController, IonicPage } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user.provider';
import { UserRegistrationModel } from '../../models/user-registration.model';
import { LoginModel } from '../../models/login.model';
import { RegisterStep2Page } from '../register-step2/register-step2';
import { ToastMessageProvider } from '../../providers/toast-message.provider';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  params: any = {};

  constructor(
    navCtrl: NavController, 
    toastr: ToastMessageProvider,
    private menuCtrl: MenuController,
    userProvider: UserProvider) {

    this.params.data = {
      "register": "Join Chainium",
      "logo": "assets/images/logo/chainium-black.jpg",
      "iconAccount": "icon-account",
      "username": "Username",
      "iconHome": "icon-home-variant",
      "iconCity": "icon-city",
      "city": "City",
      "iconWeb": "icon-web",
      "country": "Country",
      "iconLock": "icon-lock",
      "password": "Password",
      "confirmPassword": "Confirm Password",
      "iconEmail": "icon-email-outline",
      "email": "Email",
      "submit": "Next",
      "skip": "Skip"
    }

    this.params.events = {
      onRegister: function(params){
        if(params.password === params.confirmPassword){
          var registerModel = new UserRegistrationModel();
          registerModel.email = params.email;
          registerModel.password = params.password;

          userProvider.register(registerModel)
            .subscribe((res) => {
              // Auto login after successfull registration
              let loginModel = new LoginModel();
              loginModel.username = registerModel.email;
              loginModel.password = registerModel.password;

              userProvider.login(loginModel)
                .subscribe((res) => {
                  toastr.success("Thank you for registering!");
                  navCtrl.setRoot(RegisterStep2Page)
                });
            }, (errorResponse) => {
              toastr.errorAlerts(errorResponse);
            });
        }else{
          toastr.error('"Password" and "Confirm password" must match!');
        }
      },
      onSkip: function(params){
        navCtrl.setRoot(LoginPage)
      }
    };
  }
  
  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
}
