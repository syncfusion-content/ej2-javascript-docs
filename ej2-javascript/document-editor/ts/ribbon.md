---
layout: post
title: Ribbon in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about the Ribbon UI in Syncfusion ##Platform_Name## Document editor control, how to switch between Ribbon and Toolbar modes.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon in ##Platform_Name## Document Editor Control

The Document Editor provides a modern Ribbon interface similar to Microsoft Word's interface. This Ribbon UI provides an efficient and intuitive way to access editing features, organizing commands within well-structured tabs and groups to enhance your document editing experience. Additionally, the Ribbon interface supports contextual tabs. Contextual tabs appear only when certain elements, such as tables, images, or headers/footers, are selected in the document.

You can switch between the classic **Toolbar** and the new **Ribbon** UI, and you can also choose between **Classic** and **Simplified** ribbon layouts.

## Enable Ribbon Mode

To enable Ribbon in Document Editor, use the [`toolbarMode`](../api/document-editor-container/#toolbarmode) property of `DocumentEditorContainer`. The available toolbar modes are:

- **'Toolbar'** - The traditional toolbar UI.
- **'Ribbon'** - The Ribbon UI, which provides a tabbed interface with grouped commands.

By default, `toolbarMode` is `Toolbar`.

The following code shows the how to enable the `Ribbon` in Document Editor.

```ts

import { DocumentEditorContainer, Ribbon } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Ribbon);
// Initialize the Document Editor Container with Ribbon mode enabled
var container = new ej.documenteditor.DocumentEditorContainer({
    enableToobar: true,
    toolbarMode: 'Ribbon', // Options: 'Ribbon' or 'Toolbar'
    height: '590px'
});
container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
container.appendTo('#container');
```

## Ribbon Layouts

Document Editor provides two different Ribbon layouts:

- **Classic**: A traditional Office-like ribbon with detailed grouping and larger icons
- **Simplified**: A more compact ribbon design with streamlined controls

By default, `ribbonLayout` is set to `Simplified`. 

The following code shows the how to configure the ribbon layout in Document Editor:

```ts

import { DocumentEditorContainer, Ribbon } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Ribbon);
// Initialize the Document Editor Container with Ribbon mode enabled
var container = new ej.documenteditor.DocumentEditorContainer({
    enableToobar: true,
    toolbarMode: 'Ribbon', // Options: 'Ribbon' or 'Toolbar'
    ribbonLayout: 'Classic', // Options: 'Simplified' or 'Classic'
    height: '590px'
});
container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
container.appendTo('#container');
```

## See Also

* [How to customize the ribbon](../document-editor/how-to/customize-ribbon)