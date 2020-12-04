export class AddAddressListForm {
  public limit: number;
  public offset: number;
  public count: string;
  public customerId: number;

  constructor(addaddresslist: any) {
    this.limit = addaddresslist.limit || 0;
    this.offset = addaddresslist.offset || 0;
    this.count = addaddresslist.count || '';
    this.customerId = addaddresslist.customerId || 0;
  }
}
