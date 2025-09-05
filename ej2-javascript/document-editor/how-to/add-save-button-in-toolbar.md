---
layout: post
title: Add save button in ##Platform_Name## Document editor toolbar | Syncfusion
description: Learn here to add save button in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Add save button tool bar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add save button in ##Platform_Name## Document editor toolbar

## To add a save button to the existing toolbar in DocumentEditorContainer

DocumentEditorContainer allows you to add a new button to the existing items in a toolbar using [`CustomToolbarItemModel`](../../api/document-editor/customToolbarItemModel/) and with existing items in [`toolbarItems`](../../api/document-editor-container/#toolbaritems) property. Newly added item click action can be defined in [`toolbarclick`](../../api/toolbar/clickEventArgs/).

{% if page.publishingplatform == "typescript" %}
```ts
import { DocumentEditorContainer, CustomToolbarItemModel, Toolbar } from '@syncfusion/ej2-documenteditor';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
DocumentEditorContainer.Inject(Toolbar);

let hostUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
let toolItem: CustomToolbarItemModel = {
    prefixIcon: "e-save icon",
    tooltipText: "Save the Document",
    text: "Save",
    id: "save"
};

//Initialize Document Editor Container component with custom toolbar item.
let container: DocumentEditorContainer = new DocumentEditorContainer({
    toolbarItems: ['New', 'Open', toolItem, 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl'], serviceUrl:hostUrl, height:'590px',
});
container.appendTo('#container');
//To handle custom toolbar click event.
container.toolbarClick = (args: ClickEventArgs): void => {
    switch (args.item.id) {
        case 'save':
            //Save the document(Download the document)
            container.documentEditor.save('sample', 'Docx');
            break;
    }
};
{% elsif page.publishingplatform == "javascript" %}
ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
var hostUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
let toolItem = {
    prefixIcon: "e-save icon",
    tooltipText: "Save the Document",
    text: "Save",
    id: "save"
};

var container = new ej.documenteditor.DocumentEditorContainer({ toolbarItems: ['New', 'Open', toolItem, 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields', 'ContentControl'], serviceUrl: hostUrl, height: '590px' });

container.appendTo("#container");
//To handle custom toolbar click event.
container.toolbarClick = (args) => {
    switch (args.item.id) {
        case 'save':
            //Save the document(Download the document)
            container.documentEditor.save('sample', 'Docx');
            break;
    }
};
{% endif %}
```
> The Web API hosted link `https://services.syncfusion.com/js/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

>Note: Default value of `toolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']`.