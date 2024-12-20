---
layout: post
title: How to customize toolbar scroll step in ##Platform_Name## Toolbar control | Syncfusion
description: Learn here all about How to customize toolbar scroll step in Syncfusion ##Platform_Name## Toolbar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: How to customize toolbar scroll step 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to customize toolbar scroll step in ##Platform_Name## Toolbar control

The Toolbar supports customizing the scrolling distance when you click the left and right navigation icons. You can customize the [`scrollStep`](../../api/toolbar/item#scrollStep) property for scrolling distance. Refer to the following code example.

* By using the Toolbar's [`scrollStep`](../../api/toolbar/item#scrollStep) property, pass a required value to customize the toolbar scroll step.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toolbar/scrollstep-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/scrollstep-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/scrollstep-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toolbar/scrollstep-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/scrollstep-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/scrollstep-cs2" %}
{% endif %}