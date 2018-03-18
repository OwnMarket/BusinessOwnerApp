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
    alert('Comming soon');
    /* TODO: comming soon
    this._businessProvider.updateProfile(this.profile)
      .subscribe((data) => {
        this._toastr.success('Business profile updated!');
      }, (err) => {
        this._toastr.errorAlerts(err);
      });
    */
  }

  ngOnInit(){
    this.profile.Name = 'Business City Coffe Co';
    this.profile.Description = 'Big City Coffee Co provides a cool and friendly meet-up place for food-intolerant customers';
    this.profile.YearFounded = 2015;
    this.profile.EmployeeCountRange = '11-50';
    this.profile.Website = 'www.bigcitycoffee.co.uk';
    
    this.profile.AddressStreet = '1 High Street';
    this.profile.AddressCity = 'London';
    this.profile.AddressRegion = 'Greater London';
    this.profile.AddressCountry = 'UK';
    /* TODO: comming soon
    this._businessProvider.getProfile()
      .subscribe((data) => {
        this.profile = data;
      }, (res) => {
        console.log(res);
      });
    */
  }
}
