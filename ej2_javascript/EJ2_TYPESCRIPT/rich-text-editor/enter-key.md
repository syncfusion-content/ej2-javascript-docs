---
title: "Rich text editor Enter and Shift-Enter Key's Customization"
component: "Rich Text Editor"
description: "This section explains how to customize the enter key and shift + enter key features in the Syncfusion JavaScript Rich Text Editor control."
---

# Enter and Shift-Enter Key's Customization

Rich Text Editor allows to customize the tag that is inserted when pressing the enter key and shift + enter key in the Rich Text Editor.

## Enter key customization

By default, the `<p>` tag will be created while pressing the enter key. The enter key can be customized by using the [`enterKey`](../api/rich-text-editor/#enterkey) property, where the possible tags that can be used to customize are `<p>`, `<div>`, and `<br>`.

When the enter key is customized with any of the possible values, pressing the enter key in the editor will create a new tag that is configured. Also, when the enter key is configured the default value of the Rich Text Editor will also change respectively with the configured values.

{% tab template="rich-text-editor/enter-key", es5Template="enter-key" %}

```typescript
import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';

RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

 let defaultRTE: RichTextEditor = new RichTextEditor({
    value: `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`,
    height: 250
});
defaultRTE.appendTo('#defaultRTE');

let enterListObj: DropDownList = new DropDownList({
    placeholder: 'When pressing the enter key',
    floatLabelType: 'Always',
    change: (args: any) => {
        if (enterListObj.value === 'DIV') {
            defaultRTE.enterKey = 'DIV';
            defaultRTE.value = `<div>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</div><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        } else if (enterListObj.value === 'BR') {
            defaultRTE.enterKey = 'BR';
            defaultRTE.value = `In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:<ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        } else {
            defaultRTE.enterKey = 'P'
            defaultRTE.value = `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        }
    }
});
enterListObj.appendTo('#enterOption');

```

{% endtab %}

## Shift-Enter key customization

By default, the `<br>` tag will be created while pressing the shift + enter key. The shift + enter key can be customized by using the [`shiftEnterKey`](../api/rich-text-editor/#shiftEnterkey) property where the possible tags that can be used to customize are `<br>`, `<p>`, `<div>`.  

When the shift + enter key is customized with any of the possible values, pressing the shift + enter key in the editor will create a new tag that is configured. Also, when the shift + enter key is configured the default value of the Rich Text Editor will change respectively with the configured values.

{% tab template="rich-text-editor/shift-enter-key", es5Template="shift-enter-key" %}

```typescript
import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';

RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

 let defaultRTE: RichTextEditor = new RichTextEditor({
    value: `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`,
    height: 250
});
defaultRTE.appendTo('#defaultRTE');

 let shiftEnterlistObj: DropDownList = new DropDownList({
    placeholder: 'When pressing the shift + enter key',
    floatLabelType: 'Always',
    change: (args: any) => {
        if (shiftEnterlistObj.value === 'DIV') {
            defaultRTE.shiftEnterKey = 'DIV'
        } else if (shiftEnterlistObj.value === 'P') {
            defaultRTE.shiftEnterKey = 'P'
        } else {
            defaultRTE.shiftEnterKey = 'BR'
        }
    }
});
shiftEnterlistObj.appendTo('#shiftEnterOption');

```

{% endtab %}