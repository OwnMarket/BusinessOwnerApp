import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user.provider';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(
    private _userProvider: UserProvider
  ) {}

  ngOnInit(){
    this._userProvider.getProfile()
      .subscribe((data) => {
        let profile = data;
      }, (res) => {
        console.log(res);
      });
  }
}
