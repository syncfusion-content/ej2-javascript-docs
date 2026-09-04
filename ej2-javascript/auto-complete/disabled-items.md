---
layout: post
title: Disabled Items in ##Platform_Name## AutoComplete | Syncfusion
description: Disable individual Syncfusion ##Platform_Name## AutoComplete items by mapping the disabled field, preventing selection while keeping them visible.
platform: ej2-javascript
control: Disabled Items 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Disabled Items in ##Platform_Name## AutoComplete

The AutoComplete provides options for individual items to be either in an enabled or disabled state for specific scenarios. The category of each list item can be mapped through the [disabled](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#fields) field in the data table. Once an item is disabled, it cannot be selected as a value for the component. To configure the disabled item columns, use the `fields.disabled` property.

In the following sample, items are disabled based on their category using the `disabled` field.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/basic-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/basic-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/basic-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/basic-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs11" %}
{% endif %}

## Disable Item Method

The [disableItem](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#disableitem) method can be used to dynamically change the disabled state of a specific item. Only one item can be disabled per call. To disable multiple items, iterate this method over the list of items. The disabled field state will be updated in the [dataSource](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#datasource) when an item is disabled using this method. If the currently selected item is disabled dynamically, the selection is cleared.

| Parameter | Type | Description |
|------|------|------|
| itemHTMLLIElement |  <code>HTMLLIElement</code> |  It accepts the HTML `li` element of the item to be disabled.  |
| itemValue | <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>object</code> | It accepts the string, number, boolean, or object value of the item to be disabled. |
| itemIndex | <code>number</code> | It accepts the index of the item to be disabled. |

## Enabled

To disable the overall AutoComplete component, set the [enabled](../api/auto-complete#enabled) property to `false`.

![Disabled AutoComplete Component](../images/autocomplete-disable.png)