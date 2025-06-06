---
layout: post
title: Find Text Async in Syncfusion ##Platform_Name## Pdfviewer Control | Syncfusion
description: Learn about the `findTextAsync` in Syncfusion #Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Find Text Async
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---


# Find Text using findTextAsync Method in Syncfusion ##Platform_Name## PdfViewer Control

The findTextAsync method in the Syncfusion PdfViewer control allows you to search for specific text or an array of strings asynchronously within a PDF document. The method returns the bounding rectangles for each occurrence of the search term, allowing you to find and work with text positions in the document.

Here is an example of how you can use the **findTextAsync** method:

Example 1: Search for a single string ('pdf') with a case-insensitive search across all pages

```html
 <button id="findText">Find Text</button>
 <button id="findTexts">Find Texts</button>
```
```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: "https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib",
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
  pdfviewer.appendTo('#PdfViewer');

document.getElementById('findText').addEventListener('click', function () {
  pdfviewer.textSearchModule.findTextAsync('pdf', false).then(res => {
      console.log(res);  // Logs the search result for the term 'pdf'
  });
});
```
Example 2: Search for multiple strings (['pdf', 'the']) with a case-insensitive search across all pages
```js
document.getElementById('findTexts').addEventListener('click', function () {
  pdfviewer.textSearchModule.findTextAsync(['pdf', 'the'], false).then(res => {
      console.log(res);  // Logs the search result for the terms 'pdf' and 'the'
  });
});
```

### Description:

The `findTextAsync` method is designed for performing an asynchronous text search within a PDF document. You can use it to search for a single string or multiple strings, with the ability to control case sensitivity. By default, the search is applied to all pages of the document. However, you can adjust this behavior by specifying the page number (pageIndex), which allows you to search only a specific page if needed.

### Parameters:

**text (string | string[]):**

The text or an array of texts you want to search for in the document.

**matchCase (boolean):**

Indicates whether the search should be case-sensitive.
When set to true, the search will match the exact case.
When set to false, the search will ignore case differences.

**pageIndex (optional, number):**

Specifies the page number (zero-based index) to search within the document.
If not provided, the search will be performed across all pages in the document.
For example, passing 0 would search only the first page of the document.

### Example Workflow:

**findTextAsync('pdf', false):**
This will search for the term "pdf" in a case-insensitive manner across all pages of the document.

**findTextAsync(['pdf', 'the'], false):**
This will search for the terms "pdf" and "the" in a case-insensitive manner across all pages of the document.

**findTextAsync('pdf', false, 0):**
This will search for the term "pdf" in a case-insensitive manner only on the first page (page 0).

**findTextAsync(['pdf', 'the'], false, 1):**
This will search for the terms "pdf" and "the" in a case-insensitive manner only on the second page (page 1).

[View Sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)