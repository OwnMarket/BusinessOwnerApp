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

  getOffer(){
    return { 
      "headerImage": "assets/images/background/1.jpg",
            "title": "Big City Coffee Co",
            "iconLike": "icon-thumb-up",
            "iconFavorite": "icon-comment",
            "iconShare": "icon-share-variant",
            "reviews": "4.12 (78 reviews)",
            "iconButton": "icon-walk",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            "description2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            "description3": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English",
            "description4": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            "iconsStars": [
                {
                    "isActive": true,
                    "iconActive": "icon-star-outline",
                    "iconInactive": "icon-star"
                },
                {
                    "isActive": true,
                    "iconActive": "icon-star-outline",
                    "iconInactive": "icon-star"
                },
                {
                    "isActive": true,
                    "iconActive": "icon-star-outline",
                    "iconInactive": "icon-star"
                },
                {
                    "isActive": true,
                    "iconActive": "icon-star-outline",
                    "iconInactive": "icon-star"
                },
                {
                    "isActive": false,
                    "iconActive": "icon-star-outline",
                    "iconInactive": "icon-star"
                }
            ],
            "items": [
                {
                    "id": 1,
                    "name": "ADDRESS:",
                    "value": "Boulevard of food, New York, USA"
                },
                {
                    "id": 2,
                    "name": "PHONE:",
                    "value": "+555 555 555"
                },
                {
                    "id": 3,
                    "name": "WEB:",
                    "value": "www.joesrestaurant.com"
                },
                {
                    "id": 4,
                    "name": "MAIL:",
                    "value": "jimmy@gmail.com"
                },
                {
                    "id": 5,
                    "name": "WORKING HOURS:",
                    "value": "7:00 to 23:00 every day"
                }
            ]
   };
  }
}
