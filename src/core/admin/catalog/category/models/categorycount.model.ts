export class CategorycountForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sortOrder: string;
  public count: string;
  public status: string;

  constructor(categorycountForm: any) {
    this.limit = categorycountForm.limit || 0;
    this.offset = categorycountForm.offset || 0;
    this.keyword = categorycountForm.keyword || '';
    this.sortOrder = categorycountForm.sortOrder || 1;
    this.count = categorycountForm.count || '';
    this.status = categorycountForm.status;
  }
}
