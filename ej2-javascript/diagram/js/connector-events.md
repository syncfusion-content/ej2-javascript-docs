---
layout: post
title: Connector Events in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Connectors in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Connector Events
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

## Events

Diagram provides some events support for connectors that triggers when interacting with the connector.

## Selection change event.

When selecting/unselecting the connector, the selection chang event will be triggered.
The following code example explains how to get the [`selection change`](../api/diagram/iselectionchangeeventargs/) event in the diagram.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/connectors-SelectEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-SelectEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-SelectEvent" %}

## Position change event.

Triggers when the connector's position is changed in diagram.
The following code example explains how to get the [`position change`](../api/diagram/iDraggingEventArgs/) event in the diagram.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/connectors-PositionEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-PositionEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-PositionEvent" %}

## Connection change event.

Triggers when the connector’s source or target point is connected or disconnected from the source or target.
The following code example explains how to get the [`connection change`](../api/diagram/iConnectionChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/connectors-ConnectionEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-ConnectionEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-ConnectionEvent" %}

## Source Point change event.

Triggers when the connector's source point is changed.
The following code example explains how to get the [`source Point change`](../api/diagram/iendchangeeventargs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/connectors-SourcePointEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-SourcePointEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-SourcePointEvent" %}

## Target Point change event.

Triggers when the connector's target point is changed.
The following code example explains how to get the [`target Point change`](../api/diagram/iEndChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/connectors-TargetPointEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-TargetPointEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-TargetPointEvent" %}

## Segment Collection Change event.

Triggers when the connector's segments added or removed at runtime.
The following code example explains how to get the [`segment collection change`](../api/diagram/isegmentcollectionchangeeventargs/) event in the diagram.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/connectors-SegmentEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-SegmentEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-SegmentEvent" %}

## Segment Change event.

Triggers when the connector's segments were adjusted or edited.
The following code example explains how to get the [`segment change`](../api/diagram/isegmentchangeeventargs/) event in the diagram.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/connectors-SegmentEditEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-SegmentEditEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-SegmentEditEvent" %}

## Collection change event

Triggers when the connector is added or removed from diagram.
The following code example explains how to get the [`collection change`](../api/diagram/iCollectionChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/connectors-CollectionEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-CollectionEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-CollectionEvent" %}

## Get Connector defaults

Get Connector defaults helps to define default properties of the connector. It is triggered when the diagram is initialized. In this event, you can customize the connector properties.

The following code example explains how to customize the connector using [`getConnectorDefaults`](../api/diagram/#getconnectorobject).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/connectors-getConDef/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-getConDef/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-getConDef" %}
