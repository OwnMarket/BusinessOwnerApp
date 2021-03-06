import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferListPage } from './offer-list';
import { GoogleCardLayout2Module } from '../../components/list-view/google-card/layout-2/google-card-layout-2.module';
import { OfferProvider } from '../../providers/offer.provider';

@NgModule({
  declarations: [
    OfferListPage,
  ],
  imports: [
    IonicPageModule.forChild(OfferListPage),
    GoogleCardLayout2Module
  ],
  exports:[
    OfferListPage
  ],
  providers:[
    OfferProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OfferListPageModule {}
