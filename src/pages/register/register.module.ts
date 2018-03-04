import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { RegisterLayout2Module} from '../../components/register/layout-2/register-layout-2.module'

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    RegisterLayout2Module
  ],
})
export class RegisterPageModule {}
