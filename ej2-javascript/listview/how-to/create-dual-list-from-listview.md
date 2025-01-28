---
layout: post
title: Create dual list in ##Platform_Name## ListView Control | Syncfusion
description: Learn here all about create dual list in Syncfusion ##Platform_Name## ListView control, it's elements and more.
platform: ej2-javascript
control: Create dual list from ListView
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Create dual list in ##Platform_Name## ListView Control

The dual list configuration involves two ListView controls, allowing for list items to be transferred between lists using client-side events. This section explains how to integrate ListView controls to achieve a dual list.

## Use cases

Dual lists can be utilized in scenarios such as:
* Stock exchanges of two different countries.
* Job applications (skill sets).

## Integration of Dual List

To implement a dual list, two ListView controls are used to display items. The interface uses an `ej2-button` for transferring data between lists and a textbox for filtering support.

Key features of the dual list include:
* Transferring all items from one list to another.
* Transferring selected items from one list to another.
* Filtering lists using input from a textbox.

In the ListView control, sorting is enabled using the [sortOrder](../../api/list-view/#sortorder) property, and the [select](../../api/list-view/#select) event is triggered when an item is selected. The select event manages the enabling and disabling of buttons based on the item selection.

## Manipulating data


### Moving entire data from the first list to the second list (`>>`)

All items can be transferred from the first ListView to the second by clicking the designated button. When clicked, all items from the first list are concatenated with the second ListView's data source. This button is active only when the first ListView has items.

### Moving entire data From the second list to the first list (`<<`)

This button performs the reverse action, transferring all items from the second ListView to the first. It is active only when the second ListView has items.

### Transferring selected items (`>` and `<`)

The [Select](../../api/list-view/#select) event facilitates transferring selected items between lists. These buttons are enabled when an item is selected in either list.
## Filtering method

A filtering method allows you to filter list items by typing characters into a textbox. This feature utilizes the [`dataManager`](../../data/getting-started/) to fetch and display filtered data in the ListView.

## Sorting

Using the dual list, list items can be sorted in the ListView using the [sortOrder](../../api/list-view/#sortorder) property. Enabling sorting in one ListView allows the data to be transferred in the same order to the other ListView.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/dual-list-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/dual-list-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/dual-list-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/dual-list-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/dual-list-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/dual-list-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/dual-list-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/dual-list-cs1" %}
{% endif %}