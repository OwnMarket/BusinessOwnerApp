import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { OfferProvider } from '../../providers/offer.provider';

@IonicPage()
@Component({
  selector: 'page-offer-list',
  templateUrl: 'offer-list.html',
})
export class OfferListPage {
  params: any = {};

  constructor(offerProvider: OfferProvider) {
    this.params.data = offerProvider.getOffers();

    this.params.events = {
        'onItemClick': function (item: any) {
            console.log(item);
        },
        'onExplore': function (item: any) {
            this
        }
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
  }
}
