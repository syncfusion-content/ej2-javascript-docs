---
layout: post
title: Content in ##Platform_Name## Tooltip control | Syncfusion
description: Learn here all about Content in Syncfusion ##Platform_Name## Tooltip control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Content
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Content in ##Platform_Name## Tooltip control

A text or a piece of information assigned to the Tooltip's [`content`](../api/tooltip#content) property will be displayed as the main text stream of the Tooltip. The content can be a string or a template. If the [`content`](../api/tooltip#content) property is not provided with any specific value, it takes the value assigned to the `title` attribute of the target element on which the Tooltip was initialized. The content can also be dynamically assigned to the Tooltip via AJAX.

## Template content

By default, any text or image can be added to the Tooltip. To customize the Tooltip layout or to create your own visual element on the Tooltip, templates can be utilized.

Refer to the following code example to add formatted HTML content to the Tooltip.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/content-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/content-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/content-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/content-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/content-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/content-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/content-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/content-cs1" %}
{% endif %}

## Dynamic content via AJAX

The Tooltip content can be dynamically loaded by making use of an AJAX call. The AJAX request is usually made within the [`beforeRender`](../api/tooltip#beforerender) event of the Tooltip, and then the Tooltip's [`content`](../api/tooltip#content) is assigned the value retrieved on its success.

N>  The Tooltip [`target`](../api/tooltip/#target) property includes a unique identifier used to associate Tooltips with specific elements on a webpage or application interface. When setting the Tooltip [`target`](../api/tooltip/#target) value as a GUID (Globally Unique Identifier), ensure the GUID starts with a combination of **letters** before the numeric portion of the GUID. For example, **target: '#' + 'tooltip' + '96ad88bd-294c-47c3-999b-a9daa3285a05'**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/ajax-content-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/ajax-content-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/ajax-content-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/ajax-content-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/ajax-content-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/ajax-content-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/ajax-content-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/ajax-content-cs1" %}
{% endif %}
