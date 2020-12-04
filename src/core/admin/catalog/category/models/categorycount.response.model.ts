export class CategorycountResponseModel {
  public user: any = {};

  constructor(categorycountResponse: any) {
    this.user = categorycountResponse || '';
  }
}
