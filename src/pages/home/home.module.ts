import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { GoogleCardLayout2Module } from '../../components/list-view/google-card/layout-2/google-card-layout-2.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    GoogleCardLayout2Module
  ],
})
export class HomePageModule {}
