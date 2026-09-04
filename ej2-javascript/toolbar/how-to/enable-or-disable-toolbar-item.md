---
layout: post
title: How to enable or disable Toolbar item in ##Platform_Name## Toolbar | Syncfusion
description: Learn how to enable or disable toolbar items in the Syncfusion ##Platform_Name## Toolbar control for conditional commands.
platform: ej2-javascript
control: Enable or disable toolbar item 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to enable or disable Toolbar item in ##Platform_Name## Toolbar

The [`disabled`](../../api/toolbar/itemModel#disabled) property of the Toolbar item is used to enable or disable the item by setting the value to `true` (to disable) or `false` (to enable). In the following code example, the paste action is initially disabled. On clicking the cut or copy button, the paste button will be enabled.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toolbar/scrollstep-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/scrollstep-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/scrollstep-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toolbar/scrollstep-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/scrollstep-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/scrollstep-cs1" %}
{% endif %}