---
layout: post
title: Data labels in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Data labels in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data labels 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data labels in ##Platform_Name## Chart control

Data label can be added to a chart series by enabling the [`visible`](../api/chart/dataLabelSettingsModel/#visible-boolean) option in the dataLabel. By default, the labels will arrange smartly without overlapping.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/data-markers-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/data-markers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-markers-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/data-markers-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/data-markers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-markers-cs1" %}
{% endif %}

>Note: To use data label feature, we need to inject `DataLabel` using `Chart.Inject(DataLabel)` method.

## Position

Using [`position`](../api/chart/dataLabelSettingsModel/#position-string) property, you can place the label either on `Top`, `Middle`,`Bottom` or `Outer` (outer is applicable for column and bar type series).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/data-markers-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/data-markers-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-markers-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/data-markers-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/data-markers-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-markers-cs2" %}
{% endif %}

>Note: The position `Outer` is applicable for column and bar type series.

## Data Label Template

Label content can be formatted by using the template option. Inside the template, you can add the placeholder text `${point.x}` and `${point.y}` to display corresponding data points x & y value. Using [`template`](../api/chart/dataLabelSettingsModel/#template-string) property, you can set data label template in chart.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/data-markers-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/data-markers-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-markers-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/data-markers-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/data-markers-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-markers-cs3" %}
{% endif %}

## Text Mapping

Text from the data source can be mapped using `name` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/data-markers-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/data-markers-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-markers-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/data-markers-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/data-markers-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-markers-cs4" %}
{% endif %}

## Format

Data label for the chart can be formatted using [`format`](../api/chart/dataLabelSettings/#format) property. You can use the global formatting options, such as 'n', 'p', and 'c'.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/data-markers-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/data-markers-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-markers-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/data-markers-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/data-markers-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-markers-cs5" %}
{% endif %}

<table>
  <tr>
    <th>Value</th>
    <th>Format</th>
    <th>Resultant Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1000</td>
    <td>n1</td>
    <td>1000.0</td>
    <td>The number is rounded to 1 decimal place.</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>n2</td>
    <td>1000.00</td>
    <td>The number is rounded to 2 decimal places.</td>
  </tr>
   <tr>
    <td>1000</td>
    <td>n3</td>
    <td>1000.000</td>
    <td>The number is rounded to 3 decimal place.</td>
  </tr>
  <tr>
    <td>0.01</td>
    <td>p1</td>
    <td>1.0%</td>
    <td>The number is converted to percentage with 1 decimal place.</td>
  </tr>
  <tr>
    <td>0.01</td>
    <td>p2</td>
    <td>1.00%</td>
    <td>The number is converted to percentage with 2 decimal place.</td>
  </tr>
   <tr>
    <td>0.01</td>
    <td>p3</td>
    <td>1.000%</td>
    <td>The number is converted to percentage with 3 decimal place.</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>c1</td>
    <td>$1000.0</td>
    <td>The currency symbol is appended to number and number is rounded to 1 decimal place.</td>
  </tr>
   <tr>
    <td>1000</td>
    <td>c2</td>
    <td>$1000.00</td>
    <td>The currency symbol is appended to number and number is rounded to 2 decimal place.</td>
  </tr>
</table>

## Margin

`margin` for data label can be applied to using `left`, `right`, `bottom` and `top` properties.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/data-markers-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/data-markers-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-markers-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/data-markers-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/data-markers-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-markers-cs6" %}
{% endif %}

## Customization

`stroke` and `border` of data label can be customized using `fill` and `border` properties. Rounded corners can be customized using `rx` and `ry` properties.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/data-markers-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/data-markers-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-markers-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/data-markers-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/data-markers-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-markers-cs7" %}
{% endif %}

>Note: `rx` and `ry` properties requires `border` values not to be null.

## Customizing Specific Point

You can also customize the specific marker and label using [`pointRender`](../api/chart/#pointrender-emittypeipointrendereventargs) and [`textRender`](../api/chart/#textrender-emittypeitextrendereventargs)  event. `pointRender` event allows you to change the shape, color and border for a point, whereas the `textRender` event allows you to change the text for the point.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/data-markers-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/data-markers-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/data-markers-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/data-markers-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/data-markers-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-markers-cs8" %}
{% endif %}

## Show percentage based on each series points

You can calculate the percentage value based on the sum for each series using the `seriesRender` and `textRender` events in the chart. In `seriesRender` calculate the sum of each series y values and In `textRender` calculate percentage value based on the sum value and modify the text.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/legend-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/legend-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/legend-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/legend-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/legend-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/legend-cs1" %}
{% endif %}

## See Also

* [Show total stacking values in data label](../chart/how-to/stacking-total/)
* [Prevent the data label when the data value is 0](../chart/how-to/prevent-data-label/#prevent-the-data-label-when-the-data-value-is-0)
