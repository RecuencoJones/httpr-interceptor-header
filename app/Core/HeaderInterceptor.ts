import {HttprInterceptor, HttpRequestSettings} from 'httpr';

/**
 * HTTP Header interceptor.
 */
export class HeaderInterceptor extends HttprInterceptor {
  protected header: string;
  protected value: string;

  /**
   * Create a header interceptor instance.
   *
   * @param {string} header - header key.
   * @param {string} value - header value.
   */
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
  public beforeRequest(settings: HttpRequestSettings): HttpRequestSettings {
    settings.headers[this.header] = this.value;

    return settings;
  }
}
