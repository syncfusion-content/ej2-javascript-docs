---
layout: post
title: How to display tooltip on tab header in ##Platform_Name## Tab | Syncfusion
description: Learn how to display tooltips on tab headers in the Syncfusion ##Platform_Name## Tab control for better context.
platform: ej2-javascript
control: Display tool tip on tab header 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to display tooltip on tab header in ##Platform_Name## Tab

You can enhance the user experience of your Tab control by displaying tooltips for the tab headers. This feature provides hint text when users hover their mouse over a tab header. To implement this, you'll use the [`beforeRender`](../../api/tooltip#beforerender) event of the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Tooltip control.

Here's an example of how to add tooltips to your tab headers:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/tooltip-tab-header-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tooltip-tab-header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tooltip-tab-header-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/tooltip-tab-header-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tooltip-tab-header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/tooltip-tab-header-cs1" %}
{% endif %}
