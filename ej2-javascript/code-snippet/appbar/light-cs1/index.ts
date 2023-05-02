

import { AppBar } from "@syncfusion/ej2-navigations";
import { Button } from "@syncfusion/ej2-buttons";

const defaultAppBarObj: AppBar = new AppBar({});
defaultAppBarObj.appendTo("#defaultAppBar");

const defaultButtonLoginObj: Button = new Button({ isPrimary: true, content: 'FREE TRIAL' });
defaultButtonLoginObj.appendTo('#defaultButtonLogin');


