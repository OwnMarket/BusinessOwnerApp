import { Injectable } from '@angular/core';

/*
  Generated class for the AppConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppConfigProvider {

  getApiUrl(){
    return "http://localhost:14705/api/";
  }

}
