import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterStep2Page } from './register-step2';
import { RegisterLayout1Module} from '../../components/register/layout-1/register-layout-1.module'

@NgModule({
  declarations: [
    RegisterStep2Page,
  ],
  imports: [
    IonicPageModule.forChild(RegisterStep2Page),
    RegisterLayout1Module
  ],
})
export class RegisterStep2PageModule {}
