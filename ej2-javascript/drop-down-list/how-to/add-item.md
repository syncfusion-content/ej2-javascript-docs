---
layout: post
title: How to add item in ##Platform_Name## Dropdown List | Syncfusion
description: Insert items in between or append to the end of a Syncfusion ##Platform_Name## Dropdown List by passing an index to addItem.
platform: ej2-javascript
control: Add item 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add an item to the ##Platform_Name## Dropdown List

You can add an item at a specific position by specifying its [index](../../api/drop-down-list#index). If you add a new item without specifying an index, it is appended as the last item in the list.

The following example demonstrates how to add an item between existing items in the DropDownList.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/how-to/add-item-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/how-to/add-item-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/how-to/add-item-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/how-to/add-item-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/how-to/add-item-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/how-to/add-item-cs1" %}
{% endif %}