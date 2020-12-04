export class CategoryModel {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sortOrder: string;
  public count: boolean;

  constructor(categorylistForm: any) {
    this.limit = categorylistForm.limit || 0;
    this.offset = categorylistForm.offset || 0;
    this.keyword = categorylistForm.keyword || '';
    this.sortOrder = categorylistForm.sortOrder || '1';
    this.count = categorylistForm.count || false;
  }
}
