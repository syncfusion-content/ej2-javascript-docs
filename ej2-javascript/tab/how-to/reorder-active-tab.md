---
layout: post
title: Reorder active tab in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Reorder active tab in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Reorder active tab 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Reorder active tab in ##Platform_Name## Tab control

You can prevent the active tab item from changing when resizing the browser in popup overflow mode by using the [`reorderActiveTab`](../../api/tab#reorderActiveTab) property. 

By default, the active tab is reordered when you click on tab items in the popup. If you set the [`reorderActiveTab`](../../api/tab#reorderActiveTab) property to `false`, the active tab item from the popup will not be reordered, and the active item will remain highlighted inside the popup.

The following example demonstrates how to prevent the reordering of the active tab item inside the popup:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/reorder-active-tab-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/reorder-active-tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/reorder-active-tab-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/reorder-active-tab-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/reorder-active-tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/reorder-active-tab-cs1" %}
{% endif %}