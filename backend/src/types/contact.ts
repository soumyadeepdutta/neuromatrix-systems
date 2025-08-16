export interface IContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
  createdAt?: Date;
  ipAddress?: string;
  userAgent?: string;
}

export interface IContactFormResponse {
  success: boolean;
  message: string;
  data?: IContactForm;
  error?: string;
}

export interface IContactFormDocument extends IContactForm, Document {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
