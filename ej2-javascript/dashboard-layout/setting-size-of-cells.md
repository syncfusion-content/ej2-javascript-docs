---
layout: post
title: Setting size of cells in ##Platform_Name## Dashboard Layout control | Syncfusion
description: Learn here all about Setting size of cells in Syncfusion ##Platform_Name## Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Setting size of cells
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Setting size of cells in ##Platform_Name## Dashboard Layout control

The entire layout dimensions are assigned based on the height and width of the parent element. Hence, a responsive or static layout can be created by assigning a percentage or static dimension values to the parent element. The layout adapts to mobile resolutions by transforming the entire layout into a stacked orientation so that the panels will be displayed in a vertical column.

The **Dashboard Layout** is a grid-structured control that can be split into subsections of equal size known as cells. The total number of cells in each row is defined using the [`columns`](../api/dashboard-layout/#columns) property of the control. The width of each cell will be auto-calculated based on the total number of cells placed in a row, and the height of a cell will be the same as that of its width. However, the height of these cells can also be configured to any desired size using the [`cellAspectRatio`](../api/dashboard-layout/#cellaspectratio) property (cell width/cell height ratio), which defines the cell width-to-height ratio.

The number of rows within the layout has no limits and can have any number of rows based on the panels' count and position. Panels, which act as data containers, will be placed or positioned over these cells.

## Modifying cell size

In a dashboard, the data to be held by the panel in a cell may be of different sizes; hence, different cell dimensions may be required in different scenarios. In this case, the size of these grid cells can be modified to the required size using the [`columns`](../api/dashboard-layout/#columns) and [`cellAspectRatio`](../api/dashboard-layout/#cellaspectratio) properties.

The following sample demonstrates how to modify a cell size using the [`columns`](../api/dashboard-layout/#columns) and [`cellAspectRatio`](../api/dashboard-layout/#cellaspectratio) properties. In the sample below, the width of the parent element is divided into 5 equal cells based on the columns property value, resulting in the width of each cell as 100px. The height of these cells will be 50px based on the cellAspectRatio value 100/50 (i.e., for every 100px of width, 50px will be the height of the cell).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/sizing-of-cells-edited-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/sizing-of-cells-edited-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/sizing-of-cells-edited-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/sizing-of-cells-edited-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/sizing-of-cells-edited-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/sizing-of-cells-edited-cs1" %}
{% endif %}

## Setting cell spacing

The spacing between each panel in a row and column can be defined using the [`cellSpacing`](../api/dashboard-layout/#cellspacing) property. Adding spacing between the panels will make the layout effective and provide a clear data representation.

The following sample demonstrates the usage of the [`cellSpacing`](../api/dashboard-layout/#cellspacing) property, which helps in a neat and clear representation of the data.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/cell-spacing-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/cell-spacing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/cell-spacing-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/cell-spacing-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/cell-spacing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/cell-spacing-cs1" %}
{% endif %}

## Graphical representation of layout

These cells combinedly form a grid-structured layout which will be hidden initially. This grid-structured layout can be made visible by enabling the [`showGridLines`](../api/dashboard-layout/#showgridlines) property, which clearly pictures the cells' split-up within the layout. These gridlines will be helpful in panel sizing and placement within the layout during the initial designing of a dashboard.

In the following sample, the grid lines indicate the cells' split-up of the layout, and the data containers placed over these cells are known as panels.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/sizing-of-cells-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/sizing-of-cells-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/sizing-of-cells-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/sizing-of-cells-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/sizing-of-cells-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/sizing-of-cells-cs2" %}
{% endif %}

## Rendering control in right-to-left direction

It is possible to render the Dashboard Layout in a right-to-left direction by setting the [`enableRtl`](../api/dashboard-layout/#enablertl) API to **true**.

The following sample demonstrates the Dashboard Layout in the right-to-left direction.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dashboard-layout/rtl-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/rtl-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dashboard-layout/rtl-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/rtl-cs1" %}
{% endif %}

> You can refer to our [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/material/dashboard-layout/default.html) to learn how to present and manipulate data.