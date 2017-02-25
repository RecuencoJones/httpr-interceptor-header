declare namespace HttprHeaderInterceptor {
  class HeaderInterceptor extends Httpr.HttprInterceptor {
    protected header: string;
    protected value: string;

    public constructor(header: string, value: string);

    public beforeRequest(settings: Httpr.HttpRequestSettings): Httpr.HttpRequestSettings;
  }
}
