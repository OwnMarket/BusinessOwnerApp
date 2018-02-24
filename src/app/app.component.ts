import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { InvestorsPage } from '../pages/investors/investors';
import { OffersPage } from '../pages/offers/offers';

@Component({
  templateUrl: 'app.html'
})
export class BusinessOwnerApp {
  @ViewChild('content') nav: NavController
  rootPage:any = HomePage;
  params: any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {
    
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
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
      case InvestorsPage.name:
        this.nav.push(InvestorsPage);
        break;
      case OffersPage.name:
        this.nav.push(OffersPage);
        break;
      default:
        this.nav.popToRoot();
    }
  }
}

