export class ProductDeleteModel {
  public productId: number;

  constructor(productdeleteForm: any) {
    this.productId = productdeleteForm.productId || '';
  }
}
