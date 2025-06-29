---
layout: post
title: Content Security Policy in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about Content Security Policy in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Content Security Policy

Content Security Policy (CSP) is a security feature implemented by web browsers that helps to protect against attacks such as cross-site scripting (XSS) and data injection. It limits the sources from which content can be loaded on a web page.

To enable strict [Content Security Policy (CSP)](https://csp.withgoogle.com/docs/strict-csp.html), certain browser features are disabled by default. JavaScript EJ2 ES5 controls support strict CSP mode without requiring the `unsafe-eval` directive, starting with Essential Studio 2023 Volume 2 release (v22.1.34). Additionally, with the 2025 Volume 1 update (v29.1.33), most `inline style`-related issues have been resolved, significantly reducing the dependency on the unsafe-inline directive in the style-src policy for a more secure and CSP-compliant environment.

Syncfusion<sup style="font-size:70%">&reg;</sup> controls are fully CSP-compliant, except for the Document Editor and PDF Viewer, which still require the unsafe-inline directive. Syncfusion<sup style="font-size:70%">&reg;</sup> controls use base64-encoded font icons for rendering, which are blocked on a strict CSP-enabled site. To allow them, add the [`font-src 'self' data:;`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directives in the meta tag as follows.


{% tabs %}
{% highlight razor tabtitle="HTML" %}

<meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self';
    font-src 'self'  data:;" />

{% endhighlight %}
{% endtabs %}

* Syncfusion<sup style="font-size:70%">&reg;</sup> **material** and **tailwind** built-in themes contain a reference to the [`Roboto’s external font`](https://fonts.googleapis.com/css?family=Roboto:400,500), which is also blocked. To allow them, add the [`external font`](https://fonts.googleapis.com/css?family=Roboto:400,500) reference to the [`style-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`font-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directives in the above meta tag.

The resultant meta tag is included within the `<head>` tag and resolves the CSP violation on the application's side when utilizing Syncfusion<sup style="font-size:70%">&reg;</sup> controls with material and tailwind themes.

{% tabs %}
{% highlight razor tabtitle="HTML" %}

<head>
    ...
    <meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline';
    font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data:;" />
</head>

{% endhighlight %}
{% endtabs %}

N> From the release 2023 Vol2 - 22.1 version, the Content Security Policy for Syncfusion<sup style="font-size:70%">&reg;</sup> controls has been enhanced by implementing a [function template](../template#function-template) approach for template properties to eliminate the usage of the `unsafe-eval` directive in the CSP meta tag.

> [View the JavaScript sample enabled with strict CSP in Github](https://github.com/SyncfusionExamples/ej2-javascript-csp-example)

## See also

* [How to resolve the Content Security Policy (CSP) errors](../how-to/csp-errors)