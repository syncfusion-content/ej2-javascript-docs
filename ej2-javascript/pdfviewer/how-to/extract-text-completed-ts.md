---
layout: post
title: extractTextCompleted Event in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about extractTextCompleted Event in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Extract text 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Extract text in ##Platform_Name## Pdfviewer control using extractTextCompleted event

To extract text in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF viewer, you can use the [**isExtractText**](https://helpej2.syncfusion.com/documentation/api/pdfviewer/#isextracttext) property and [**extractTextCompleted**](https://helpej2.syncfusion.com/documentation/api/pdfviewer/#extracttextcompleted) event.This allows you to extract the text from a page along with the bounds.

Here is an example of how you can use the **isExtractText** property and **extractTextCompleted** event:

```ts

viewer.isExtractText = true;
viewer.extractTextCompleted = args => {
    //Extract the Complete text of load document
    console.log(args);
    console.log(args.documentTextCollection[1]);
    //Extract the Text data.
    console.log(args.documentTextCollection[1][1].textData);
    //Extract Text in the Page.
    console.log(args.documentTextCollection[1][1].pageText);
    //Extracts the first text of the PDF document along with its bounds
    console.log(args.documentTextCollection[1][1].textData[0].Bounds);
};

```

Find the sample [how to extract Text](https://stackblitz.com/edit/3xmbg6-m3ff47?devtoolsheight=33&file=index.ts)