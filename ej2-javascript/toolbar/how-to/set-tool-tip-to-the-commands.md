---
layout: post
title: How to set tooltip on Toolbar commands in ##Platform_Name## Toolbar | Syncfusion
description: Learn how to add tooltips to commands in the Syncfusion ##Platform_Name## Toolbar control for clearer action guidance.
platform: ej2-javascript
control: Set tool tip to the commands 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to set tooltip on Toolbar commands in ##Platform_Name## Toolbar

The [`tooltipText`](../../api/toolbar/item#tooltiptext) property of the Toolbar item is used to set the HTML Tooltip for the commands that can be viewed as hint texts on mouse hover.

To use the [`tooltipText`](../../api/toolbar/item#tooltiptext) with the ej2-tooltip component:

* Import the `Tooltip` module from `ej2-popups`, and initialize the Tooltip with the Toolbar target inside the Toolbar's `created` event. Refer to the following code example:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toolbar/toolbar-how-tooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-how-tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-how-tooltip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toolbar/toolbar-how-tooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-how-tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-how-tooltip-cs1" %}
{% endif %}