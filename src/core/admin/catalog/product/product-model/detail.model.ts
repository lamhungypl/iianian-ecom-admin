export class DetailModel {
  public Id: string;

  constructor(DetailForm: any) {
    this.Id = DetailForm.Id || '';
  }
}
