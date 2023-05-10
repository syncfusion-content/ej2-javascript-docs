

import { AppBar } from "@syncfusion/ej2-navigations";
import { Button } from "@syncfusion/ej2-buttons";

const defaultAppBarObj: AppBar = new AppBar({
  colorMode: 'Primary'
});
defaultAppBarObj.appendTo("#defaultAppBar");

const defaultButtonCutObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-cut' });
defaultButtonCutObj.appendTo('#defaultButtonCut');

const defaultButtonCopyObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-copy' });
defaultButtonCopyObj.appendTo('#defaultButtonCopy');

const defaultButtonPasteObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-paste' });
defaultButtonPasteObj.appendTo('#defaultButtonPaste');

const defaultButtonBoldObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-bold' });
defaultButtonBoldObj.appendTo('#defaultButtonBold');

const defaultButtonUnderlineObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-underline' });
defaultButtonUnderlineObj.appendTo('#defaultButtonUnderline');

const defaultButtonItalicObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-italic' });
defaultButtonItalicObj.appendTo('#defaultButtonItalic');

const defaultButtonAlignLeftObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-align-left' });
defaultButtonAlignLeftObj.appendTo('#defaultButtonAlignLeft');

const defaultButtonAlignRightObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-align-right' });
defaultButtonAlignRightObj.appendTo('#defaultButtonAlignRight');

const defaultButtonAlignCenterObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-align-center' });
defaultButtonAlignCenterObj.appendTo('#defaultButtonAlignCenter');

const defaultButtonJustifyObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-justify' });
defaultButtonJustifyObj.appendTo('#defaultButtonJustify');


