---
layout: post
title: Templates in ##Platform_Name## AutoComplete | Syncfusion
description: Customize Syncfusion ##Platform_Name## AutoComplete item, group, header, and footer rendering using the Essential JS 2 template engine.
platform: ej2-javascript
control: Templates 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Templates in ##Platform_Name## AutoComplete

The AutoComplete provides several options to customize each list item, group title, header, and footer elements. It uses the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [`Template engine`](../common/template-engine) to compile and render the elements properly.

## Item template

The content of each list item within the AutoComplete can be customized with the help of [`itemTemplate`](https://ej2.syncfusion.com/documentation/api/auto-complete#itemtemplate) property.

In the following sample, each list item is split into two columns to display the relevant data.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/item-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/item-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/item-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/item-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/item-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/item-template-cs1" %}
{% endif %}

## Group template

The group header that categorizes the sub-items can also be customized with the help of the [`groupTemplate`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#grouptemplate) property. This template is common for both inline and floating group headers.

In the following sample, employees are grouped according to their city.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/item-template-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/item-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/item-template-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/item-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/item-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/item-template-cs2" %}
{% endif %}

## Header template

The header element is shown statically at the top of the suggestion list items within the AutoComplete, and any custom element can be placed as a header element using [`headerTemplate`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#headertemplate) property.

In the following sample, the list items and their headers are designed and displayed as two columns similar to multiple columns of a grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/header-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/header-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/header-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/header-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/header-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/header-template-cs1" %}
{% endif %}

## Footer template

The AutoComplete has options to show a footer element at the bottom of the list items in the suggestion list. Here, you can place any custom element as a footer element using [`footerTemplate`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#footertemplate) property.

In the following sample, footer element displays the total number of list items present in the AutoComplete.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/footer-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/footer-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/footer-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/footer-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/footer-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/footer-template-cs1" %}
{% endif %}

## No records template

The AutoComplete provides support to custom design the suggestion list content when no data is found or no matches are found on a search, with the help of the [`noRecordsTemplate`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#norecordstemplate) property.

In the following sample, the suggestion list content displays a notification indicating that no data is available.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/norecords-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/norecords-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/norecords-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/norecords-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/norecords-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/norecords-template-cs1" %}
{% endif %}

## Action failure template

There is also an option to custom design the suggestion list content when the data fetch request fails on the remote server. This can be achieved using the [`actionFailureTemplate`](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#actionfailuretemplate) property.

In the following sample, when the data fetch request fails, the AutoComplete displays a notification.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/norecords-template-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/norecords-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/norecords-template-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/norecords-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/norecords-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/norecords-template-cs2" %}
{% endif %}

## See Also

* [How to achieve filtering](./filtering)
* [How to group data using a header](./grouping#grouping)
* [How to show list items with icons](./how-to/icon-support)