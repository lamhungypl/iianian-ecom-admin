import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Api } from '../providers/api/api';
import { apiUrl } from '../../../environments/api.endpoints';

@Injectable()
export class DashboardService extends Api {
  params: any = {};
  private URL = this.getBaseUrl();

  /* get order list count api*/
  public getOrderListCount(filterParam: any): Observable<any> {
    const reqOpts: any = {};
    const params = Object.getOwnPropertyNames(filterParam).reduce(
      (p, key) => p.set(key, filterParam[key]),
      new HttpParams()
    );
    reqOpts.params = {
      count: true,
    };
    return this.http.get(this.URL + apiUrl.order.orderList, reqOpts);
  }

  /* get product list count api*/
  public getProductListCount(filterParam: any): Observable<any> {
    const reqOpts: any = {};
    const params = Object.getOwnPropertyNames(filterParam).reduce(
      (p, key) => p.set(key, filterParam[key]),
      new HttpParams()
    );
    reqOpts.params = params;
    return this.http.get(this.URL + '/product/productlist', reqOpts);
  }

  /* get customer list count api*/
  public getCustomerListCount(filterParam: any): Observable<any> {
    const reqOpts: any = {};
    const params = Object.getOwnPropertyNames(filterParam).reduce((p, key) => {
      if (!filterParam[key]) {
        return p;
      }
      return p.set(key, filterParam[key]);
    }, new HttpParams());
    reqOpts.params = params;
    return this.http.get(this.URL + '/customer/customer-list', reqOpts);
  }

  /* get top selling product list api*/
  public getTopSellingProducts(filterParam: any): Observable<any> {
    const reqOpts: any = {};
    const params = Object.getOwnPropertyNames(filterParam).reduce(
      (p, key) => p.set(key, filterParam[key]),
      new HttpParams()
    );
    reqOpts.params = params;
    return this.http.get(this.URL + '/product/top-selling-productlist', reqOpts);
  }

  /* get sales order list api*/
  public getSalesOrders(filterParam: any): Observable<any> {
    const reqOpts: any = {};
    const params = Object.getOwnPropertyNames(filterParam).reduce(
      (p, key) => p.set(key, filterParam[key]),
      new HttpParams()
    );
    reqOpts.params = params;
    return this.http.get(this.URL + '/order/saleslist', reqOpts);
  }

  /* get visitors list api*/
  public getVisitorsList(filterParam: any): Observable<any> {
    const reqOpts: any = {};
    const params = Object.getOwnPropertyNames(filterParam).reduce(
      (p, key) => p.set(key, filterParam[key]),
      new HttpParams()
    );
    reqOpts.params = params;
    return this.http.get(this.URL + '/customer/login-log-list', reqOpts);
  }

  /* get recent visitors list api*/
  public getRecentVisitorsList(filterParam: any): Observable<any> {
    const reqOpts: any = {};
    const params = Object.getOwnPropertyNames(filterParam).reduce(
      (p, key) => p.set(key, filterParam[key]),
      new HttpParams()
    );
    reqOpts.params = params;
    return this.http.get(this.URL + '/customer/recent-customerlist', reqOpts);
  }

  /* get recent selling product list api*/
  public getRecentSellingProductList(filterParam: any): Observable<any> {
    const reqOpts: any = {};
    const params = Object.getOwnPropertyNames(filterParam).reduce(
      (p, key) => p.set(key, filterParam[key]),
      new HttpParams()
    );
    reqOpts.params = params;
    return this.http.get(this.URL + '/product/recent-selling-product', reqOpts);
  }

  /* get items per page count api*/

  getItemsPerPageCount(): Observable<any> {
    return this.http.get(this.URL + '/settings/get-settings');
  }
}
