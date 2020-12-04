export class LanguageListForm {
  public limit: string;
  public offset: string;
  public count: boolean;
  public keyword: string;
  public status: string;

  constructor(fromLanguageList: any) {
    this.limit = fromLanguageList.limit || '';
    this.offset = fromLanguageList.offset || '';
    this.count = fromLanguageList.count || false;
    this.keyword = fromLanguageList.keyword || '';
    this.status = fromLanguageList.status || '';
  }
}
