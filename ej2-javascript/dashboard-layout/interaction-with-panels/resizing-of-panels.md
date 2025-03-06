---
layout: post
title: Resizing of panels in ##Platform_Name## Dashboard Layout control | Syncfusion
description: Learn here all about Resizing of panels in Syncfusion ##Platform_Name## Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Resizing of panels
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Resizing of panels in ##Platform_Name## Dashboard Layout control

The Dashboard Layout control includes panel resizing functionality, which can be enabled or disabled using the [`allowResizing`](../../api/dashboard-layout/#allowresizing) property. This functionality allows panels to be resized dynamically through UI interactions using resizing handlers, which control panel resizing in various directions.

Initially, panels can only be resized in the south-east direction. However, panels can also be resized in the east, west, north, south, and south-west directions by defining the required directions with the [`resizableHandles`](../../api/dashboard-layout/#resizablehandles) property.

On resizing a panel in Dashboard Layout the following events will be triggered,
  * [`resizeStart`](../../api/dashboard-layout/#resizestart) - Triggers when panel resize starts
  * [`resize`](../../api/dashboard-layout/#resize) - Triggers when panel is being resized
  * [`resizeStop`](../../api/dashboard-layout/#resizestop) - Triggers when panel resize stops

The following sample demonstrates how to enable and disable the resizing of panels in the Dashboard Layout control in different directions.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/resizing-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/resizing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/resizing-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/resizing-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/resizing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/resizing-cs1" %}
{% endif %}

## Resizing panels programatically

The Dashboard Layout panels can also be resized programmatically by using the [`resizePanel`](../../api/dashboard-layout/#resizepanel) method. The method is invoked as follows:

  ```js
   resizePanel(id, sizeX, sizeY)
  ```

Where,
  * [`id`](../../api/dashboard-layout/panelModel/#id) - ID of the panel which needs to be resized.
  * [`sizeX`](../../api/dashboard-layout/panelModel/#sizex) - New panel width in cells count for resizing the panel.
  * [`sizeY`](../../api/dashboard-layout/panelModel/#sizey) - New panel height in cells count for resizing the panel.

The following sample demonstrates resizing panels programatically in the Dashboard Layout's [`created`](../../api/dashboard-layout/#created) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/resize-panel-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/resize-panel-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/resize-panel-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/resize-panel-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/resize-panel-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/resize-panel-cs1" %}
{% endif %}

> You can refer to our [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.