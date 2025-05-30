---
layout: post
title: Searching in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about Searching in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Searching 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Searching in ##Platform_Name## Spreadsheet control

{% if page.publishingplatform == "typescript" %}

Find and Replace helps you to search for the target text and replace the found text with alternative text within the sheet or workbook. You can use the [`allowFindAndReplace`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#allowfindandreplace) property to enable or disable the Find and Replace functionality.

{% elsif page.publishingplatform == "javascript" %}

Find and Replace helps you to search for the target text and replace the found text with alternative text within the sheet or workbook. You can use the [`allowFindAndReplace`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowfindandreplace) property to enable or disable the Find and Replace functionality.

{% endif %}
 
> * The default value for `allowFindAndReplace` property is `true`.

## Find

Find feature is used to select the matched contents of a cell within the sheet or workbook. It is extremely useful when working with large set of data source.

**User Interface**:

Find can be done by any of the following ways:

* Select the Search icon in the Ribbon toolbar or use `Ctrl + F` key to open the Find dialog.
* Use find Next and find Previous buttons to search the given value in the workbook.
* Select the option button in Find dialog to open the Find and Replace dialog. Then, select the below properties for enhanced searching.

> * `Search within`: To search the target in a sheet (default) or in an entire workbook.
> * `Search by`: It enhance the search, either By Rows (default), or By Columns.
> * `Match case`: To find the matched value with case sensitive.
> * `Match exact cell contents`: To find the exact matched cell value with entire match cases.

{% if page.publishingplatform == "typescript" %}
* Using [`find()`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#find) method to perform find operation.
{% elsif page.publishingplatform == "javascript" %}
* Using [`find()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#find) method to perform find operation.
{% endif %}

## Replace

Replace feature is used to change the find contents of a cell within sheet or workbook. Replace All is used to change all the matched contents of a cell within sheet or workbook.

**User Interface**:

Replace can be done by any of the following ways:

* Use `Ctrl + H` key to open the Find and Replace dialog.
* Use Replace button to change the found value in sheet or workbook.
* Using Replace All button, all the matched criteria can be replaced with find value based on sheet or workbook.
{% if page.publishingplatform == "typescript" %}
* Using [`replace()`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#replace) method to perform replace operation by passing the argument `args.replaceby` as `replace`.
* Using [`replace()`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#replace) method to perform replace all operation by passing the argument `args.replaceby` as `replaceall`.
{% elsif page.publishingplatform == "javascript" %}
* Using [`replace()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#replace) method to perform replace operation by passing the argument `args.replaceby` as `replace`.
* Using [`replace()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#replace) method to perform replace all operation by passing the argument `args.replaceby` as `replaceall`.
{% endif %}

## Go to

Go to feature is used to navigate to a specific cell address in the sheet or workbook.

**User Interface**:

{% if page.publishingplatform == "typescript" %}
* Use `Ctrl + G` key to open the Go To dialog.
* Use [`goTo()`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#goto) method to perform Go To operation.
{% elsif page.publishingplatform == "javascript" %}
* Use `Ctrl + G` key to open the Go To dialog.
* Use [`goTo()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#goto) method to perform Go To operation.
{% endif %}

In the following sample, searching can be done by following ways:

* Select the Home tab in the Ribbon toolbar, and then select the Search icon.
* Enter any value in the search textbox.
* Select the next (or) previous button to find the entered value in the spreadsheet.
* You can have more options to find values by selecting the more options in the search toolbar.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/searching-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/searching-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/searching-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/searching-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/searching-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/searching-cs1" %}
{% endif %}

## Limitations

* Undo/redo for Replace All is not supported in this feature.
