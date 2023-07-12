---
layout: post
title: Print in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Print in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Print 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Print

The rendered pivot table can be printed directly from the browser by invoking the [`print`](https://ej2.syncfusion.com/javascript/documentation/api/grid/#print) method from the grid's instance. The below sample code illustrates the print option being invoked by an external button click.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs495/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs495/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs495" %}

Similarly, to print the pivot chart, use the [print](https://ej2.syncfusion.com/javascript/documentation/api/chart/#print) method from the chart's instance. The below sample code illustrates the print option being invoked by an external button click.

> To use pivot chart, you need to inject the `PivotChart` module in the pivot table.

> To display the pivot chart, set the [displayOption](https://helpej2.syncfusion.com/javascript/documentation/api/pivotview/displayOptionModel/#view) property to either **Chart** or **Both**. 

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs496/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs496/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs496" %}