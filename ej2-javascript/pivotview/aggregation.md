---
layout: post
title: Aggregation in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Aggregation in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Aggregation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Aggregation in ##Platform_Name## Pivotview control

End user can perform calculations over a group of values (exclusively for value fields bound in value axis) using the aggregation option. By default, values are added (summed) together. The other aggregation types are explained below.

> The fields with data type such as number support all aggregation types mentioned below except for **"CalculatedField"**. The fields with data type such as string, date, datetime, boolean, etc., support **"Count"** and **"DistinctCount"** aggregation types alone.

| Operator | Description |
|------|-------------|
| Sum| Displays the pivot table values with sum.|
| Product| Displays the pivot table values with product.|
| Count| Displays the pivot table values with count.|
| DistinctCount| Displays the pivot table values with distinct count.|
| Min| Displays the pivot table with minimum value.|
| Max| Displays the pivot table with maximum value.|
| Avg| Displays the pivot table values with average.|
| Index| Displays the pivot table values with index.|
| PopulationStDev| Displays the pivot table values with standard deviation of population.|
| SampleStDev| Displays the pivot table values with sample standard deviation.|
| PopulationVar| Displays the pivot table values with variance of population.|
| SampleVar| Displays the pivot table values with sample variance.|
| RunningTotals| Displays the pivot table values with running totals.|
| DifferenceFrom| Displays the pivot table values with difference from the value of the base item in the base field.|
| PercentageOfDifferenceFrom| Displays the pivot table values with percentage difference from the value of the base item in the base field.|
| PercentageOfGrandTotal| Displays the pivot table values with percentage of grand total of all values.|
| PercentageOfColumnTotal| Displays the pivot table values in each column with percentage of total values for the column.|
| PercentageOfRowTotal| Displays the pivot table values in each row with percentage of total values for the row.|
| PercentageOfParentTotal| Displays the pivot table values with percentage of total of all values based on selected field.|
| PercentageOfParentColumnTotal| Displays the pivot table values with percentage of its parent total in each column.|
| PercentageOfParentRowTotal| Displays the pivot table values with percentage of its parent total in each row.|
| CalculatedField| Displays the pivot table with calculated field values. It allows user to create a new calculated field alone.|

## Assigning aggregation type for value fields through API

For each value field, the aggregation type can be set using the property `type` for each value fields through code-behind. Meanwhile, aggregation types like `DifferenceFrom` and `PercentageOfDifferenceFrom` can check for specific field of specific item using `baseField` and `baseItem` properties. Likewise, `PercentageOfParentTotal` type can for specific field using `baseField` property. For instance, the aggregation type `DifferenceFrom` would intake the specified field and its corresponding member as input and its value is compared across other members in the same field and also across different fields to formulate an appropriate output value.

It can be configured using `type` option for each value fields through code-behind. The settings required for summarize the value fields at initial rendering are:

* `type`: It allows to set the aggregate type of the field.
* `baseField`: It allows to set the base field to aggregate the values.
* `baseItem`: It allows to set the base item to aggregate the values.

> By default, the aggregation will be considered as `Sum` to the value fields which had number type and for the value fields which had non-number type such as string, date, datetime, boolean, etc., the aggregation type will be considered as `Count`. **DifferenceFrom** and **PercentageOfDifferenceFrom** can check for specific field of the specific item using `baseField` and `baseItem`. We can consider the **PercentageOfParentTotal** for specific field using `baseField`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs1" %}
{% endif %}

## Modifying aggregation type for value fields at runtime

Aggregation types can be changed easily through UI at runtime. The value fields bound to grouping bar and field list appears with a dropdown icon which helps to select an appropriate aggregation type for the respective value field. On selection, the values in the pivot table will be changed dynamically.

<!-- markdownlint-disable MD012 -->
![output](images/aggregation_fl_menu.png "List of pre-defined aggregation types to be changed via Field List")
<br/>
<br/>
![output](images/aggregation_gb_menu.png "List of pre-defined aggregation types to be changed via Grouping Bar")

## Hiding aggregation type from button text

By default, in value axis each field would be displayed by its name and aggregation type together. To hide aggregation type and display field name alone, set the property [`showAggregationOnValueField`](https://help.syncfusion.com/cr/cref_files/blazor/Syncfusion.EJ2.Blazor~Syncfusion.EJ2.Blazor.PivotView.DataSourceSettingsModel%601~ShowAggregationOnValueField.html)  in [`dataSourceSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.EJ2.Blazor~Syncfusion.EJ2.Blazor.PivotView.DataSourceSettingsModel%601.html) to **false**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs2" %}
{% endif %}

## Hiding aggregation type icon from UI

By default, the icon to set aggregation type is enabled in the grouping bar. To disable this icon, set the property [`showValueTypeIcon`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/groupingBarSettingsModel/#showvaluetypeicon) in [`groupingBarSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/groupingBarSettingsModel/#showvaluetypeicon) to **false**.

> Icon to change the aggregation type can be hidden only in Grouping Bar but not in Field List at the moment.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs3" %}
{% endif %}