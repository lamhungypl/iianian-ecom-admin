import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as store from '../../app.state.interface';
import { getLoginSuccessResponse } from '../auth/reducer/selectors';
// import { TranslateService } from '@ngx-translate/core';
import { LoginResponseModel } from '../auth/models/login.response.model';
import * as layoutAction from './actions/layout.action';
@Injectable()
export class LayoutSandbox {
  // export class LayoutSandbox implements OnInit {

  public user$ = this.appState$.select(getLoginSuccessResponse);
  public mylanguage: string;

  constructor(
    protected appState$: Store<store.AppState>,
    // private translate: TranslateService,
    private router: Router
  ) {}
  public getSettings(): void {
    this.appState$.dispatch(new layoutAction.GetSettings());
  }
  // ngOnInit() {
  //   this.mylanguage = localStorage.getItem('defaultlanguage');
  //   if (!this.mylanguage) {
  //     this.translate.setDefaultLang('en');
  //     this.translate.use('en');
  //   } else {
  //     if (this.mylanguage === 'en') {
  //       this.translate.use('en');
  //     } else {
  //       this.translate.use('hi');
  //     }
  //   }
  // }

  public logOut() {
    const userResponse: LoginResponseModel = new LoginResponseModel({});
    userResponse.remove();
    this.router.navigate(['/auth/login']);
  }
}
