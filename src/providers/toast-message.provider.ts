import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';

/*
  Generated class for the ToastMessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastMessageProvider {

  constructor(public toast: ToastController) {
    console.log('Hello ToastMessageProvider Provider');
  }

  showMessage(message: string){
    let toastSuccess = this.toast.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toastSuccess.present();
  }
}
