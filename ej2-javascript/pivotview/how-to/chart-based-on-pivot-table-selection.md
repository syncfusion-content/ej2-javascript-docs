---
layout: post
title: Chart based on pivot table selection in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Chart based on pivot table selection in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chart based on pivot table selection 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Chart based on pivot table selection in ##Platform_Name## Pivotview control

The cell selection support is enabled using the [`allowSelection`](https://ej2.syncfusion.com/documentation/api/pivotview/gridSettings/#allowselection) property and its type and mode are configured using the [`selectionSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotSelectionSettings/) property. The [`cellSelected`](https://ej2.syncfusion.com/documentation/api/pivotview/#cellselected) event gets fired on every selection operation performed in the pivot table. This event returns the selected cell informations, like row header name, column header name, measure name, and value. Based on this information, the [`chart`](https://ej2.syncfusion.com/documentation/chart/getting-started/) control will be plotted.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/chart-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/chart-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/chart-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/chart-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/chart-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/chart-cs1" %}
{% endif %}