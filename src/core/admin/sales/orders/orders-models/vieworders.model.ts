export class ViewordersModel {
  public orderId: Number;

  constructor(Vieworders: any) {
    this.orderId = Vieworders.orderId || '';
  }
}
