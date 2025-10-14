---
layout: post
title: ##Platform_Name## Pivot Table: Conditional Formatting | Syncfusion
description: Apply conditional formatting to rows or columns in the Syncfusion EJ2 ##Platform_Name## Pivot Table. Customize cell styles based on values to highlight key data.
platform: ej2-javascript
control: Apply conditional formatting for specific row or column 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Conditional Formatting for Specific Rows or Columns

You can apply conditional formatting for specific row or column using `label` option in the pivot table. It can be configured using the `conditionalFormatSettings` option through code behind, during initial rendering. The required settings are:

* `label`: Specifies the header name to apply conditions for row or column.
* `condition`: Specifies the operator type such as equals, greater than, less than, etc.
* `value1`: Specifies the start value.
* `value2`: Specifies the end value.
* `style`: Specifies the style for the cell.

To use the conditional formatting feature, You need to inject the `ConditionalFormatting` module in pivot table.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs71/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs71/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs71" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs71/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs71/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs71" %}
{% endif %}
