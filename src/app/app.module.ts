import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BusinessOwnerApp } from './app.component';
import { LoginLayout1Module } from '../components/login/layout-1/login-layout-1.module';
import { RegisterLayout2Module} from '../components/register/layout-2/register-layout-2.module'
import { RegisterLayout1Module} from '../components/register/layout-1/register-layout-1.module'

// Pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { RegisterStep2Page } from '../pages/register-step2/register-step2';
import { ProfilePage } from '../pages/profile/profile';
import { BusinessProfilePage } from '../pages/business-profile/business-profile';
import { InvestorsPage } from '../pages/investors/investors';
import { OffersPage } from '../pages/offers/offers';
import { HelpPage } from '../pages/help/help';
import { TokensPage } from '../pages/tokens/tokens';

// Providers
import { AppConfigProvider } from '../providers/app-config.provider';
import { UserProvider } from '../providers/user.provider';
import { BusinessProvider } from '../providers/business.provider';
import { TokenInterceptor } from './token.interceptor';
import { ToastMessageProvider } from '../providers/toast-message.provider';
import { TokenProvider } from '../providers/token.provider';

@NgModule({
  declarations: [
    BusinessOwnerApp,
    HomePage,
    LoginPage,
    RegisterPage,
    RegisterStep2Page,
    ProfilePage,
    BusinessProfilePage,
    InvestorsPage,
    OffersPage,
    HelpPage,
    TokensPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LoginLayout1Module,
    RegisterLayout2Module,
    RegisterLayout1Module,
    IonicModule.forRoot(BusinessOwnerApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BusinessOwnerApp,
    HomePage,
    LoginPage,
    RegisterPage,
    RegisterStep2Page,
    ProfilePage,
    BusinessProfilePage,
    InvestorsPage,
    OffersPage,
    HelpPage,
    TokensPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AppConfigProvider,
    UserProvider,
    BusinessProvider,
    ToastMessageProvider,
    TokenProvider
  ]
})
export class AppModule {}
