---
layout: post
title: Shape annotation in ##Platform_Name## PDF Viewer control | Syncfusion
description: Learn here all about Shape annotation in Syncfusion ##Platform_Name## PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: PDF Viewer
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Shape annotation in ##Platform_Name## PDF Viewer control

The PDF Viewer control provides the options to add, edit, and delete the shape annotations. The shape annotation types supported in the PDF Viewer control are:

* Line
* Arrow
* Rectangle
* Circle
* Polygon

![ShapeAnnotation](../../pdfviewer/images/shape_annot.png)

## Adding a shape annotation to the PDF document

Shape annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the **Shape Annotation** drop-down button. A drop-down pop-up will appear and shows the shape annotations to be added.
* Select the shape types to be added to the page in the drop-down pop-up. It enables the selected shape annotation mode.
* You can add the shapes over the pages of the PDF document.

N> While you're in the pan mode, for navigating through the document, and you click on the shape annotation button to add the shape annotation , the PDF Viewer control will smoothly transition to text select mode. This seamless transition ensures a fluid experience when switching between different interaction modes within the PDF Viewer interface.

![ShapeTool](../../pdfviewer/images/shape_toolbar.png)

Refer to the following code sample to switch to the circle annotation mode.

```html
<button id="circleAnnotationButton"> Add Shape Annotation</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');

let circleAnnotationButton = document.getElementById('circleAnnotationButton');
if (circleAnnotationButton) {
    circleAnnotationButton.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotationModule.setAnnotationMode("Circle");
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

let circleAnnotationButton = document.getElementById('circleAnnotationButton');
if (circleAnnotationButton) {
    circleAnnotationButton.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotationModule.setAnnotationMode("Circle");
        }
    });
}

{% endhighlight %}
{% endtabs %}

## Adding a Shape annotation to the PDF document Programmatically

With the PDF Viewer library, you can add a Shape annotation to the PDF Viewer control programmatically using the [**addAnnotation()**](https://helpej2.syncfusion.com/documentation/api/pdfviewer/annotation/#annotation) method.

Here's a example of how you can utilize the **addAnnotation()** method to include a Shape annotation programmatically:

```html
<button id="addLineAnnotation">Add Line annotation Programmatically</button>
<button id="addArrowAnnotation">Add Arrow annotation Programmatically</button>
<button id="addRectangleAnnotation">Add Rectangle annotation Programmatically</button>
<button id="addCircleAnnotation">Add Circle annotation Programmatically</button>
<button id="addPolygonAnnotation">Add Polygon annotation Programmatically</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import {
    PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, LineSettings, ArrowSettings,
    RectangleSettings, CircleSettings, PolygonSettings
} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";

pdfviewer.appendTo('#PdfViewer');

let addLineAnnotation = document.getElementById('addLineAnnotation');
if (addLineAnnotation) {
    addLineAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Line", {
                offset: { x: 200, y: 230 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
            } as LineSettings);
        }
    });
}

let addArrowAnnotation = document.getElementById('addArrowAnnotation');
if (addArrowAnnotation) {
    addArrowAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Arrow", {
                offset: { x: 200, y: 370 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 370 }, { x: 350, y: 370 }]
            } as ArrowSettings);
        }
    });
}

let addRectangleAnnotation = document.getElementById('addRectangleAnnotation');
if (addRectangleAnnotation) {
    addRectangleAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Rectangle", {
                offset: { x: 200, y: 480 },
                pageNumber: 1,
                width: 150,
                height: 75
            } as RectangleSettings);
        }
    });
}

let addCircleAnnotation = document.getElementById('addCircleAnnotation');
if (addCircleAnnotation) {
    addCircleAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Circle", {
                offset: { x: 200, y: 620 },
                pageNumber: 1,
                width: 90,
                height: 90
            } as CircleSettings);
        }
    });
}

let addPolygonAnnotation = document.getElementById('addPolygonAnnotation');
if (addPolygonAnnotation) {
    addPolygonAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Polygon", {
                offset: { x: 200, y: 800 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 800 }, { x: 242, y: 771 }, { x: 289, y: 799 }, { x: 278, y: 842 }, { x: 211, y: 842 }, { x: 200, y: 800 }]
            } as PolygonSettings);
        }
    });
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import {
    PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, LineSettings, ArrowSettings,
    RectangleSettings, CircleSettings, PolygonSettings
} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';

pdfviewer.appendTo('#PdfViewer');

let addLineAnnotation = document.getElementById('addLineAnnotation');
if (addLineAnnotation) {
    addLineAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Line", {
                offset: { x: 200, y: 230 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
            } as LineSettings);
        }
    });
}

let addArrowAnnotation = document.getElementById('addArrowAnnotation');
if (addArrowAnnotation) {
    addArrowAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Arrow", {
                offset: { x: 200, y: 370 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 370 }, { x: 350, y: 370 }]
            } as ArrowSettings);
        }
    });
}

let addRectangleAnnotation = document.getElementById('addRectangleAnnotation');
if (addRectangleAnnotation) {
    addRectangleAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Rectangle", {
                offset: { x: 200, y: 480 },
                pageNumber: 1,
                width: 150,
                height: 75
            } as RectangleSettings);
        }
    });
}

