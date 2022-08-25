---
title: "Rich text editor Toolbar configuration"
component: "Rich Text Editor"
description: "This section for Syncfusion JavaScript Rich Text Editor control explains the toolbar which provides a set of commands for editing and formatting the content."
---

# Toolbar

The Rich Text Editor toolbar contains a collection of tools such as bold, italic, and text alignment buttons that are used to format the content. However, in most integrations, you can customize the toolbar configurations easily to suit your needs.

To create Rich Text Editor with Markdown editing feature, inject the [`Toolbar`](../api/rich-text-editor/toolbar/#toolbar) module to the Rich Text Editor using the `RichTextEditor.Inject(Toolbar)` method.

The Rich Text Editor allows you to configure different types of toolbar using [`toolbarSettings.type`](../api/rich-text-editor/toolbarType/#toolbartype) property. The types of toolbar are:

1. Expand
2. MultiRow

## Expand Toolbar

The default mode of [`toolbarSettings.type`](../api/rich-text-editor/toolbarType/#toolbartype) it will hide the overflowing items in the next row. By clicking the expand arrow, view the overflowing toolbar items.

{% tab template="rich-text-editor/toolbar", es5Template="expand" %}

```typescript

import { RichTextEditor, Toolbar, HtmlEditor } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, HtmlEditor);

let defaultRTE: RichTextEditor = new RichTextEditor({
    height: 340,
    value: ` <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p>
        <p><b>Key features:</b></p>
            <ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li>
            <li><p>Capable of handling markdown editing.</p></li>
            <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
            <li><p>Provides a fully customizable toolbar.</p></li>
            <li><p>Provides HTML view to edit the source directly for developers.</p></li>
            <li><p>Supports third-party library integration.</p></li>
            <li><p>Allows preview of modified content before saving it.</p></li>
            <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
            </ul>`,
    toolbarSettings: {
        type: 'Expand'
    }});
defaultRTE.appendTo('#defaultRTE');

```

{% endtab %}

## Multi-row Toolbar

Set the type as MultiRow in [`toolbarSettings`](../api/rich-text-editor/toolbarSettings/#toolbarsettings) to hide the overflowing items in the next row. All toolbar items are visible.

{% tab template="rich-text-editor/toolbar", es5Template="multirow" %}

```typescript

import { RichTextEditor, Toolbar, HtmlEditor } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, HtmlEditor);

let defaultRTE: RichTextEditor = new RichTextEditor({
  height: 340,
  value: ` <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p>
      <p><b>Key features:</b></p>
        <ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li>
        <li><p>Capable of handling markdown editing.</p></li>
        <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
        <li><p>Provides a fully customizable toolbar.</p></li>
        <li><p>Provides HTML view to edit the source directly for developers.</p></li>
        <li><p>Supports third-party library integration.</p></li>
        <li><p>Allows preview of modified content before saving it.</p></li>
        <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
        <li><p>Contains undo/redo manager.</p></li>
        <li><p>Creates bulleted and numbered lists.</p></li>
        </ul>`,
  toolbarSettings: {
    type: 'MultiRow'
  }});
defaultRTE.appendTo('#defaultRTE');

```

{% endtab %}

## Floating Toolbar

By default, toolbar is float at the top of the Rich Text Editor on scrolling. It can be customized by specifying the offset of the floating toolbar from documents top position using  [`floatingToolbarOffset`](../api/rich-text-editor/#floatingtoolbaroffset).

Enable or disable the floating toolbar using [`enableFloating`](../api/rich-text-editor/toolbarSettings/#enablefloating) of the [`toolbarSettings`](../api/rich-text-editor/toolbarSettings/#toolbarsettings) property.

{% tab template="rich-text-editor/floating-toolbar", es5Template="floating" %}

```typescript

import { RichTextEditor, Toolbar, HtmlEditor } from '@syncfusion/ej2-richtexteditor';
import { CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';

RichTextEditor.Inject(Toolbar, HtmlEditor);

let defaultRTE: RichTextEditor = new RichTextEditor({
   height: 340,
   toolbarSettings: {
      enableFloating: false
   },
   value: ` <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p>
    <p><b>Key features:</b></p>
    <ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li>
    <li><p>Capable of handling markdown editing.</p></li>
    <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
    <li><p>Provides a fully customizable toolbar.</p></li>
    <li><p>Provides HTML view to edit the source directly for developers.</p></li>
    <li><p>Supports third-party library integration.</p></li>
    <li><p>Allows preview of modified content before saving it.</p></li>
    <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
    </ul>`});
defaultRTE.appendTo('#defaultRTE');

let float: CheckBox = new CheckBox({
    // set false for enable the checked state at initial rendering
    checked: false,
    label: 'Enable Floating',
    // bind change event
    change: (args: ChangeEventArgs) => {
        defaultRTE.toolbarSettings.enableFloating = (args as any).checked;
        defaultRTE.dataBind();
    }
});
float.appendTo('#float');

```

{% endtab %}

## Toolbar items

The following table lists the tools available in the toolbar.

| Name | Icons | Summary | Initialization |
|----------------|---------|---------|------------------------------------------|
| Undo | ![Undo icon](./images/undo.png) | Allows to undo the actions.|toolbarSettings: { items: ['Undo']} |
| Redo | ![Redo icon](./images/redo.png) | Allows to redo the actions.|toolbarSettings: { items: ['Redo']}|
| Alignment | ![Alignment icon](./images/alignments.png) | Align the content with left, center, and right margin.|toolbarSettings: { items: ['Alignments']}|
| OrderedList | ![OrderedList icon](./images/order-list.png) | Create a new list item(numbered). |toolbarSettings: { items: ['OrderedList']}|
| UnorderedList | ![UnorderedList icon](./images/unorder-list.png) | Create a new list item(bulleted). |toolbarSettings: { items: ['UnorderedList']}|
| Indent | ![Indent icon](./images/increase-indent.png) | Allows to increase the indent level of the content.|toolbarSettings: { items: ['Indent']}|
| Outdent | ![Outdent icon](./images/decrease-indent.png) | Allows to decrease the indent level of the content.|toolbarSettings: { items: ['Outdent']}|
| Hyperlink | ![Hyperlink icon](./images/create-link.png) | Creates a hyperlink to a text or image to a specific location in the content.|toolbarSettings: { items: ['CreateLink']}|
| Images | ![Images icon](./images/insert-image.png) | Inserts an image from an online source or local computer. |toolbarSettings: { items: ['Image']}|
| LowerCase | ![LowerCase icon](./images/lower-case.png) | Change the case of selected text to lower in the content. |toolbarSettings: { items: ['LowerCase']}|
| UpperCase | ![UpperCase icon](./images/upper-case.png) | Change the case of selected text to upper  in the content.|toolbarSettings: { items: ['UpperCase’']}|
| SubScript | ![SubScript icon](./images/sub-script.png) | Makes the selected text as subscript (lower).|toolbarSettings: { items: ['SubScript']}|
| SuperScript | ![SuperScript icon](./images/super-script.png) | Makes the selected text as superscript (higher).|toolbarSettings: { items: ['SuperScript’']}|
| Print | ![Print icon](./images/print.png) | Allows to print the editor content. |toolbarSettings: { items: ['Print']}|
| FontName | ![FontName icon](./images/font-name.png) | Defines the fonts that appear under the Font Family DropDownList from the Rich Text Editor's toolbar. |toolbarSettings: { items: ['FontName']}|
| FontSize | ![FontSize icon](./images/font-size.png) | Defines the font sizes that appear under the Font Size DropDownList from the Rich Text Editor's toolbar.|toolbarSettings: { items: ['FontSize']}|
| FontColor | ![FontColor icon](./images/font-color.png) | Specifies an array of colors can be used in the colors popup for font color.|toolbarSettings: { items: ['FontColor']}|
| BackgroundColor | ![BackgroundColor icon](./images/background-color.png) | Specifies an array of colors can be used in the colors popup for background color.|toolbarSettings: { items: ['BackgroundColor']}|
| Format | ![Format icon](./images/formats.png) | An Object with the options that will appear in the Paragraph Format dropdown from the toolbar. |toolbarSettings: { items: ['Formats']}|
| StrikeThrough | ![StrikeThrough icon](./images/strikethrough.png) | Apply double line strike through formatting for the selected text. |toolbarSettings: { items: ['StrikeThrough']}|
| ClearFormat | ![ClearFormat icon](./images/clear-format.png) | The clear format tool is useful to remove all formatting styles (such as bold, italic, underline, color, superscript, subscript, and more) from currently selected text. As a result, all the text formatting will be cleared and return to its default formatting styles.|toolbarSettings: { items: ['ClearFormat']}|
| FullScreen | ![FullScreen icon](./images/maximize.png) | Stretches the editor to the maximum width and height of the browser window.|toolbarSettings: { items: ['FullScreen']}|
| SourceCode | ![SourceCode icon](./images/code-view.png)  | Rich Text Editor includes the ability for users to directly edit HTML code via “Source View”. If you made any modification in Source view directly, synchronize with Design view.|toolbarSettings: { items: ['SourceCode']}|
| NumberFormatList | ![NumberFormatList icon](./images/number-format.png) | Allows to create list items with various list style types(numbered).|toolbarSettings: { items: ['NumberFormatList']}|
| BulletFormatList | ![BulletFormatList icon](./images/bullet-format.png) | Allows to create list items with various list style types(bulleted).|toolbarSettings: { items: ['BulletFormatList']}|
| JustifyLeft | ![JustifyLeft icon](./images/align-left.png) | Allows each line to begin at the same distance from the editor’s left-hand side. | toolbarSettings: { items: ['JustifyLeft']} |
| JustifyCenter | ![JustifyCenter icon](./images/align-center.png) | There is an even space on each side of each line since the text is not aligned to the left or right margins. | toolbarSettings: { items: ['JustifyCenter']} |
| JustifyRight | ![JustifyRight icon](./images/align-right.png) | Allows each line to end at the same distance from the editor’s right-hand side. | toolbarSettings: { items: ['JustifyRight']} |
| JustifyFull | ![JustifyFull icon](./images/align-justify.png) | The text is aligned with both right and left margins. | toolbarSettings: { items: ['JustifyFull']} |
| Bold  | ![Bold icon](./images/bold.png) | Text that is thicker and darker than usual. | toolbarSettings: { items: ['Bold']} |
| Italic | ![Italic icon](./images/italic.png) | Shows a text that is leaned to the right. | toolbarSettings: { items: ['Italic']} |
| Underline | ![Underline icon](./images/under-line.png) | The underline is added to the selected text. | toolbarSettings: { items: ['Underline']} |
| ClearAll | ![ClearAll icon](./images/clear-all.png) | Removes all styles that have been applied to the selected text.| toolbarSettings: { items: ['ClearAll']} |
| Cut | ![Cut icon](./images/cut.png) | Removes the text from its current location and places it into the clipboard. | toolbarSettings: { items: ['Cut']} |
| Copy | ![Copy icon](./images/copy.png) | The selected item is copied and pasted into the clipboard. | toolbarSettings: { items: ['Copy']} |
| Paste | ![Paste icon](./images/paste.png) | Allows you to insert a clipboard item into a specific location. | toolbarSettings: { items: ['Paste']} |
| OpenLink | ![OpenLink icon](./images/open-link.png) | To open the URL link that is  attached to the selected text. | toolbarSettings: { items: ['OpenLink']} |
| EditLink | ![EditLink icon](./images/edit-link.png) | Allows you to change the URL that has been attached to a specific item. | toolbarSettings: { items: ['EditLink']} |
| CreateTable | ![CreateTable icon](./images/create-table.png) | Create a table with defined columns and rows. | toolbarSettings: { items: ['CreateTable']} |
| RemoveTable | ![RemoveTable icon](./images/table-remove.png) | Removes the selected table and its contents. | toolbarSettings: { items: ['TableRemove']} |
| Replace | ![Replace icon](./images/image-replace.png) | Replace the selected image with another image. | toolbarSettings: { items: ['Replace']} |
| Align | ![Alignment icon](./images/alignments.png) | The image can be aligned to the right, left, or center. | toolbarSettings: { items: ['Align']} |
| Remove | ![Remove icon](./images/table-remove.png) | Allows to remove the selected image from the editor. | toolbarSettings: { items: ['Remove']} |
| OpenImageLink | ![OpenImageLink icon](./images/open-link.png) | Opens the link that is attached to the selected image. | toolbarSettings: { items: ['OpenImageLink']} |
| EditImageLink | ![EditImageLink icon](./images/edit-link.png) | Allows to edit the link that is attached to the selected image. | toolbarSettings: { items: ['EditImageLink']} |
| RemoveImageLink | ![RemoveImageLink icon](./images/remove-link.png) | Removes the link that is attached to the selected image. | toolbarSettings: { items: ['RemoveImageLink']} |
| InsertLink | ![InsertLink icon](./images/create-link.png) |Allows users to add a link to a particular item. | toolbarSettings: { items: ['InsertLink']} |
| Display | ![Display icon](./images/display.png) | Allows you to choose whether an image should be shown inline or as a block. | toolbarSettings: { items: ['Display']} |
| AltText | ![AltText icon](./images/alt-text.png) | To display image description when an image on a Web page cannot be displayed. | toolbarSettings: { items: ['AltText']} |
| Dimension | ![Dimension icon](./images/dimension.png) | Allows you to customize the image’s height and width. | toolbarSettings: { items: ['Dimension']} |
| Maximize | ![Maximize icon](./images/maximize.png) | Stretches the editor to the maximum width and height of the browser window. | toolbarSettings: { items: ['Maximize']} |
| Minimize | ![Minimize icon](./images/minimize.png) | Shrinks the editor to the default width and height. | toolbarSettings: { items: ['Minimize']} |
| Preview | ![Preview icon](./images/preview.png) | Allows to see how the editor’s content looks in a browser. | toolbarSettings: { items: ['Preview']} |
| InsertCode | ![InsertCode icon](./images/insert-code.png) | Represents preformatted text which is to be presented exactly as written in the HTML file. | toolbarSettings: { items: ['InsertCode']} |
| RemoveLink | ![RemoveLink icon](./images/remove-link.png) | Allows you to remove the applied link from the selected item. | toolbarSettings: { items: ['RemoveLink']} |
| TableHeader | ![TableHeader icon](./images/table-headers.png) | Allows you to add a table header. | toolbarSettings: { items: ['TableHeader']} |
| TableColumns | ![TableColumns icon](./images/table-columns.png) | Shows the dropdown to insert a column or delete the selected column. | toolbarSettings: { items: ['TableColumns']} |
| TableRows | ![TableRows icon](./images/table-row.png) | Shows the dropdown to insert a row ors delete the selected row. | toolbarSettings: { items: ['TableRows']} |
| TableCellHorizontalAlign | ![TableCellHorizontalAlign icon](./images/alignments.png) | Allows the table cell content to be aligned horizontally. | toolbarSettings: { items: ['TableCellHorizontalAlign']} |
| TableCellVerticalAlign | ![TableCellVerticalAlign icon](./images/vertical-align.png) | Allows the table cell content to be aligned vertically. | toolbarSettings: { items: ['TableCellVerticalAlign']} |
| TableEditProperties | ![TableEditProperties icon](./images/table-edit.png) | Allows you to change the table width, padding, and cell spacing styles. | toolbarSettings: { items: ['TableEditProperties']} |

> Note: The Paste toolbar button action will not work and the clipboard will be restricted due to some limitations in the browser. Pasting copied contents into the Rich Text Editor can be done by using the Ctrl+V keyboard command.

By default, tools will be arranged in following order.

> items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']

The tools order can be customized as our application requirement. If you are not specifying any tools order, the editor will create the toolbar with default items.

## Custom tool

The Rich Text Editor allows you to configure your own commands to its toolbar using the [`toolbarSettings`](../api/rich-text-editor/toolbarSettings/#toolbarsettings) property. The command can be plain text, icon, or HTML template. The order and the group can also be defined where the command should be included. Bind the action to the command by getting its instance.

This sample shows how to add your own commands to the toolbar of the Rich Text Editor. The "Ω" command is added to insert special characters in the editor. By clicking the "Ω" command, it will show the special characters list, and then choose the character to be inserted in the editor.

The following code snippet illustrates custom tool with tooltip text which will be included in [`items`](../api/rich-text-editor/toolbarSettings/#items) field of the [`toolbarSettings`](../api/rich-text-editor/toolbarSettings/#toolbarsettings) property.

In the following sample, once Rich Text Editor control is created, the concern event will be [`created`](../api/rich-text-editor/#created) the Dialog component can be rendered and target as RTE content.

```javascript

{
    tooltipText: 'Insert Symbol',
    undo: true,
    click: function() {
    },
    template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar" style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;"> &#937;</div></button>'
}

```

Click the `Ω` command to show the special characters list, and then choose the character to be inserted in the editor.

{% tab template="rich-text-editor/custom-tool", es5Template="customtool" %}

```typescript

import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { RichTextEditor, Toolbar, Link, NodeSelection, Image, QuickToolbar, HtmlEditor } from '@syncfusion/ej2-richtexteditor';
import { Dialog } from '@syncfusion/ej2-popups';
RichTextEditor.Inject(Toolbar, Link, Image, QuickToolbar, HtmlEditor);
let dialog: Dialog;
let defaultRTE: RichTextEditor = new RichTextEditor({
   height: 340,
   value: ` <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p>
    <p><b>Key features:</b></p>
    <ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li>
    <li><p>Capable of handling markdown editing.</p></li>
    <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
    <li><p>Provides a fully customizable toolbar.</p></li>
    <li><p>Provides HTML view to edit the source directly for developers.</p></li>
    <li><p>Supports third-party library integration.</p></li>
    <li><p>Allows preview of modified content before saving it.</p></li>
    <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
    </ul>`,
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList',
            'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode',
            {
                tooltipText: 'Insert Symbol',
                undo: true,
                click: function() {
                    defaultRTE.focusIn();
                    dialog.element.style.display = '';
                    ranges = selection.getRange(document);
                    dialog.width = defaultRTE.element.offsetWidth * 0.5;
                    dialog.dataBind();
                    dialog.show();
                },
                template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar"  style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;"> &#937;</div></button>'
            }, '|', 'Undo', 'Redo'
        ]
    },
    created: onCreate
});
defaultRTE.appendTo('#defaultRTE');
let selection: NodeSelection = new NodeSelection();
let ranges: Range;

function onCreate(): void {
  let customBtn: HTMLElement = defaultRTE.element.querySelector('#custom_tbar') as HTMLElement;
  let dialogCtn: HTMLElement = document.getElementById('rteSpecial_char');
  // Initialization of Dialog
  dialog = new Dialog({
      header: 'Special Characters',
      content: dialogCtn,
      target: document.getElementById('container'),
      showCloseIcon: false,
      isModal: true,
      height: 'auto',
      width: '500px',
      overlayClick: dialogOverlay,
      buttons: [{ buttonModel: { content: "Insert", isPrimary: true }, click: onInsert }, { buttonModel: { content: 'Cancel' }, click: dialogOverlay }]
  });
  // Render initialized Dialog
  dialog.appendTo('#customTbarDialog');
  dialog.hide();
  customBtn.onclick = (e: Event) => {
    dialog.element.style.display = '';
    ranges = selection.getRange(document);
    dialog.width = defaultRTE.element.offsetWidth * 0.5;
    dialog.dataBind();
    dialog.show();
    let dialogCtn: HTMLElement = document.getElementById('rteSpecial_char');
    dialogCtn.onclick = (e: Event) => {
        let target: HTMLElement = e.target as HTMLElement;
        let activeEle: HTMLElement = dialog.element.querySelector('.char_block.e-active');
        if (target.classList.contains('char_block')) {
            target.classList.add('e-active');
            if (activeEle) {
                activeEle.classList.remove('e-active');
            }
        }
    };
  }

  function onInsert(): void {
    let activeEle: HTMLElement = dialog.element.querySelector('.char_block.e-active');
    if (activeEle) {
        defaultRTE.executeCommand('insertText', activeEle.textContent , {undo: true});
    }
    dialogOverlay();
  }

  function dialogOverlay(): void {
    let activeEle: HTMLElement = dialog.element.querySelector('.char_block.e-active');
    if (activeEle) {
        activeEle.classList.remove('e-active');
    }
    dialog.hide();
  }
}

```

{% endtab %}

## Quick inline toolbar

Quick commands are opened as context-menu on clicking the corresponding element. The commands must be passed as string collection to image, text, and link attributes of the [`quickToolbarSettings`](../api/rich-text-editor/quickToolbarSettings/#quicktoolbarsettings) property.

| Target Element | Default Quick Toolbar items |
|----------------|---------|
|image | 'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'Display', 'AltText','Dimension'.|
| link | 'Open', 'Edit', 'UnLink'.|
| text (`Deprecated`) | 'Cut', 'Copy', 'Paste'.|
| table | 'TableHeader', 'TableRows', 'TableColumns', 'BackgroundColor', 'TableRemove', 'Alignments', 'TableCellVerticalAlign', 'Styles'.|

Custom tool can be added to the corresponding quick toolbar, using [`quickToolbarSettings`](../api/rich-text-editor/quickToolbarSettings/#quicktoolbarsettings) property.

The following sample demonstrates the option to insert the image to the Rich Text Editor content as well as option to rotate the image through the quick toolbar. The image rotation functionalities have been achieved through the [`toolbarClick`](../api/rich-text-editor/#toolbarclick) event.

{% tab template="rich-text-editor/getting-started", es5Template="image-basic" %}

```typescript
    import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
    RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);
    let defaultRTE: RichTextEditor = new RichTextEditor({
      height: 340,
      quickToolbarSettings: {
         image: [
            'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-',
            'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension'
         ]
       },
      toolbarSettings: {
         items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
       }

    });
  defaultRTE.appendTo('#defaultRTE');

```

{% endtab %}

> Rich Text Editor features are segregated into individual feature-wise modules. To use quick toolbar, inject the quick toolbar module using the `RichTextEditor.Inject(Image, Link)`.

## See Also

* [How to render the toolbar in inline mode](./inline-mode/)
* [How to customize the toolbar items shortcut key](./how-to/shortcut-key)