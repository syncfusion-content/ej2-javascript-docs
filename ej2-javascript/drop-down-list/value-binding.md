---
layout: post
title: Value binding in ##Platform_Name## Dropdown List | Syncfusion
description: Bind primitive types or complex objects to the Syncfusion ##Platform_Name## Dropdown List value from local arrays, remote sources, or custom data.
platform: ej2-javascript
control: Value binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Value binding in ##Platform_Name## Dropdown List

Value binding in the DropDownList allows you to associate data values with each list item. This facilitates managing and retrieving selected values efficiently. The DropDownList component provides flexibility in binding both primitive data types and complex objects.

## Primitive Data Types

The DropDownList provides flexible binding capabilities for primitive data types like strings and numbers. You can bind local primitive data arrays, fetch and bind data from remote sources, or apply custom data binding to suit specific requirements. Bind the value of the primitive data to the [`value`](../api/drop-down-list#value) property of the DropDownList.

Primitive data types include:

* String
* Number
* Boolean
* Null

The following sample shows an example of preselecting values for a primitive data type.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/primitive/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/primitive/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/primitive" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/primitive/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/primitive/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/primitive" %}
{% endif %}

## Object Data Types

In the DropDownList, object binding allows you to bind to a dataset of objects. When [`allowObjectBinding`](../api/drop-down-list#allowobjectbinding) is enabled, the value of the control will be an object of the same type as the selected item. This feature seamlessly binds arrays of objects, whether sourced locally, retrieved from remote endpoints, or customized to suit specific application needs.

The following sample shows an example of preselecting values for an object data type.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/objectvalue/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/objectvalue/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/objectvalue" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/objectvalue/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/objectvalue/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/objectvalue" %}
{% endif %}

> Since the `value` property supports object data types, it is necessary to provide the appropriate type wherever the `value` property is utilized.