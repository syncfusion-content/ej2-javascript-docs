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

The conditional formatting can be applied at runtime through the built-in dialog, invoked from the toolbar. To do so, set [allowConditionalFormatting](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#allowconditionalformatting) and [showToolbar](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#showToolbar) properties in pivot table to **true**. Also, include the item **ConditionalFormatting** in the [toolbar](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#toolbar). End user can now see the "Conditional Formatting" icon in toolbar UI automatically, which on clicking will invoke the formatting dialog to perform necessary operations.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/conditional-formatting-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/conditional-formatting-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/conditional-formatting-cs4" %}

Conditional formatting can also be included in the pivot table through code-behind using the [conditionalFormatSettings](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalFormatSettingsModel/). The required properties to apply a new conditional formatting are,

* [applyGrandTotals](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalFormatSettingsModel/#applygrandtotals): This boolean property allows you to restrict conditional formatting for grand totals in the row and column axes. By default, this property is set to true.
* [measure](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalFormatSettingsModel/#measure): Specifies the value field name for which style will be applied.
* [conditions](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalFormatSettingsModel/#conditions): Defines the operator type used for conditional formatting, such as equals, greater than, less than, etc.
* [value1](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalFormatSettingsModel/#value1): Specifies the starting value for the conditional formatting.
* [value2](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalFormatSettingsModel/#value2.html): Specifies the ending value for the conditional formatting range. This property is applicable only for conditions like **Between** and **NotBetween**.
* [style](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalFormatSettingsModel/#style): Specifies the custom styling applied to the cell.

The available style properties in [style](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/style/), to set in value cells are:

* [backgroundColor](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/style/#backgroundcolor): It allows to set the background color to the value cell in the pivot table.
* [color](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/style/#color): It allows to set the font color to the value cell in the pivot table.
* [fontFamily](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/style/#fontfamily): It allows to set the font family to the value cell in the pivot table.
* [fontSize](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/style/#fontsize): It allows to set the font size to the value cell in the pivot table.

To use the conditional formatting feature, You need to inject the `ConditionalFormatting` module in pivot table.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs101/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs101/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs101" %}

Meanwhile, user can also view conditional formatting dialog in UI by invoking [showConditionalFormattingDialog](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#showconditionalformattingdialog) method on an external button click which is shown in the below code sample.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/conditional-formatting-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/conditional-formatting-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/conditional-formatting-cs5" %}

## Conditional formatting for all fields

Allows end user to apply conditional formatting commonly for all value fields just by ignoring the [measure](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalFormatSettingsModel/#measure) property and setting rest of the properties in [conditionalFormatSettings](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalFormatSettingsModel/).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/conditional-formatting-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/conditional-formatting-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/conditional-formatting-cs6" %}

## Conditional formatting for specific value field

Allows end user to apply conditional formatting to a specific value field by setting the Measure property with specific value field name in [conditionalFormatSettings](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalFormatSettingsModel/).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs102/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs102/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs102" %}

## Editing and removing existing conditional format

Editing and removing existing conditional format can be done through the UI at runtime. To do so, open the conditional formatting dialog and edit the “Value”, “Condition” and “Format” options based on user requirement and click “OK”. To remove a conditional format, click the “Delete” icon besides the respective condition.

![output](images/cformatting_remove.png)

## Event

### ConditionalFormatting

The event [conditionalFormatting](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#conditionalformatting) is triggered initially while clicking the “ADD CONDITION” button inside the conditional formatting dialog in-order to fill user specific condition instead of default condition at runtime. To use this event, [allowConditionalFormatting](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#allowconditionalformatting) property in PivotView must be set to **true**. It has following parameters -

* `applyGrandTotals` - Allows to apply conditional formatting to the grand totals of row and column axis in the pivot table.
* `conditions` - Allows you to choose the operator type such as equals, greater than, less than, etc. for conditional formatting.
* `label` - Allows to set the header text of a specific row/column field to apply conditional formatting.
* `measure` - Allows to set the value field name to apply conditional formatting.
* `style` - Allows to set the custom styles for the formatting applied values in the pivot table.
* `value1` - Allows you to set the start value for applying conditional formatting.
* `value2` - Allows you to set the end value for applying conditional formatting. This property is applicable only for conditions like **Between** and **NotBetween**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/conditional-formatting-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/conditional-formatting-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/conditional-formatting-cs7" %}