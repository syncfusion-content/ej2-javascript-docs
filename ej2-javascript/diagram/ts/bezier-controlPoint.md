---
layout: post
title: Bezier control points interaction in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Connectors in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Bezier control points interaction
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

### How to interact with the bezier segments efficiently

While interacting with multiple bezier segments, maintain their control points at the same distance and angle by using the bezierSettings.smoothness property of the connector class.

| BezierSmoothness value | Description | Output |
|-------- | -------- | -------- |
| SymmetricDistance| Both control points of adjacent segments will be at the same distance when any one of them is editing. | ![Symmetric distance](../../../images/Symmetric-distance.gif) |
| SymmetricAngle | Both control points of adjacent segments will be at the same angle when any one of them is editing. | ![Symmetric Angle](../../../images/symmetric-Angle.gif) |
| Default | Both control points of adjacent segments will be at the same angle and same distance when any one of them is editing. | ![Default](../../../images/DefaultSymmetric.gif) |
| None | Segment’s control points are interacted independently from each other. | ![None](../../../images/SymmetricNone.gif) |

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs17" %}

### How to show or hide the bezier segment’s control points

By using the [`controlPointsVisibility`](../api/diagram/controlPointsVisibility/) property of the Connector class, you can enable or disable the visibility of the bezier segment’s control points.

| ControlPointsVisibility value | Description | Output |
|-------- | -------- | -------- |
| None |It allows you to hide all control points of the bezier connector. | ![ControlPointsVisibility None](../../../images/Symmetric-distance.gif) |
| Source | It allows you to show control points of the source segment and hides all other control points in a bezier connector. | ![ControlPointsVisibility Source](../../../images/symmetric-Angle.gif) |
| Target | It allows you to show control points of the target segment and hides all other control points in a bezier connector. | ![ControlPointsVisibility Target](../../../images/DefaultSymmetric.gif) |
| Intermediate | It allows you to show control points of the intermediate segments and hides all other control points in a bezier connector.| ![ControlPointsVisibility Intermediate](../../../images/SymmetricNone.gif) |
| All | It allows you to show all the control points of the bezier connector, including the source, target, and intermediate segments’ control points. | ![ControlPointsVisibility All](../../../images/SymmetricNone.gif) |
