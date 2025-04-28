export interface ResponseData<T> {
  code: string;
  data?: T;
  message?: string;
  timestamp: string;
}
