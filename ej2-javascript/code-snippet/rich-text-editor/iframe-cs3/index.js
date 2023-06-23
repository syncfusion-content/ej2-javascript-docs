// initialize Rich Text Editor component
 var defaultRTE = new ej.richtexteditor.RichTextEditor({
    height: 340,
    iframeSettings: {
        enable: true,
        resources: {
            scripts: ['my-script.js'],
            styles: ['my-style.css']
        }
    }
});
// render initialized Rich Text Editor
defaultRTE.appendTo('#defaultRTE');

