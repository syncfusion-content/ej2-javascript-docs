---
layout: post
title: License key registration in ##Platform_Name## | Syncfusion
description: Learn here all about License key registration in Syncfusion ##Platform_Name## Licensing control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: License key registration 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# License key registration in ##Platform_Name## Licensing control

The Syncfusion<sup style="font-size:70%">&reg;</sup> license key must be registered in projects that reference Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) packages. The generated license key is a string that must be registered after including any [Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) script reference](https://ej2.syncfusion.com/javascript/documentation/getting-started/compatible-with-essential-js1).

> **Note:** Syncfusion<sup style="font-size:70%">&reg;</sup> license validation occurs offline during application execution and does not require an internet connection. Applications registered with a valid Syncfusion<sup style="font-size:70%">&reg;</sup> license key can be deployed on systems without internet access.


The following code is used to register the license.

## JavaScript ES5

Register the license key by using the `registerLicense` method after the [Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript script](https://ej2.syncfusion.com/javascript/documentation/getting-started/quick-start) file reference as below.

> **Note:** Because the license key is registered in client-side JavaScript, it can be viewed in the application source. Avoid exposing the key publicly.

```ts
// Registering Syncfusion license key
ej.base.registerLicense('Replace your generated license key here');
```

> **Note:** License key registration is required starting from 2022 Vol 1 v20.1.0.47 for Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 products.

## Register Multiple License Keys

If you need to register multiple Syncfusion<sup style="font-size:70%">&reg;</sup> license keys in your application, you can do so by separating each key with a semicolon. This is useful when your application uses multiple Syncfusion<sup style="font-size:70%">&reg;</sup> products or editions.

**Format:** `key1;key2;key3`

**Example:**
```ts
ej.base.registerLicense('license-key-1-here;license-key-2-here');
```

> When registering multiple keys, ensure there are no spaces before or after the semicolon separator.

## See Also

* [Generate Syncfusion License Key](https://ej2.syncfusion.com/javascript/documentation/licensing/license-key-generation)
* [Licensing Overview](https://ej2.syncfusion.com/javascript/documentation/licensing/overview)
* [Licensing FAQ](https://ej2.syncfusion.com/javascript/documentation/licensing/licensing-troubleshoot)