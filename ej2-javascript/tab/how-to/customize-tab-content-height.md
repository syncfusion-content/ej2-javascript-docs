---
layout: post
title: Customize tab content height in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Customize tab content height in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize tab content height 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize tab content height in ##Platform_Name## Tab control

You can adjust the Tab content height using the [`heightAdjustMode`](../../api/tab/#heightadjustmode) property. By default, this property is set to `Content`. Here are the available options:

* **None**: Sets each tab content height based on the Tab height. This option is only used when the tab component has a [`height`](../../api/tab/#height) property set.
* **Auto**: Sets all tab content heights to match the height of the tallest tab content.
* **Content**: Sets each tab content height based on its own content (default behavior).
* **Fill**: Sets each tab content height to fill the full height of the Tab's parent element.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/tab-height-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-height-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-height-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/tab-height-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-height-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/tab-height-cs1" %}
{% endif %}