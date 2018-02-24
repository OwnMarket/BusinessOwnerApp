import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { BusinessOwnerApp } from './app.component';
import { LoginLayout2Module } from '../components/login/layout-2/login-layout-2.module';
import { RegisterLayout1Module} from '../components/register/layout-1/register-layout-1.module'

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { InvestorsPage } from '../pages/investors/investors';
import { OffersPage } from '../pages/offers/offers';
import { HelpPage } from '../pages/help/help';

@NgModule({
  declarations: [
    BusinessOwnerApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    InvestorsPage,
    OffersPage,
    HelpPage   
  ],
  imports: [
    BrowserModule,
    LoginLayout2Module,
    RegisterLayout1Module,
    IonicModule.forRoot(BusinessOwnerApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BusinessOwnerApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    InvestorsPage,
    OffersPage,
    HelpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {}
