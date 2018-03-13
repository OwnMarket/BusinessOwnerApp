import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusinessProvider } from '../../providers/business.provider';

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
  profile: any = {};

  constructor(
    private businessProvider: BusinessProvider) {
  }

  save(){

  }

  ngOnInit(){
    this.businessProvider.getProfile()
      .subscribe((data) => {
        this.profile = data;
      }, (res) => {
        console.log(res);
      });
  }
}
