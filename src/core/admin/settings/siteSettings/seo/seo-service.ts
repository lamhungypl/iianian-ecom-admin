import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SeoModel } from './seo-model/seo-model';
import { Api } from '../../../providers/api/api';

@Injectable()
export class SeoService extends Api {
  private url = this.getBaseUrl();

  // new user
  createSeo(param: SeoModel): Observable<any> {
    return this.http.post(this.url + '/settings/create-settings', param);
  }

  getSeo(): Observable<any> {
    return this.http.get(this.url + '/settings/get-settings');
  }
}
