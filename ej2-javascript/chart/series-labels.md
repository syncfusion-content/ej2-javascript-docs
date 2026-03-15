---
layout: post
title: Series label in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Series label in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Series label 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Series label in ##Platform_Name## Chart control

The series label displays the name of each series inline, positioned near the end of the series path or the last visible data point. This helps identify each series without referring to the legend.

## Overview

Enable series labels using the [`labelSettings`](../api/chart/seriesModel#labelsettings) property within the series configuration. Set the [`visible`](../api/chart/seriesLabelSettingsModel#visible) property to **true** to display the label.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/series-label/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/series-label/js/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series-label/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series-label" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/series-label/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/series-label/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series-label" %}
{% endif %}

> Note: To use the series label feature, inject the `SeriesLabel` module into the `services`.

## Customization

Customize the appearance of series labels using the following properties:

* [`text`](../api/chart/seriesLabelSettingsModel#text) – Custom text for the label. Defaults to the series name.
* [`font`](../api/chart/seriesLabelSettingsModel#font) – Font customization options including color, size, family, and weight.
* [`background`](../api/chart/seriesLabelSettingsModel#background) – Background color of the label.
* [`border`](../api/chart/seriesLabelSettingsModel#border) – Border width and color.
* [`opacity`](../api/chart/seriesLabelSettingsModel#opacity) – Label transparency (default: 1).
* [`showOverlapText`](../api/chart/seriesLabelSettingsModel#showOverlapText) – When **false**, overlapping labels are hidden.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/series-label-customization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/series-label-customization/js/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series-label-customization/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series-label-customization" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/series-label-customization/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/series-label-customization/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series-label-customization" %}
{% endif %}

Note: To use the series label feature, inject the `SeriesLabel` module into the `services`.

## See also

* [Data labels](./data-labels.md)
* [Legend](./legend.md)
