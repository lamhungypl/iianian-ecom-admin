export class CurrencyListForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sortOrder: string;
  public count: number;

  constructor(currencylistForm: any) {
    this.limit = currencylistForm.limit || 0;
    this.offset = currencylistForm.offset || 0;
    this.keyword = currencylistForm.keyword || '';
    this.count = currencylistForm.count || 0;
  }
}
