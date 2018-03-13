import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../../providers/user.provider';
import { ToastMessageProvider } from '../../../providers/toast-message.provider';
import { ChangePasswordModel } from '../../../models/change-password.model';

/**
 * Generated class for the SecuritySettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-security-settings',
  templateUrl: 'security-settings.html',
})
export class SecuritySettingsPage {
  model: ChangePasswordModel = new ChangePasswordModel();
  confirmPassword: string;

  constructor(
    private _userProvider: UserProvider,
    private _toastr: ToastMessageProvider) {
  }

  changePassword() {
    if (this.confirmPassword == this.model.newPassword) {
      this._userProvider.changePassword(this.model)
        .subscribe((data) => {
          this._toastr.success('Security settings updated!');
        }, (err) => {
          this._toastr.errorAlerts(err);
        }, () => {
          this.model.currentPassword = '';
          this.model.newPassword = '';
          this.confirmPassword = '';
        });
    }else{
      this._toastr.error('"New password" and "Confirm password" must match!');
    }
  }

}
