ej.base.enableRipple = true;

var colorPicker = new ej.inputs.ColorPicker(
    {
       value: '#344aae',
        // To hide the input area
        cssClass: 'e-custom-picker',
        modeSwitcher: false,
        open: function(args) {
            args.element.querySelector('.e-handler').classList.add('e-icons');
        } 
    }, '#element');

