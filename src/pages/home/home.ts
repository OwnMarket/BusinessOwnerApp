import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user.provider';
import { ToastMessageProvider } from '../../providers/toast-message.provider';
import { IonicPage, NavController } from 'ionic-angular';
import { OfferProvider } from '../../providers/offer.provider';
import { OfferPage } from '../offer/offer';
import { AccountPage } from '../account/account';
import { BusinessProfilePage } from '../business-profile/business-profile';
import { UserProfileModel } from '../../models/user-profile.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  params: any = {};
  profile: any = {};

  constructor(
    private navCtrl: NavController,
    offerProvider: OfferProvider,
    private userProvider: UserProvider) {
    this.params.data = offerProvider.getOffers();

    this.params.events = {
        'onItemClick': function (item: any) {
            navCtrl.push(OfferPage);
        },
        'onExplore': function (item: any) {
            navCtrl.push(OfferPage);
        }
    };
  }

  openPage(pageName){
    switch(pageName){
      case AccountPage.name:
        this.navCtrl.push(AccountPage);
        break;
      case BusinessProfilePage.name:
        this.navCtrl.push(BusinessProfilePage);
        break;
      default:
        //do nothing
    }
  }

  ngOnInit(){
    this.userProvider.getProfile()
      .subscribe((data) => {
        this.profile = data;
      }, (res) => {
        console.log(res);
      });
  }
}
