---
layout: post
title: PDF Headers and Footers in ##Platform_Name## Gantt Chart | Syncfusion
description: Learn how to customize headers and footers in PDF exports of the Syncfusion ##Platform_Name## Gantt Chart control with text, lines, page numbers, and images.
platform: ej2-javascript
control: Header and Footer of PDF export 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Adding Headers and Footers to PDF Exports in ##Platform_Name## Gantt Chart

Customizing headers and footers in PDF exports of the [##Platform_Name## Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) component allows adding text, lines, page numbers, and images to enhance document professionalism for projects. Use [PdfExportProperties](../../api/gantt/pdfExportProperties) with [header](../../api/gantt/pdfHeader) and [footer](../../api/gantt/pdfFooter) to define content arrays, specifying `type` (e.g., Text, Line), `value`, `position`, `style`, or `src` for images with `base64` encoding. Disable footers via [enableFooter](../../api/gantt/pdfExportProperties#enablefooter) set to **false**, ensuring tailored outputs with the `PdfExport` module injected and [allowPdfExport](../../api/gantt#allowpdfexport) enabled.

## Write a text in header and footer

Customize text in headers or footers using the [header](../../api/gantt/pdfHeader) or [footer](../../api/gantt/pdfFooter) properties in [PdfExportProperties](../../api/gantt/pdfExportProperties). Set `type` to **Text**, define `value` for the text, `position` for x/y coordinates, and `style` for color or font size.

{% if page.publishingplatform == "typescript" %}

let exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Text',
                value: 'INVOICE',
                position: { x: 380, y: 0 },
                style: { textBrushColor: '#C25050', fontSize: 25 }
            }
        ]
    }
};

{% elsif page.publishingplatform == "javascript" %}

let exportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Text',
                value: 'INVOICE',
                position: { x: 380, y: 0 },
                style: { textBrushColor: '#C25050', fontSize: 25 }
            }
        ]
    }
};

{% endif %}

## Draw a line in header and footer

Customize lines in headers or footers using the [header](../../api/gantt/pdfHeader) or [footer](../../api/gantt/pdfFooter) properties in [PdfExportProperties](../../api/gantt/pdfExportProperties). Set `type` to **Line**, define `points` for start/end coordinates, `pageNumberType` for position, and `style` for color, width, or dash style.

{% if page.publishingplatform == "typescript" %}

let exportProperties: PdfExportProperties = {
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
};

{% elsif page.publishingplatform == "javascript" %}

let exportProperties = {
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
};

{% endif %}

## Add page number in header and footer

This feature allows to customize the page number that appears in the header or footer sections of the PDF document. Page numbers can be added in [header](../../api/gantt/pdfHeader) or [footer](../../api/gantt/pdfFooter) of the exported PDF document by using [pdfExportProperties](../../api/gantt/pdfexportproperties).

* `type` indicates that the content is a page number.
* `pageNumberType` specifies the type of numbering to be used.
* `format` is an optional attribute that allows you to customize the text format of the page number.
* `position` defines the coordinates (x, y) where the page number will be located.
* `style` sets the styling properties of the page number text, such as color (textBrushColor), font size (fontSize), and horizontal alignment (hAlign).

Supported page number types:
* LowerLatin - a, b, c,
* UpperLatin - A, B, C,
* LowerRoman - i, ii, iii,
* UpperRoman - I, II, III,
* Number - 1,2,3.

{% if page.publishingplatform == "typescript" %}

let exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'PageNumber',
                pageNumberType: 'Arabic',
                format: 'Page {$current} of {$total}',
                position: { x: 0, y: 25 },
                style: { textBrushColor: '#ffff80', fontSize: 15, hAlign: 'Center' }
            }
        ]
    }
};

{% elsif page.publishingplatform == "javascript" %}

let exportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'PageNumber',
                pageNumberType: 'Arabic',
                format: 'Page {$current} of {$total}',
                position: { x: 0, y: 25 },
                style: { textBrushColor: '#ffff80', fontSize: 15, hAlign: 'Center' }
            }
        ]
    }
};

{% endif %}

## Insert an image in header and footer

Add images to headers or footers using the [header](../../api/gantt/pdfHeader) or [footer](../../api/gantt/pdfFooter) properties in [PdfExportProperties](../../api/gantt/pdfExportProperties). Set `type` to **Image**, define `src` as a `base64` string, `position` for x/y coordinates, and `size` for height/width.

Note: PDF Export supports base64 string to export the images.

{% if page.publishingplatform == "typescript" %}

// Replace it with a valid Base64-encoded image.
let image: string = "/9j/4AAQSkZJRgABAQEAeAB4AAD...";

let exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Image',
                src: image,
                position: { x: 40, y: 10 },
                size: { height: 100, width: 250 }
            }
        ]
    }
};

{% elsif page.publishingplatform == "javascript" %}

// Replace it with a valid Base64-encoded image.
let image = "/9j/4AAQSkZJRgABAQEAeAB4AAD...";

let exportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Image',
                src: image,
                position: { x: 40, y: 10 },
                size: { height: 100, width: 250 }
            }
        ]
    }
};

{% endif %}

The below code illustrates the pdf export customization.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/pdf-export-customization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/pdf-export-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/pdf-export-customization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/pdf-export-customization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/pdf-export-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/pdf-export-customization-cs1" %}
{% endif %}

## Export Gantt Chart with external form elements in PDF

The Gantt Chart allows you to export external form elements, such as custom headers, footers, and user-entered form data, along with the Gantt content in a PDF document. This can be achieved by configuring the `header` and `footer` properties in the `pdfExportProperties` object and passing the required content during PDF export.

The following example demonstrates how to export the Gantt Chart along with external form element values in the PDF document.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/pdf-export-form-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/pdf-export-form-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/pdf-export-form-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/pdf-export-form-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/pdf-export-form-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/pdf-export-form-cs18" %}
{% endif %}

## Disable footer

By default, the exported PDF file includes a footer. The footer can be disabled by setting the [enableFooter](../../api/gantt/pdfexportproperties#enablefooter) property to `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/pdf-export-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/pdf-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/pdf-export-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/pdf-export-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/pdf-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/pdf-export-cs5" %}
{% endif %}

## See also

- [How to export to PDF?](../../gantt/pdf-export/pdf-export)
- [How to customize PDF export?](../../gantt/pdf-export/customize-pdf-export)
- [How to manage task dependencies?](../../gantt/task-dependency)
