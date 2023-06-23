


import { RichTextEditor, Toolbar, Image,  Link, HtmlEditor, QuickToolbar, NodeSelection, Table } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Image,  Link, HtmlEditor, QuickToolbar, Table );

let defaultRTE: RichTextEditor = new RichTextEditor({
        toolbarSettings: {
        items: ['CreateTable']},
        quickToolbarSettings: {
            table: ['TableHeader', 'TableRows', 'TableColumns', 'TableCell', '-',
            'BackgroundColor', 'TableRemove', 'TableCellVerticalAlign', 'Styles']
        },
});
defaultRTE.appendTo('#defaultRTE');



