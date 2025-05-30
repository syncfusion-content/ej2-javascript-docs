---
layout: post
title: Deploy document editor component for mobile in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Deploy document editor component for mobile in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Deploy document editor component for mobile 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Deploy document editor component for mobile in ##Platform_Name## Document editor control

## Document editor component for Mobile

At present, Document editor component is not responsive for mobile, and we haven't ensured the editing functionalities in mobile browsers. Whereas it works properly as a document viewer in mobile browsers.

Hence, it is recommended to switch the Document editor component as read-only in mobile browsers. Also, invoke [`fitPage`](../../api/document-editor/#fitpage) method with [`FitPageWidth`](../../api/document-editor/pageFitType/) parameter in document change event, such as to display one full page by adjusting the zoom factor.

The following example code illustrates how to deploy Document Editor component for Mobile.

```ts
//Initialize Document Editor Container component.
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);
let container: DocumentEditorContainer = new DocumentEditorContainer({
    enableToolbar: true, height: '590px'
});
container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
container.appendTo('#DocumentEditor');

//To detect the device
let isMobileDevice: bool = /Android|Windows Phone|webOS/i.test(navigator.userAgent);

container.documentChange = () => {
    if (isMobileDevice) {
        container.restrictEditing = true;
        setTimeout(() => {
            container.documentEditor.fitPage("FitPageWidth");
        }, 50);
    }
    else {
        container.restrictEditing = false;
    }
}
```

> The Web API hosted link `https://services.syncfusion.com/js/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

You can download the complete working example from this [GitHub location](https://github.com/SyncfusionExamples/Deploy-Document-Editor-in-Mobile-Friendly-Web-page/)

>Note: You can use the [`restrictEditing`](../../api/document-editor-container#restrictediting) in DocumentEditorContainer and [`isReadOnly`](../../api/document-editor/#isreadonly) in DocumentEditor based on your requirement to change component to read only mode.