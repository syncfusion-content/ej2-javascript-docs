import { RichTextEditor, Toolbar, HtmlEditor, Video } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, HtmlEditor, Video);

let editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['Video']
    },
    insertVideoSettings: {
        saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
        path: "../Files/"
    },
    fileUploading: onFileUpload
});
editor.appendTo('#editor');

function onFileUpload (args): void {
    let sizeInBytes: number = args.fileData.size;
    let fileSize: number = 500000;
    if (fileSize < sizeInBytes) {
        args.Cancel = true;
    }
}