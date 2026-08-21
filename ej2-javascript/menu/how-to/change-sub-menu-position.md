---
layout: post
title: How to change sub menu position in ##Platform_Name## Menu | Syncfusion
description: Learn how to change sub-menu position with the Syncfusion ##Platform_Name## Menu control for better menu placement and usability.
platform: ej2-javascript
control: Change sub menu position
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to change sub menu position in ##Platform_Name## Menu

The submenu position can be changed by using the [`beforeOpen`](../../api/menu/#beforeopen) event. Assign the top and left position where you want to open the submenu to the [`beforeOpen`](../../api/menu/#beforeopen) event arguments `args.top` and `args.left` respectively.

In the below sample, the sub menu opens above the parent menu item.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/position-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/position-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/position-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/position-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/position-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/position-cs1" %}
{% endif %}

>> For custom positioning, set both `top` and `left` position in the [`beforeOpen`](../../api/menu/#beforeopen) event.