---
layout: post
title: Markers in ##Platform_Name## Maps component | Syncfusion
description: Learn here all about Markers in Syncfusion ##Platform_Name## Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Markers 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Markers in ##Platform_Name## Maps component

Markers are visual indicators used to pinpoint specific locations on the Maps. They can display desired symbols to highlight points of interest or important geographic positions. Markers can be enabled by setting the [`visible`](../api/maps/markerSettingsModel/visible) property of the [`markerSettings`](../api/maps/markerSettingsModel) to **true**.

## Adding marker

To add the markers, the [`dataSource`](../api/maps/markerSettingsModel/datasource) property of the [`markerSettings`](../api/maps/markerSettingsModel) has a list of objects that contains the data for markers. Using this property, any number of markers can be added to the layers of the Maps. By default, it displays the markers based on the specified latitude and longitude in the given data source. Each data source object contains the following list of properties.

* latitude - The latitude value that determines the vertical (Y) position of the marker.
* longitude - The longitude value that determines the horizontal (X) position of the marker.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs124/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs124/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs124" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs124/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs124/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs124" %}
{% endif %}

## Adding marker template

The Marker can be added as a template in the Maps component. The [`template`](../api/maps/markerSettingsModel/template) property of the [`markerSettings`](../api/maps/markerSettingsModel) is used to set the HTML string or id of an element as a template.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs125/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs125/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs125" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs125/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs125/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs125" %}
{% endif %}

## Customization

The following properties are available in [`markerSettings`](../api/maps/markerSettingsModel) to customize the Markers of the Maps component.

* [`border`](../api/maps/markerSettingsModel/border) - To customize the color, width and opacity of the border for the markers in Maps.
* [`fill`](../api/maps/markerSettingsModel/fill) - To apply the color for markers in Maps.
* [`dashArray`](../api/maps/markerSettingsModel/dasharray) - To define the pattern of dashes and gaps that is applied to the outline of the markers in Maps.
* [`height`](../api/maps/markerSettingsModel/height) - To customize the height of the markers in Maps.
* [`width`](../api/maps/markerSettingsModel/width) - To customize the width of the markers in Maps.
* [`offset`](../api/maps/markerSettingsModel/offset) - To customize the position of the markers in Maps.
* [`opacity`](../api/maps/markerSettingsModel/opacity) - To customize the transparency of the markers in Maps.
* [`animationDelay`](../api/maps/markerSettingsModel/animationdelay) - To change the time delay in the transition for markers.
* [`animationDuration`](../api/maps/markerSettingsModel/animationduration) - To change the time duration of animation for markers.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs126/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs126/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs126" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs126/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs126/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs126" %}
{% endif %}

## Marker shapes

The Maps component supports the following marker shapes. To set the shape of the marker, the [`shape`](../api/maps/markerSettingsModel/shape) property in [`markerSettings`](../api/maps/markerSettingsModel) is used.

* Balloon
* Circle
* Cross
* Diamond
* Image
* Rectangle
* Star
* Triangle
* VerticalLine
* HorizontalLine

### Rendering marker shape as image

To render a marker as an image in Maps, set the [`shape`](../api/maps/markerSettingsModel/shape) property of [`markerSettings`](../api/maps/markerSettingsModel) as **Image** and specify the path of the image to [`imageUrl`](../api/maps/markerSettingsModel/imageurl) property. There is another way to render a marker as an image using the [`imageUrlValuePath`](../api/maps/markerSettingsModel/imageurlvaluepath) property of the [`markerSettings`](../api/maps/markerSettingsModel). Bind the field name that contains the path of the image in the data source to the [`imageUrlValuePath`](../api/maps/markerSettingsModel/imageurlvaluepath) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs127/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs127/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs127" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs127/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs127/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs127" %}
{% endif %}

## Multiple marker groups

Multiple groups of markers can be added to the Maps by providing an array of marker configurations to the [`markerSettings`](../api/maps/markerSettingsModel) property. Each marker group can have its own customization options defined within the [`markerSettings`](../api/maps/markerSettingsModel).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs128/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs128/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs128" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs128/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs128/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs128" %}
{% endif %}

## Customize marker shapes from data source

### Bind different colors and shapes to the marker from data source

Using the [`shapeValuePath`](../api/maps/markerSettingsModel/shapevaluepath) and [`colorValuePath`](../api/maps/markerSettingsModel/colorvaluepath) properties, the color and shape of the marker can be applied from the given data source. Bind the data source to the [`dataSource`](../api/maps/markerSettingsModel/datasource) property of the [`markerSettings`](../api/maps/markerSettingsModel) and set the field names that contains the shape and color values in the data source to the [`shapeValuePath`](../api/maps/markerSettingsModel/shapevaluepath) and [`colorValuePath`](../api/maps/markerSettingsModel/colorvaluepath) properties.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs129/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs129/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs129" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs129/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs129/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs129" %}
{% endif %}

