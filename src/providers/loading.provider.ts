import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class LoadingProvider {
    loading: Loading;

    constructor(
        private _loadingCtrl: LoadingController) { }

    show() {
        if (!this.loading) {
            this.loading = this._loadingCtrl.create({
                // add loader opts
            });
        }
        return this.loading.present();
    }

    hide() {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    }
}
