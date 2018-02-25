import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { AppConfigProvider } from './app-config.provider';
import { BusinessProfileModel } from '../models/business-profile.model';

@Injectable()
export class BusinessProvider {
  private readonly _resourceUrl: string;

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigProvider) {
      this._resourceUrl = appConfig.getApiUrl() + 'business/'
  }

  getProfile(): Observable<any> {
    return this.http
      .get(this._resourceUrl + 'profile')
  }

  updateProfile(model: BusinessProfileModel): Observable<any> {
    return this.http
      .post(this._resourceUrl + 'profile', model)
  }  
}
