---
layout: post
title: Bubble in ##Platform_Name## Maps control | Syncfusion
description: Learn here all about Bubble in Syncfusion ##Platform_Name## Maps control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Bubble 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Bubble in the ##Platform_Name## Maps component

Bubbles in the Maps component provide a visual representation of data values across geographical regions. They appear as circular or square shapes scattered over map areas, with their size proportional to the underlying data values. To enable bubbles, set the [`visible`](../api/maps/bubbleSettingsModel#visible) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel) to **true**. Then, bind the data source to the [`dataSource`](../api/maps/bubbleSettingsModel#datasource) property and specify the field containing numerical data using the [`valuePath`](../api/maps/bubbleSettingsModel#valuepath) property.

Maps using **Maps.Inject(Bubble)** method.

```ts
export let world_map = // paste the World map from WorldMap.json GeoJSON file.
```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs5" %}
{% endif %}

## Bubble shapes

The following types of shapes are available to render the bubbles in Maps.

* Circle
* Square

By default, bubbles render as **Circle**. To display square-shaped bubbles, set the [`bubbleType`](../api/maps/bubbleSettingsModel#bubbletype) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel) to **Square**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs6" %}
{% endif %}

## Customization

The [`bubbleSettings`](../api/maps/bubbleSettingsModel) provides the following properties to customize the appearance of bubbles in the Maps component:

* [`border`](../api/maps/bubbleSettingsModel#border) – To customize the color, width and opacity of the border of the bubbles in Maps.
* [`fill`](../api/maps/bubbleSettingsModel#fill) – To apply the color for bubbles in Maps.
* [`opacity`](../api/maps/bubbleSettingsModel#opacity) – To apply opacity to the bubbles in Maps.
* [`animationDelay`](../api/maps/bubbleSettingsModel#animationdelay) - To change the time delay in the transition for bubbles.
* [`animationDuration`](../api/maps/bubbleSettingsModel#animationduration) - To change the time duration of animation for bubbles.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs7" %}
{% endif %}

## Setting colors to the bubbles from the data source

The color for each bubble in the Maps can be set using the [`colorValuePath`](../api/maps/bubbleSettingsModel#colorvaluepath) property of [`bubbleSettings`](../api/maps/bubbleSettingsModel). The value for the [`colorValuePath`](../api/maps/bubbleSettingsModel#colorvaluepath) property is the field name from the data source of the [`bubbleSettings`](../api/maps/bubbleSettingsModel) which contains the color values.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs8" %}
{% endif %}

## Setting the range of the bubble size

The size of the bubbles is calculated from the values got from the [`valuePath`](../api/maps/bubbleSettingsModel#valuepath) property. The range for the radius of the bubbles can be modified using [`minRadius`](../api/maps/bubbleSettingsModel#minradius) and [`maxRadius`](../api/maps/bubbleSettingsModel#maxradius) properties.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs9" %}
{% endif %}

## Multiple bubble groups

Multiple bubble groups can be added to the Maps component by defining an array of bubble configuration objects in the [`bubbleSettings`](../api/maps/bubbleSettingsModel) property. Each bubble group can be customized independently. The following example demonstrates gender-wise population ratio using two different bubble groups.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs10" %}
{% endif %}

## Enable tooltip for bubble

To enable tooltips for bubbles, set the [`visible`](../api/maps/tooltipSettingsModel#visible) property of [`tooltipSettings`](../api/maps/tooltipSettingsModel) to **true**. The tooltip content is specified using the [`valuePath`](../api/maps/tooltipSettingsModel#valuepath) property, which should be set to the field name from the data source that contains the tooltip values. Additionally, custom HTML content can be displayed in the tooltip using the [`template`](../api/maps/tooltipSettingsModel#template) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs11" %}
{% endif %}