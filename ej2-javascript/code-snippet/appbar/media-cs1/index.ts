

import { AppBar } from "@syncfusion/ej2-navigations";
import { Button } from "@syncfusion/ej2-buttons";

const defaultAppBarObj: AppBar = new AppBar({
  colorMode: 'Primary'
});
defaultAppBarObj.appendTo("#defaultAppBar");

const defaultButtonMenuObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-menu' });
defaultButtonMenuObj.appendTo('#defaultButtonMenu');

const defaultButtonHomeObj: Button = new Button({ cssClass: 'e-inherit', content: 'Home' });
defaultButtonHomeObj.appendTo('#defaultButtonHome');

const defaultButtonAboutObj: Button = new Button({ cssClass: 'e-inherit', content: 'About' });
defaultButtonAboutObj.appendTo('#defaultButtonAbout');

const defaultButtonProductsObj: Button = new Button({ cssClass: 'e-inherit', content: 'Products' });
defaultButtonProductsObj.appendTo('#defaultButtonProducts');

const defaultButtonContactsObj: Button = new Button({ cssClass: 'e-inherit', content: 'Contacts' });
defaultButtonContactsObj.appendTo('#defaultButtonContacts');

const defaultButtonLoginObj: Button = new Button({ cssClass: 'e-inherit', content: 'Login' });
defaultButtonLoginObj.appendTo('#defaultButtonLogin');


