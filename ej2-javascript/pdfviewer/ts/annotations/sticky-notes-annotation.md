---
layout: post
title: Sticky notes in ##Platform_Name## PDF Viewer control | Syncfusion
description: Learn here all about Sticky notes in Syncfusion ##Platform_Name## PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: PDF Viewer
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Sticky notes in ##Platform_Name## PDF Viewer control

The PDF Viewer control provides the options to add, edit, and delete the sticky note annotations in the PDF document.

![StickyNotesAnnotation](../../pdfviewer/images/stickynotes_annotation.png)

## Adding a sticky note annotation to the PDF document

Sticky note annotations can be added to the PDF document using the annotation toolbar.

* Click the **Comments** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the position where you want to add sticky note annotation in the PDF document.
* Sticky note annotation will be added in the clicked positions.

  ![StickyNotesTool](../../pdfviewer/images/stickynotes_tool.png)

  Annotation comments can be added to the PDF document using the comment panel.

* Select a Sticky note annotation in the PDF document and right-click it.
* Select the Comment option in the context menu that appears.
* Now, you can add Comments, Reply, and Status using the Comment Panel.
* Now, you can add Comments, Reply, and Status using the Comment Panel.

![StickyNotesComment](../../pdfviewer/images/stickynotes_comment.png)

## Adding a sticky note annotation to the PDF document Programmatically

With the PDF Viewer library, you can add a sticky note annotation to the PDF Viewer control programmatically using the [**addAnnotation()**](https://helpej2.syncfusion.com/documentation/api/pdfviewer/annotation/#annotation) method.

Here's a example of how you can utilize the **addAnnotation()** method to include a sticky note annotation programmatically:

```html
<button id="stickyNote">Add sticky note annotation programmatically</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, StickyNotesSettings} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');

let stickyNote = document.getElementById('stickyNote');
if (stickyNote) {
    stickyNote.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("StickyNotes", {
                offset: { x: 100, y: 200 },
                pageNumber: 1,
                isLock: false
            } as StickyNotesSettings );
        }
    });
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, StickyNotesSettings} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.appendTo('#PdfViewer');

let stickyNote = document.getElementById('stickyNote');
if (stickyNote) {
    stickyNote.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("StickyNotes", {
                offset: { x: 100, y: 200 },
                pageNumber: 1,
                isLock: false
            } as StickyNotesSettings );
        }
    });
}

{% endhighlight %}
{% endtabs %}

## Edit the existing sticky note annotation programmatically

To modify existing sticky note annotation in the Syncfusion PDF viewer programmatically, you can use the **editAnnotation()** method.

Here is an example of how you can use the **editAnnotation()** method:

```html
<button id="stickyNote">Edit sticky note annotation programmatically</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');

let stickyNote = document.getElementById('stickyNote');
if (stickyNote) {
    stickyNote.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].shapeAnnotationType === "sticky") {
                    var width = pdfviewer.annotationCollection[i].bounds.width;
                    var height = pdfviewer.annotationCollection[i].bounds.height;
                    pdfviewer.annotationCollection[i].bounds = { x: 100, y: 100, width: width, height: height };
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.appendTo('#PdfViewer');

let stickyNote = document.getElementById('stickyNote');
if (stickyNote) {
    stickyNote.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].shapeAnnotationType === "sticky") {
                    var width = pdfviewer.annotationCollection[i].bounds.width;
                    var height = pdfviewer.annotationCollection[i].bounds.height;
                    pdfviewer.annotationCollection[i].bounds = { x: 100, y: 100, width: width, height: height };
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}
{% endhighlight %}
{% endtabs %}

## Editing the properties of the sticky note annotation

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![StickyNotesOpacity](../../pdfviewer/images/sticky_opacity.png)

### Editing comments

The comment, comment reply, and comment status of the annotation can be edited using the Comment Panel.

* Open the comment panel using the Comment Panel button showing in the annotation toolbar.

  ![StickyNotesComment](../../pdfviewer/images/commentPanel.png)

You can modify or delete the comments or comments replay and it’s status using the menu option provided in the comment panel.

  ![StickyNotesEdit](../../pdfviewer/images/sticky_editbtn.png)

## Setting default properties during the control initialization

The properties of the sticky note annotation can be set before creating the control using the StickyNoteSettings.

After editing the default opacity using the Edit Opacity tool, they will be changed to the selected values. Refer to the following code sample to set the default sticky note annotation settings.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
pdfviewer.stickyNotesSettings = {author: 'Syncfusion'};
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.stickyNotesSettings = {author: 'Syncfusion'};
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## Disabling sticky note annotations

The PDF Viewer control provides an option to disable the sticky note annotations feature. The code sample for disabling the feature is as follows.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
pdfviewer.enableStickyNotesAnnotation = false;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.enableStickyNotesAnnotation = false;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}