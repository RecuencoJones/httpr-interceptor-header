import {HttprInterceptor} from 'httpr';

export class HeaderInterceptor extends HttprInterceptor {
  protected header: string;
  protected value: string;

  public constructor(header: string, value: string) {
    this.header = header;
    this.value = value;
  }

  public beforeRequest(settings) {
    settings.headers[this.header] = this.value;

    return settings;
  }
}
