---
layout: post
title: Straight connector in ##Platform_Name## Diagram control | Syncfusion®
description: Learn here all about Connectors in Syncfusion® ##Platform_Name## Diagram control of Syncfusion Essential® JS 2 and more.
platform: ej2-javascript
control: Straight 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
## Straight

To create a straight line, specify the [`type`](../api/diagram/segments) of the segment as **straight** and add a straight segment to [`segments`](../api/diagram/connector#segments) collection and need to specify [`type`](../api/diagram/connector#type-Segments) for the connector. The following code example illustrates how to create a default straight segment.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs7" %}

The [`point`](../api/diagram/straightSegment#point-PointModel) property of straight segment allows you to define the end point of it. The following code example illustrates how to define the end point of a straight segment.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs8" %}

### Straight segment editing

End point of each straight segment is represented by a thumb that enables to edit the segment.
Any number of new segments can be inserted into a straight line by clicking when Shift and Ctrl keys are pressed (Ctrl+Shift+Click).
Straight segments can be removed by clicking the segment end point when Ctrl and Shift keys are pressed (Ctrl+Shift+Click). You can also add/remove segments by using the [`editSegment`](../api/diagram/#editsegment) method of diagram.

The following example shows how to add segments at runtime for the straight connector.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-straightSegEdit/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-straightSegEdit/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-straightSegEdit" %}

![Straight Segment editing GIF](images/StraightSegEdit.gif)