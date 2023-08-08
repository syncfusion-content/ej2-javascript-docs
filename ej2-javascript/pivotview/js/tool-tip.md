---
layout: post
title: Tool tip in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Tool tip in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Tool tip 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip in ##Platform_Name## Pivotview control

The tooltip can be enabled or disabled by setting the [`showTooltip`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#showtooltip) property to **true**. By default, tooltip is enabled in the pivot table.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs264/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs264/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs264" %}

## Tooltip Template

User can design their own tooltip by setting the property [`tooltipTemplate`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#tooltiptemplate) with own HTML elements. The property accepts both HTML string and ID attribute. The following place holders are available to display its dynamic values inside the HTML elements.

`${rowHeaders}` – Row headers of the selected value cell.

`${columnHeaders}`  – Column headers of the selected value cell.

`${rowFields}` – Row fields of the selected value cell.

`${columnFields}` – Column fields of the selected value cell.

`${valueField}` – Field name of the selected value cell.

`${aggregateType}` – Aggregate type of the selected value cell.

`${value}` - Formatted value of the selected value cell.

The tooltip customization is common for both pivot table and pivot chart or it can be done individually as well. To customize the pivot table tooltip, the above procedure needs to be followed. To customize the pivot chart tooltip alone use `template` property of tooltip under [`chartSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/chartSettings/).

In the below sample, the pivot table and pivot chart shows customized tooltip layouts.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/tooltip-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/tooltip-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/tooltip-template-cs1" %}