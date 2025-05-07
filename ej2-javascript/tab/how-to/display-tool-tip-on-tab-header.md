---
layout: post
title: Display tool tip on tab header in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Display tool tip on tab header in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Display tool tip on tab header 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Display tooltip on tab header in ##Platform_Name## Tab control

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
