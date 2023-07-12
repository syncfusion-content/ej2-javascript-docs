---
layout: post
title: Export table and chart into the same document using toolbar in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Export table and chart into the same document using toolbar in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Export table and chart into the same document using toolbar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Export table and chart into the same document using toolbar

Even if the [displayOption.view](https://helpej2.syncfusion.com/documentation/api/pivotview/displayOption/#view) property is set to **Both** in the pivot table, you can only export either the table or the chart to the PDF document based on the current value set in the [displayOption.primary](https://helpej2.syncfusion.com/documentation/api/pivotview/displayOption/#primary) property. But, to export both the table and the chart to the same PDF document, use the [pdfExport](https://ej2.syncfusion.com/documentation/api/pivotview/#pdfexport) method during the [actionBegin](https://ej2.syncfusion.com/documentation/api/pivotview/#actionbegin) event invoke.

In the following example, the built-in export action can be restricted by setting the [args.cancel](https://helpej2.syncfusion.com/documentation/api/pivotview/pivotActionBeginEventArgs/#cancel) option to **true** in the [actionBegin](https://ej2.syncfusion.com/documentation/api/pivotview/#actionbegin) event, and both the table and the chart can be exported by calling the [pdfExport](https://ej2.syncfusion.com/documentation/api/pivotview/#pdfexport) method and setting the `exportBothTableAndChart` argument to **true**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs493/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs493/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs493" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs493/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs493/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs493" %}
{% endif %}