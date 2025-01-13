---
layout: post
title: Templates in ##Platform_Name## Dropdown Tree Control | Syncfusion
description: Learn here all about Templates in Syncfusion ##Platform_Name## Dropdown Tree control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Templates 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Templates in ##Platform_Name## Dropdown Tree Control

The Dropdown Tree control provides support to customize each list item, header, and footer elements. It uses the Essential JS 2 [Template engine](../common/template-engine) to compile and render the elements properly.

## Item template

The content of each list item within the Dropdown Tree control can be customized using the [itemTemplate](../api/drop-down-tree#itemtemplate) property.

In the following sample, Dropdown Tree list items are customized with employee information such as **name** and **job** using the **itemTemplate** property.

The template expression should be provided inside the ${...} interpolation syntax.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdowntree/item-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/item-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/item-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdowntree/item-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/item-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdowntree/item-template-cs1" %}
{% endif %}

## Header template

The header element is statically shown at the top of the popup list items within the Dropdown Tree control. A custom element can be placed as a header element using the [headerTemplate](../api/drop-down-tree/#headertemplate) property.

In the following sample, the header is customized using a custom element.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdowntree/header-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/header-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/header-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdowntree/header-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/header-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdowntree/header-template-cs1" %}
{% endif %}

## Footer template

The Dropdown Tree control has options to display a footer element at the bottom of the list items in the popup list. A custom element can be placed as a footer element using the [footerTemplate](../api/drop-down-tree/#footertemplate) property.

In the following sample, the footer element displays the total number of employees present in the Dropdown Tree control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdowntree/footer-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/footer-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/footer-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdowntree/footer-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/footer-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/footer-template-cs1" %}
{% endif %}

## No Records template

The Dropdown Tree control can display custom designs in the popup list content using the [noRecordsTemplate](../api/drop-down-tree/#norecordstemplate) property when no matches are found during a search and datasource is empty.

In the following sample, the popup list content displays a notification of no data available.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdowntree/norecords-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/norecords-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/norecords-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdowntree/norecords-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/norecords-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/norecords-template-cs1" %}
{% endif %}

## Action failure template

The Dropdown Tree control provides an option to custom design the popup list content using the [actionFailureTemplate](../api/drop-down-tree/#actionfailuretemplate) property when the data fetch request fails at the remote server.

In the following sample, when the data fetch request fails, the Dropdown Tree control displays a notification.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdowntree/actionfailure-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/actionfailure-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/actionfailure-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdowntree/actionfailure-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/actionfailure-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/actionfailure-template-cs1" %}
{% endif %}

## Custom template to show selected items in input

In the Dropdown Tree control, while selecting more than one item via checkbox or multi-selection support, all the selected items will be displayed in the input. Instead of displaying all the selected item text, a custom template can be displayed by setting the [mode](../api/drop-down-tree/#mode) property as ***Custom*** and using the [customTemplate](../api/drop-down-tree/#customTemplate) property.

When the **mode** property is set as **Custom**, the Dropdown Tree control displays the default template value **(${value.length} item(s) selected)** like **1 item(s) selected or 2 item(s) selected**. The default template can be customized using the **customTemplate** property.

In the following sample, the Dropdown Tree control is rendered with the default value of the **customTemplate** property like “**1 item(s) selected or 2 item(s) selected**”.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdowntree/custom-template-mode-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/custom-template-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/custom-template-mode-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdowntree/custom-template-mode-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/custom-template-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/custom-template-mode-cs1" %}
{% endif %}

In the following sample, the Dropdown Tree control is rendered with a custom value of the **customTemplate** property like **Selected items count: 2**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdowntree/custom-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/custom-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/custom-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdowntree/custom-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/custom-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/custom-template-cs1" %}
{% endif %}