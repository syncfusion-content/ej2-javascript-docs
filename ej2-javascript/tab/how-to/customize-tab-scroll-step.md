---
layout: post
title: How to customize tab scroll step in ##Platform_Name## Tab | Syncfusion
description: Learn how to customize the scroll step in the Syncfusion ##Platform_Name## Tab control for smoother tab navigation.
platform: ej2-javascript
control: Customize tab scroll step 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to customize tab scroll step in ##Platform_Name## Tab

The Tab control supports customizing the scrolling distance when you click the left and right side navigation icons. You can customize the [`ScrollStep`](../../api/toolbar/item#scrollstep) property to adjust the scrolling distance. Refer to the following code example:

* Use the Tab's [`ScrollStep`](../../api/toolbar/item#scrollstep) property to set the desired value for customizing the tab scroll step.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/tab-scrollstep-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-scrollstep-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-scrollstep-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/tab-scrollstep-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-scrollstep-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/tab-scrollstep-cs1" %}
{% endif %}
