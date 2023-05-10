---
layout: post
title: Zooming in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Zooming in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Zooming 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Zooming in ##Platform_Name## Chart control

## Enable Zooming

Chart can be zoomed in three ways.

* Selection - By setting [`enableSelectionZooming`](../api/chart/zoomSettingsModel/) property to true in `zoomSettings`, you can zoom the chart by using the rubber band selection.
* Mousewheel - By setting [`enableMouseWheelZooming`](../api/chart/zoomSettingsModel/) property to true in `zoomSettings`, you can zoomin and zoomout the chart by scrolling the mouse wheel.
* Pinch - By setting  [`enablePinchZooming`](../api/chart/zoomSettingsModel/) property to true in `zoomSettings`, you can zoom the chart through pinch gesture in touch enabled devices.

>Pinch zooming is supported only in browsers that support multi-touch gestures. Currently IE11, Chrome and Opera browsers support multi-touch in desktop devices.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/user-interaction-cs39/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs39/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs39" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/user-interaction-cs39/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs39/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs39" %}
{% endif %}

After zooming the chart, a zooming toolbar will appear with `zoom`,`zoomin`, `zoomout`, `pan` and `reset` buttons. Selecting the Pan option will allow to pan the chart and selecting the Reset option will reset the zoomed chart.

## Modes

The [`mode`](../api/chart/zoomSettingsModel/) property in zoomSettings specifies whether the chart is allowed to scale along the horizontal axis or vertical axis. The default value of the mode is XY (both axis).

There are three types of mode.

* X- Allows us to zoom the chart horizontally.
* Y - Allows us to zoom the chart vertically.
* XY – Allows us to zoom the chart both vertically and horizontally.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/user-interaction-cs40/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs40/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs40" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/user-interaction-cs40/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs40/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs40" %}
{% endif %}

## Toolbar

By default, zoomin, zoomout, pan and reset buttons will be displayed for zoomed chart. You can customize to show the desired options in the toolbar using the [`toolbarItems`](../api/chart/zoomSettingsModel/#toolbaritems) property. Also using the [`showToolbar`](../api/chart/zoomSettingsModel/#showtoolbar) property, you can show toolkit for zooming and panning the chart during initial rendering itself.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/user-interaction-cs41/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs41/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs41" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/user-interaction-cs41/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs41/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs41" %}
{% endif %}

## Enable pan

Using [`enablePan`](../api/chart/zoomSettingsModel/) property you can able to pan the zoomed chart without help of toolbar items.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/user-interaction-cs42/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs42/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs42" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/user-interaction-cs42/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs42/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs42" %}
{% endif %}

## Enable Scrollbar

Using `enableScrollbar` property, you can able to add scrollbar for zoomed chart. Using this scrollbar, you can pan or zoom the chart.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/user-interaction-cs43/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs43/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs43" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/user-interaction-cs43/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs43/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs43" %}
{% endif %}

## Auto interval on zooming

By using [`enableAutoIntervalOnZooming`](../api/chart/axis/#enableautointervalonzooming) property, the axis interval will get calculated automatically with respect to the zoomed range.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/user-interaction-cs44/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs44/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs44" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/user-interaction-cs44/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs44/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs44" %}
{% endif %}

>Note: To use zooming feature, we need to inject `Zoom` module `Chart.Inject(Zoom)` method.
