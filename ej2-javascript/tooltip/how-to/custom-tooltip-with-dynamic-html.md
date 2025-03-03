---
layout: post
title: Customize Tooltip with dynamic html in ##Platform_Name## Tooltip control | Syncfusion
description: Learn here all about Customize Tooltip with dynamic html in Syncfusion ##Platform_Name## Tooltip control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize Tooltip with dynamic html
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize Tooltip with dynamic HTML in ##Platform_Name## Tooltip control

Tooltip loads HTML pages via HTML tags such as iframe, video, and map using the [`content`](../../api/tooltip/#content) property, which supports both strings and HTML tags.

To load an `iframe` element in Tooltip, set the required iframe in the [`content`](../../api/tooltip/#content) of the Tooltip control while initializing it. Refer to the following code snippet:

```ts
content: '<iframe src="https://www.syncfusion.com/products/essential-js2"></iframe>'
```
{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/maps-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/maps-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/maps-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/maps-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/maps-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/maps-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/maps-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/maps-cs1" %}
{% endif %}
