import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvestorsPage } from './investors';

@NgModule({
  declarations: [
    InvestorsPage,
  ],
  imports: [
    IonicPageModule.forChild(InvestorsPage),
  ],
})
export class InvestorsPageModule {}
