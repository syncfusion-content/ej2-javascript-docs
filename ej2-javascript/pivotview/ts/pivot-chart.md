---
layout: post
title: Pivot chart in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Pivot chart in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Pivot chart 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Pivot chart in ##Platform_Name## Pivotview control

In pivot table component, pivot chart would act as an additional visualization component with its basic and important characteristic like drill down and drill up, 15+ chart types, series customization, axis customization, legend customization, export, print and tooltip. Its main purpose is to show the pivot data in graphical format.

If user prefers, the pivot chart component can also be displayed individually with pivot values and can change the report dynamically with the help of field list and grouping bar. Using the `displayOption` property in pivot table, user can set the visibility of grid and chart in pivot table component. It holds below properties,

* `view`: Specifies the pivot table component to display grid alone or chart alone or both.
* `primary`: Specifies the pivot table to display either grid or chart as primary component during initial loading. It is applicable only when setting the property `view` to **Both**.

To use pivot chart, user need to inject the `PivotChart` module in pivot table. The below sample displays the pivot chart component based on the pivot report bound on it.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs426/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs426/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs426" %}

## Data binding

End user can bind both local and remote data binding options available in the component to feed the data. The [`dataSource`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettingsModel/#datasource) property can be assigned either with an instance of `DataManager` or  JavaScript object array collection. For more information [`refer`](./data-binding) here.

## Chart Types

Supports 21 different types of charts as follows,

* Line
* Column
* Area
* Bar
* StepArea
* StackingLine
* StackingColumn
* StackingArea
* StackingBar
* StepLine
* Pareto
* Bubble
* Scatter
* Spline
* SplineArea
* StackingLine100
* StackingColumn100
* StackingBar100
* StackingArea100
* Polar
* Radar

**Line** is the default pivot chart type. User can change the pivot chart type by using the property [`type`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotSeriesModel/#type) in [`chartSeries`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotSeriesModel/).

In the below code sample, the pivot chart type is set as **Bar**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs427/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs427/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs427" %}

## Accumulation Charts

Supports 4 different types of accumulation charts as follows,

* Pie
* Doughnut
* Funnel
* Pyramid

As like other chart types it can be changed using the property [`type`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotSeriesModel/#type) in [`chartSeries`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotSeriesModel/).

In the below code sample, the **Pie** chart is rendered, and the other accumulation charts can be switched using the drop-down list.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/accumulation-chart-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/accumulation-chart-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/accumulation-chart-cs10" %}

### Drill Down/Up

In the accumulation charts, drill down and drill up operations can be performed using the built-in context menu option. It will be shown while clicking on the chart series. The context menu has the following options:
* **Expand** - It is to drill down the corresponding series until the last level.
* **Collapse** - It is to drill up the corresponding series until the first level.
* **Exit** - It is to close the context menu.

> The drill operation in accumulation charts can be performed only for row headers.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/accumulation-chart-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/accumulation-chart-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/accumulation-chart-cs11" %}

![output](images/expand_collapse.png)

### Column Headers and Delimiters

Unlike other chart types, the accumulation charts consider the values of a single column from the pivot table to be drawn. Preferably the first column of the pivot table is considered by default. But it can be changed by defining the column headers using the `columnHeader` property in [`chartSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/#chartsettings). If the column has more than one header, then need to mention all the headers separated by the delimiter **-**, for example,**Germany-Road Bikes**. Using the property `columnDelimiter` in [`chartSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/#chartsettings), one can set the desired delimiter to separate the column headers.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/accumulation-chart-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/accumulation-chart-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/accumulation-chart-cs12" %}

### Label Customization

The data labels are visible by default showing header name. Its visibility can be modified using the `visible` boolean property in `dataLabel`. With regard to the label arrangement, the **Smart Labels** options help to arrange labels efficiently without overlapping. It can be disabled by setting the `enableSmartLabels` property in [`chartSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/#chartsettings) as **false**.
The `position` property in `dataLabel` allows to specify the position of the data label. The available options are,
* `Outside`: Positions the label outside the point. It is the default option.
* `Inside`: Positions the label inside the point.

In the following code sample, the data labels are placed inside.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/accumulation-chart-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/accumulation-chart-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/accumulation-chart-cs13" %}

The **Connector Line** will be visible when the data label is placed outside the chart. It can be customized using the `connectorStyle` property in `dataLabel` for its color, length, width etc. In the following code sample, the connector line is customized.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/accumulation-chart-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/accumulation-chart-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/accumulation-chart-cs14" %}

### Pie and Doughnut Customization

User can draw pie and doughnut charts within the specified range using the `startAngle` and `endAngle` properties in [`chartSeries`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotSeriesModel/). The default value of the `startAngle` property is **0**, and the `endAngle` property is **360**. By customizing these properties, user can draw semi pie and semi doughnut charts.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/accumulation-chart-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/accumulation-chart-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/accumulation-chart-cs15" %}

Users can get doughnut chart from pie chart and vice-versa using the `innerRadius` property in [`chartSeries`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotSeriesModel/). If the property is greater than **0** percent, the doughnut chart will appear from the pie chart.
> It takes the value only in percentage.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/accumulation-chart-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/accumulation-chart-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/accumulation-chart-cs16" %}

### Exploding Series Points

Exploding can be enabled by setting the `explode` property in [`chartSeries`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotSeriesModel/) to **true**. The series points will be exploded either on mouse click or touch.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/accumulation-chart-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/accumulation-chart-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/accumulation-chart-cs17" %}

## Field List

User can enable the field list by setting the property [`showFieldList`](https://ej2.syncfusion.com/documentation/api/pivotview#showfieldlist) in pivot table as **true**. By using this, user can customize the report dynamically and view the result in pivot chart. For more information regarding the field list, refer the [field list](./field-list) topic.

In the following sample, the `Popup` mode of field list is enabled in the pivot chart integration.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs428/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs428/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs428" %}

## Grouping Bar

User can enable the grouping bar by setting the property [`showGroupingBar`](https://ej2.syncfusion.com/documentation/api/pivotview/#showgroupingbar) in pivot table to **true**. The grouping bar in pivot chart shows a dropdown list in value axis instead of buttons. The dropdown list holds list of value fields bounded in the [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettingsModel/) and it can be switched to draw the pivot chart with the selected value field. This has been defined as the default behavior in the pivot chart component. For more information regarding the grouping bar, refer the [grouping bar](./grouping-bar) topic.

> For multiple axis support, buttons will be placed in value axis instead of dropdown list.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs429/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs429/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs429" %}

For accumulation charts alone, a drop-down list will be placed in the column axis instead of the buttons. The drop-down list shows the column headers available in the pivot table. Users can dynamically switch column headers with the help of the drop-down list, and the accumulation chart will be updated accordingly.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/accumulation-chart-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/accumulation-chart-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/accumulation-chart-cs18" %}

## Single Axis

By default, the pivot chart will be drawn with the value field (measure) which is set first in the report under value axis. But, user can change to specific value field using the property [`value`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/#value) in [`chartSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs430/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs430/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs430" %}

## Multiple Axis

User can draw the pivot chart with multiple value fields by setting the property [`enableMultipleAxis`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/#enablemultipleaxis) in [`chartSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/) to **true**. In the below code sample, the pivot chart will be drawn with both value fields "Sold" and "Amount" available in the [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettingsModel/).

> The multiple axis support is not applicable for the accumulation chart types like pie, doughnut, pyramid, and funnel.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs431/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs431/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs431" %}

If the user binds more value fields, the result will be multiple pivot charts, and each chart will shrink within the parent container height. To avoid this, set the [`enableScrollOnMultiAxis`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettings/#enablescrollonmultiaxis) property in [`chartSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettings/) to **true**. By doing so, each pivot chart will only shrink to a minimal "160px" - "180px" height showing a vertical scrollbar for a clear view.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs432/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs432/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs432" %}

Meanwhile, there is another way to display multiple values in a chart. In this approach, the series drawn from multiple values are grouped and displayed in a single chart. And, based on the values, multiple Y axis scales will be framed with different ranges. This can be achieved by setting the properties [`enableMultipleAxis`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/#enablemultipleaxis) as **true** and [`multipleAxisMode`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/#multipleaxismode) as `Single` in [`chartSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/chartSettingsModel/).

In the following code sample, the pivot chart can be seen as a single chart with multiple value fields such as **Sold** and **Amount** that are drawn as multiple Y axis.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs433/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs433/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs433" %}

Additionally, to display chart series for multiple values within a single y-axis, set the properties [`enableMultipleAxis`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/#enablemultipleaxis) to **true** and the [`multipleAxisMode`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/#multipleaxismode) to **Combined**, in the [`chartSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/).

> The y-axis range values will be formatted using the first value field on the value axis. For example, if the first value field is in currency format and the remaining value fields are in different number formats or no format, the y-axis range values will be displayed in the currency format of the first value field.

The pivot chart in the following code sample can be seen as a single chart with multiple value fields such as **Sold** and **Amount** drawn as a single y-axis.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs434/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs434/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs434" %}

### Show point color based on members

When multiple axes are enabled, you can display the same color for each member in the column axis by setting the [`showPointColorByMembers`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/#showpointcolorbymembers) property to **true** in the [`chartSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/). As a result, the end user can easily identify each member across different measures in the entire chart.

Furthermore, end user can see or hide specific members across different measures in the entire chart with a single click on the legend item.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs435/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs435/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs435" %}

## Series Customization

User can customize series of the pivot chart using [`chartSeries`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotSeriesModel/) in [`chartSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/). The changes handled in the property will be reflected commonly in all chart series.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs436/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs436/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs436" %}

You can also customize the pivot chart series individually using the [`chartSeriesCreated`](../api/pivotview/pivotViewModel/#chartseriescreated) event, which occurs after the pivot chart series has been created. You can customize each series individually by iterating them.

In the following sample, the even series are hidden in the pivot chart.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs437/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs437/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs437" %}

### Display chart series points in desired color palettes

By default, the pivot chart displays each data point in the chart series with a pre-defined color combination. And, depending on the number of data points drawn in each chart series, this color combination will change automatically. You can, however, design your own color scheme by using the [palettes](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/#palettes) property in the [chartSettings](https://ej2.syncfusion.com/documentation/api/pivotview/#chartsettings).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs502/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs502/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs502" %}

## Axis Customization

User can customize axis of the pivot chart using [`primaryXAxis`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotAxisModel/) and [`primaryYAxis`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotAxisModel/) properties in [`chartSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/).

> Axis customization is not applicable for the accumulation chart types like pie, doughnut, pyramid, and funnel.

In the following sample, title of y-axis and x-axis are customized.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs438/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs438/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs438" %}

One can also customize multi-level labels of primary x-axis by using the [`multiLevelLabelRender`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/#multilevellabelrender) event in the [`chartSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/), which fires on rendering each multi-level label in the pivot chart. It has the following parameters:

`axis` - It holds the information of the current axis.

`text` - It allows to change the text of the multi-level label.

`textStyle` - It allows to customize the text font.

`alignment` - It allows to set the text alignment.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs439/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs439/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs439" %}

## Legend Customization

User can customize legend using [`legendSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotChartSettingsLegendSettings/) in [`chartSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/). By default, legend will be visible and it can be hidden by setting the property [`visible`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotChartSettingsLegendSettings/#visible) in [`legendSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotChartSettingsLegendSettings/) to **false**.

The pivot chart support different types of legend shapes as follows,

* Circle
* Rectangle
* VerticalLine
* Pentagon
* InvertedTriangle
* SeriesType
* Triangle
* Diamond
* Cross
* HorizontalLine

Here **SeriesType** would act as the default shape and it can changed using the property [`legendShape`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotSeriesModel/#legendshape) in [`chartSeries`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotSeriesModel/).

Also user can set the position of the legend in pivot chart using the property [`position`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotChartSettingsLegendSettings/#position) in [`legendSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotChartSettingsLegendSettings/). The available options to set the legend position are as follows,

* Auto: Places the legend based on area type. This is the default.
* Top: Displays the legend at the top of the pivot chart.
* Left: Displays the legend at the left of the pivot chart.
* Bottom: Displays the legend at the bottom of the pivot chart.
* Right: Displays the legend at the right of the pivot chart.
* Custom: Displays the legend based on the given x and y values.

> By default, the legend is not visible for the accumulation chart types like pie, doughnut, pyramid, and funnel.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs440/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs440/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs440" %}

## User Interaction

### Marker and CrossHair

User can enable and customize the marker and crosshair using [`markerSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotChartSeriesMarkerSettings/) and [`crosshairSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotChartSettingsCrosshairSettings/) properties in [`chartSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettingsModel/) respectively.

Also user can enable and customize the crosshair tooltip for axes using [`crosshairTooltip`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotChartAxisCrosshairTooltip/) in primary X and Y axes

> Marker and crosshair is not applicable for the accumulation chart types like pie, doughnut, pyramid, and funnel.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs441/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs441/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs441" %}

### Zooming and Panning

User can customize zooming and panning option using the property [`zoomSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotZoomSettingsModel/) in [`chartSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettings/).

The pivot chart support four types of zooming which can be set as follows,

* [`EnablePinchZooming`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotZoomSettingsModel/#enablepinchzooming)
* [`EnableSelectionZooming`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotZoomSettingsModel/#enableselectionzooming)
* [`EnableDeferredZooming`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotZoomSettingsModel/#enabledeferredzooming)
* [`EnableMouseWheelZooming`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotZoomSettingsModel/#enablemousewheelzooming)

and three modes of zooming direction that specifies whether to zoom vertically or horizontally or in both ways which are,

* x: Pivot chart can be zoomed horizontally.
* y: Pivot chart can be zoomed  vertically.
* x,y: Pivot chart can be zoomed both vertically and horizontally.

This can be set using the property [`mode`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotZoomSettingsModel/#mode) in [`zoomSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotZoomSettingsModel/). By default, if the pivot chart is zoomed, a toolbar would display with the options - Zoom, ZoomIn, ZoomOut, Pan, Reset. User can also customize its option using the property [`toolbarItems`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotZoomSettingsModel/#toolbaritems) in [`zoomSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotZoomSettingsModel/).

> Zooming and panning is not applicable for the accumulation chart types like pie, doughnut, pyramid, and funnel.

In the following sample, all the four types of zooming are enabled with toolbar options.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs442/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs442/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs442" %}

### Tooltip

By default, tooltip for the pivot chart is enabled. User can customize it by using the property [`tooltip`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotTooltipSettingsModel/) in [`chartSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/chartSettings/).

> The tooltip can be disabled by setting the property [`enable`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotTooltipSettingsModel/) in [`tooltip`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotTooltipSettingsModel/) as **false**.

In the following sample, the default appearance of tooltip can be modified.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs443/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs443/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs443" %}

## Export

The pivot chart can be exported using the `chartExport` method which holds parameters like export type, file name, PDF orientation, width, and height in the same order. The mandatory parameters for this method are export type and file name whereas other parameters are optional.

The following are the four export types:

* PNG
* JPEG
* SVG
* PDF

In the following code sample, exporting can be done using an external button named as "Export".

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/chart-export-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/chart-export-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/chart-export-cs4" %}

## Print

The rendered pivot chart can be printed directly from the browser by calling `printChart` method.

In the following code sample, printing can be done using an external button named as "Print".

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/chart-print-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/chart-print-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/chart-print-cs3" %}