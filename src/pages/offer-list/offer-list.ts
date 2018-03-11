import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { OfferProvider } from '../../providers/offer.provider';
import { OfferPage } from '../offer/offer';

@IonicPage()
@Component({
  selector: 'page-offer-list',
  templateUrl: 'offer-list.html',
})
export class OfferListPage {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
  }
}
