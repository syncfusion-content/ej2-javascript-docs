---
layout: post
title: Pdf export in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Pdf export in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Pdf export 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Pdf export in ##Platform_Name## Pivotview control

PDF export allows exporting pivot table data as PDF document. To enable PDF export in the pivot table, set the `allowPdfExport` as true. You need to use the `pdfExport` method for PDF exporting.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs1" %}

## Multiple pivot table exporting

PDF export provides an option for exporting multiple pivot tables to same file. In this exported document, each pivot table will be exported to new page of document in same file.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs2" %}

## Export table and chart into the same document

When the [`displayOption`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/displayOption/) is set to **Both**, you can export both the table and the chart into the same PDF document. To achieve this, use the [`pdfExport`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#pdfexport) method and set the `exportBothTableAndChart` parameter to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs3" %}

## Customization during PDF export

PDF export provides option to customize mapping of pivot table to the exported PDF document.

### To add header and footer while exporting

You can customize text, page number, line, page size and changing orientation in header and footer of the exported document.

#### To add a text in header/footer

You can add text either in header or footer of the exported PDF document like in the below code example.

```js

var pdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Text',
                value: "Northwind Traders",
                position: { x: 0, y: 50 },
                style: { textBrushColor: '#000000', fontSize: 13 }
            },

        ]
    }
}

```

#### To draw a line in header/footer

You can add line either in header or footer of the exported PDF document like in the below code example.

Supported line styles:
* dash
* dot
* dashdot
* dashdotdot
* solid

```js

var pdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Solid' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 }
            }
        ]
    }
}

```

#### Add page number in header/footer

You can add page number either in header or footer of exported PDF document like in the below code example.

Supported page number types:
* LowerLatin - a, b, c,
* UpperLatin - A, B, C,
* LowerRoman - i, ii, iii,
* UpperRoman - I, II, III,
* Number - 1,2,3.

```js

var pdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'PageNumber',
                pageNumberType: 'Arabic',
                format: 'Page {$current} of {$total}', //optional
                position: { x: 0, y: 25 },
                style: { textBrushColor: '#ffff80', fontSize: 15, hAlign: 'Center' }
            }
        ]
    }
}

```

The below code illustrates the PDF export customization options.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs4" %}

#### Add an image in header/footer

You can add image (Base64 string) either in header or footer of the exported PDF document like in the below code example.

```js

var pdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Image',
                src: image,
                position: { x: 20, y: 10 },
                size: { height: 100, width: 100 },
            }
        ]
    }
}

```

The below code illustrates the PDF export customization options.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pdf-export-cs41/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs41/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs41" %}

### Changing the file name while exporting

The PDF export provides an option to change file name of the document before exporting. In-order to change the file name, define **fileName** property in **pdfExportProperties** object and pass it as a parameter to the [`pdfExport`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#pdfexport) method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs5" %}

### Changing page orientation while exporting

The PDF export provides an option to change page orientation of the document before exporting. In-order to change the page orientation, define **pageOrientation** property in **pdfExportProperties** object and pass it as a parameter to the [`pdfExport`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#pdfexport) method. By default, the page orientation will be in **Portrait** and it can be changed to **Landscape** based on user requirement.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs6" %}

### Changing page size while exporting

The PDF export provides an option to change page size of the document before exporting. In-order to change the page size, define **pageSize** property in **pdfExportProperties** object and pass it as a parameter to the [`pdfExport`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#pdfexport) method.

**Supported page sizes are:** Letter, Note, Legal, A0, A1, A2, A3, A5, A6, A7, A8, A9, B0, B1, B2, B3, B4, B5, Archa, Archb, Archc, Archd, Arche, Flsa, HalfLetter, Letter11x17, Ledger.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs7" %}

### Changing document width and height while exporting

Before exporting, you can change the height and width of the PDF document. To achieve this, use the **height** and **width** properties in the [`beforeExport`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#beforeexport) event.

> This option is only available if [`enableVirtualization`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#enablevirtualization) is set to **true**. In addition, the `VirtualScroll` and `PDFExport` modules must be injected into the pivot table.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs8" %}

### Customize the table column count while exporting

Before exporting, you can split and export the pivot table columns on each page of the PDF document by using the **columnSize** property in the [`beforeExport`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#beforeexport) event.

> This option is only available if [`enableVirtualization`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#enablevirtualization) is set to **true**. In addition, the `VirtualScroll` and `PDFExport` modules must be injected into the pivot table.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs9" %}

### Changing the table's column width and row height while exporting

You can change the column width and row height in the PDF document during the pivot table export by using the [onPdfCellRender](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#onpdfcellrender) event. Within this event, the `args.column.width` property allows you to change the width of specific columns.

As shown in the code example below, the **"Unit Sold"** column under **"FY 2015"** is changed to a width of **60** pixels.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs39/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs39/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs39" %}

Similarly, you can change the height of specific rows in the PDF document by using the `args.cell.height` property in the [onPdfCellRender](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#onpdfcellrender) event. 

As shown in the code example below, the **"Mountain Bikes"** row under **"France"** is changed to a height of **30** pixels.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs40/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs40/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs40" %}

> This option is only available if [enableVirtualization](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#enablevirtualization)is set to **true**. In addition, the `VirtualScroll` and `PDFExport` modules must be injected into the pivot table.

## Changing the pivot table style while exporting

The PDF export provides an option to change colors for headers, caption and records in pivot table before exporting. In-order to apply colors, define **theme** settings in **pdfExportProperties** object and pass it as a parameter to the [`pdfExport`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#pdfexport) method.

> By default, material theme is applied to exported PDF document.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs10" %}

<!-- markdownlint-disable MD009 -->

### Changing default font while exporting 

By default, the pivot table uses "Helvetica" font in the exported document. But it can be changed using the [`theme`](https://ej2.syncfusion.com/javascript/documentation/api/grid/pdfExportProperties/#theme) property in [`pdfExportProperties`](https://ej2.syncfusion.com/javascript/documentation/api/grid/pdfExportProperties/).

The available built-in fonts are, 

* Helvetica 
* TimesRoman 
* Courier 
* Symbol 
* ZapfDingbats 

```js

var pdfExportProperties = {
    theme: {
        header: { font: new ej.pdfexport.PdfStandardFont(ej.pdfexport.PdfFontFamily.TimesRoman, 11, ej.pdfexport.PdfFontStyle.Bold) },
        caption: { font: new ej.pdfexport.PdfStandardFont(ej.pdfexport.PdfFontFamily.TimesRoman, 9) },
        record: { font: new ej.pdfexport.PdfStandardFont(ej.pdfexport.PdfFontFamily.TimesRoman, 10) }
    }
};

```

### Adding custom font while exporting

In addition to existing built-in fonts, custom fonts can also be used. The custom font should be in **Base64** format and mention it in **PdfTrueTypeFont** class. In the following example, we have used **Advent Pro** font family that supports **Hungarian** language.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs11" %}

> The non-English alphabets can also be exported properly by setting its appropriate font.

## Virtual Scroll Data

You can export the pivot table virtual scroll data as PDF document by using PivotEngine export without any performance degradation. To enable PivotEngine export in the pivot table, set the `allowPdfExport` as true. You need to use the `exportToPDF` method for PivotEngine export.

> To use PivotEngine export, You need to inject the `PDFExport` module in pivot table.
> PivotEngine export will be performed while enabling virtual scrolling by default

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs12" %}

### Repeat row headers

Repeat row headers on each page can be achieved using PivotEngine export option. To disable repeat row headers, you need to set `allowRepeatHeader` to **false** in beforeExport event. You need to use the `exportToPDF` method for PivotEngine export.

> To use PivotEngine export, You need to inject the `PDFExport` module in pivot table.
> By default, repeat row headers is enabled in the PivotEngine export.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs13" %}

### Export all pages

The pivot engine exports the entire virtual data of the pivot table (i.e. the data that contains all of the records used to render the complete pivot table) as a PDF document. To export just the current viewport of the pivot table, set the [`exportAllPages`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#exportallpages) property to **false**. To use the pivot engine export, add the `PDFExport` module into the pivot table.

> By default, the pivot engine export will be performed while virtual scrolling is enabled.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs14" %}

## Events

### PdfQueryCellInfo

The event `pdfQueryCellInfo` triggers on framing each row and value cell during PDF export. It allows the user to customize the cell value, style etc. of the current cell. It has the following parameters:

* `value` - It holds the cell value.
* `column` -  It holds column information for the current cell.
* `data` - It holds the entire row data across the current cell.
* `style` - It holds the style properties for the cell.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs205/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs205/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs205" %}

### PdfHeaderQueryCellInfo

The event `pdfHeaderQueryCellInfo` triggers on framing each column header cell during PDF export. It allows the user to customize the cell value, style etc. of the current cell. It has the following parameters:

* `cell` - It holds the current rendering cell information.
* `style` - It holds the style properties for the cell.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs206/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs206/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs206" %}

### ExportComplete

The event [`exportComplete`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#exportcomplete) is triggered after the pivot table data has been exported to an PDF document. You can use this event to acquire blob stream data for further customization and processing at your end by passing the `isBlob` parameter as **true** when using the [`pdfExport`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#pdfexport) method. It has the following parameters:

* `type` - It holds the current export type such as PDF, Excel, and CSV.
* `promise` - It holds the promise object for blob data.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pdf-export-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pdf-export-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pdf-export-cs15" %}

## See Also

* [Excel Exporting](./excel-export)