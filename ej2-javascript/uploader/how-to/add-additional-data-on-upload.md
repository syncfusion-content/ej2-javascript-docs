---
layout: post
title: Add additional data on upload in ##Platform_Name## File Upload | Syncfusion
description: Learn how to send additional form data with each upload in the Syncfusion ##Platform_Name## File Upload using the uploading event and the customFormData argument.
platform: ej2-javascript
control: Add additional data on upload 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add additional data on upload in ##Platform_Name## File Upload

The uploader component allows you to add additional data on file upload, which is used to get in the server-side. By using [uploading](../../api/uploader/#uploading) event and its customFormData argument, you can achieve this behavior. Refer to the following example.

In the following code snippet, explains about how to add additional data on file upload.

```ts
import { Uploader } from '@syncfusion/ej2-inputs';


let uploadObj: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    uploading: onFileUpload

});
uploadObj.appendTo('#fileupload');

function onFileUpload(args: any) {
    // add addition data as key-value pair.
    args.customFormData = [{'name': 'Syncfusion INC'}];
}
```

## Server side for adding additional data

```c#
    // Get the additional data in server end by corresponding key.
    var data = HttpContext.Current.Request.Form["name"];
```

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.