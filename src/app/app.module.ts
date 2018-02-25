import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BusinessOwnerApp } from './app.component';
import { LoginLayout1Module } from '../components/login/layout-1/login-layout-1.module';
import { RegisterLayout2Module} from '../components/register/layout-2/register-layout-2.module'

// Pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { InvestorsPage } from '../pages/investors/investors';
import { OffersPage } from '../pages/offers/offers';
import { HelpPage } from '../pages/help/help';

// Providers
import { AppConfigProvider } from '../providers/app-config.provider';
import { UserProvider } from '../providers/user.provider';
import { BusinessProvider } from '../providers/business.provider';

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
    HttpClientModule,
    FormsModule,
    LoginLayout1Module,
    RegisterLayout2Module,
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
    },
    AppConfigProvider,
    UserProvider,
    BusinessProvider
  ]
})
export class AppModule {}
