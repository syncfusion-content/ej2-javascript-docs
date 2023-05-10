var productDropDownButtonItems = [
    { text: 'Developer' },
    { text: 'Analytics' },
    { text: 'Reporting' },
    { text: 'E-Signature' },
    { text: 'Help Desk' }
];

var defaultAppBarObj = new ej.navigations.AppBar({
    colorMode: 'Primary'
});
defaultAppBarObj.appendTo("#defaultAppBar");

var defaultButtonMenuObj = new ej.buttons.Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-menu' });
defaultButtonMenuObj.appendTo('#defaultButtonMenu');

var defaultDropDownButtonProductObj = new ej.splitbuttons.DropDownButton({ cssClass: 'e-inherit', items: productDropDownButtonItems });
defaultDropDownButtonProductObj.appendTo('#defaultDropDownButtonProduct');

var defaultButtonLoginObj = new ej.buttons.Button({ cssClass: 'e-inherit', content: 'Login' });
defaultButtonLoginObj.appendTo('#defaultButtonLogin');

