---
layout: post
title: Protect sheet in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about Protect sheet in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Protect sheet 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Protect sheet in ##Platform_Name## Spreadsheet control

Sheet protection helps you to prevent the users from modifying the data in the spreadsheet.

## Protect Sheet

Protect sheet feature helps you to prevent the unknown users from accidentally changing, editing, moving, or deleting data in a spreadsheet. And you can also protect the sheet with password.

{% if page.publishingplatform == "typescript" %}

You can use the [`isProtected`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#isprotected) property to enable or disable the Protecting functionality.

{% elsif page.publishingplatform == "javascript" %}

You can use the [`isProtected`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#isprotected) property to enable or disable the Protecting functionality.

{% endif %}

> The default value for `isProtected` property is `false`.

By default in protected sheet, selecting, formatting, inserting, deleting functionalities are disabled. To enable some of the above said functionalities
the `protectSettings` options are used in a protected spreadsheet.

The available `protectSettings` options in spreadsheet are,

| Options | Uses |
|-----|------|
| `Select Cells` | Used to perform Cell Selection. |
| `Format Cells` | Used to perform Cell formatting. |
| `Format Rows` | Used to perform Row formatting. |
| `Format Columns` | Used to perform Column formatting. |
| `Insert Link` | Used to perform Hyperlink Insertions. |

> The default value for all `protectSettings` options are `false`.

By default, the `Protect Sheet` module is injected internally into the Spreadsheet to perform sheet protection function.

**User Interface**:

In the active Spreadsheet, the sheet protection can be done by any of the following ways:

* Select the Protect Sheet item in the Ribbon toolbar under the Data Tab, and then select your desired options.
* Right-click the sheet tab, select the Protect Sheet item in the context menu, and then select your desired options.

{% if page.publishingplatform == "typescript" %}
* Use the [`protectSheet()`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#protectsheet) method programmatically.
{% elsif page.publishingplatform == "javascript" %}
* Use the [`protectSheet()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#protectsheet) method programmatically.
{% endif %}

The following example shows `Protect Sheet` functionality with password in the Spreadsheet control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/protect-sheet-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/protect-sheet-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/protect-sheet-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/protect-sheet-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/protect-sheet-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/protect-sheet-cs1" %}
{% endif %}

### Limitations of Protect sheet

* Password encryption is not supported

## Unprotect Sheet

Unprotect sheet is used to enable all the functionalities that are already disabled in a protected spreadsheet.

**User Interface**:

In the active Spreadsheet, the sheet Unprotection can be done by any of the following ways:

* Select the `Unprotect Sheet` item in the Ribbon toolbar under the Data Tab.
* Right-click the sheet tab, select the `Unprotect Sheet` item in the context menu.

{% if page.publishingplatform == "typescript" %}
* Use the [`unprotectSheet()`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#unprotectsheet) method programmatically.
{% elsif page.publishingplatform == "javascript" %}
* Use the [`unprotectSheet()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#unprotectsheet) method programmatically.
{% endif %}

## Unlock the particular cells in the protected sheet

{% if page.publishingplatform == "typescript" %}

In protected spreadsheet, to make some particular cell or range of cells are editable, you can use [`lockCells()`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#lockcells) method, with the parameter `range` and `isLocked` property as false.

{% elsif page.publishingplatform == "javascript" %}

In protected spreadsheet, to make some particular cell or range of cells are editable, you can use [`lockCells()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#lockcells) method, with the parameter `range` and `isLocked` property as false.

{% endif %}
 
{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/protect-sheet-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/protect-sheet-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/protect-sheet-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/protect-sheet-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/protect-sheet-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/protect-sheet-cs2" %}
{% endif %}

## Make cells read-only without protecting worksheet

{% if page.publishingplatform == "typescript" %}

Previously, you could make cells read-only by protecting the entire sheet using the [protectSheet](https://ej2.syncfusion.com/documentation/api/spreadsheet/#protectsheet) method or through the UI option. Meanwhile, to make a specific range of cells editable within a protected sheet, you needed to use the [lockCells](https://ej2.syncfusion.com/documentation/api/spreadsheet/#lockcells) method, passing the `range` parameter and setting the `isLocked` property to **false**. 

Now, you can make an entire row, an entire column, or a specific range of cells read-only using the [setRangeReadOnly](https://ej2.syncfusion.com/documentation/api/spreadsheet/#setrangereadonly) method without protecting the entire sheet. This method accepts three parameters, as detailed in the following table:

{% elsif page.publishingplatform == "javascript" %}

Previously, you could make cells read-only by protecting the entire sheet using the [protectSheet](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#protectsheet) method or through the UI option. Meanwhile, to make a specific range of cells editable within a protected sheet, you needed to use the [lockCells](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#lockcells) method, passing the `range` parameter and setting the `isLocked` property to **false**. 

Now, you can make an entire row, an entire column, or a specific range of cells read-only using the [setRangeReadOnly](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#setrangereadonly) method without protecting the entire sheet. This method accepts three parameters, as detailed in the following table:

{% endif %}

| Parameter | Description |
|-----|------|
| `readOnly` | Specifies whether an entire row, an entire column, or a specific range of cells should be set as read-only (**true**) or editable (**false**). |.
| `range` | Specifies the particular range of cells to be set as read-only. |
| `sheetIndex` | Specifies the index of the sheet. |

You can make an entire row, an entire column, or a specific range of cells read-only by passing the range as shown in the code snippet below:

```js
// To set read-only for single cell.
spreadsheet.setRangeReadOnly(true, 'A2', 0)
// To set read-only for range of cells.
spreadsheet.setRangeReadOnly(true, 'A2:B5', 0)
// To set read-only for entire row.
spreadsheet.setRangeReadOnly(true, '3:3', 0)
// To set read-only for entire column.
spreadsheet.setRangeReadOnly(true, 'A:A', 0)
```
You can make the cells read-only in the cell data binding by setting the `isReadOnly` property to **true** for the respective rows, columns, and cells. Please refer to the code snippet below to see how to set cells to read-only in the cell data binding:

```ts
   sheets: [
       {
           rows: [
               //To set read-only for entire row.
               {index: 3, isReadOnly: true},
               {
                   index: 4,
                   cells: [
                       //To set read-only for the cell.
                       { index: 4, isReadOnly: true }
                   ]
               }],
           columns: [
               //To set read-only for entire column.
               { isReadOnly: true }
           ]
       }]
```

The following example demonstrates how to make rows, columns, and cells read-only without protecting the sheet:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/readonly-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/readonly-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/readonly-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/readonly-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/readonly-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/readonly-cs1" %}

{% endif %}

## Protect Workbook

Protect workbook feature helps you to protect the workbook so that users cannot insert, delete, rename, hide the sheets in the spreadsheet.

{% if page.publishingplatform == "typescript" %}

You can use the [`password`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#password) property to protect workbook with password.
You can use the [`isProtected`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#isprotected) property to protect or unprotect the workbook without the password.

{% elsif page.publishingplatform == "javascript" %}

You can use the [`password`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#password) property to protect workbook with password.
You can use the [`isProtected`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#isprotected) property to protect or unprotect the workbook without the password.

{% endif %}

> The default value for `isProtected` property is `false`.

**User Interface**:

In the active Spreadsheet, you can protect the worksheet by selecting the Data tab in the Ribbon toolbar and choosing the `Protect Workbook` item. Then, enter the password and confirm it and click on OK.

{% if page.publishingplatform == "typescript" %}

The following example shows `Protect Workbook` by using the [`isProtected`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#isprotected) property in the Spreadsheet control.

{% elsif page.publishingplatform == "javascript" %}

The following example shows `Protect Workbook` by using the [`isProtected`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#isprotected) property in the Spreadsheet control.

{% endif %}
 
{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/protect-workbook/default-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/protect-workbook/default-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/protect-workbook/default-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/protect-workbook/default-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/protect-workbook/default-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/protect-workbook/default-cs1" %}
{% endif %}

{% if page.publishingplatform == "typescript" %}

The following example shows `Protect Workbook` by using the [`password`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#password) property in the Spreadsheet control. To unprotect the workbook, click the unprotect workbook button in the data tab and provide the password as syncfusion<sup style="font-size:70%">&reg;</sup> in the dialog box.

{% elsif page.publishingplatform == "javascript" %}

The following example shows `Protect Workbook` by using the [`password`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#password) property in the Spreadsheet control. To unprotect the workbook, click the unprotect workbook button in the data tab and provide the password as syncfusion<sup style="font-size:70%">&reg;</sup> in the dialog box.

{% endif %}

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/protect-workbook/default-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/protect-workbook/default-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/protect-workbook/default-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/protect-workbook/default-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/protect-workbook/default-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/protect-workbook/default-cs2" %}
{% endif %}

## Unprotect Workbook

Unprotect Workbook is used to enable the insert, delete, rename, move, copy, hide or unhide sheets feature  in the spreadsheet.

**User Interface**:

In the active Spreadsheet, the workbook Unprotection can be done in any of the following ways:

* Select the `Unprotect Workbook` item in the Ribbon toolbar under the Data Tab and provide the valid password in the dialog box.

## See Also

* [Hyperlink](./link)
