---
layout: post
title: How to load HTML in Tooltip in ##Platform_Name## Tooltip | Syncfusion
description: Load dynamic HTML content (bold, italic, links) into the ##Platform_Name## Tooltip by toggling display inside the beforeRender event.
platform: ej2-javascript
control: Dynamic Tooltip content with html
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to load dynamic HTML in Tooltip content in ##Platform_Name## Tooltip

The Tooltip control can load HTML content using the [`content`](../content) template.

The HTML tags such as `<div>`, `<span>`, `bold`, `italic`, `underline`, etc., can be used. Style attributes can also be applied with HTML tags.

In the example below, Bold, Italic, Underline, and Anchor tags are used.

When using HTML elements as content for a `Tooltip`, initially set the content element to `display: none`. Then, within the [`beforeRender`](../../api/tooltip#beforerender) event, you can make the element visible again using the following code:

```ts
    document.getElementById('content').style.display = 'block';
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/html-content-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/html-content-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/html-content-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/html-content-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/html-content-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/html-content-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/html-content-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/html-content-cs1" %}
{% endif %}