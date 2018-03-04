import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { RegisterStep2PageModule } from '../pages/register-step2/register-step2.module';
import { AccountPageModule } from '../pages/account/account.module';
import { BusinessProfilePageModule } from '../pages/business-profile/business-profile.module';
import { HelpPageModule } from '../pages/help/help.module';
import { HomePageModule } from '../pages/home/home.module';
import { InvestorsPageModule } from '../pages/investors/investors.module';
import { OffersPageModule } from '../pages/offers/offers.module';
import { TokensPageModule } from '../pages/tokens/tokens.module';

@NgModule({
  declarations: [
  ],
  imports: [
    AccountPageModule,
    BusinessProfilePageModule,
    HelpPageModule,
    HomePageModule,
    InvestorsPageModule,
    OffersPageModule,
    TokensPageModule,
    LoginPageModule,
    RegisterPageModule,
    RegisterStep2PageModule,
  ],
  exports:[
    AccountPageModule,
    BusinessProfilePageModule,
    HelpPageModule,
    HomePageModule,
    InvestorsPageModule,
    OffersPageModule,
    TokensPageModule,
    LoginPageModule,
    RegisterPageModule,
    RegisterStep2PageModule,
  ]
})
export class PagesModule {}
