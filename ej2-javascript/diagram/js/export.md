---
layout: post
title: Export in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Export in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Export 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Export in ##Platform_Name## Diagram control

Diagram provides support to export its content as image/svg files. The client-side method [`exportDiagram`](../api/diagram#exportDiagram) helps to export the diagram. The following code illustrates how to export the diagram as image.

>Note: To use Print and Export, you need to inject `PrintAndExport` in the diagram.

<!-- markdownlint-disable MD033 -->

```javascript
var diagram = new ej.diagrams.Diagram({
    width: 1500, height: 1500
},'#element');
var options = {};
options.mode = 'Download';
diagram.exportDiagram(options);
```

## Exporting options

Diagram provides support to export the desired region of the diagram to desired formats.

## File Name

[`FileName`](../api/diagram/iExportOptions#fileName-string) is the name of the file to be downloaded. By default, the file name is set to **Diagram**.

## Format

[`Format`](../api/diagram/iExportOptions#format-fileformat) is to specify the type/format of the exported file. By default, the diagram is exported as .jpg format. You can export diagram to the following formats:

* JPG
* PNG
* BMP
* SVG

```javascript
var diagram = new ej.diagrams.Diagram({
    width: 1500, height: 1500
},'#element');
var options = {};
options.mode = 'Download';
options.format = 'SVG';
diagram.exportDiagram(options);
```

## Margin

[`Margin`](../api/diagram/iExportOptions#margin-marginmodel) specifies the amount of space that has to be left around the diagram.

<!-- markdownlint-disable MD033 -->

```javascript
var diagram = new ej.diagrams.Diagram({
    width: 1500, height: 1500
},'#element');
var options = {};
options.mode = 'Download';
options.margin = { left: 10, right: 10, top: 10, bottom: 10};
options.fileName = 'format';
options.format = 'SVG';
diagram.exportDiagram(options);
```

## Mode

[`Mode`](../api/diagram/iExportOptions#mode-exportmodes) specifies whether the diagram will be exported as files or get base64 data(ImageURL/SVG). The export options are as follows:

* Download: Exports and downloads the diagram as image/SVG.
* Data: return a base64 string.

The following code example illustrates how to export the diagram as raw data.

```javascript
var diagram = new ej.diagrams.Diagram({
    width: 1500, height: 1500
},'#element');
var options = {};
options.mode = 'Data';
options.margin = { left: 10, right: 10, top: 10, bottom: 10};
options.fileName = 'format';
options.format = 'SVG';
var base64data = diagram.exportDiagram(options);
```

## Region

You can export any particular [`region`](../api/diagram/iExportOptions#region-diagramregions) of the diagram and it is categorized into three types as follows.

* PageSettings
* Content
* CustomBounds

## PageSettings

Diagram is exported based on the given PageSettings width and height. The Properties available in page settings are as follows.
* width
* height
* margin
* orientation
* boundaryConstraints
* background
* multiplePage
* showPageBreaks
* fitOptions

### boundaryConstraints

Defines the editable region of the diagram.
* Infinity - Allow the interactions to take place at  infinite height and width.
* Diagram - Allow the interactions to take place around the diagram’s height and width.
* Page - Allow the interactions to take place around the page’s height and width.

### multiplePage

While setting multiple pages as false, the diagram is exported as a single image and while setting multiple pages as true, the diagram is exported as a separate image based on width and height.

The following code example illustrates how to export the region occupied by the diagram elements.

```javascript
var diagram = new ej.diagrams.Diagram({
    width: 1500, height: 1500
},'#element');
var options = {};
options.mode = 'Download';
options.margin = { left: 10, right: 10, top: 10, bottom: 10};
options.fileName = 'format';
options.format = 'SVG';
options.region = 'PageSettings';
diagram.exportDiagram(options);
```

## Content

The diagram content alone will be exported as an image.

The following code example illustrates how to export the region occupied by the diagram elements.

```javascript
var diagram = new ej.diagrams.Diagram({
    width: 1500, height: 1500
},'#element');
var options = {};
options.mode = 'Download';
options.margin = { left: 10, right: 10, top: 10, bottom: 10};
options.fileName = 'format';
options.format = 'SVG';
options.region = 'Content';
diagram.exportDiagram(options);
```

## Custom bounds

Diagram provides support to export any specific region of the diagram by using [`bounds`](../api/diagram/iExportOptions#bounds-rect).

The following code example illustrates how to export the region occupied by the diagram elements.

```ts

var diagram = new ej.diagrams.Diagram({
    width: 1500, height: 1500
},'#element');
var options = {};
options.mode = 'Download';
options.margin = { left: 10, right: 10, top: 10, bottom: 10};
options.fileName = 'region';
options.format = 'SVG';
options.region = 'CustomBounds';
options.bounds.x = 10;
options.bounds.y = 10;
options.bounds.height = 100;
options.bounds.width = 100;
diagram.exportDiagram(options);
```

## Export diagram with stretch option

Diagram provides support to export the diagram as image for [`stretch`](../api/diagram/iExportOptions#stretch-stretch) option. The exported images will be clearer but larger in file size.

The following code example illustrates how to export the region occupied by the diagram elements.

```javascript
var diagram = new ej.diagrams.Diagram({
    width: 1500, height: 1500
},'#element');
var options = {};
options.mode = 'Download';
options.margin = { left: 10, right: 10, top: 10, bottom: 10};
options.fileName = 'region';
options.format = 'SVG';
options.region = 'Content';
options.stretch = 'Stretch';
diagram.exportDiagram(options);
```

## Print

The client-side method [`print`](../api/diagram#print) helps to print the diagram as image.

| Name | Type | Description|
|-------- | -------- | -------- |
| region | enum | Sets the region of the diagram to be printed. |
| bounds | object | Prints any custom region of diagram. |
| stretch| enum | Resizes the diagram content to fill its allocated space and printed.|
| multiplePage | boolean | Prints the diagram into multiple pages. |
| pageWidth | number | Sets the page width of the diagram while printing the diagram into multiple pages. |
| pageHeight| number | Sets the page height of the diagram while printing the diagram into multiple pages.|
| pageOrientation | enum | Sets the orientation of the page. |

The following code example illustrates how to export the region occupied by the diagram elements.

```ts

var diagram = new ej.diagrams.Diagram({
    width: 1500, height: 1500
},'#element');
var options = {};
    options.mode = 'Download';
    options.region = 'PageSettings';
    options.multiplePage = true;
    options.pageHeight = 300;
    options.pageWidth = 300;
    diagram.print(options);
```

## Limitations

We have a limitation in exporting the image with HTML and Native node.  So, Syncfusion Essential PDF library is used, which supports HTML Content to Image conversion by using the advanced Qt WebKit rendering engine. You can refer to the following KB link for more details.
[`https://www.syncfusion.com/kb/13298/how-to-print-or-export-the-html-and-native-node-into-image-format`]