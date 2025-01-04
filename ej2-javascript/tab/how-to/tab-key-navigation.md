---
layout: post
title: Tab key navigation in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Tab key navigation in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Tab key navigation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Tab key navigation in ##Platform_Name## Tab control

The [`tabIndex`](../api/tab/tabItem/#tabindex) property of a Tab item enables tab key navigation for that specific item. When you assign a positive value to the [`tabIndex`](../api/tab/tabItem/#tabindex) property, users can switch focus between tab items using the Tab or Shift+Tab keys. By default, users can only switch between tab items using arrow keys.

If you set the [`tabIndex`](../api/tab/tabItem/#tabindex) value to 0 for all tab items, the tab will switch based on the order of elements on the page. This means users can navigate through the tab items using the Tab key in the same order as they appear on the page.

To use the [`tabIndex`](../api/tab/tabItem/#tabindex) property, assign a positive value to each tab item where you want to enable tab key navigation. Here's an example:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/tab-selection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-selection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/tab-selection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/tab-selection-cs1" %}
{% endif %}

With this code, users can switch between tab items using the Tab and Shift+Tab keys in the order specified by the [`tabIndex`](../api/tab/tabItem/#tabindex) values.

**Important notes:**

1. The [`tabIndex`](../api/tab/tabItem/#tabindex) property only affects navigation between tab items using the Tab key.
2. Users can still use arrow keys to switch between tab items, regardless of the [`tabIndex`](../api/tab/tabItem/#tabindex) property value.