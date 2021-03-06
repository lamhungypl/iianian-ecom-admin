export class CustomerListForm {
  public limit: number;
  public offset: number;
  public name: string;
  public email: string;
  public customerGroup: string;
  public date: string;
  public count: boolean | number;
  public status: string;

  constructor(customerlistform: any) {
    this.customerGroup = customerlistform.customerGroup || '';
    this.date = customerlistform.date || '';
    this.email = customerlistform.email || '';
    this.name = customerlistform.name || '';
    this.limit = customerlistform.limit || 0;
    this.offset = customerlistform.offset || 0;
    this.count = customerlistform.count || false;
    this.status = '';
  }
}
