import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OfferProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OfferProvider {

  constructor(public http: HttpClient) {
    console.log('Hello OfferProvider Provider');
  }

  getOffers(){
    return {
      "items": [
        {
            "id": 1,
            "title": "Status: active",
            "titleHeader": "01.03.2018 - 31.03.2018",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
            "image": "assets/images/background/1.jpg",
            "button": "View offer"
        }
      ]
    }
  }
}
