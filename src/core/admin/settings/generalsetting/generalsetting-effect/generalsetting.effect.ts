import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { catchError, tap } from 'rxjs/internal/operators';
import * as actions from '../generalsetting-action/generalsetting.action';
import { GeneralSettingService } from '../generalsetting.service';
// import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import * as store from '../../../../app.state.interface';
import * as layoutAction from '../../../layout/actions/layout.action';

@Injectable()
export class GeneralSettingEffect {
  constructor(
    private action$: Actions,
    protected appState$: Store<store.AppState>,
    private service: GeneralSettingService
  ) {}
  // constructor(private action$: Actions, private service: GeneralSettingService, private translate: TranslateService) {}

  // NEW USER
  @Effect()
  doAddUser$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DO_NEW_GENERAL_SETTINGS),
    map((action: actions.DoNewGeneralSettingAction) => action.payload),
    switchMap(state => {
      return this.service.createGeneralSetting(state).pipe(
        switchMap(user => [new actions.DoNewGeneralSettingSuccessAction(user)]),
        tap(val => {
          this.appState$.dispatch(new layoutAction.GetSettings());

          // if (val.payload.data.storeLanguageName === 'Eng') {
          //   localStorage.setItem('defaultlanguage', 'en');
          //   this.translate.use('en');
          //   this.translate.reloadLang('en');
          // } else {
          //   localStorage.setItem('defaultlanguage', 'en');
          //   this.translate.use('en');
          //   this.translate.reloadLang('en');
          // }
        }),
        catchError(error => of(new actions.DoNewGeneralSettingFailAction(error)))
      );
    })
  );

  // GET GENERAL SETTINGS
  @Effect()
  dogetGeneralsetting$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DO_GET_GENERAL_SETTINGS),
    map((action: actions.DoGetGeneralSettingAction) => action.payload),
    switchMap(() => {
      return this.service.getGeneralSetting().pipe(
        switchMap(user => {
          return [new actions.DoGetGeneralSettingSuccessAction(user)];
        }),
        catchError(error => of(new actions.DoGetGeneralSettingFailAction()))
      );
    })
  );
}
