var formBuilder = new ej.formbuilder.FormBuilder();
formBuilder.appendTo('#formbuilder');

formBuilder.setProperty('textarea', {
    "key": "enableRtl",
    "label": "Enable RTL",
    "type": "boolean",
    "default": false
});