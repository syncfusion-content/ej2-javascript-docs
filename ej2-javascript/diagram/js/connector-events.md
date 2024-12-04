---
layout: post
title: Connector Events in ##Platform_Name## Diagram control | Syncfusion®
description: Learn here all about Connectors in Syncfusion® ##Platform_Name## Diagram control of Syncfusion Essential® JS 2 and more.
platform: ej2-javascript
control: Connector Events
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

## Events

Diagram provides some events support for connectors that triggers when interacting with the connector.

## Click event

Triggers when the connector is clicked. The following code example explains how to get the [`click`](../api/diagram/iClickEventArgs/) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/nodes-clickEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-clickEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-clickEvent" %}

## Selection change event

When selecting/unselecting the connector, the selection change event will be triggered.
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

 You can prevent selection by setting the `cancel` property of [`SelectionChangeEventArgs`](../api/diagram/iSelectionChangeEventArgs/) to true, as shown in the code snippet below.

```ts
  selectionChange: function (args) {
    if (args.state == 'Changing') {
      //Prevents selection
      args.cancel = true;
    }
  },

```

## Position change event

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

 You can prevent dragging by setting the `cancel` property of [`DraggingEventArgs`](../api/diagram/iDraggingEventArgs/) to true, as shown in the code snippet below.

 ```ts
   positionChange: function (args) {
    if (args.state == 'Progress') {
      //Prevents dragging
      args.cancel = true;
    }
  },

```

## Connection change event

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

## Source Point change event

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

 You can prevent source point dragging by setting the `cancel` property of [`EndChangeEventArgs`](../api/diagram/iEndChangeEventArgs/) to true, as shown in the code snippet below.

```javascript

 sourcePointChange: function (args) {
    if (args.state === 'Progress') {
      //Prevents source point dragging
      args.cancel = true;
      //Customize
    }
  },

```

## Target Point change event

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

 You can prevent target point dragging by setting the `cancel` property of [`EndChangeEventArgs`](../api/diagram/iEndChangeEventArgs/) to true, as shown in the code snippet below.

```javascript

targetPointChange: function (args) {
    if (args.state === 'Progress') {
      //Prevents target point dragging
      args.cancel = true;
      //Customize
    }
  },

```

## Segment Collection Change event

Triggers when the connector's segments added or removed at runtime.
The following code example explains how to get the [`segment collection change`](../api/diagram/isegmentcollectionchangeeventargs/) event in the diagram. 

Use `CTRL+Shift+Click` on connector to add/remove segments.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/connectors-SegmentEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-SegmentEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-SegmentEvent" %}

## Segment Change event

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

 You can prevent segment editing by setting the `cancel` property of [`SegmentChangeEventArgs`](../api/diagram/iEndChangeEventArgs/) to true, as shown in the code snippet below.

``` javascript
 segmentChange: function (args) {
    if (args.state === 'Start') {
      //Prevents the segment editing
      args.cancel = true;
    }
  },

```

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

You can prevent changes to the diagram collection, such as adding or deleting connectors, by setting the `cancel` property of [`CollectionChangeEventArgs`](../api/diagram/iCollectionChangeEventArgs/) to true, as shown in the code snippet below.

``` javascript
collectionChange: function (args) {
    if (args.state === 'Changing') {
      //Prevents collection change - Prevents Adding or deleting connectors
      args.cancel = true;
    }
  },

````
