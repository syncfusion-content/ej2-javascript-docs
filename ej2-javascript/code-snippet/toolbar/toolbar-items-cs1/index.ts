


import {Toolbar} from '@syncfusion/ej2-navigations';
let toolbar: Toolbar = new Toolbar({
    width: 300,
    items: [
        { text: "Bold", type: 'Button', htmlAttributes: { 'class': 'custom_bold', 'id': 'itemId' } },
        { text: "Italic", htmlAttributes: { 'class': 'custom_italic' }  },
        { text: "Underline", htmlAttributes: { 'class': 'custom_underline' } },
        { type: "Separator" },
        { text: "Uppercase", cssClass: "e-txt-casing" }
    ]
});
toolbar.appendTo('#element');



