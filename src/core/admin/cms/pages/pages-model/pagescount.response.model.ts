export class PagescountResponseModel {
  public pagescount: any = {};

  constructor(listResponse: any) {
    this.pagescount = listResponse || '';
  }
}
