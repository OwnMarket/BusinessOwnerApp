import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvestorsPage } from './investors';
import { ChartsModule } from 'ng2-charts';
import { GoogleCardLayout1Module } from '../../components/list-view/google-card/layout-1/google-card-layout-1.module';
import { InvestorsProvider } from '../../providers/investors.provider';

@NgModule({
  declarations: [
    InvestorsPage,
  ],
  imports: [
    IonicPageModule.forChild(InvestorsPage),
    ChartsModule,
    GoogleCardLayout1Module
  ],
  providers: [
    InvestorsProvider
  ]
})
export class InvestorsPageModule {}
