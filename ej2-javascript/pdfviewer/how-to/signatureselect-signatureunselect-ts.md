---
layout: post
title: Selection events in ##Platform_Name## PDF Viewer control | Syncfusion
description: Learn here all about SignatureSelect and SignatureUnselect event in Syncfusion ##Platform_Name## PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: PDF Viewer
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# SignatureSelect and SignatureUnselect event

The Syncfusion PDF Viewer provides event-handling capabilities for various actions, including selecting and unselecting handwritten signatures. The [signatureSelect](https://ej2.syncfusion.com/documentation/api/pdfviewer/#signatureselect) and [signatureUnselect](https://ej2.syncfusion.com/documentation/api/pdfviewer/#signatureselect) events enable developers to programmatically manage the selection state of signatures within the PDF Viewer component.

**signatureSelect** 

The `signatureSelect` event triggers when a handwritten signature annotation is selected. This event allows developers to capture the signature selection and handle it programmatically, such as updating the UI or storing the selection data for further processing.

**signatureUnselect**

The `signatureUnselect` event triggers when a handwritten signature annotation is unselected. This event enables developers to manage the unselection programmatically, which can be useful for tasks like cleanup operations or updating the application's state to reflect that a signature is no longer selected.

The code snippet demonstrates how to subscribe to the [signatureSelect](https://ej2.syncfusion.com/documentation/api/pdfviewer/#signatureselect) and [signatureUnselect](https://ej2.syncfusion.com/documentation/api/pdfviewer/#signatureunselect) events in the Syncfusion PDF Viewer component.

```ts

pdfviewer.signatureSelect = (args: any) => {
    console.log('Signature selected:', args);
 };
 
pdfviewer.signatureUnselect = (args: any) => {
    console.log('Signature selected:', args);
};

```

The `signatureSelect` and `signatureUnselect` events in Syncfusion PDF Viewer offer robust options for managing the state of handwritten signatures within your application. By handling these events, developers can create a more interactive and dynamic user experience, responding programmatically to signature selection and unselection.

[View sample in GitHub]()