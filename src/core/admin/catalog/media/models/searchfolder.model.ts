export class SearchfolderForm {
  public folderName: string;
  constructor(searchfolder: any) {
    this.folderName = searchfolder.folderName || '';
  }
}
