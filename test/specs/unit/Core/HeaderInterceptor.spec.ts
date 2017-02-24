import {expect} from 'chai';
import {HeaderInterceptor} from '../../../../app/Core/HeaderInterceptor';

describe('HeaderInterceptor class', () => {
  it('should set a header to the request settings', () => {
    const interceptor = new HeaderInterceptor('Key', 'Value');

    const settings = interceptor.beforeRequest({
      headers: {}
    });

    expect(settings).to.have.property('headers')
      .that.has.property('Key')
      .that.equals('Value');
  });

  it('should throw error if invalid header key is provided', () => {
    expect(() => {
      new HeaderInterceptor(null, 'value');
    }).to.throw();
  });

  it('should throw error if invalid header value is provided', () => {
    expect(() => {
      new HeaderInterceptor('key', null);
    }).to.throw();
  });
});
