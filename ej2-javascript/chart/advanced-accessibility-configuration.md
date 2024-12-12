---
layout: post
title: Accessibility customization in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Accessibility customization in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Accessibility customization
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility customization in ##Platform_Name## Chart control

The Syncfusion® ##Platform_Name## Chart control is structured to visualize data in a graphical manner. It provides robust customization options for accessibility, allowing you to enhance the user experience for those with disabilities. The main attributes of the ##Platform_Name## Chart control's accessibility customization are briefly explained in this section.

The chart control has a number of characteristics that enable accessibility features to be customized, including:

* `accessibilityDescription` - Provides a text description for the chart, improving support for screen readers.
* `accessibilityRole` - Specifies the role of the chart, helping screen readers to identify the element appropriately.
* `focusable` - Allows the chart to receive focus, making it accessible via keyboard navigation.
* `focusBorderColor` - Sets the color of the focus border, enhancing visibility when the chart is focused.
* `focusBorderMargin` - Defines the margin around the focus border.
* `focusBorderWidth` - Specifies the width of the focus border.
* `tabIndex` - Specifies the tab order of the chart element, enabling efficient keyboard navigation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs480/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs480/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs480" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs480/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs480/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs480" %}
{% endif %}

## Series

The [`series`](../../api/chart/#series) supports the customization of accessibility for data points, allowing key characteristics to be adjusted for enhanced accessibility, such as:

* `accessibilityDescription` - Provides a text description for the series root element, enhancing support for screen readers.
* `accessibilityDescriptionFormat` - Specifies a format for the accessibility description of each point in the series, allowing dynamic content. The format string can include the placeholders such as ${series.name}, ${point.x}, ${point.y}, ${point.high}, etc. For example, the format "${series.name} : ${point.x}" displays the series name and x-value of the point in the accessibility description. Data point's values like high, low, open, and close are applicable based on the series types.
* `accessibilityRole` - Specifies the role of the series, helping screen readers to identify the element appropriately.
* `focusable` - Allows the series to receive focus, making it accessible via keyboard navigation.
* `tabIndex` - Specifies the tab order of the series element, enabling efficient keyboard navigation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs481/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs481/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs481" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs481/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs481/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs481" %}
{% endif %}

## Title and subtitle

In the ##Platform_Name## chart control, the [`titleStyle`](../../api/chart/#titlestyle) and [`subTitleStyle`](../../api/chart/#subtitlestyle) attributes allow you to customize the accessibility of the chart's title and subtitle. The following `accessibility` properties in [`titleStyle`](../../api/chart/#titlestyle) and [`subTitleStyle`](../../api/chart/#subtitlestyle) can be customized for accessibility:

* `accessibilityDescription` - Provides a text description for the chart title and subtitle, enhancing support for screen readers.
* `accessibilityRole` - Specifies the role of the chart title and subtitle, helping screen readers to identify the element appropriately.
* `focusable` - Enables or disables the keyboard navigation focus for the title and subtitle.
* `tabIndex` - Specifies the tab order of the title and subtitle element, enabling efficient keyboard navigation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs482/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs482/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs482" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs482/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs482/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs482" %}
{% endif %}

## Annotations

The [`annotations`](../../api/chart/#annotations) property allows you to add annotations to the chart in specific regions. The following characteristics allow for the customization of the annotations accessibility:

* `accessibilityDescription` - Provides a text description for the annotation, enhancing support for screen readers.
* `accessibilityRole` - Specifies the role of the annotation, helping screen readers to identify the element appropriately.
* `focusable` - Specifies whether annotations are focusable via keyboard navigation.
* `tabIndex` - Specifies the tab order of the annotation element, enabling efficient keyboard navigation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs483/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs483/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs483" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs483/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs483/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs483" %}
{% endif %}

## Trendline

Customizable properties within the [`trendlines`](../../api/chart/#trendlinemodule) allow you to control the accessibility of the trendlines on the chart, including:

* `accessibilityDescription` - Provides a text description for the trendline, enhancing support for screen readers.
* `accessibilityRole` - Specifies the role of the trendline, helping screen readers to identify the element appropriately.
* `focusable` - Specifies whether trendlines are focusable via keyboard navigation.
* `tabIndex` - Specifies the tab order of the trendline element, enabling efficient keyboard navigation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs484/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs484/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs484" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs484/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs484/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs484" %}
{% endif %}

## Zooming

The [`zoomSettings`](../../api/chart/#zoomsettings) attributes allow you to adjust the chart's zooming capability. The following `accessibility` properties in [`zoomSettings`](../../api/chart/#zoomsettings) offer the parameters for accessibility customization:

* `accessibilityDescription` - Provides a text description for the zoom toolkit items, enhancing support for screen readers.
* `accessibilityRole` - Specifies the role of the zoom toolkit items, helping screen readers to identify the element appropriately.
* `focusable` - Specifies whether zoom toolkit items are focusable via keyboard navigation.
* `tabIndex` - Specifies the tab order of the zooming element, enabling efficient keyboard navigation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs485/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs485/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs485" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs485/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs485/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs485" %}
{% endif %}

## Technical indicators

Customizable properties within the [`indicators`](../../api/chart/#indicators) allow you to control the accessibility of the technical indicators on the chart, including:

* `accessibilityDescription` - Provides a text description for the indicators, enhancing support for screen readers.
* `accessibilityRole` - Specifies the role of the indicators, helping screen readers to identify the element appropriately.
* `focusable` - Specifies whether indicators are focusable via keyboard navigation.
* `tabIndex` - Specifies the tab order of the indicators element, enabling efficient keyboard navigation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs486/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs486/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs486" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs486/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs486/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs486" %}
{% endif %}

## Legend

The [`legendSettings`](../../api/chart/#legendsettings) provide information about the series shown in the chart. The following `accessibility` properties in [`legendSettings`](../../api/chart/#legendsettings) can be used to alter the accessibility of the chart's legend:

* `accessibilityDescription` - Provides a text description for the legend root element, enhancing support for screen readers.
* `accessibilityRole` - Specifies the role of the legend items to screen readers, providing appropriate context.
* `focusable` - Specifies whether legend items are focusable via keyboard navigation.
* `tabIndex` - Specifies the tab order of the legend element, enabling efficient keyboard navigation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs487/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs487/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs487" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs487/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs487/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs487" %}
{% endif %}
