---
layout: post
title: Value Binding in ##Platform_Name## MultiSelect Dropdown | Syncfusion
description: Bind primitive or complex values to the Syncfusion ##Platform_Name## MultiSelect Dropdown and preselect items from local or remote data.
platform: ej2-javascript
control: Value binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Value Binding in ##Platform_Name## MultiSelect Dropdown

Value binding in the MultiSelect allows you to associate data values with each list item. This facilitates managing and retrieving selected values efficiently. The MultiSelect component provides flexibility in binding both primitive data types and complex objects.

## Primitive Data Types

The MultiSelect provides flexible binding capabilities for primitive data types like strings and numbers. You can bind local primitive data arrays, fetch and bind data from remote sources, or apply custom data binding to suit specific requirements. Bind the value of the primitive data to the [`value`](../api/multi-select#value) property of the MultiSelect.

Primitive data types include:

* String
* Number
* Boolean
* Null

The following sample shows an example of preselecting values for a primitive data type.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/primitive/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/primitive/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/primitive" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/primitive/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/primitive/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/primitive" %}
{% endif %}

## Object Data Types

In the MultiSelect, object binding allows you to bind to a dataset of objects. When [`allowObjectBinding`](../api/multi-select#allowobjectbinding) is enabled, the value of the control will be an object of the same type as the selected item. This feature seamlessly binds arrays of objects, whether sourced locally, retrieved from remote endpoints, or customized to suit specific application needs.

The following sample shows an example of preselecting values for an object data type.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/objectvalue/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/objectvalue/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/objectvalue" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/objectvalue/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/objectvalue/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/objectvalue" %}
{% endif %}

> Since the `value` property supports object data types, it is necessary to provide the appropriate type wherever the `value` property is utilized.