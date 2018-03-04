import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }
}
