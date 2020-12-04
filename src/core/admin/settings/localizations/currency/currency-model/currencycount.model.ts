export class CurrencyCountForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: number;

  constructor(currencyCountForm: any) {
    this.limit = currencyCountForm.limit || 0;
    this.offset = currencyCountForm.offset || 0;
    this.keyword = currencyCountForm.keyword || '';
    this.count = currencyCountForm.count || 0;
  }
}
