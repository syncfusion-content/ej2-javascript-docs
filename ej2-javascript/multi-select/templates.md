---
layout: post
title: Templates in ##Platform_Name## MultiSelect Dropdown | Syncfusion
description: Customize ##Platform_Name## MultiSelect Dropdown list items, group headers, selected value, header, footer, and summary tag using template engine support.
platform: ej2-javascript
control: Templates 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Templates in ##Platform_Name## MultiSelect Dropdown

The MultiSelect has been provided with several options to customize each list item, group title, selected value, header, and footer elements. It uses the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [Template engine](../common/template-engine) to compile and render the elements properly.

## Item template

The content of each list item within the MultiSelect can be customized with the help of [itemTemplate](../api/multi-select#itemtemplate)
property.

In the following sample, each list item is split into two columns to display relevant data's.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/item-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/item-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/item-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/item-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/item-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/item-template-cs1" %}
{% endif %}

## Value template

The currently selected value that is displayed by default on the MultiSelect input element can be customized using the [valueTemplate](../api/multi-select#valuetemplate) property.

In the following sample, the selected value is displayed as a combined text of both `FirstName` and `City` in the MultiSelect input, which is separated by a hyphen.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/item-template-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/item-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/item-template-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/item-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/item-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/item-template-cs2" %}
{% endif %}

## Group template

The group header title under which appropriate sub-items are categorized can also be customize with the help of [groupTemplate](../api/multi-select#grouptemplate) property. This template is common for both inline and floating group header template.

In the following sample, employees are grouped according to their city.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/item-template-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/item-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/item-template-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/item-template-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/item-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/item-template-cs3" %}
{% endif %}

## Header template

The header element is shown statically at the top of the popup list items within the MultiSelect, and any custom element can be placed as a header element using the [headerTemplate](../api/multi-select#headertemplate) property.

In the following sample, the list items and its headers are designed and displayed as two columns similar to multiple columns of the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/header-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/header-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/header-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/header-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/header-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/header-template-cs1" %}
{% endif %}

## Footer template

The MultiSelect has options to show a footer element at the bottom of the list items in the popup list. Here, you can place any custom element as a footer element using the [footerTemplate](../api/multi-select#footertemplate) property.

In the following sample, footer element displays the total number of list items present in the MultiSelect.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/footer-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/footer-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/footer-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/footer-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/footer-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/footer-template-cs1" %}
{% endif %}

## No records template

The MultiSelect is provided with support to custom design the popup list content when no data is found and no matches found on search with the help of [noRecordsTemplate](../api/multi-select#norecordstemplate) property.

In the following sample, popup list content displays the notification of no data available.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/norecords-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/norecords-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/norecords-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/norecords-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/norecords-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/norecords-template-cs1" %}
{% endif %}

## Action failure template

There is also an option to custom design the popup list content when the data fetch request fails at the remote server. This can be achieved using the [actionFailureTemplate](../api/multi-select#actionfailuretemplate) property.

In the following sample, when the data fetch request fails, the MultiSelect displays the notification.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/norecords-template-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/norecords-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/norecords-template-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/norecords-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/norecords-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/norecords-template-cs2" %}
{% endif %}

## Summary Tag Template

The Summary Tag Template feature displays selected items as a formatted summary text in the input field instead of listing all selections individually. This is especially useful in CheckBox mode when working with large datasets and using the SelectAll option, as it significantly improves performance.

The [summaryTagCount](../api/multi-select#summarytagcount) property sets a threshold—when the number of selected items exceeds this threshold, the [summaryTagTemplate](../api/multi-select#summarytagtemplate) displays a custom formatted text instead of individual items.

### Template Placeholder Properties

The following properties are available for use in the summary template placeholders:

| Placeholder | Description |
|-------------|-------------|
| `${selectedCount}` | Total count of currently selected items |
| `${totalCount}` | Total number of items in the data source |

In the following sample, the Summary Tag Template displays the count of selected items when the threshold is exceeded.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/summary-tag-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/summary-tag-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/summary-tag-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/summary-tag-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/summary-tag-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/summary-tag-template-cs1" %}
{% endif %}

> **Limitation:** The Summary Tag Template feature only works in CheckBox mode because it has a built-in SelectAll option for bulk selection, which triggers the need for performance optimization. Other modes (Default, Box, Delimiter) don't support SelectAll and use different display formats, making template-based formatting unnecessary.

> **Note:** When you set a threshold value and preselected items exceed it, the summary template displays formatted text instead of individual items. If `summaryTagTemplate` and `summaryTagCount` are not provided, the Summary Tag Template feature is automatically enabled when records or preselected items exceed 1000, displaying a default summary format for better performance.

## See Also

* [How to bind the data](./data-binding)
* [How to group the data using header](./grouping)
* [How to customize the options in MultiSelect](./chip-customization)