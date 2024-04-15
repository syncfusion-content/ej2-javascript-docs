---
layout: post
title: Handwritten signature in ##Platform_Name## PDF Viewer control | Syncfusion
description: Learn here all about Handwritten signature in Syncfusion ##Platform_Name## PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: PDF Viewer
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Handwritten signature ##Platform_Name## PDF Viewer control

The PDF Viewer control supports adding handwritten signatures to a PDF document. The handwritten signature reduces the paper work of reviewing the content and verifies it digitally.

## Adding a handwritten signature to the PDF document

The handwritten signature can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Select the **HandWritten Signature** button in the annotation toolbar. The signature panel will appear.

![HandWritten Signature](../../pdfviewer/images/select_sign.png)

* Draw the signature in the signature panel.

![HandWritten Signature](../../pdfviewer/images/add_sign.png)

* Then click **Create** button and move the signature using the mouse and place them in the desired location.

![HandWritten Signature](../../pdfviewer/images/create_sign.png)

Refer to the following code sample to switch to the handwritten signature mode programmatically.

```html
<button id="handWrittenSignature">HandWritten Signature mode</button>
```
{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');

let handWrittenSignature = document.getElementById('handWrittenSignature');
if (handWrittenSignature) {
    handWrittenSignature.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.setAnnotationMode('HandWrittenSignature');
        }
    });
}
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.appendTo('#PdfViewer');

let handWrittenSignature= document.getElementById('handWrittenSignature');
if (handWrittenSignature) {
    handWrittenSignature.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.setAnnotationMode('HandWrittenSignature');
        }
    });
}

{% endhighlight %}
{% endtabs %}


## How to enable the handwritten signature

The following code snippet describes how to enable the handwritten signature in PDF Viewer. When the value is set to `false` it disables the handwritten signature.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
pdfviewer.enableHandwrittenSignature  = false

pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.enableHandwrittenSignature  = false

pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## Editing the properties of handwritten signature

The stroke color, border thickness, and opacity of the handwritten signature can be edited using the edit stroke color tool, edit thickness tool, and edit opacity tool in the annotation toolbar.

### Editing stroke color

The stroke color of the annotation can be edited using the color palette provided in the Edit Stroke Color tool.

![SignatureStrokeColor](../../pdfviewer/images/change_stroke.png)

### Editing thickness

The thickness of the border of the annotation can be edited using the range slider provided in the Edit Thickness tool.

![SignatureThickness](../../pdfviewer/images/change_thickness.png)

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![SignatureOpacity](../../pdfviewer/images/change_opacity.png)