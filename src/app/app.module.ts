import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PagesModule } from '../pages/pages.module';
import { BusinessOwnerApp } from './app.component';

// Providers
import { AppConfigProvider } from '../providers/app-config.provider';
import { UserProvider } from '../providers/user.provider';
import { BusinessProvider } from '../providers/business.provider';
import { TokenInterceptor } from './token.interceptor';
import { ToastMessageProvider } from '../providers/toast-message.provider';
import { TokenProvider } from '../providers/token.provider';
import { LoadingProvider } from '../providers/loading.provider';

@NgModule({
  declarations: [
    BusinessOwnerApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PagesModule,
    IonicModule.forRoot(BusinessOwnerApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BusinessOwnerApp
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
    TokenProvider,
    LoadingProvider
  ]
})
export class AppModule {}
