---
layout: post
title: Resizing in ##Platform_Name## Ribbon | Syncfusion
description: Learn how the ##Platform_Name## Ribbon resizes elements automatically when space changes, with support for custom resize order in Classic and Simplified modes.
control: Ribbon
platform: ej2-javascript
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Resizing in ##Platform_Name## Ribbon

The Syncfusion JavaScript Ribbon control automatically adjusts the layout of its elements when the available space changes. It expands when the container size increases and collapses when it decreases. This resizing behavior is available in both Classic and Simplified modes.Also, we have an option to resize the ribbon elements in the custom order.

*   **Classic Mode**: As the available width decreases, items transition from `Large` to `Medium` to `Small`. The reverse occurs as the width increases.
*   **Simplified Mode**: Items transition between `Medium` and `Small` sizes based on the available space.

## Define Constant Item Size

You can use the [allowedSizes](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem#allowedsizes) property to maintain a constant size for a specific item. If `allowedSizes` is set, the item will retain its specified size and will not be affected by the Ribbon resizing.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/allowed-size-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/allowed-size-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/allowed-size-cs1" %}

## Define Initial Item Size

The [activeSize](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem#activesize) property specifies the initial size of a Ribbon item before any resizing occurs. Its default value is `Medium`. During resizing, the control updates this property based on the `allowedSizes` configuration and the available container space.