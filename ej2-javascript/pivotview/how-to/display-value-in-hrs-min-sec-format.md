---
layout: post
title: Display string value to pivot table values in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about how to display string value to pivot table values in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Display string value to pivot table values 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Display string value to pivot table values in ##Platform_Name## Pivotview control

End user can display string value to the pivot table's value cell by using the [`aggregateCellInfo`](https://ej2.syncfusion.com/documentation/api/pivotview/#aggregatecellinfo) event.

In the following example, each cell value of the **Sold** field's actual value has been assigned from its combination data sets obtained from the [`args.cellSets`](https://helpej2.syncfusion.com/documentation/api/pivotview/aggregateEventArgs/#cellsets) in the [`aggregateCellInfo`](https://ej2.syncfusion.com/documentation/api/pivotview/#aggregatecellinfo) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs501/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs501/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs501" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs501/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs501/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs501" %}
{% endif %}