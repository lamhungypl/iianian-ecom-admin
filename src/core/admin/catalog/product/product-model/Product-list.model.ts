export class ProductListModel {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sku: string;
  public status: string;
  public price: number;
  public count: boolean;

  constructor(fromProductList: any) {
    this.limit = fromProductList.limit || 0;
    this.offset = fromProductList.offset || 0;
    this.keyword = fromProductList.keyword || '';
    this.sku = fromProductList.sku || '';
    this.status = fromProductList.status || '';
    this.price = fromProductList.price || '';
    this.count = fromProductList.count || false;
  }
}
