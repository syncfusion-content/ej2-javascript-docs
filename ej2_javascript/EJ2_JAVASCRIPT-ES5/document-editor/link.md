---
title: "Hyperlink"
component: "DocumentEditor"
description: "Learn how to insert, delete, or navigate links in JavaScript document editor."
---

# Hyperlink

Document Editor supports hyperlink field. You can link a part of the document content to Internet or file location, mail address, or any text within the document.

## Navigate a hyperlink

Document Editor triggers ‘requestNavigate’ event whenever user clicks Ctrl key or tap a hyperlink within the document. This event provides necessary details about link type, navigation URL, and local URL (if any) as arguments, and allows you to easily customize the hyperlink navigation functionality. Refer to the following example.

{% tab template="document-editor/hyperlink",es5Template="link" , sourceFiles="index.ts,index.html" %}

```typescript
import { DocumentEditor, SfdtExport, Selection, RequestNavigateEventArgs } from '@syncfusion/ej2-documenteditor';

//Inject require modules.
DocumentEditor.Inject(Selection, SfdtExport);
//Initilize the Document Editor component.
let documenteditor: DocumentEditor = new DocumentEditor({ enableSelection: true, height: '370px' });
documenteditor.appendTo('#DocumentEditor');

// Add event listener for requestNavigate event to customize hyperlink navigation functionality
documenteditor.requestNavigate = (args: RequestNavigateEventArgs) => {
    if (args.linkType !== 'Bookmark') {
        let link: string = args.navigationLink;
        if (args.localReference.length > 0) {
            link += '#' + args.localReference;
        }
        //Navigate to the selected URL.
        window.open(link);
        args.isHandled = true;
    }
};

```

{% endtab %}

If the selection is in hyperlink, trigger this event by calling ‘navigateHyperlink’ method of ‘Selection’ instance. Refer to the following example.

```typescript
documenteditor.selection.navigateHyperlink();
```

## Copy link

Document Editor copies link text of a hyperlink field to the clipboard if the selection is in hyperlink. Refer to the following example.

```typescript
documenteditor .selection.copyHyperlink();
```

## Add hyperlink

To create a basic hyperlink in the document, press `ENTER` / `SPACEBAR` / `SHIFT + ENTER` / `TAB` key after typing the address, for instance `http://www.google.com`. Document Editor automatically converts this address to a hyperlink field. The text can be considered as a valid URL if it starts with any of the following.

> `<http://>`<br>
> `<https://>`<br>
> `file:///`<br>
> `www.`<br>
> `mailto:`<br>

Refer to the following example.

{% tab template="document-editor/hyperlink",es5Template="hyperlink" , sourceFiles="index.ts,index.html" %}

```typescript
import { DocumentEditor, SfdtExport, Selection, Editor, RequestNavigateEventArgs } from '@syncfusion/ej2-documenteditor';
DocumentEditor.Inject(Selection, SfdtExport, Editor);
let documenteditor: DocumentEditor = new DocumentEditor({ height: '370px', isReadOnly: false, enableSelection: true, enableEditor: true });
documenteditor.appendTo('#DocumentEditor');

// Add event listener for requestNavigate event to customize hyperlink navigation functionality.
documenteditor.requestNavigate = (args: RequestNavigateEventArgs) => {
    if (args.linkType !== 'Bookmark') {
        let link: string = args.navigationLink;
        if (args.localReference.length > 0) {
            link += '#' + args.localReference;
        }
        window.open(link);
        args.isHandled = true;
    }
};

```

{% endtab %}

Also Document Editor expose API [`insertHyperlink()`](../api/document-editor/editor/#inserthyperlink)to insert hyperlink.

Refer to the following sample code.

```typescript
documenteditor.insertHyperlink('https://www.google.com', 'Google');
```

## Customize screen tip

You can customize the screen tip text for the hyperlink by using below sample code.

```typescript
documenteditor.insertHyperlink('https://www.google.com', 'Google', '<<Screen tip text>>');
```

Screen tip text can be modified through UI by using the [Hyperlink dialog](../document-editor/dialog#hyperlink-dialog/)

![Add or modify the screen tip text for hyperlinks in a Word document.](images/screentip.png)

## Remove hyperlink

To remove link from hyperlink in the document, press Backspace key at the end of a hyperlink. By removing the link, it will be converted as plain text. You can use ‘removeHyperlink’ method of ‘Editor’ instance if the selection is in hyperlink. Refer to the following example.

```typescript
documenteditor.editor.removeHyperlink();
```

## Hyperlink dialog

Document Editor provides dialog support to insert or edit a hyperlink. Refer to the following example.

{% tab template="document-editor/dialog",es5Template="link-dialog" , sourceFiles="index.ts,index.html" %}

```typescript
import { DocumentEditor, Editor, Selection, EditorHistory, HyperlinkDialog, SfdtExport } from '@syncfusion/ej2-documenteditor';
//Inject the required module
DocumentEditor.Inject(Editor, Selection, EditorHistory, HyperlinkDialog, SfdtExport);
let documenteditor: DocumentEditor = new DocumentEditor({
      isReadOnly: false,
      enableSelection: true,
      enableEditorHistory: true,
      enableEditor: true,
      enableHyperlinkDialog: true,
      enableSfdtExport: true,
      height: '370px'
});
//Click the hyperlink button, the hyperlink dialog will open
function showHyperlinkDialog() {
    //Open the hyperlink dialog.
    documenteditor.showDialog('Hyperlink');
}
let button: HTMLElement = document.getElementById('dialog');
button.addEventListener('click', showHyperlinkDialog)
documenteditor.appendTo('#DocumentEditor');

```

{% endtab %}

You can use the following keyboard shortcut to open the hyperlink dialog if the selection is in hyperlink.

| Key Combination | Description |
|-----------------|-------------|
|Ctrl + K | Open hyperlink dialog that allows you to create or edit hyperlink|

## See Also

* [Feature modules](../document-editor/feature-module/)
* [Hyperlink dialog](../document-editor/dialog#hyperlink-dialog/)
