import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { UserProvider } from '../../providers/user.provider';
import { UserRegistrationModel } from '../../models/user-registration.model';
import { HomePage } from '../home/home';
import { UserRegistrationStepTwoModel } from '../../models/user-registration-step-two.model';
import { ToastMessageProvider } from '../../providers/toast-message.provider';

/**
 * Generated class for the RegisterStep2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register-step2',
  templateUrl: 'register-step2.html',
})
export class RegisterStep2Page {

  params: any = {};

  constructor(
    navCtrl: NavController, 
    private menuCtrl: MenuController,
    userProvider: UserProvider,
    toastr: ToastMessageProvider) {

    this.params.data = {
      "register": "Finish your registration",
      "logo": "assets/images/logo/logo.gif",
      "firstName": "First name",
      "lastName": "Last name",
      "dateOfBirth": "Date of birth",
      "country": "Country",
      "companyPosition": "Company position",
      "submit": "Save",
      "skip": "Skip"
    }

    this.params.events = {
      onRegister: function(params){
        let registrationStep2Model = new UserRegistrationStepTwoModel();
        registrationStep2Model.FirstName = params.firstName;
        registrationStep2Model.LastName = params.lastName;
        registrationStep2Model.BusinessName = params.businessName;

        userProvider.registerStepTwo(registrationStep2Model)
          .subscribe((res) => {
            toastr.showMessage("User profile updated!")
            navCtrl.setRoot(HomePage)
          });
      },
      onSkip: function(params){
        navCtrl.setRoot(HomePage)
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
