---
layout: post
title: Security Advisories in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about Security Advisories in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Security Advisories in Syncfusion<sup style="font-size:70%">&reg;</sup> EJ2 Controls

Syncfusion<sup style="font-size:70%">&reg;</sup> places the utmost priority on the security of our controls. Users can rest assured about the security of our controls, as we have implemented all necessary measures to mitigate security vulnerabilities such as cross-site scripting and insecure dependencies. To meet security standards, Syncfusion<sup style="font-size:70%">&reg;</sup> utilizes the [ESLint](https://eslint.org/) and [ESLint plugin security](https://github.com/eslint-community/eslint-plugin-security#rules) tools for static code analysis. Additionally, Syncfusion<sup style="font-size:70%">&reg;</sup> packages undergo software composition analysis using the [SOOS](https://soos.io/) security tool.

This document provides a description of the security updates available for Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS2 controls for volume release.

## Security Updates

The following security updates are available for Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS2 controls and are listed based on the release version. 

### 2023 Volume 2 (v32.1.19) - June 21, 2023

The Content Security Policy for Syncfusion<sup style="font-size:70%">&reg;</sup> controls has been enhanced by eliminating the usage of `unsafe-eval` directive. This ensures compliance with strict Content Security Policy (CSP) guidelines and improves the overall security of Syncfusion<sup style="font-size:70%">&reg;</sup> controls.

**Threat:**

The `unsafe-eval` directive is a CSP directive that allows the use of `eval()`. This directive is used to execute the code from strings, which is a potential security risk.

**Resolution:**

Starting from the release (v32.1.19), Syncfusion<sup style="font-size:70%">&reg;</sup> has removed the usage of the `unsafe-eval` directive in the CSP meta tag by implementing a [function template](https://ej2.syncfusion.com/documentation/common/template#function-template) approach for template properties. This change will prevent the execution of code from strings and further improve the overall security of Syncfusion<sup style="font-size:70%">&reg;</sup> controls.

For more information about the Content Security Policy, refer to this [documentation](https://ej2.syncfusion.com/documentation/common/troubleshoot/content-security-policy).

### 2019 Volume 4 (v17.4.39) - December 17, 2019

An HTML Sanitizer has been implemented to prevent cross-site scripting (XSS) attacks in Syncfusion<sup style="font-size:70%">&reg;</sup> controls. This ensures that the data rendered in the controls is safe and secure.

**Threat:**

Cross-Site Scripting (XSS) is a vulnerability where attackers inject malicious code into a web application, typically using JavaScript, but it could also involve HTML or CSS. Some Syncfusion<sup style="font-size:70%">&reg;</sup> controls accept user input values, including HTML strings.

**Resolution:**

To mitigate this threat, we have introduced the `sanitize` method in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript base library. This method sanitizes user input HTML strings before rendering them in the control. We recommend utilizing this method to prevent Cross-Site Scripting vulnerabilities. For example, refer to the following code snippet.

{% tabs %}
{% highlight ts tabtitle="TypeScript" %}

import { SanitizeHtmlHelper } from '@syncfusion/ej2-base';

let html: string = '<script>alert("XSS");</script>';

let sanitizedHtml: string = SanitizeHtmlHelper.sanitize(html);

{% endhighlight %}
{% endtabs %}

## Security Issue

If users discover any security issues or need assistance in resolving them with Syncfusion<sup style="font-size:70%">&reg;</sup> controls, please contact us by creating a support ticket on [our support site](https://syncfusion.com/support) or by posting your query on Stack Overflow with the tag `syncfusion-ej2`.
