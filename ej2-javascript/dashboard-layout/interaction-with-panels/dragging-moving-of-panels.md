---
layout: post
title: Dragging of panels in ##Platform_Name## Dashboard layout control | Syncfusion
description: Learn here all about Dragging of panels in Syncfusion ##Platform_Name## Dashboard layout control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Dragging of panels
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Dragging of panels in ##Platform_Name## Dashboard layout control

The Dashboard Layout control is equipped with dragging functionality to drag and reorder the panels within the layout. While dragging a panel, a holder will be highlighted below the panel indicating the panel placement on panel drop. This helps the user decide whether to place the panel in the current position or revert to the previous position without disturbing the layout.

If one or more panels collide while dragging, the colliding panels will be pushed towards left, right, top, or bottom directions where an adaptive space for the collided panel is available. The position changes of these collided panels will be updated dynamically during the dragging of a panel so the user can conclude whether to place the panel in the current position or not.

While dragging a panel in the Dashboard Layout, the following dragging events will be triggered:
  * [dragStart](../../api/dashboard-layout/#dragstart) - Triggers when panel drag starts.
  * [drag](../../api/dashboard-layout/#drag) - Triggers when panel is being dragged.
  * [dragStop](../../api/dashboard-layout/#dragstop) - Triggers when panel drag stops.

The following sample demonstrates dragging and pushing of panels. For example, while dragging panel 0 over panel 1, these panels get collided and push panel 1 towards a feasible direction so that panel 0 gets placed in panel 1's position.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/sizing-of-cells-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/sizing-of-cells-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/sizing-of-cells-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/sizing-of-cells-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/sizing-of-cells-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/sizing-of-cells-cs1" %}
{% endif %}

## Customizing the dragging handler

Initially, the complete panel acts as the handler for dragging the panel such that the dragging action occurs when clicking anywhere over a panel. However, this dragging handler for the panels can be customized using the [`draggableHandle`](../../api/dashboard-layout/#draggablehandle) property to restrict the dragging action within a particular element in the panel.

The following sample demonstrates customizing the dragging handler of the panels where the dragging action of a panel occurs only with the header of the panel.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/drag-handler-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/drag-handler-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/drag-handler-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/drag-handler-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/drag-handler-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/drag-handler-cs1" %}
{% endif %}

## Disable dragging of panels

By default, the dragging of panels is enabled in the Dashboard Layout. It can also be disabled with the help of the [allowDragging](../../api/dashboard-layout/#allowdragging) API. Setting [allowDragging](../../api/dashboard-layout/#allowdragging) to false disables the dragging functionality in the Dashboard Layout.

The following sample demonstrates the Dashboard Layout with dragging support disabled.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/disable-dragging-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/disable-dragging-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/disable-dragging-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/disable-dragging-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/disable-dragging-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/disable-dragging-cs1" %}
{% endif %}

> You can refer to our [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/material/dashboard-layout/default.html) to learn how to present and manipulate data.