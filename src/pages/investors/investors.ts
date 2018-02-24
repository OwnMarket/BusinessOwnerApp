import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-investors',
  templateUrl: 'investors.html',
})
export class InvestorsPage {

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvestorsPage');
  }
}
