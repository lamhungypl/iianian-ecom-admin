export class CategorydeleteForm {
  public categoryId: number;

  constructor(categorydeleteForm: any) {
    this.categoryId = categorydeleteForm.categoryId || '';
  }
}
