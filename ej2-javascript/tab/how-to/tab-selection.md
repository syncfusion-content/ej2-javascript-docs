---
layout: post
title: Tab selection in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Tab selection in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Tab selection 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Tab selection in ##Platform_Name## Tab control

You can determine whether a tab was selected through user interaction or programmatically by using the [`selecting`](../../api/tab#selecting) and [`selected`](../../api/tab#selected) event arguments. These arguments contain an `isInteracted` field that returns `true` when the user changes the tab through click actions, and `false` when the change occurs programmatically.

The following code example demonstrates how to identify the tab selection state in the selecting and selected events:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/tab-selection-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-selection-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-selection-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/tab-selection-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-selection-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/tab-selection-cs2" %}
{% endif %}