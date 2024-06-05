---
layout: post
title: Adding header and footer in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Adding header and footer in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Adding header and footer 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Adding header and footer in ##Platform_Name## Grid control

The Syncfusion ##Platform_Name## Grid allows you to add customized header and footer sections in the exported PDF document. This feature enables you to include custom text, page numbers, lines, page size, and even change the orientation of the header and footer. 

## Adding text in header and footer

The Syncfusion ##Platform_Name## Grid allows you to add custom text in the header or footer section in the exported PDF document.  

The header section of a PDF document is typically located at the top of each page. It's a space where you can include additional information or branding elements. This is particularly useful for adding details like a company logo, a title for the document, a date, or any other information that you want to appear consistently on every page of the PDF.

The footer section, on the other hand, is usually positioned at the bottom of each page in the PDF. It's another area where you can insert custom text. Common content in the footer includes page numbers, copyright information, or disclaimers. Similar to the header, the footer content is repeated on every page.

To add text in the header or footer of the exported PDF document, follow these steps:

1. Access the [pdfExportProperties](../../api/grid/pdfExportProperties) of the Grid control.
2. Set the [header](../../api/grid/pdfExportProperties/#header) or [footer](../../api/grid/pdfExportProperties/#footer) property to a string value representing the desired text.
3. Trigger the PDF export operation.

The following code example demostrates how to add the header in the exported PDF document. 

{% if page.publishingplatform == "typescript" %}
 
```ts

let exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
              type: 'Text',
              value: 'Exported Document Of Customers',
              position: { x:200, y: 50 },
              style: { textBrushColor: '#000000', fontSize: 20 },
            },
        ]
    }
}

```

 {% elsif page.publishingplatform == "javascript" %}

 ```js

var exportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
              type: 'Text',
              value: 'Exported Document Of Customers',
              position: { x:200, y: 50 },
              style: { textBrushColor: '#000000', fontSize: 20 },
            },
        ]
    }
}

```
{% endif %}

## Draw a line in header and footer

When exporting data from the Syncfusion ##Platform_Name## Grid to a PDF document, you have an option to add a line in the header and footer section. This feature allows you to enhance the visual appearance of the exported PDF document and create a clear separation between the header and the content.

This can be achieved using the [pdfExportProperties](../../api/grid/pdfExportProperties) property of the Grid. You can customize the line style using different supported line styles listed below:

* Dash
* Dot
* DashDot
* DashDotDot
* Solid

To add a line in the header or footer of the exported PDF document, you can access the `header.contents` or `footer.contents` property of the [header](../../api/grid/pdfExportProperties/#header) or [footer](../../api/grid/pdfExportProperties/#footer) in the `pdfExportProperties` property of the grid. 

The following code example demostrates how to draw a line in the header of the exported PDF document. 

{% if page.publishingplatform == "typescript" %}
 
```typescript

let exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Solid' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 },
            }
        ]
    }
    footer: {
        fromBottom: 10,
        height: 60,
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Dot' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 },
            },
        ],
    },
}

```

 {% elsif page.publishingplatform == "javascript" %}
 
```js

var exportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Solid' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 },
            }
        ]
    }
    footer: {
        fromBottom: 10,
        height: 60,
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Dot' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 },
            },
        ],
    },
}

```

{% endif %}

## Add page number in header and footer

When exporting data from the Syncfusion ##Platform_Name## Grid to a PDF document, you have an option to include page numbers in the header and footer section. This feature allows you to provide a reference to the page number for better document navigation.

This can be achieved using the [pdfExportProperties](../../api/grid/pdfExportProperties) property of the Grid. You can choose from different types of supported page number listed below:

* LowerLatin - a, b, c,
* UpperLatin - A, B, C,
* LowerRoman - i, ii, iii,
* UpperRoman - I, II, III,
* Number - 1,2,3,
* Arabic - 1,2,3.

To add a page number in the header or footer of the exported PDF document, you can access the `header.contents` or `footer.contents` property of the [header](../../api/grid/pdfExportProperties/#header) or [footer](../../api/grid/pdfExportProperties/#footer) in the `pdfExportProperties` property of the grid. 

The following code example demostrates how to add a page number in the footer of the exported PDF document.

{% if page.publishingplatform == "typescript" %}
 
```typescript

 let exportProperties: PdfExportProperties = {
    footer: {
        fromBottom: 10,
        height: 60,
        contents: [
            {
                type: 'PageNumber',
                pageNumberType: 'Arabic',
                format: 'Page {$current} of {$total}', //optional
                position: { x: 0, y: 25 },
                style: { textBrushColor: '#4169e1', fontSize: 15, hAlign: 'Center' }
            }
        ]
    }
}

```

 {% elsif page.publishingplatform == "javascript" %}
 
```js

 var exportProperties = {
    footer: {
        fromBottom: 10,
        height: 60,
        contents: [
            {
                type: 'PageNumber',
                pageNumberType: 'Arabic',
                format: 'Page {$current} of {$total}', //optional
                position: { x: 0, y: 25 },
                style: { textBrushColor: '#4169e1', fontSize: 15, hAlign: 'Center' }
            }
        ]
    }
}

```

{% endif %}

## Insert an image in header and footer

The Syncfusion ##Platform_Name## Grid have an option to include an image in the header and footer section when exporting data from the Grid to PDF document. This feature allows you to add a custom logo, branding, or any other relevant image to the exported document.

You can use a base64 string with the .jpeg format to represent the image. This can be achieved using the [pdfExportProperties](../../api/grid/pdfExportProperties) property of the Grid control.

To insert an image in the header or footer of the exported PDF document, follow these steps:

1. Convert your desired image to a base64 string in the .jpeg format.

2. Access the `pdfExportProperties` of the Grid control.

3. Set the `header.contents.src` property to the respective file of the image or the base64 string of the image.

4. Trigger the PDF export operation.

{% if page.publishingplatform == "typescript" %}
 
```typescript
let exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
              type: 'Image',
              src: image,
              position: { x: 40, y: 10 },
              size: { height: 100, width: 150 },
            },
        ]
    }
}

```

 {% elsif page.publishingplatform == "javascript" %}
 
```js
var exportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
              type: 'Image',
              src: image,
              position: { x: 40, y: 10 },
              size: { height: 100, width: 150 },
            },
        ]
    }
}

```

{% endif %}

The following example demonstrates how to add a header and footer to the exported grid. In the given example, we added lines in the header and footer, inserted an image in the header, and also added page number in the footer.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs137/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs137/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs137" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs137/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs137/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs137" %}
{% endif %}

## Repeat column header on every page

When exporting data from the Syncfusion ##Platform_Name## Grid to a PDF document, you have an option to repeat the column header on every page. This feature ensures that the column header remains visible and easily identifiable, even when the data spans multiple pages in the exported PDF document.

By default, the column header is occurs only on the first page of the PDF document. However, you can enable the `repeatHeader` property of the **pdfGrid** object to **true** which display the column header on every page. This can be achieved using the [pdfHeaderQueryCellInfo](../../api/grid/#pdfheaderquerycellinfo) event of the Grid.

The following example demonstrates how to repeat the column header on every page of the exported PDF document using the `pdfHeaderQueryCellInfo` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs138/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs138/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs138" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs138/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs138/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs138" %}
{% endif %}