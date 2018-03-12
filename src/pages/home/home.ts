import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user.provider';
import { ToastMessageProvider } from '../../providers/toast-message.provider';
import { IonicPage, NavController } from 'ionic-angular';
import { OfferProvider } from '../../providers/offer.provider';
import { OfferPage } from '../offer/offer';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  params: any = {};

  constructor(
    navCtrl: NavController,
    offerProvider: OfferProvider) {
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

  ngOnInit(){}
}
