import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { UserForm } from './user-model/user.model';
import { Api } from '../../providers/api/api';
import { isNumber } from 'util';

@Injectable()
export class UserService extends Api {
  public userdata: any;

  public params: any = {};
  private url = this.getBaseUrl();

  // SET & GET SERVICE
  getdata() {
    return this.userdata;
  }

  setdata(data) {
    this.userdata = data;
  }

  // new user
  addUser(param: UserForm): Observable<any> {
    return this.http.post(this.url + '/auth/create-user', param);
  }

  public updateUser(param: UserForm, Id: number): Observable<any> {
    return this.http.put(this.url + '/auth/update-user/' + Id, param);
  }

  // user group list
  userGrouplist(params: any): Observable<any> {
    const reqOpts = Object.getOwnPropertyNames(params).reduce((p, key) => {
      if (!params[key] && !isNumber(params[key])) {
        return p;
      }
      return p.set(key, params[key]);
    }, new HttpParams());
    return this.http.get(this.url + '/role/rolelist', { params: reqOpts });
  }

  // user list
  userlist(params: any): Observable<any> {
    const reqOpts = Object.getOwnPropertyNames(params).reduce((p, key) => {
      if (!params[key] && !isNumber(params[key])) {
        return p;
      }
      return p.set(key, params[key]);
    }, new HttpParams());
    return this.http.get(this.url + '/auth/userlist', { params: reqOpts });
  }
  userDelete(params) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: false,
      body: params,
    };
    return this.http.delete(this.url + '/auth/delete-user/' + params.id, httpOptions);
  }
  public userpagiantion(params: any): Observable<any> {
    const reqOpts = Object.getOwnPropertyNames(params).reduce((p, key) => {
      if (!params[key] && !isNumber(params[key])) {
        return p;
      }
      return p.set(key, params[key]);
    }, new HttpParams());
    return this.http.get(this.url + '/auth/userlist', { params: reqOpts });
  }
}
