

import { AppBar } from "@syncfusion/ej2-navigations";
import { Button } from "@syncfusion/ej2-buttons";
import { DropDownButton, ItemModel } from '@syncfusion/ej2-splitbuttons';

const productDropDownButtonItems: ItemModel[] = [
    { text: 'Developer' },
    { text: 'Analytics' },
    { text: 'Reporting' },
    { text: 'E-Signature' },
    { text: 'Help Desk' }
];

const defaultAppBarObj: AppBar = new AppBar({
  colorMode: 'Primary'
});
defaultAppBarObj.appendTo("#defaultAppBar");

const defaultButtonMenuObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-menu' });
defaultButtonMenuObj.appendTo('#defaultButtonMenu');

const defaultDropDownButtonProductObj: DropDownButton = new DropDownButton({ cssClass: 'e-inherit', items: productDropDownButtonItems });
defaultDropDownButtonProductObj.appendTo('#defaultDropDownButtonProduct');

const defaultButtonLoginObj: Button = new Button({ cssClass: 'e-inherit', content: 'Login' });
defaultButtonLoginObj.appendTo('#defaultButtonLogin');


