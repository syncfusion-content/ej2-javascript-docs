ej.base.enableRipple(true);

//Initialize Toolbar component

var toolbar = new ej.navigations.Toolbar({
width: 300,
items: [
    { text: "Bold", type: 'Button', htmlAttributes: { 'class': 'custom_bold', 'id': 'itemId' } },
    { text: "Italic", htmlAttributes: { 'class': 'custom_italic' }  },
    { text: "Underline", htmlAttributes: { 'class': 'custom_underline' } },
    { type: "Separator" },
    { text: "Uppercase", cssClass: "e-txt-casing" }
]
});

//Render initialized Toolbar component
toolbar.appendTo('#element');

