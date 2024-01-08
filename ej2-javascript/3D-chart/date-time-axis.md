---
layout: post
title: Date Time axis in ##Platform_Name## 3D Chart control | Syncfusion
description: Learn here all about date time axis in Syncfusion ##Platform_Name## 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: 3D Chart 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Date time axis in ##Platform_Name## 3D Chart control

## DateTime axis

Date time axis uses date time scale and displays the date time values as axis labels in the specified format.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/date-time-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/date-time-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs1" %}
{% endif %}

>Note: To use datetime axis, we need to inject DateTime using `Chart3D.Inject(DateTime3D)` method and set the [`valueType`](../api/chart3d/axis3D/#valuetype) of axis to DateTime.

## DateTimeCategory axis

Date-time category axis is used to display the date-time values with non-linear intervals. For example, the business days alone have been depicted in a week here.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/date-time-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/date-time-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs2" %}
{% endif %}

>Note: To use dateTimeCategory axis, we need to inject DateTimeCategory using `Chart3D.Inject(DateTimeCategory3D)` method and set the [`valueType`](../api/chart3d/axis3D/#valuetype) of axis to DateTimeCategory.

### Range

Range of an axis will be calculated automatically based on the provided data, you can also customize the range of the axis using [`minimum`](../api/chart3d/axis3D/#minimum), [`maximum`](../api/chart3d/axis3D/#maximum) and [`interval`](../api/chart3d/axis3D/#interval) property
of the axis.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/date-time-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/date-time-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs3" %}
{% endif %}

### Interval customization

Date time intervals can be customized by using the [`interval`](../api/chart3d/axis3D/#interval) and [`intervalType`](../api/chart3d/axis3D/#intervaltype) properties of the axis. For example, when you set interval as 2 and intervalType as years, it considers 2 years as interval. Datetime axis supports following interval types,

* Auto
* Years
* Months
* Days
* Hours
* Minutes
* Seconds

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/date-time-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/date-time-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs4" %}
{% endif %}

**Applying padding to the range**

Padding can be applied to the minimum and maximum extremes of the range by using the [`rangePadding`](../api/chart3d/axis3D/#rangepadding) property. Date time axis supports the following types of padding,

* None
* Round
* Additional

**Datetime - None**

When the [`rangePadding`](../api/chart3d/axis3D/#rangepadding) is set to `None`, minimum and maximum of an axis is based on the data.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/date-time-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/date-time-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs5" %}
{% endif %}

**Datetime - Round**

When the [`rangePadding`](../api/chart3d/axis3D/#rangepadding) is set to `Round`, minimum and maximum will be rounded to the nearest possible value, which is divisible by interval. For example, when the minimum is 15th Jan, interval is 1 and the interval type is ‘month’, then the axis minimum will be Jan 1st.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/date-time-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/date-time-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs6" %}
{% endif %}

**Datetime - Additional**

When the [`rangePadding`](../api/chart3d/axis3D/#rangepadding) is set to `Additional`, interval of an axis will be padded to the minimum and maximum of the axis.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/date-time-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/date-time-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs7" %}
{% endif %}

## Label Format

The date can be formatted and parsed to all globalize format using [`labelFormat`](../api/chart3d/axis3D/#labelformat) property in an axis.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/date-time-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/date-time-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs8" %}
{% endif %}

The following table describes the result of applying some common date time formats to the `labelFormat` property

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format Property Value</b></td>
<td><b>Result </b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>EEEE</td>
<td>Monday</td>
<td>The Date is displayed in day format.</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>yMd</td>
<td>04/10/2000</td>
<td>The Date is displayed in month/date/year format.</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td> MMM </td>
<td>Apr</td>
<td>The Shorthand month for the date is displayed.</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hm</td>
<td>12:00 AM</td>
<td>Time of the date value is displayed as label.</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hms</td>
<td>12:00:00 AM</td>
<td>The Label is displayed in hours:minutes:seconds format.</td>
</tr>
</table>

## Custom Label Format

Axis also supports custom label format using placeholder like {value}°C, in which the value represent the axis label e.g 20°C.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/date-time-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/date-time-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/date-time-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/date-time-cs9" %}
{% endif %}