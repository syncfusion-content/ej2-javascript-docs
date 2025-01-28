---
layout: post
title: Get selected items from ListView in ##Platform_Name## ListView control | Syncfusion
description: Learn here all about Get selected items from ListView in Syncfusion ##Platform_Name## ListView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Get selected items from ListView
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Get selected items from ##Platform_Name## ListView control

In the ListView control, users can select one or more items. The [`getSelectedItems`](../../api/list-view/#getselecteditems)  API method can be used to retrieve details of the currently selected items from the ListView control.

**`getSelectedItems` Method**

This is used to get the details of the currently selected item from the list items. It returns the [`SelectedItem`](../../api/list-view/selectedItem/) | [`SelectedCollection`](../../api/list-view/selectedCollection/)

The `getSelectedItems` method returns the following items from the selected list items.

| Return type | Purpose |
|------------|-------------------|
| text | Returns the text of selected item lists |
| data | Returns the whole data of selected list items, i.e., returns the fields data of selected li.|
| item | Returns the collections of list items |

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/selected-item-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/selected-item-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/selected-item-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/selected-item-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/selected-item-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/selected-item-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/selected-item-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/selected-item-cs1" %}
{% endif %}