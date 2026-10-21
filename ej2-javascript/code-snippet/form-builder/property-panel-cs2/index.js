var formBuilder = new ej.formbuilder.FormBuilder();
formBuilder.appendTo('#formbuilder');

formBuilder.getProperty('textarea', "label").visible = false;
formBuilder.refresh();