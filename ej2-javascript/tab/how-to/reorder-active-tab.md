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

We can able to prevent the changing of the active tab item on resizing the browser when overflow mode is popup by using the [`reorderActiveTab`](../../api/tab#reorderActiveTab) property. By default, the active Tab should be reordered when we click the tab items from the popup. If we set `false` to [`reorderActiveTab`](../../api/tab#reorderActiveTab) property the active tab item from the popup will not be reordered and an active item is highlighted inside the popup. The following code example depicts to prevent the reorder active tab item inside the popup.

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