

import { AppBar } from "@syncfusion/ej2-navigations";
import { Button } from "@syncfusion/ej2-buttons";

const appbarObj: AppBar = new AppBar({
  colorMode: 'Primary'
});
appbarObj.appendTo("#appbar");

const defaultButtonMenuObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-menu' });
defaultButtonMenuObj.appendTo('#defaultButtonMenu');

const defaultButtonLoginObj: Button = new Button({ cssClass: 'e-inherit', content: 'FREE TRIAL' });
defaultButtonLoginObj.appendTo('#defaultButtonLogin');


