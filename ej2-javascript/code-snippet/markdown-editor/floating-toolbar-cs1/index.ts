import { RichTextEditor, Toolbar, MarkdownEditor, Link, Image, Table } from '@syncfusion/ej2-richtexteditor';
import { CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';
RichTextEditor.Inject(Toolbar, MarkdownEditor, Link, Image, Table);

let markdownRTE: RichTextEditor = new RichTextEditor({
   height: 340,
   editorMode: 'Markdown',
   toolbarSettings: {
      enableFloating: false,
      items: ['Bold', 'Italic', 'StrikeThrough', 'InlineCode', 'SuperScript', 'SubScript', '|', 
        'Formats', 'Blockquote', '|', 'OrderedList', 'UnorderedList', 'CreateLink', 'Image', 'CreateTable', '|', 
        'Undo', 'Redo']
   },
   value: `In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.`
});
markdownRTE.appendTo('#markdown-editor');

let float: CheckBox = new CheckBox({
    // set false for enable the checked state at initial rendering
    checked: false,
    label: 'Enable Floating',
    // bind change event
    change: (args: ChangeEventArgs) => {
        markdownRTE.toolbarSettings.enableFloating = (args as any).checked;
        markdownRTE.dataBind();
    }
});
float.appendTo('#float');