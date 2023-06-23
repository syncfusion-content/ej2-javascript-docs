---
layout: post
title: Sort in ##Platform_Name## Kanban control | Syncfusion
description: Learn here all about Sort in Syncfusion ##Platform_Name## Kanban control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Sort 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Sort in ##Platform_Name## Kanban control

The Kanban provides built-in support to arrange the cards in their columns based on the JSON data order and drop the cards in the columns based on the dropped clone. Initially, users can change the arrangement of cards in the columns and position of the dropped card by using the [`sortBy`](../api/kanban/sortSettingsModel/#sortby) property. The [`sortBy`](../api/kanban/sortSettingsModel/#sortby) property contains three enumeration values as follows.

* Index
* DataSourceOrder
* Custom

## Index

SortBy `Index` property can be used with or without [`field`](../api/kanban/sortSettingsModel/#field) mapping.

### Index without field mapping

By default, SortBy `Index` property support without any [`field`](../api/kanban/sortSettingsModel/#field) mapping. In this behavior, cards are loaded based on the JSON data order and cards are dropped based on the dropped clone.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/kanban/index-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/index-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/index-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/kanban/index-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/index-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/kanban/index-cs1" %}
{% endif %}

### Index with field mapping

SortBy `Index` property also supports with [`field`](../api/kanban/sortSettingsModel/#field) mapping. In this behavior, cards are loaded based on mapping `field` values, and cards are dropped based on the dropped clone.

Cards are placed in a particular position in the columns where you can drop the cards by specifying the [`field`](../api/kanban/sortSettingsModel/#field) property, which is mapped from the data source. This property allows the users to drop the cards in the Kanban board where the dropped clone is created exactly. It is also helpful to render the cards based on the [`field`](../api/kanban/sortSettingsModel/#field) property value.

> The [`field`](../api/kanban/sortSettingsModel/#field) property mapping key value must be in `number` format.

The following cases will dynamically change their [`field`](../api/kanban/sortSettingsModel/#field) value when dropping the cards.

* If the cell has no cards, the dropped card [`field`](../api/kanban/sortSettingsModel/#field) value does not change.

* If the cell has one card and dropped a card to the last position or previous/next cards that do not have continuous order, then the dropped card [`field`](../api/kanban/sortSettingsModel/#field) value will be changed based on their previous card value.

* If the cell has one card and dropped a card on the previous position, then it will compare both the values, and the dropped card [`field`](../api/kanban/sortSettingsModel/#field) value will be changed if the cards have continuous order otherwise values will not be changed.

* When the previous and next cards do not have continuous order, the dropped card [`field`](../api/kanban/sortSettingsModel/#field) value will be changed based on the previous card value.

* When the previous and next cards have continuous order or odd/even value, then the [`field`](../api/kanban/sortSettingsModel/#field) value of the dropped card and the cards followed by the dropped card will be changed based on the **previous** card value with continuous order.

For Example,
**Continuous Order** -
Consider,  Column A has Card A with priority value `1`, Card B with priority value `2`, and Card C with priority value `3`.
and Column B has Card D with priority value `5`, then the dropped Card D will be placed between Card A and Card B. Now, the Cards D, B, and C will be dynamically changed to the priority values as `2, 3, and 4` respectively.

**Odd/Even order** -
Consider, Column A has Card A with priority value `1`, Card B with priority value `3`, and Card C with priority value `5`.
and Column B has Card D with priority value `5`, then the Dropped Card D will be placed between Card A and Card B. Now, the Cards D, B, and C will be dynamically changed to the priority values as `2, 3, and 5` respectively.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/kanban/index-field-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/index-field-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/index-field-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/kanban/index-field-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/index-field-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/kanban/index-field-cs1" %}
{% endif %}

## DataSource Order

The SortBy `DataSourceOrder` property does not require any [`field`](../api/kanban/sortSettingsModel/#field) mapping. In this behavior, cards are loaded based on the JSON data order, and also cards are dropped based on the JSON data order.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/kanban/data-source-order-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/data-source-order-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/data-source-order-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/kanban/data-source-order-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/data-source-order-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/kanban/data-source-order-cs1" %}
{% endif %}

## Custom

### Custom with field mapping

The SortBy `Custom` property must require datasource [`field`](../api/kanban/sortSettingsModel/#field) mapping. In this behavior, cards are loaded based on the [`field`](../api/kanban/sortSettingsModel/#field) mapping value and also cards are dropped based on the [`field`](../api/kanban/sortSettingsModel/#field) mapping value.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/kanban/custom-mapping-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/custom-mapping-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/custom-mapping-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/kanban/custom-mapping-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/custom-mapping-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/kanban/custom-mapping-cs1" %}
{% endif %}

## Change the direction

Kanban board also provides support for aligning the cards in the columns using the [`direction`](../api/kanban/sortSettingsModel/#direction) property inside the [`sortSettings`](../api/kanban/#sortsettings) property. Based on this, cards can be aligned in the columns either in `Ascending` or `Descending` order. Sorting direction will be performed based on [`sortBy`](../api/kanban/sortSettingsModel/#sortby) property.

> By default, cards are aligned in the columns based on `Ascending` order.

In the following sample, cards are aligned in `Descending` order.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/kanban/sort-direction-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/sort-direction-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/sort-direction-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/kanban/sort-direction-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/sort-direction-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/kanban/sort-direction-cs1" %}
{% endif %}
