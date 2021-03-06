import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { InvestorsPage } from '../pages/investors/investors';
import { OfferListPage } from '../pages/offer-list/offer-list';
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
  subscription: any;

  constructor(
    private _userProvider: UserProvider,
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {
    
      platform.ready().then(() => {
        statusBar.styleDefault();
        splashScreen.hide();
        this.params = {
          "background": "assets/images/25.jpg",
          "image": "assets/images/header-logo.png",
          "title": "Big City Coffee Co"
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
      case AccountPage.name:
        this.nav.push(AccountPage);
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
      case OfferListPage.name:
        this.nav.push(OfferListPage);
        break;
      case HelpPage.name:
        this.nav.push(HelpPage);
        break;
      default:
        this.nav.popToRoot();
    }
  }

  ngOnInit() {
    this.subscription = this._userProvider.logout_event
      .subscribe(item => this.nav.setRoot(LoginPage));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

