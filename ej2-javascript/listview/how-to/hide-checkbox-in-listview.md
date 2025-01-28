---
layout: post
title: Hide checkbox in ##Platform_Name## ListView control | Syncfusion
description: Learn here all about Hide checkbox  in Syncfusion ##Platform_Name## ListView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Hide checkbox in ListView
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Hide checkbox in ##Platform_Name## ListView control

The checkbox of any list item can be hidden by using the [`htmlAttributes`](../../api/list-view/#htmlattributes) of the [`fields`](../../api/list-view/#fields) object. With the help of `htmlAttributes`, a unique class can be added to each list item that is rendered from the data source, allowing you to hide the checkbox of the list item via that CSS class.

In this sample, multiple leaf nodes of a nested list have been hidden. The `e-checkbox-hidden` class has been added in the data source where the checkbox needs to be hidden. Refer to the snippet below for a simple data source.

```ts
    {
        'text': 'New York',
        'id': '3002',
        'category': 'USA',
        'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' }
    }
```

Even though we have hidden the checkbox, the functionality remains the same for the list item, which might affect the [getSelectedItems](../../api/list-view/#getselecteditems) method. To counter this, we implement certain logic in the `select` event. The logic here is to remove the `e-active` class from other checkbox-hidden list items that get added when selecting that item, and retain `e-active` on the currently selected item.

> This process excludes the visible checkbox list items and only considers the hidden checkbox items.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/hide-checkbox-cs1/index.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/listview/hide-checkbox-cs1/datasource.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/hide-checkbox-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/hide-checkbox-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/hide-checkbox-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/hide-checkbox-cs1/index.js %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/listview/hide-checkbox-cs1/es5-datasource.js%}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/hide-checkbox-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/hide-checkbox-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/hide-checkbox-cs1" %}
{% endif %}