let addCircleAnnotation = document.getElementById('addCircleAnnotation');
if (addCircleAnnotation) {
    addCircleAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Circle", {
                offset: { x: 200, y: 620 },
                pageNumber: 1,
                width: 90,
                height: 90
            } as CircleSettings);
        }
    });
}

let addPolygonAnnotation = document.getElementById('addPolygonAnnotation');
if (addPolygonAnnotation) {
    addPolygonAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Polygon", {
                offset: { x: 200, y: 800 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 800 }, { x: 242, y: 771 }, { x: 289, y: 799 }, { x: 278, y: 842 }, { x: 211, y: 842 }, { x: 200, y: 800 }]
            } as PolygonSettings);
        }
    });
}

{% endhighlight %}
{% endtabs %}

## Edit the existing shape annotation programmatically

To modify existing shape annotation in the Syncfusion PDF viewer programmatically, you can use the **editAnnotation()** method.

Here is an example of how you can use the **editAnnotation()** method:

```html
<button id="editLineAnnotation">Edit Line annotation Programmatically</button>
<button id="editArrowAnnotation">Edit Arrow annotation Programmatically</button>
<button id="editRectangleAnnotation">Edit Rectangle annotation Programmatically</button>
<button id="editCircleAnnotation">Edit Circle annotation Programmatically</button>
<button id="editPolygonAnnotation">Edit Polygon annotation Programmatically</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import {PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";

pdfviewer.appendTo('#PdfViewer');

let editLineAnnotation = document.getElementById('editLineAnnotation');
if (editLineAnnotation) {
    editLineAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Line") {
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editArrowAnnotation = document.getElementById('editArrowAnnotation');
if (editArrowAnnotation) {
    editArrowAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Arrow") {
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editRectangleAnnotation = document.getElementById('editRectangleAnnotation');
if (editRectangleAnnotation) {
    editRectangleAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Rectangle") {
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editCircleAnnotation = document.getElementById('editCircleAnnotation');
if (editCircleAnnotation) {
    editCircleAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Circle") {
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editPolygonAnnotation = document.getElementById('editPolygonAnnotation');
if (editPolygonAnnotation) {
    editPolygonAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Polygon") {
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';

pdfviewer.appendTo('#PdfViewer');
let editLineAnnotation = document.getElementById('editLineAnnotation');
if (editLineAnnotation) {
    editLineAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Line") {
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editArrowAnnotation = document.getElementById('editArrowAnnotation');
if (editArrowAnnotation) {
    editArrowAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Arrow") {
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editRectangleAnnotation = document.getElementById('editRectangleAnnotation');
if (editRectangleAnnotation) {
    editRectangleAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Rectangle") {
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editCircleAnnotation = document.getElementById('editCircleAnnotation');
if (editCircleAnnotation) {
    editCircleAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Circle") {
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editPolygonAnnotation = document.getElementById('editPolygonAnnotation');
if (editPolygonAnnotation) {
    editPolygonAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Polygon") {
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

{% endhighlight %}
{% endtabs %}

## Editing the properties of the shape annotation

The fill color, stroke color, thickness, and opacity of the shape annotation can be edited using the Edit color tool, Edit stroke color tool, Edit thickness tool, and Edit opacity tool in the annotation toolbar.

### Editing fill color

The fill color of the annotation can be edited using the color palette provided in the Edit Color tool.

![ShapeFillColor](../../pdfviewer/images/shape_fillColor.png)

### Editing stroke color

The stroke color of the annotation can be edited using the color palette provided in the Edit Stroke Color tool.

![ShapeStrokeColor](../../pdfviewer/images/shape_strokecolor.png)

### Editing thickness

The thickness of the border of the annotation can be edited using the range slider provided in the Edit Thickness tool.

![ShapeThickness](../../pdfviewer/images/shape_thickness.png)

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![ShapeOpacity](../../pdfviewer/images/shape_opacity.png)

### Editing the line properties

The properties of the line shapes such as line and arrow annotations can be edited using the Line Properties window. It can be opened by selecting the Properties option in the context menu that appears on right-clicking the line and arrow annotations.

Refer to the following code sample to set the default annotation settings.

![ShapeProperty](../../pdfviewer/images/shape_lineprty.png)

## Setting default properties during the control initialization

The properties of the shape annotations can be set before creating the control using LineSettings, ArrowSettings, RectangleSettings, CircleSettings, and PolygonSettings.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
pdfviewer.lineSettings = {fillColor: 'blue', opacity: 0.6, strokeColor: 'green'};
pdfviewer.arrowSettings = {fillColor: 'green', opacity: 0.6, strokeColor: 'blue'};
pdfviewer.rectangleSettings = {fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange'};
pdfviewer.circleSettings = {fillColor: 'orange', opacity: 0.6, strokeColor: 'pink'};
pdfviewer.polygonSettings = {fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow'}
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.lineSettings = {fillColor: 'blue', opacity: 0.6, strokeColor: 'green'};
pdfviewer.arrowSettings = {fillColor: 'green', opacity: 0.6, strokeColor: 'blue'};
pdfviewer.rectangleSettings = {fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange'};
pdfviewer.circleSettings = {fillColor: 'orange', opacity: 0.6, strokeColor: 'pink'};
pdfviewer.polygonSettings = {fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow'}
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}