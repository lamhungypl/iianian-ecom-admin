export class CategorylistForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sortOrder: string;
  public status: string;
  constructor(categorylistForm: any) {
    this.limit = categorylistForm.limit || 0;
    this.offset = categorylistForm.offset || 0;
    this.keyword = categorylistForm.keyword || '';
    this.sortOrder = categorylistForm.sortOrder || 1;
    this.status = categorylistForm.status || 1;
  }
}
