export class CategoryupdateResponseModel {
  public user: any = {};

  constructor(categoryupdateFormResponse: any) {
    this.user = categoryupdateFormResponse || '';
  }
}
