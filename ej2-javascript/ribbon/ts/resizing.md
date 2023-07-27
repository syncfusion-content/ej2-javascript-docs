---
layout: post
title: Ribbon Resizing in  ##Platform_Name## Menu control | Syncfusion
description:  Checkout and learn about Ribbon Resizing with ##Platform_Name## Menu control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Resizing

The Ribbon effectively resizes the ribbon elements while being resized. It extends when the ribbon size is increased and collapses when the ribbon size is decreased. The resizing can be performed in both the classic and simplified modes.

By default, the ribbon elements are resized based on the group size with larger groups collapsing first, later the medium and small sized items.

## Defining items allowed size

The [allowedSizes](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItemModel/#allowedsizes) property is used to maintain a constant size for an item when being resized. You can limit an items size by specifying its `allowedSizes` which keeps the size constant even when the Ribbon is being resized.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/allowed-size-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/allowed-size-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/allowed-size-cs1" %}

## Defining items active size

The [activeSize](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItemModel/#activesize) read-only property is used to set the size of the item which is displayed intially before it is being resized.

> On resizing, the items size will be changed based on the available width of the tab content from the order of Large-> Medium-> Small and viceversa.