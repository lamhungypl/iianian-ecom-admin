import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Api } from '../providers/api/api';

@Injectable()
export class LayoutsService extends Api {
  // url
  private url: string;
  /* get  settings api*/

  public getsettings(): Observable<any> {
    this.url = this.getBaseUrl();
    return this.http.get(this.url + '/settings/get-settings');
  }
}
