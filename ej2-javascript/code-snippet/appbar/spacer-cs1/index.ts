

import { AppBar } from "@syncfusion/ej2-navigations";
import { Button } from "@syncfusion/ej2-buttons";

const defaultAppBarObj: AppBar = new AppBar({
  colorMode: 'Primary'
});
defaultAppBarObj.appendTo("#defaultAppBar");

const defaultButtonHomeObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-home' });
defaultButtonHomeObj.appendTo('#defaultButtonHome');

const defaultButtonCutObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-cut' });
defaultButtonCutObj.appendTo('#defaultButtonCut');

const defaultButtonPanObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-pan' });
defaultButtonPanObj.appendTo('#defaultButtonPan');


