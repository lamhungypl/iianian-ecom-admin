export class CurrencyListResponseModel {
  public modifiedDate: string;
  public currencyId: string;
  public title: string;
  public code: string;
  public symbolLeft: string;
  public symbolRight: string;
  public value: string;
  public isActive: number;

  constructor(listResponse: any) {
    this.modifiedDate = listResponse.modifiedDate || '';
    this.currencyId = listResponse.currencyId || '';
    this.title = listResponse.title || '';
    this.code = listResponse.code || '';
    this.symbolLeft = listResponse.symbolLeft || '';
    this.symbolRight = listResponse.symbolRight || '';
    this.value = listResponse.value || '';
    this.isActive = listResponse.isActive || 0;
  }
}
