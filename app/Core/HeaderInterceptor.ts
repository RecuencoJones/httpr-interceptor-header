import * as Httpr from 'httpr';

export class HeaderInterceptor extends Httpr.HttprInterceptor {
  protected header: string;
  protected value: string;

  public constructor(header: string, value: string) {
    super();

    if (typeof header !== 'string') {
      throw new Error('Invalid header key provided.');
    }

    if (typeof value !== 'string') {
      throw new Error('Invalid header value provided.');
    }

    this.header = header;
    this.value = value;
  }

  /**
   * Sets a header to the request settings.
   * @param {HttpRequestSettings} settings - current request settings.
   * @returns {HttpRequestSettings} modified settings.
   */
  public beforeRequest(settings: Httpr.HttpRequestSettings): Httpr.HttpRequestSettings {
    settings.headers[this.header] = this.value;

    return settings;
  }
}
