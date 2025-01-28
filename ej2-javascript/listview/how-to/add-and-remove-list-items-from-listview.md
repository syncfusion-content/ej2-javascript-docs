---
layout: post
title: Add and remove list items from ListView in ##Platform_Name## ListView control | Syncfusion
description: Learn here all about Add and remove list items from ListView in Syncfusion ##Platform_Name## ListView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Add and remove list items from ListView
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add and remove list items from ##Platform_Name## ListView control

You can add or remove list items from the ListView control using the [`addItem`](../../api/list-view/#additem) and [`removeItem`](../../api/list-view/#removeitem) methods. Follow these steps to add or remove a list item in the ListView control:

* Render the ListView with a data source. Use the [template](../../api/list-view/#template) property to append a delete icon for each list item. Bind the click event for the delete icon using the [actionComplete](../../api/list-view/#actioncomplete) handler.

* Render the "Add Item" button and bind the click event. In the click event handler, pass data with a random ID to the [`addItem`](../../api/list-view/#additem) method to add a new list item when the "Add Item" button is clicked.

* Bind the click handler to the delete icon created in the first step. Within the click event, remove the list item by passing the list item corresponding to the delete icon to the [`removeItem`](../../api/list-view/#removeitem) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/addItem-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/addItem-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/addItem-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/addItem-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/addItem-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/addItem-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/addItem-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/addItem-cs1" %}
{% endif %}