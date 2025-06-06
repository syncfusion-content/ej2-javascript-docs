---
layout: post
title: Licensing troubleshoot in ##Platform_Name## Licensing control | Syncfusion
description: Learn here all about Licensing troubleshoot in Syncfusion ##Platform_Name## Licensing control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Licensing troubleshoot 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Licensing troubleshoot in ##Platform_Name## Licensing control

## Is an internet connection required for license validation

No, Internet connection is not required for the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup> license validation. The Syncfusion<sup style="font-size:70%">&reg;</sup> license validation is done offline during application execution. Apps registered with a Syncfusion<sup style="font-size:70%">&reg;</sup> license key can be deployed on any system that does not have an internet connection.

## Upgrade from the trial version after purchasing a license

To upgrade from the trial version, there are two possible solutions:

* Uninstall the trial version and install the fully licensed build from the [License & Downloads](https://www.syncfusion.com/account/downloads) section of the Syncfusion<sup style="font-size:70%">&reg;</sup> website.

* If you are using Syncfusion<sup style="font-size:70%">&reg;</sup> controls from the [npm](https://www.npmjs.com/search?q=scope:syncfusion), replace the currently used trial license key with a paid license key that can be generated from the [License & Downloads](https://www.syncfusion.com/account/downloads) section of Syncfusion<sup style="font-size:70%">&reg;</sup> website. Refer to [this](https://help.syncfusion.com/common/essential-studio/licensing/license-key#how-to-register-the-syncfusion-license-key) topic for more information regarding registering the license in the application.

> The license registration is not required if you reference Syncfusion<sup style="font-size:70%">&reg;</sup> scripts from the Licensed installer. These licensing changes apply to all evaluators who refer to the Syncfusion<sup style="font-size:70%">&reg;</sup> scripts from the evaluation installer and those who use the Syncfusion<sup style="font-size:70%">&reg;</sup> NuGet packages form [nuget.org](https://www.nuget.org/).

## Where can I get a license key

License keys can be generated from the [License & Downloads](https://syncfusion.com/account/downloads) or the [Trial & Downloads](https://www.syncfusion.com/account/manage-trials/downloads) section of the Syncfusion<sup style="font-size:70%">&reg;</sup> website.

![Get Community License](images/get-community-license-key.png)

The Syncfusion<sup style="font-size:70%">&reg;</sup> license keys are the **version and platform-specific**, refer to the [KB](https://www.syncfusion.com/kb/8976/how-to-generate-license-key-for-licensed-products) to generate the license key for the required version and platform. Also, refer to this [KB](https://www.syncfusion.com/kb/8951/which-version-syncfusion-license-key-should-i-use-in-my-application) to know which version of the Syncfusion<sup style="font-size:70%">&reg;</sup> license key should be used in the application.

> While using the ASP.NET Core controls with the Javascript(ES5) components, you need to register the license key in both the Javascript(ES5) and the [ASP.NET core](https://ej2.syncfusion.com/aspnetcore/documentation/licensing/license-key-registration). Since the license is validated at the client side for Javascript(ES5) components and server-side for the ASP.NET core components.

## Refer EJ2 scripts without registering the license key

Registering the Syncfusion<sup style="font-size:70%">&reg;</sup> license key in the application is mandated from version 20.1 for all the Syncfusion<sup style="font-size:70%">&reg;</sup> EJ2 platforms to avoid licensing warnings. The end-users can easily inspect the License key registered in the script due to the nature of the JavaScript. If you are a licensed customer and don’t want to expose your key due to security reasons or other reasons, follow the following steps to ej2 scripts without registering the license key in the application.

### Using scripts from the licensed installer

License registration is not required for licensed users if referring to the script from a [licensed installer](https://www.syncfusion.com/account/downloads?_gl=1*1b4rett*_ga*NjA1MzQ0NDA1LjE1ODM5MjI3NzU.*_ga_WC4JKKPHH0*MTY1MTc0ODA2Ni42MjIuMS4xNjUxNzQ4MTE2LjA.&_ga=2.83223830.1048598127.1651643639-605344405.1583922775). The following steps will guide you to get the installed script from your machine.

* After installing the licensed build from a licensed installer, go to the installed location and navigate to the `EJ2/Installed Version/Web (Essential JS 2)/JavaScript/ej2-js-es5.`

![Registry Location](images/ej2-script-folder-structure.png)

* Navigate to the ej2-js-es5 package folder and access the `ej2.min.js` from the **scripts** folder and utilize the minified ej2 script in the application.

![Installation Location](images/ej2-script-in-file-browser.png)

### Using scripts from the CRG

If you are a licensed customer, you can download scripts from the [CRG](https://crg.syncfusion.com/) which doesn't require the license registration by signing in with the Syncfusion<sup style="font-size:70%">&reg;</sup> account. You can check your license status by clicking my account icon as follows.

![image](images/crg-licensed-profile.png)

Refer to the [CRG documentation](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) to know more about how to refer to scripts.

## Will the registered license key expire

No, the Syncfusion<sup style="font-size:70%">&reg;</sup> license keys won't expire for a particular version and you can continue to use it. So, you won't face any problems on the live site. If you have used the trial key, it will expire in 30 days and we don't recommend using it in production.

> If you upgrade to newer versions of the Syncfusion<sup style="font-size:70%">&reg;</sup> packages, you have to generate new license keys and use them.

## When to generate new license key while upgrading

You don't need to generate and change license keys for minor version upgrades. However, when upgrading from one major version to another major version, you must generate a new license key and update it in your application.

For example,
* If you are using a version like `25.1.X`, it is important to use the same version for all Syncfusion<sup style="font-size:70%">&reg;</sup> components in your application. The license key generated for version `25.X.XX` can be used. This key can be used across all minor versions within that major version, `v25`. This means you can upgrade all packages to `25.2.X` while still using the same license key.

* However, if you upgrade from one major version to another—such as from `25.1.X` to `26.1.X`—you will need to generate a new license key for the latest version and update it in your application.

>Note: The above-mentioned guidelines are not applicable to our packages on version `20.X.XX`, where `20.1` denotes one major version and `20.2` another major version. However, starting with our release version 21, we have adjusted the pattern. So if you are using `20.1.X`, when you upgrade to `20.2.X`, you have to generate new license keys for `20.2.X` and change in the application. Therefore, these guidelines apply to versions `21` and later.

## License registration for multiple developers on your project

Syncfusion<sup style="font-size:70%">&reg;</sup> license key is a version based and it’s not based on the developer. You don’t have to register different keys for each developer. Just register one valid license key when developing and publishing the software.

## Can I use the same key for all the web apps under the project

Yes, you can use the same license key for all the web apps.

## Does the license registration access any resources or data

No, the license registration doesn't access any data or resources.

## License & Downloads shows the "Essential Studio<sup style="font-size:70%">&reg;</sup> Enterprise Edition Binary with Test Studio" and the "Project License". Which license to use

Use any licenses shown on the [accounts & downloads](https://www.syncfusion.com/account/downloads) page. It shows two licenses because if you are part of your company's enterprise portal Global license and an individual license is also assigned to your account, on your account & downloads page, the individual license and your enterprise portal Global license are shown.

 ![Project License](images/project-license.png)

Refer to the [KB](https://www.syncfusion.com/kb/11532/definition-of-terms-for-syncfusion-licenses) article which explains the Licenses offered by Syncfusion<sup style="font-size:70%">&reg;</sup>.
