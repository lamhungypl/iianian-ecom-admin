export class EmailTempListResponseModel {
  public emailTemplateId: number;
  public title: string;
  public subject: string;
  public content: string;
  public isActive: number;

  constructor(listResponse: any) {
    this.emailTemplateId = listResponse.emailTemplateId || 0;
    this.title = listResponse.title || '';
    this.subject = listResponse.subject || '';
    this.content = listResponse.content || '';
    this.emailTemplateId = listResponse.emailTemplateId || 0;
    this.isActive = listResponse.isActive || 0;
  }
}