### Setting value path from the data source

The latitude and longitude values are used to determine the location of each marker in the Maps. The [`latitudeValuePath`](../api/maps/markerSettingsModel/latitudevaluepath) and [`longitudeValuePath`](../api/maps/markerSettingsModel/longitudevaluepath) properties are used to specify the value path that presents in the data source of the marker. In the following example, the field name from the data source is set to the [`latitudeValuePath`](../api/maps/markerSettingsModel/latitudevaluepath) and [`longitudeValuePath`](../api/maps/markerSettingsModel/longitudevaluepath) properties.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs130/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs130/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs130" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs130/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs130/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs130" %}
{% endif %}

## Marker zooming

The Maps can be initially scaled to fit all markers within the visible area. This can be achieved by setting the [`shouldZoomInitially`](../api/maps/zoomSettingsModel/shouldzoominitially) property in [`zoomSettings`](../api/maps/zoomSettingsModel) to **true**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs131/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs131/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs131" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs131/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs131/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs131" %}
{% endif %}

## Marker clustering

The Maps component provides support to cluster markers when they overlap each other. The number displayed on a cluster indicates how many overlapping markers it contains. When zooming in on a cluster location, the cluster count decreases as individual markers become visible. When zooming out, overlapping markers are grouped again, increasing the cluster count.

To enable clustering for markers, set the [`allowClustering`](../api/maps/markerClusterSettingsModel/allowclustering) property of [`markerClusterSettings`](../api/maps/markerClusterSettingsModel) to **true**. Customization of clustering can be done using the [`markerClusterSettings`](../api/maps/markerClusterSettingsModel).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs132/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs132/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs132" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs132/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs132/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs132" %}
{% endif %}

## Customization of marker cluster

The following properties are available to customize the marker clustering in the Maps component.

* [`border`](../api/maps/markerClusterSettingsModel/border) - To customize the color, width and opacity of the border of cluster in Maps.
* [`connectorLineSettings`](../api/maps/connectorLineSettingsModel) - To customize the connector line in cluster separating the markers.
* [`dashArray`](../api/maps/markerClusterSettingsModel/dasharray) - To customize the dash array for the marker cluster in Maps.
* [`fill`](../api/maps/markerClusterSettingsModel/fill) - Applies the color of the cluster in Maps.
* [`height`](../api/maps/markerClusterSettingsModel/height) - To customize the height of the marker cluster in Maps.
* [`imageUrl`](../api/maps/markerClusterSettingsModel/imageurl) - To customize the URL path for the marker cluster when the cluster shape is set as image in Maps.
* [`labelStyle`](../api/maps/markerClusterSettingsModel/labelstyle) - To customize the text in marker cluster.
* [`offset`](../api/maps/markerClusterSettingsModel/offset) - To customize the offset position for the marker cluster in Maps.
* [`opacity`](../api/maps/markerClusterSettingsModel/opacity) - To customize the opacity of the marker cluster.
* [`shape`](../api/maps/markerClusterSettingsModel/shape) - To customize the shape for the cluster of markers.
* [`width`](../api/maps/markerClusterSettingsModel/width) - To customize the width of the marker cluster in Maps.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs133/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs133/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs133" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs133/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs133/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs133" %}
{% endif %}

## Expanding the marker cluster

The cluster is formed by grouping an identical and non-identical marker from the surrounding area. By clicking on the cluster and setting the [`allowClusterExpand`](../api/maps/markerClusterSettingsModel/allowclusterexpand) property in [`markerClusterSettings`](../api/maps/markerClusterSettingsModel) as **true** to expand the identical markers. If zooming is performed in any of the locations of the cluster, the number on the cluster will decrease and the overlapping marker will be split into an individual marker on the map. When performing zoom out, it will increase the marker count and then cluster it again.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs134/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs134/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs134" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs134/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs134/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs134" %}
{% endif %}

## Tooltip for markers

Tooltips are used to display additional information about a marker on mouse hover or touch end events. This can be enabled for markers by setting the [`visible`](../api/maps/tooltipSettingsModel/visible) property of [`tooltipSettings`](../api/maps/tooltipSettingsModel) to **true**. The [`valuePath`](../api/maps/tooltipSettingsModel/valuepath) property in the [`tooltipSettings`](../api/maps/tooltipSettingsModel) specifies the field name from the data source whose value will be displayed as the tooltip text.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maps/default-map-cs135/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs135/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/default-map-cs135" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maps/default-map-cs135/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maps/default-map-cs135/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs135" %}
{% endif %}

## See Also

* [Add different types of markers](../maps/how-to/marker-type)