---
layout: post
title: Legend in table in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Legend in table in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Legend in table 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Legend in table in ##Platform_Name## Chart control

The `annotation` property is used to add legend in table and the `multiLevelLabels` property is used to customize the axis label in table format.

To add legend in table with x-axis labels, follow the given steps:

**Step 1**:

Initialize the custom elements using the `annotation` property.

Create table and rectangle shapes in the html page and set this to the `content` property of annotation.

By setting `coordinateUnits` value to `pixel` in annotation object, you can place the legend in chart based on pixel values.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/legend-table-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/legend-table-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/legend-table-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/legend-table-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/legend-table-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/legend-table-cs1" %}
{% endif %}