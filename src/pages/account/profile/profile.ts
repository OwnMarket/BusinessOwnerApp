import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../../providers/user.provider';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile: any = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _userProvider: UserProvider) {
  }

  ngOnInit(){
    this._userProvider.getProfile()
      .subscribe((data) => {
        this.profile = data;
      }, (res) => {
        console.log(res);
      });
  }
}
