---
layout: post
title: License key registration in ##Platform_Name## Licensing control | Syncfusion
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

## Javascript es5

Register the license key by using  'registerLicense' method after the [Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript script](https://ej2.syncfusion.com/javascript/documentation/getting-started/quick-start/#configure-syncfusion-javascript-es5-control-in-the-application-1) file reference as below.

>Note: As we have mandated License registration for the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript components, we realize there is a possibility to view the registered Syncfusion<sup style="font-size:70%">&reg;</sup> License key from your application by others. We acknowledge this is taking place in the JavaScript platform, as we have minimal scope for hiding the License key and we also recommend not to advertise it.

```ts
// Registering Syncfusion license key
ej.base.registerLicense('Replace your generated license key here');
```

>Note: Only from 2022 Vol 1 v20.1.0.47, license key registration required for Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 products.

## See Also

* [Generate Syncfusion License Key](https://ej2.syncfusion.com/javascript/documentation/licensing/license-key-generation)
* [Licensing Overview](https://ej2.syncfusion.com/javascript/documentation/licensing/overview)
* [Licensing FAQ](https://ej2.syncfusion.com/javascript/documentation/licensing/licensing-troubleshoot)