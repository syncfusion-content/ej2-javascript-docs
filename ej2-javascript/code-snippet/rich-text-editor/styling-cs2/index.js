/**
 * Rich Text Editor Custom FontSize and FontFamily
 */
var defaultRTE = new ej.richtexteditor.RichTextEditor({ 
    height: 340,
    toolbarSettings: {
        items: [ 'FontName', 'FontSize']
    },
    fontSize: {
        width: '40px',
        items: [{ text: '8 pt', value: '8pt' },
        { text: '10 pt', value: '10pt' },
        { text: '12 pt', value: '12pt' },
        { text: '14 pt', value: '14pt' },
        { text: '42 pt', value: '42pt' }]
    },
    fontFamily: {
        width: '60px',
        items: [
        { text: 'Segoe UI', value: 'Segoe UI' }, 
        { text: 'Arial', value: 'Arial,Helvetica,sans-serif' },
        { text: 'Courier New', value: 'Courier New,Courier,monospace' }, 
        { text: 'Georgia', value: 'Georgia,serif' }, 
        { text: 'Impact', value: 'Impact,Charcoal,sans-serif' },
        { text: 'Calibri Light', value: 'CalibriLight' }]
    } 
});
defaultRTE.appendTo('#defaultRTE');

