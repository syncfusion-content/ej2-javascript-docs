---
layout: post
title: Browser in ##Platform_Name## Browser md control | Syncfusion
description: Learn here all about Browser in Syncfusion ##Platform_Name## Browser md control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Browser 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Browser support

Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 components are fully supported in modern browsers. The following versions are officially supported:

|    Chrome    |    Firefox    |    Opera     |    Edge    |    IE      |    Safari    |    IOS    |    Android    |    Windows   Mobile    |
|--------------|---------------|--------------|------------|------------|--------------|-----------|---------------|------------------------|
|    63+     |    58+     |    50+     |    13 +    |    11 +    |    9 +       |    9 +    |    4.4 +      |    IE 11 +             |

## Required polyfills

Most modern browsers do not require any polyfills. The only exception is Internet Explorer 11, which requires an ES6 Promise polyfill.

|    Browser                                             |    Polyfills      |
|:--------------------------------------------------------:|:-------------------:|
|    Chrome(latest), Firefox(latest), Opera(latest), Edge, Safari 9+    |    NONE           |
|    IE 11                                               |    ES6 Promise    |

The Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 components are compatible with Internet Explorer 11 when the ES6 Promise polyfill is included.

## Using CDN

To add ES6 Promise polyfill using CDN, include this in your HTML file.

```ts
<!-- Automatically provides/replaces `Promise` if missing or broken. -->
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>
<!-- Minified version of `es6-promise-auto` below. -->
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>

```

## Node.js

ES6 Promise polyfill can also be installed in node.js.

To install:

```ts
yarn add es6-promise
(or)
npm install es6-promise

```

To Use:

```ts
var Promise = require('es6-promise').Promise;

```

For more details, refer to the link [here](https://github.com/stefanpenner/es6-promise).