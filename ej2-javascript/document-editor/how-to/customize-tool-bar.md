---
layout: post
title: Customize tool bar in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Customize tool bar in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize tool bar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize tool bar in ##Platform_Name## Document editor control

## How to customize existing toolbar in DocumentEditorContainer

DocumentEditorContainer allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can defined by [`CustomToolbarItemModel`](../../api/document-editor/customToolbarItemModel/) and with existing items in [`toolbarItems`](../../api/document-editor-container/#toolbaritems) property. Newly added item click action can be defined in [`toolbarclick`](../../api/toolbar/clickEventArgs/).

* Show, Hide - Existing items can be shown or hidden using the [`toolbarItems`](../../api/document-editor-container/#toolbaritems) property. Pre-defined toolbar items are available with [`ToolbarItem`](../../api/document-editor/toolbarItem/).

* Enable, Disable -  Toolbar items can be enabled or disable using [`enableItems`](../../api/document-editor-container/toolbar/#enableItems)

```ts
let toolItem: CustomToolbarItemModel = {
    prefixIcon: "e-de-ctnr-lock",
    tooltipText: "Disable Image",
    text: "Disable Image",
    id: "Custom"
};

//Initialize Document Editor Container component with custom toolbar item.
let container: DocumentEditorContainer = new DocumentEditorContainer({
    toolbarItems: [toolItem, 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'Comments', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'Separator', 'Find', 'Separator', 'LocalClipboard', 'RestrictEditing']
});

//To handle custom toolbar click event.
container.toolbarClick = (args: ClickEventArgs): void => {
    switch (args.item.id) {
        case 'Custom':
            //Disable image toolbar item.
            container.toolbar.enableItems(4, false);
            break;
    }
};
```

>Note: Default value of `toolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields']`.