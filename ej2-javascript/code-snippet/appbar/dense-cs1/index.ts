

import { AppBar } from "@syncfusion/ej2-navigations";
import { Button } from "@syncfusion/ej2-buttons";

const defaultAppBarObj: AppBar = new AppBar({
  colorMode: 'Primary',
  mode: 'Dense'
});
defaultAppBarObj.appendTo("#defaultAppBar");

const defaultButtonMenuObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-menu' });
defaultButtonMenuObj.appendTo('#defaultButtonMenu');

const defaultButtonLoginObj: Button = new Button({ cssClass: 'e-inherit', content: 'FREE TRIAL' });
defaultButtonLoginObj.appendTo('#defaultButtonLogin');


