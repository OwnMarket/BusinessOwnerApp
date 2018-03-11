import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferPage } from './offer';
import { OfferProvider } from '../../providers/offer.provider';
import {ParallaxLayout4Module} from '../../components/parallax/layout-4/parallax-layout-4.module';
@NgModule({
  declarations: [
    OfferPage,
  ],
  imports: [
    IonicPageModule.forChild(OfferPage),
    ParallaxLayout4Module
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[
    OfferProvider
  ]
})
export class OfferPageModule {}
