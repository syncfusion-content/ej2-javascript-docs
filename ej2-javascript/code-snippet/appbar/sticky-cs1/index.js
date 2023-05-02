var defaultAppBarObj = new ej.navigations.AppBar({
    colorMode: 'Primary',
    isSticky: true
});
defaultAppBarObj.appendTo("#defaultAppBar");

var defaultButtonMenuObj = new ej.buttons.Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-menu' });
defaultButtonMenuObj.appendTo('#defaultButtonMenu');

var defaultButtonLoginObj = new ej.buttons.Button({ cssClass: 'e-inherit', content: 'FREE TRIAL' });
defaultButtonLoginObj.appendTo('#defaultButtonLogin');

