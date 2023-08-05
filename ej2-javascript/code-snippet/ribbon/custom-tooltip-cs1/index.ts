

import { Ribbon, RibbonItemType, RibbonTabModel } from '@syncfusion/ej2-ribbon';

let tabs: RibbonTabModel[] = [{
  header: "Home",
  groups: [{
    header: "Clipboard",
    groupIconCss: 'e-icons e-paste',
    collections: [
      {
        items: [{
          type: RibbonItemType.SplitButton,
          splitButtonSettings: {
            content: 'Paste',
            iconCss: 'e-icons e-paste',
            items: [{ text: 'Keep Source Format' }, { text: 'Merge format' }, { text: 'Keep text only' }]
          },
          ribbonTooltipSettings: {
            title: 'Paste',
            content: 'Insert the clipboard content where the cursor is currently placed.',
            cssClass: 'custom-tooltip'
          }
        }]
      },
      {
        items: [{
          type: RibbonItemType.Button,
          buttonSettings: {
            content: 'Cut',
            iconCss: 'e-icons e-cut'
          },
          ribbonTooltipSettings: {
            title: 'Cut',
            content: 'Places the selected text or object on the clipboard so that you can paste it somewhere else.',
            cssClass: 'custom-tooltip'
          }
        }, {
          type: RibbonItemType.Button,
          buttonSettings: {
            content: 'Copy',
            iconCss: 'e-icons e-copy'
          },
          ribbonTooltipSettings: {
            title: 'Copy',
            content: 'Copies the chosen text or object to the clipboard so that you can reuse it elsewhere.',
            cssClass: 'custom-tooltip'
          }
        }, {
          type: RibbonItemType.Button,
          buttonSettings: {
            content: 'Format Painter',
            iconCss: 'e-icons e-format-painter'
          },
          ribbonTooltipSettings: {
            title: 'Format Painter',
            content: 'Copies the formatting style of a selected text or object and applies it to other content within the document.',
            cssClass: 'custom-tooltip'
          }
        }]
      }]
  }]
}];

let ribbon: Ribbon = new Ribbon({
  tabs: tabs
});
ribbon.appendTo("#ribbon");


