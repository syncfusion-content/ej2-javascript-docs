

import { AppBar } from "@syncfusion/ej2-navigations";
import { Button } from "@syncfusion/ej2-buttons";

const defaultAppBarObj: AppBar = new AppBar({
  colorMode: 'Primary'
});
defaultAppBarObj.appendTo("#defaultAppBar");

const defaultButtonMenuObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-home' });
defaultButtonMenuObj.appendTo('#defaultButtonMenu');


