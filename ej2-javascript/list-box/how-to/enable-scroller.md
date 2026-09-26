---
layout: post
title: Enable Scroller in ##Platform_Name## ListBox | Syncfusion
description: Show a scrollbar in the Syncfusion ##Platform_Name## ListBox by restricting the popup height with the height property.
platform: ej2-javascript
control: Enable scroller 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to Enable Scroller in ##Platform_Name## ListBox

The ListBox supports scrolling and it can be achieved by restricting the height of the list box using [`height`](../../api/list-box/#height) property.

In the following sample, `height` of the list box is restricted to `290px`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/list-box/icons-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/icons-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/icons-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/list-box/icons-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/icons-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/list-box/icons-cs1" %}
{% endif %}