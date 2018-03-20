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
            "titleHeader1": "Big City Coffee Co",
            "titleHeader2": "01.03.2018 - 31.03.2018",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
            "image": "assets/images/background/1.jpg",
            "button": "View offer"
        }
      ]
    }
  }

  getOffer(){
    return { 
            "headerImage": "assets/images/background/1.jpg",
            "title": "Big City Coffee Co",
            "iconLike": "icon-thumb-up",
            "iconFavorite": "icon-comment",
            "iconShare": "icon-share-variant",
            "reviews": "4.12 (78 reviews)",
            "iconButton": "icon-walk",
            "description": 
                "Big City Coffee Co are a chain of 5 cafes in the Greater London area. " +
                "Our specialities are drinks for food-intolerant customers like gluten-free, dairy-free, sugar-free. " +
                "We’re so busy that we often have queues outside our cafes and our TripAdvisor ratings are 5 stars." +  
                "We plan to open cafes across the UK in phase 1 and Europe in phase 2. We need your help!",
            "offerDetails": [
                {
                    "id": 1,
                    "name": "Business valuation:",
                    "value": "£500,000"
                },
                {
                    "id": 2,
                    "name": "Current equity ownership:",
                    "value": "100% owned by Eva Smith"
                },
                {
                    "id": 3,
                    "name": "% of equity to be offered:",
                    "value": "20%"
                },
                {
                    "id": 4,
                    "name": "Number of shares to be sold:",
                    "value": "100"
                },
                {
                    "id": 5,
                    "name": "Share price:",
                    "value": "£1,000"
                },
                {
                    "id": 6,
                    "name": "Amount of CHX to be held in reserve:",
                    "value": "£5,000 CHX equivalent"
                },
                {
                    "id": 7,
                    "name": "Launch date:",
                    "value": "1st March 2018"
                },
                {
                    "id": 8,
                    "name": "Closing date:",
                    "value": "31st March 2018"
                }
            ],
            "businessFacts": [
                {
                    "name": "Location",
                    "value": "UK"
                },
                {
                    "name": "Sector",
                    "value": "Retail"
                },
                {
                    "name": "Revenue",
                    "value": "£200,000"
                },
                {
                    "name": "Employees",
                    "value": "11-50"
                },
                {
                    "name": "Year founded",
                    "value": "2015"
                },
            ]
   };
  }
}
