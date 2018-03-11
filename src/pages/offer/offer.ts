import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfferProvider } from '../../providers/offer.provider';

/**
 * Generated class for the OfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer',
  templateUrl: 'offer.html',
})
export class OfferPage {
  params: any = {};
  constructor(
    offerProvider: OfferProvider
  ) {
    this.params.data = offerProvider.getOffer();
    
    this.params.events = {
      'onLike': function (item: any) {
        console.log("Like");
      },
      'onFavorite': function (item: any) {
          item.favorite = !item.favorite;
          console.log("Favorite");
      },
      'onShare': function (item: any) {
            console.log("Share");
      },
      'onFab': function (item: any) {
            console.log("Fab");
      },
      'onRates': function (index: number) {
            console.log("Rates " + (index + 1));
      },
      'onItemClick': function (item: any) {
            console.log(item.title);
      },
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferPage');
  }

}
