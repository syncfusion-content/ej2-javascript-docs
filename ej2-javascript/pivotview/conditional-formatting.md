---
layout: post
title: Conditional formatting in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Conditional formatting in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Conditional formatting 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Conditional formatting in ##Platform_Name## Pivotview control

Allows end user to change the appearance of the pivot table value cells with its background color, font color, font family, and font size based on specific conditions.

The conditional formatting can be applied at runtime through the built-in dialog, invoked from the toolbar. To do so, set [`allowConditionalFormatting`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#allowconditionalformatting) and [`showToolbar`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#showToolbar) properties in pivot table to **true**. Also, include the item **ConditionalFormatting** in the [`toolbar`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#toolbar). End user can now see the "Conditional Formatting" icon in toolbar UI automatically, which on clicking will invoke the formatting dialog to perform necessary operations.

To use conditional formatting, you need to inject the `ConditionalFormatting` module in pivot table.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/conditional-formatting-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/conditional-formatting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/conditional-formatting-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/conditional-formatting-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/conditional-formatting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/conditional-formatting-cs1" %}
{% endif %}

Conditional formatting can also be included in the pivot table through code-behind using the [`conditionalFormatSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalFormatSettingsModel/). The required properties to apply a new conditional formatting are,

* [`measure`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalFormatSettingsModel/#measure): Specifies the value field name for which style will be applied.
* [`conditions`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalFormatSettingsModel/#conditions): Specifies the operator type such as equals, greater than, less than, etc.
* [`value1`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalFormatSettingsModel/#value1): Specifies the start value.
* [`value2`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalFormatSettingsModel/#value2.html): Specifies the end value.
* [`style`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalFormatSettingsModel/#style): Specifies the style for the cell.

The available style properties in [`style`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/style/), to set in value cells are:

* [`backgroundColor`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/style/#backgroundcolor): Specifies the background color.
* [`color`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/style/#color): Specifies the font color.
* [`fontFamily`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/style/#fontfamily): Specifies the font family.
* [`fontSize`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/style/#fontsize): Specifies the font size.

To use the conditional formatting feature, You need to inject the `ConditionalFormatting` module in pivot table.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs18" %}
{% endif %}

Meanwhile, user can also view conditional formatting dialog in UI by invoking [`showConditionalFormattingDialog`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#showconditionalformattingdialog) method on an external button click which is shown in the below code sample.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/conditional-formatting-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/conditional-formatting-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/conditional-formatting-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/conditional-formatting-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/conditional-formatting-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/conditional-formatting-cs2" %}
{% endif %}

## Conditional formatting for all fields

Allows end user to apply conditional formatting commonly for all value fields just by ignoring the [`Measure`](https://help.syncfusion.com/cr/blazor/Syncfusion.EJ2.Blazor~Syncfusion.EJ2.Blazor.PivotView.PivotViewConditionalFormatSetting~Measure.html) property and setting rest of the properties in [`PivotViewConditionalFormatSetting`](https://help.syncfusion.com/cr/blazor/Syncfusion.EJ2.Blazor~Syncfusion.EJ2.Blazor.PivotView.PivotViewConditionalFormatSetting_properties.html).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/conditional-formatting-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/conditional-formatting-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/conditional-formatting-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/conditional-formatting-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/conditional-formatting-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/conditional-formatting-cs3" %}
{% endif %}

## See Also

* [Apply conditional formatting for specific row or column](./how-to/apply-conditional-formatting-for-specific-row-or-column)