---
layout: post
title: Overview in ##Platform_Name## Licensing control | Syncfusion
description: Learn here all about Overview in Syncfusion ##Platform_Name## Licensing control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Overview 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion<sup style="font-size:70%">&reg;</sup> Licensing Overview

We have introduced license key validation for Essential<sup style="font-size:70%">&reg;</sup> JS2 platforms from the 2022 Volume 1 release starting version `(v20.1.47)`. This licensing key validation will enforce the developer to register the valid licensing key in an application while referring to any of the latest JavaScript packages, either from npm or CDN or build.

## Privacy Assurance

The Syncfusion<sup style="font-size:70%">&reg;</sup> license does not store any user-specific information or details related to the user's company. The license key provided contains solely the encrypted values necessary for Syncfusion<sup style="font-size:70%">&reg;</sup> component validation. This ensures the privacy and security of user data while enabling effective validation of the components.

It's crucial to emphasize that the encrypted license key undergoes validation entirely on the client side, eliminating the need for network connections or HTTP requests. This approach enhances privacy, as Syncfusion<sup style="font-size:70%">&reg;</sup> neither accesses personal data nor collects information about users or devices. Whether working on a local development machine or within a CI/CD system, the license key validation process remains consistent, offering a secure and efficient experience without any data transmission to Syncfusion<sup style="font-size:70%">&reg;</sup> servers or third-party entities.

>Note: The license verification process implemented by Syncfusion<sup style="font-size:70%">&reg;</sup> has been designed to seamlessly integrate with your app's functionality without any adverse impact on its performance. Although keys are permitted to be included in the application source code/bundle, it is imperative to refrain from actively promoting, publishing, or distributing license keys. Any attempt to disseminate license key information with the intention of circumventing licensing requirements is strongly discouraged.

## Obtaining License 

License key can be obtained from the [My Account >> License and downloads](https://www.syncfusion.com/account/downloads) section of the Syncfusion<sup style="font-size:70%">&reg;</sup> website. To obtain a license key, you will need to have an active trial or license or community license.

## Exploring Syncfusion<sup style="font-size:70%">&reg;</sup> through Trail

Start exploring and using our complete package by obtaining a free 30-day trial license key through a simple [click](https://www.syncfusion.com/downloads). This package comprises over 80 JavaScript components designed to help you build advanced web applications. Additionally, it offers full assistance for popular frameworks such as Angular, React, and Vue. So, take advantage of this opportunity to try out our fully functional tools for the trail period.

>Important: Before diving into the utilization of any `JavaScript` components, it's crucial to register the acquired license key within your application code. Failure to do so will result in a license validation error message within your application, as illustrated below. If you're unsure about how to register the license key for your JavaScript application, please refer to our [documentation](https://ej2.syncfusion.com/documentation/licensing/license-key-registration) for step-by-step guidance.

![License key not registered](images/overview-license-trail.png)

## Syncfusion<sup style="font-size:70%">&reg;</sup> license management and allocation process

Syncfusion<sup style="font-size:70%">&reg;</sup> issues licenses for Essential Studio<sup style="font-size:70%">&reg;</sup> on a individual developer basis. Each developer using Essential Studio<sup style="font-size:70%">&reg;</sup> must obtain an individual license. If your organization possesses several licenses, you can distribute them to different developers as needed. During this allocation process, each developer will receive individual access to their personal license key, conveniently accessible through the Syncfusion<sup style="font-size:70%">&reg;</sup> [Downloads & Keys](https://www.syncfusion.com/account/downloads) under their designated Syncfusion<sup style="font-size:70%">&reg;</sup> account.

If a developer leave or discontinue their use of Essential Studio<sup style="font-size:70%">&reg;</sup>, you have the flexibility to revoke their license and assign it to another team member on request. This practice promotes the effective management and utilization of licenses within your organization.

## Difference between unlock key and license key

Please note that this license key is different from the installer unlock key that you might have used in the past and needs to be separately generated from Syncfusion<sup style="font-size:70%">&reg;</sup> website.

* **Unlock Key** - Syncfusion<sup style="font-size:70%">&reg;</sup> Unlock Key is used to unlock the Syncfusion<sup style="font-size:70%">&reg;</sup> installers alone.

* **License Key** - Syncfusion<sup style="font-size:70%">&reg;</sup> License Key is a string that needs to be registered in your script to avoid licensing warning.

> Refer to [this](https://www.syncfusion.com/kb/8950/difference-between-the-unlock-key-and-licensing-key) KB article to know more about difference between the Syncfusion<sup style="font-size:70%">&reg;</sup> Unlock Key and the Syncfusion<sup style="font-size:70%">&reg;</sup> License Key.

## Registering Syncfusion<sup style="font-size:70%">&reg;</sup> license keys in JavaScript(ES6) application

Ensure that your Syncfusion<sup style="font-size:70%">&reg;</sup> license key is registered, especially if your project incorporates references to Syncfusion<sup style="font-size:70%">&reg;</sup> EJ2 packages. The license key, generated as a string, requires registration for proper functionality. Click [here ](https://ej2.syncfusion.com/documentation/licensing/license-key-registration)to explore the methods we provide to register license on the JavaScript platform.

| Licensing message | Details | License Key needs to be registered? | Solution |
| ------------- | ------------- | ------------- | ------------- |
| **Trial banner** | ![License key Trail banner](images/trail-banner-for-table.png ) This application was built using a trial version of Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup>. You should include the valid license key in the application to remove the license validation message permanently. | Yes | Use your developer credentials to [generate](https://ej2.syncfusion.com/documentation/licensing/license-key-generation) license keys to download a valid key. |
| **Invalid license** | ![License key not registered](images/invalid-license-banner.png) If the application is registered with an invalid key, another version of license key, or another platform’s license key, the following error message will pop up when launching the application.<br><br> | Check the license version |For more information check our licensing [errors](https://ej2.syncfusion.com/documentation/licensing/licensing-errors) and [toubleshoot](https://ej2.syncfusion.com/documentation/licensing/licensing-troubleshoot) page |

## See also

* [How to generate Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript & JavaScript(ES6) license key?](https://ej2.syncfusion.com/documentation/licensing/license-key-generation/)
* [How to register Syncfusion<sup style="font-size:70%">&reg;</sup> license key in TypeScript & JavaScript(ES6) application?](https://ej2.syncfusion.com/documentation/licensing/license-key-registration/)
* [Licensing FAQ](https://ej2.syncfusion.com/documentation/licensing/licensing-troubleshoot/)
