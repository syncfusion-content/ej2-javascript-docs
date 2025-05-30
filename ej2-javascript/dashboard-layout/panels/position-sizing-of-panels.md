---
layout: post
title: Position sizing of panels in ##Platform_Name## Dashboard Layout control | Syncfusion
description: Learn here all about Position sizing of panels in Syncfusion ##Platform_Name## Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Position sizing of panels
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Position Sizing of Panels in ##Platform_Name## Dashboard Layout Control

Panels are the basic building blocks of the Dashboard Layout control. They act as containers for the data to be visualized or presented. These panels can be positioned or resized for effective presentation of the data.

The table below represents all the available panel properties and their corresponding functionalities.

| **PanelObject** | **Description** |
| --- | --- |
| <kbd>id</kbd> | Specifies the id value of the panel. |
| <kbd>row</kbd> | Specifies the row value in which the panel to be placed. |
| <kbd>col</kbd> | Specifies the column value in which the panel to be placed. |
| <kbd>sizeX</kbd> | Specifies the width of the panel in cells count. |
| <kbd>sizeY</kbd> | Specifies the height of the panel in cells count. |
| <kbd>minSizeX</kbd> | Specifies the minimum width of the panel in cells count. |
| <kbd>minSizeY</kbd> | Specifies the minimum height of the panel in cells count. |
| <kbd>maxSizeX</kbd> | Specifies the maximum width of the panel in cells count. |
| <kbd>maxSizeY</kbd> | Specifies the maximum height of the panel in cells count. |
| <kbd>header</kbd> | Specifies the header template of the panel. |
| <kbd>content</kbd> | Specifies the content template of the panel. |
| <kbd>cssClass</kbd> | Specifies the CSS class name that can be appended with each panel element.|

## Positioning of panels

The panels within the layout can be easily positioned or ordered using the [`row`](../../api/dashboard-layout/panelModel/#row)  and [`col`](../../api/dashboard-layout/panelModel/#col)  properties of the panels. Positioning panels will be beneficial to represent the data in any desired order.

The following sample demonstrates the positioning of panels within the Dashboard Layout using the row and column properties of the panels.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-cs1" %}
{% endif %}

## Sizing of panels

A panel's size can be varied easily by defining the [`sizeX`](../../api/dashboard-layout/panelModel/#sizex) and [`sizeY`](../../api/dashboard-layout/panelModel/#sizey) properties. The [`sizeX`](../../api/dashboard-layout/panelModel/#sizex) property defines the width and [`sizeY`](../../api/dashboard-layout/panelModel/#sizey) property defines height of a panel in cells count. These properties will be helpful in designing a dashboard, where the content of each panel may vary in size.

The following sample demonstrates the sizing of panels within the Dashboard Layout using the sizeX and sizeY properties of the panels.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-cs2" %}
{% endif %}

> You can refer to our [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.