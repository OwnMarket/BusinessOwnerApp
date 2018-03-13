import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../../providers/user.provider';
import { UserProfileModel } from '../../../models/user-profile.model';
import { ToastMessageProvider } from '../../../providers/toast-message.provider';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile: UserProfileModel = new UserProfileModel();

  constructor(
    private _userProvider: UserProvider,
    private _toastr: ToastMessageProvider) {
  }

  save(){
    this._userProvider.updateProfile(this.profile)
      .subscribe((data) => {
        this._toastr.success('User profile updated!');
      }, (err) => {
        this._toastr.errorAlerts(err);
      });
  }

  ngOnInit(){
    this._userProvider.getProfile()
      .subscribe((data) => {
        this.profile = data;
      }, (res) => {
        console.log(res);
      });
  }
}
