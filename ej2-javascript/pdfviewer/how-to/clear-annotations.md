---
layout: post
title: Clear annotations in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Clear annotations in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Clear annotations 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Clear annotations in ##Platform_Name## Pdfviewer control

To clear all the annotations in a PDF document using the Syncfusion PDF Viewer, you can use the **deleteAnnotations** method. This method is used to clear all the annotations present in the currently loaded document.

Here is an example of how you can clear all the annotations present in the currently loaded document:

```

 <button id="deleteAnnotations">Delete Annotations</button>

```

```ts

//clear Annotations.
document.getElementById('deleteAnnotations').addEventListener('click',()=> {
  viewer.deleteAnnotations();
})

```

We can also delete specific annotations with the **deleteAnnotationById()** method. This method is used to delete a specific annotation using its id.

Here is an example of how you can delete specific annotations with the **deleteAnnotationById** method:

```

 <button id="deleteAnnotationbyId">Delete Annotation By Id</button>

```

```ts

//Delete Annotation by ID.
document.getElementById('deleteAnnotationbyId').addEventListener('click', () => {
    viewer.annotationModule.deleteAnnotationById(
      viewer.annotationCollection[0].annotationId
    );
});

```

Find the sample [how to clear annotations using deleteAnnotations](https://stackblitz.com/edit/typescript-86gwqu?file=index.ts)