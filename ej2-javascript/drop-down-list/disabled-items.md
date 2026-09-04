---
layout: post
title: Disabled Items in ##Platform_Name## Dropdown List | Syncfusion
description: Disable individual Syncfusion ##Platform_Name## Dropdown List items by mapping the disabled field, preventing selection while keeping them visible.
platform: ej2-javascript
control: Disabled Items 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Disabled Items in ##Platform_Name## Dropdown List

The DropDownList provides options for individual items to be either in an enabled or disabled state for specific scenarios. The category of each list item can be mapped through the [disabled](../api/drop-down-list#fields) field in the data table. Once an item is disabled, it cannot be selected as a value for the component. To configure the disabled item columns, use the `fields.disabled` property.

In the following sample, items are disabled based on their category using the `disabled` field.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/basic-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/basic-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/basic-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/basic-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs14" %}
{% endif %}

## Disable Item Method

The [`disableItem`](../api/drop-down-list#disableItem) method can be used to dynamically change the disabled state of a specific item. Only one item can be disabled per call. To disable multiple items, iterate this method over the list of items. The disabled field state will be updated in the [`dataSource`](../api/drop-down-list#datasource) when an item is disabled using this method. If the currently selected item is disabled dynamically, the selection is cleared.

| Parameter | Type | Description |
|------|------|------|
| itemHTMLLIElement |  <code>HTMLLIElement</code> |  It accepts the HTML `li` element of the item to be disabled.  |
| itemValue | <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>object</code> | It accepts the string, number, boolean, or object value of the item to be disabled. |
| itemIndex | <code>number</code> | It accepts the index of the item to be disabled. |

## Enabled

To disable the overall DropDownList component, set the [`enabled`](../api/drop-down-list#enabled) property to `false`.

![Disabled DropDownList Component](../images/dropdownlist-disable.png)