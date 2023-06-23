---
layout: post
title: Change rectangle annotations border color in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Change rectangle annotations border color in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Change rectangle annotations border color 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Change rectangle annotations border color in ##Platform_Name## Pdfviewer control

The Essential JavaScript PDF Viewer supports customizing the rectangle annotation's property by using the `rectangleSettings` API.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/documentation/pdfviewer/getting-started/) to create simple PDF Viewer sample.

**Step 2:** Add the following code snippet to change the rectangle annotation's border color using the `rectangleSettings` API.

```

<button id="changeColor">Change Color(Blue)</button>
<button id="addRectangleAnnotation">Add Rectangle Annotation</button>

```

```ts

//Event triggers while clicking the Change Color(Blue) button.
document.getElementById("changeColor").addEventListener('click', function () {
    //API to change the rectangle annotation's stroke color.
    viewer.rectangleSettings.strokeColor = "blue";
});

//Event triggers while clicking the Add Rectangle Annotation button.
document.getElementById("addRectangleAnnotation").addEventListener('click', function () {
    //API to set the rectangle annotation mode.
    viewer.annotation.setAnnotationMode('Rectangle');
});

```

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Annotations/How%20to%20change%20the%20rectangle%20annotation's%20border%20color)