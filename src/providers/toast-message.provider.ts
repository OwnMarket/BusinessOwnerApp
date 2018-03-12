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

  private showMessage(cssClass: string, message: string){
    let toastMsg = this.toast.create({
      message: message,
      duration: 3000,
      position: 'top',
      cssClass: cssClass
    });

    toastMsg.present();
  }

  success(message: string){
    this.showMessage('success', message);
  }

  error(message: string){
    this.showMessage('error', message);
  }

  errorAlerts(response: any){
    response = response.error || response;
    if(response.alerts && response.alerts.length > 0){
      let message = '';
      response.alerts.forEach(alert => {
        message += ' ' + alert.message;
      });
      this.error(message);
    }else{
      this.error('Something went wrong. Please check your data!')
    }
  }
}
