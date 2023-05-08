---
layout: post
title: Add header value in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Add header value in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Add header value 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add header value in ##Platform_Name## Pdfviewer control

To add header values to an AJAX request made by a Syncfusion PDF Viewer, you can use the **ajaxHeaders** property available in the **ajaxRequestSettings** module of the PDF Viewer. This property allows you to specify custom headers for the AJAX request.

Here is an example of how you can use the **ajaxRequestSettings** property to add a custom header to an AJAX request made by the PDF Viewer:

```ts

viewer.ajaxRequestSettings = {
   ajaxHeaders: [
      {
         headerName: "Authorization",

         headerValue: "Bearer 64565dfgfdsjweiuvbiuyhiueygf"
      }
   ],

   withCredentials: false
};

```

Find the sample [how to add custom headers in AjaxRequestSettings](https://stackblitz.com/edit/typescript-nv1way?file=index.ts)