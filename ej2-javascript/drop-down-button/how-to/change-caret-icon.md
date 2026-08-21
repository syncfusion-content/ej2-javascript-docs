---
layout: post
title: How to change caret icon in ##Platform_Name## Dropdown Menu | Syncfusion
description: Learn how to change the caret icon of the ##Platform_Name## Dropdown Menu in the beforeOpen and beforeClose events.
platform: ej2-javascript
control: Change caret icon 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to change caret icon in ##Platform_Name## Dropdown Menu

Dropdown arrow can be customized on popup open and close. It can be handled in [`beforeOpen`](../../api/drop-down-button/#beforeopen) and [`beforeClose`](../../api/drop-down-button/#beforeclose) event.

In the following example, the up arrow is updated on popup close and down arrow is updated on popup open using `beforeOpen` and `beforeClose` event by adding and removing `e-caret-up` class.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/drop-down-button/up-down-arrow-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/up-down-arrow-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/drop-down-button/up-down-arrow-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/up-down-arrow-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/drop-down-button/up-down-arrow-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/up-down-arrow-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/drop-down-button/up-down-arrow-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/up-down-arrow-cs1" %}
{% endif %}