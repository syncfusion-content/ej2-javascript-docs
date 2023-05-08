ej.base.enableRipple = true;

var colorPicker = new ej.inputs.ColorPicker(
        {
                change: function (args) {
                        colorPicker.element.nextElementSibling.querySelector('.e-selected-color').style.borderBottomColor = args.currentValue.rgba;
                      }
        },
        '#element');

ej.base.addClass([colorPicker.element.nextElementSibling.querySelector('.e-selected-color')], 'e-icons');

