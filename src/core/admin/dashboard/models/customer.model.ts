export class CustomerModel {
  public limit: number;
  public offset: number;
  public name: string;
  public email: string;
  public customerGroup: string;
  public date: string;
  public count: string;
  public status: string;

  constructor(params: any) {
    this.customerGroup = params.customerGroup || '';
    this.date = params.date || '';
    this.email = params.email || '';
    this.name = params.name || '';
    this.limit = params.limit || 0;
    this.offset = params.offset || 0;
    this.count = params.count || '';
    this.status = params.status || '';
  }
}
