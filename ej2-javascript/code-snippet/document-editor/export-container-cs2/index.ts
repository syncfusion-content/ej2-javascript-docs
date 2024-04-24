import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '390px', serviceUrl: 'https://services.syncfusion.com/js/production/api/documenteditor/' });

container.appendTo('#DocumentEditor');

document.getElementById('export').addEventListener('click', () => {
    container.documenteditor.save('sample', 'Docx');
});