---
title: "Bookmarks"
component: "DocumentEditor"
description: "Learn how to add, delete, or navigate bookmarks in JavaScript Document Editor."
---

# Bookmarks

Bookmark is a powerful tool that helps you to mark a place in the document to find again easily. You can enter many bookmarks in the document and give each one a unique name to identify easily.

Document Editor provides built-in dialog to add, delete, and navigate bookmarks within the document. To add a bookmark, select a portion of text in the document. After that, jump to the location or add links to it within the document using built-in hyperlink dialog. You can also delete bookmarks from a document.

>Bookmark names need to begin with a letter. They can include both numbers and letters, but not spaces. To separate the words, use an underscore.
>Bookmark names starting with an underscore are called hidden bookmarks. For example, bookmarks generated for table of contents.

## Add bookmark

Using [`insertBookmark`](../api/document-editor/editor/#insertBookmark) method, Bookmark can be added to the selected text.

```csharp
container.documentEditor.editor.insertBookmark("Bookmark1");
```

## Select Bookmark

You can select the bookmark in the document using [`selectBookmark`](../api/document-editor/selection/#selectBookmark) method by providing Bookmark name to select as shown in the following code snippet.

```csharp
container.documentEditor.selection.selectBookmark("Bookmark1");
```

## Delete Bookmark

You can delete bookmark in the document using [`deleteBookmark`](../api/document-editor/editor/#deleteBookmark) method as shown in the following code snippet.

```csharp
container.documentEditor.editor.deleteBookmark("Bookmark1");
```

## Get Bookmark

You can get all the bookmarks in the document using [`getBookmarks`](../api/document-editor/selection/#getBookmarks) method as shown in the following code snippet.

```csharp
container.documentEditor.selection.getBookmarks(false);
```

>Note: Parameter denotes is include hidden bookmarks. If false, ignore hidden bookmark.

## Bookmark Dialog

The following example shows how to open bookmark dialog in Document Editor.

{% tab template="document-editor/dialog",es5Template="bookmark-dialog" , sourceFiles="index.ts,index.html" %}

```typescript

import { DocumentEditor, Editor, Selection, SfdtExport, EditorHistory, BookmarkDialog } from '@syncfusion/ej2-documenteditor';

// Enable requir modules
DocumentEditor.Inject(Editor, Selection, SfdtExport, EditorHistory, BookmarkDialog);

// Initialize Document Editor component.
let documenteditor: DocumentEditor = new DocumentEditor({
      isReadOnly: false,
      enableEditor: true,
      enableSelection: true,
      enableEditorHistory: true,
      enableBookmarkDialog: true,
      height: '590px'
});
documenteditor.appendTo('#DocumentEditor');

document.getElementById('dialog').addEventListener('click', () => {
    //Open bookmark dialog.
    documenteditor.showDialog('Bookmark');
});

```

{% endtab %}

## See Also

* [Feature modules](../document-editor/feature-module/)
* [Bookmark dialog](../document-editor/dialog#bookmark-dialog/)
