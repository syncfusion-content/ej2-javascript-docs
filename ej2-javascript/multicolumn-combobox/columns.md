---
layout: post
title: Columns in ##Platform_Name## MultiColumn Combobox control | Syncfusion
description: Checkout and learn about columns with ##Platform_Name## MultiColumn Combobox control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Columns
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Columns in ##Platform_Name## MultiColumn ComboBox control

The [columns](../api/multicolumn-combobox#columns) property allow you to define the data fields to be displayed in the MultiColumn ComboBox.

You can customize the column by using [ColumnModel](../api/multicolumn-combobox/columnModel/), which provides options such as `field`, `header`, `width`, `format`, `template` and more.

* [field](../api/multicolumn-combobox/columnModel/#field) - Specifies the fields to be displayed in each column, mapped from the data source to the multicolumn combobox.

* [header](../api/multicolumn-combobox/columnModel/#header) - Specifes the data to be displayed in the column header.

* [width](../api/multicolumn-combobox/columnModel/#width) - Specifes the column width.

In the following example, the column is customized with `field`, `header` and `width` properties.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multicolumn-combobox/column-field/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/column-field/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/column-field" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multicolumn-combobox/column-field/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/column-field/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/column-field" %}
{% endif %}

## Setting text align

You can use the [textAlign](../api/multicolumn-combobox/columnModel/#textalign) property to define the text alignment of the column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multicolumn-combobox/column-textalign/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/column-textalign/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/column-textalign" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multicolumn-combobox/column-textalign/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/column-textalign/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/column-textalign" %}
{% endif %}

## Setting template

You can use the [template](../api/multicolumn-combobox/columnModel/#template) property to customize the each cell of the column. It accepts either a template string or an HTML element.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multicolumn-combobox/column-template/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/column-template/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/column-template" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multicolumn-combobox/column-template/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/column-template/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/column-template" %}
{% endif %}

## Setting display as checkBox

You can use [displayAsCheckBox](../api/multicolumn-combobox/columnModel/#displayascheckbox) property to display the column value as checkbox instead of a boolean value. By default, the value is `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multicolumn-combobox/column-checkbox/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/column-checkbox/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/column-checkbox" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multicolumn-combobox/column-checkbox/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/column-checkbox/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/column-checkbox" %}
{% endif %}

## Setting custom attributes

You can use the [customAttributes](../api/multicolumn-combobox/columnModel/#customattributes) property to customize the CSS styles and attributes of each column's content cells.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multicolumn-combobox/custom-attribute/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/custom-attribute/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/custom-attribute" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multicolumn-combobox/custom-attribute/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/custom-attribute/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/custom-attribute" %}
{% endif %}