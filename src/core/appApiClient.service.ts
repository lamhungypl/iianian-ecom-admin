import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from './admin/providers/api/api';

@Injectable()
export class AppApiClient extends Api {
  params: any = {};
  // url = 'http://api.eshopcommerce.com/api';

  private url: string = this.getBaseUrl();

  // logout
  logoutapi() {
    return this.http.get(this.url + '/auth/logout');
  }
}
