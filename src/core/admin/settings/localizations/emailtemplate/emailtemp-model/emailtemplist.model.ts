export class EmailTempListForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public count: number;

  constructor(emailtemplistForm: any) {
    this.limit = emailtemplistForm.limit || 0;
    this.offset = emailtemplistForm.offset || 0;
    this.keyword = emailtemplistForm.keyword || '';
    this.count = emailtemplistForm.count || false;
  }
}
