


import { DocumentEditor, Editor, Selection, BordersAndShadingDialog, SfdtExport, } from '@syncfusion/ej2-documenteditor';
DocumentEditor.Inject(Editor, Selection, SfdtExport, BordersAndShadingDialog);
let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enableSelection: true,
    enableEditor: true,
    enableBordersAndShadingDialog: true,
    enableSfdtExport: true,
    height: '370px'
});
let button: HTMLElement = document.getElementById('dialog');
button.addEventListener('click', function () {
    //To open hyperlink dialog
    documenteditor.showDialog('BordersAndShading');
});
documenteditor.appendTo('#DocumentEditor');
documenteditor.editor.insertTable(2, 2);



