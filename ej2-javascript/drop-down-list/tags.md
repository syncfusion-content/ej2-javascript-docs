---
layout: post
title: Tags in ##Platform_Name## Dropdown List | Syncfusion
description: Initialize the Syncfusion ##Platform_Name## Dropdown List on select, input, or other HTML elements while keeping UI and features consistent.
platform: ej2-javascript
control: Tags 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Tags in ##Platform_Name## Dropdown List

The DropDownList can be initialized on three different tags, as described below. Although it is initialized using different tags, the UI appearance and built-in features behave in the same way.

## Select element

When the DropDownList is initialized on a `<select>` element, the list items can be assigned through the `<option>` tags of the HTML `<select>` element.

* The nested items are wrapped and grouped based on the `<optgroup>` tag that is available
  within the `<select>` element by default.
* You can preselect an option by setting the `selected` attribute on an `<option>` tag.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/select-element-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/select-element-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/select-element-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/select-element-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/select-element-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/select-element-cs2" %}
{% endif %}

## UL element

The DropDownList can be initialized through a `<ul>` element that contains a collection of `<li>` elements. The `<li>` items act as popup list items of the DropDownList. The inner text of the `<li>` element is considered both as the text and value fields.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/ul-element-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/ul-element-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/ul-element-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/ul-element-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/ul-element-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/ul-element-cs1" %}
{% endif %}

## Input element

The DropDownList can also be rendered through an `<input>` element with an array of either simple or complex data set via the [`dataSource`](../api/drop-down-list#datasource) property. It can retrieve data from local data sources as well as remote data services.

Detailed information about data binding with an example is available at: [Data Binding to DropDownList](./data-binding)