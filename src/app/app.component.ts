import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { InvestorsPage } from '../pages/investors/investors';
import { OffersPage } from '../pages/offers/offers';
import { UserProvider } from '../providers/user.provider';
import { HelpPage } from '../pages/help/help';
import { BusinessProfilePage } from '../pages/business-profile/business-profile';
import { TokensPage } from '../pages/tokens/tokens';

@Component({
  templateUrl: 'app.html'
})
export class BusinessOwnerApp {
  @ViewChild('content') nav: NavController
  rootPage:any = HomePage;
  params: any;

  constructor(
    private _userProvider: UserProvider,
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {
    
      platform.ready().then(() => {
        statusBar.styleDefault();
        splashScreen.show();
        this.params = {
          "background": "", //TODO
          "image": "assets/images/logo/logo.gif",
          "title": ""
        };
    });
  }

  logout(){
    this._userProvider.logout();
    this.nav.setRoot(LoginPage);
  }
  
  openPage(pageName){
    switch(pageName){
      case HomePage.name:
        this.nav.setRoot(HomePage);
        break;
      case ProfilePage.name:
        this.nav.push(ProfilePage);
        break;
      case BusinessProfilePage.name:
        this.nav.push(BusinessProfilePage);
        break;
      case TokensPage.name:
        this.nav.push(TokensPage);
        break;
      case InvestorsPage.name:
        this.nav.push(InvestorsPage);
        break;
      case OffersPage.name:
        this.nav.push(OffersPage);
        break;
      case HelpPage.name:
        this.nav.push(HelpPage);
        break;
      default:
        this.nav.popToRoot();
    }
  }
}

