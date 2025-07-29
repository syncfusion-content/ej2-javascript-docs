ej.base.enableRipple(true);

var iconTextBox = new ej.inputs.TextBox({
    placeholder: 'First Name',
    floatLabelType: 'Auto',
    created: function() {
        iconTextBox.addIcon('append', 'e-icons e-date-range');
    }
});
iconTextBox.appendTo('#textboxicon');