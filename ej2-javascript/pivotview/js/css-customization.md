---
layout: post
title: Css customization in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Css customization in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Css customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Css customization in ##Platform_Name## Pivotview control

## Hiding Axis

The visibility of row, column, value and filter axis in Field List and Grouping Bar can be changed using custom CSS setting. To do so, please refer the code sample below:

```
#PivotTable .e-group-columns {
  display: none;
}
#PivotTable .e-group-filters {
  height: 71px !important;
}

#PivotTable_PivotFieldList_Wrapper .e-field-list-columns{
  display: none;
}
#PivotTable_PivotFieldList_Wrapper .e-field-list-values{
  margin-top: 0px;
  height: 338px;
}
```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/css-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/css-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/css-cs1" %}

## Text Alignment

The alignment of text inside row headers, column headers, value cells and summary cells can be changed using custom CSS setting. To do so, please refer the code sample below:

```

.e-pivotview .e-valuescontent {
  text-align: center !important;
}

```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/css-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/css-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/css-cs2" %}

## Customize header, value and summary cell style

The elements in pivot table like header cell, value cell and summary cell style can be customized using built-in CSS names. To do so, please refer the code sample below:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivottable-css-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivottable-css-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivottable-css-cs1" %}