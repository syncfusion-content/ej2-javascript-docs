ej.base.enableRipple = true;

var signature = new ej.inputs.Signature({}, '#signature');

var ddlObj = new ej.dropdowns. DropDownList(
    {
        value: 'Arial',
        popupHeight: '200px',
    });
ddlObj.appendTo('#ddl');

var ddlObj1 = new ej.dropdowns. DropDownList(
    {
        value: '20',
        popupHeight: '200px',
    });
ddlObj1.appendTo('#ddl1');

var button = new ej.buttons.Button({cssClass: 'e-primary'}, '#draw');

button.element.onclick = function (e) {
    var text = document.getElementById('text').value;
    var font = ddlObj.value;
    var size = ddlObj1.value;
    signature.draw(text, font, size);
};

