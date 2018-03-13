import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusinessProvider } from '../../providers/business.provider';
import { BusinessProfileModel } from '../../models/business-profile.model';
import { ToastMessageProvider } from '../../providers/toast-message.provider';

/**
 * Generated class for the BusinessProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-business-profile',
  templateUrl: 'business-profile.html',
})
export class BusinessProfilePage {
  profile: BusinessProfileModel = new BusinessProfileModel();

  constructor(
    private _businessProvider: BusinessProvider,
    private _toastr: ToastMessageProvider) {
  }

  save(){
    this._businessProvider.updateProfile(this.profile)
      .subscribe((data) => {
        this._toastr.success('Business profile updated!');
      }, (err) => {
        this._toastr.errorAlerts(err);
      });
  }

  ngOnInit(){
    this._businessProvider.getProfile()
      .subscribe((data) => {
        this.profile = data;
      }, (res) => {
        console.log(res);
      });
  }
}
