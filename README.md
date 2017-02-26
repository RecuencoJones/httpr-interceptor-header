[![npm package](https://badge.fury.io/js/httpr-interceptor-header.svg)](https://badge.fury.io/js/httpr-interceptor-header)

# httpr-interceptor-header

Interceptor for setting headers in every request sent with httpr.

## Import

The library requires a peer of Httpr.

### ES6 import

```
import {Httpr} from 'httpr';
import {HeaderInterceptor} from 'httpr-interceptor-header';

const http = new Httpr();

http.register(new HeaderInterceptor('key', 'value'));
```

### Commonjs

```
const Httpr = require('httpr').Httpr;
const HeaderInterceptor = require('httpr-interceptor-header').HeaderInterceptor;

const http = new Httpr();

http.register(new HeaderInterceptor('key', 'value'));
```

### Browser

```
<script src="path/to/lodash.js"></script>
<script src="path/to/dist/httpr[.min].js"></script>
<script src="path/to/dist/httpr-interceptor-header[.min].js"></script>

<script>
  var http = new httpr.Httpr();
  
  http.register(new httprInterceptorHeader.HeaderInterceptor('key', 'value'));
</script>
```

## Type Definitions

For TypeScript usage, a file with type definitions is bundled in npm.

This file is generated using [barrel-defgen](https://github.com/RecuencoJones/barrel-defgen).

## Building

```
npm install
npm run build
```

These commands will setup the package and generate the distributable files as well as the type definitions.

Other tasks:

- `npm run build:umd` - generate library bundle.
- `npm run build:min` - generate minified library bundle.
- `npm run build:defs` - generate definitions from barrel to `defs` directory.
- `npm run clean` - remove generated directories.
- `npm run lint` - check style of source files.
- `npm run doc` - generate documentation from sources to `doc` directory.
- `npm run test` - run all test suites.
- `npm run test:unit` - run unit tests only.
