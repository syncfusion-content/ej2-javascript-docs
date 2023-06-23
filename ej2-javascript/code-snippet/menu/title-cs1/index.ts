


import { Menu, MenuItemModel, MenuEventArgs } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

    let menuItems: MenuItemModel[] = [
        {
            id: 'settingIcon',
            iconCss: 'em-icons e-file',
            items:
            { text: 'Open',
                  items: [
                      { text: 'Sub Option1' },
                      { text: 'Sub Option2' },
                  ]
                },
                { text: 'Save' },
                { separator: true },
                { text: 'Exit' }
            ]
        }
    ];

    // Initialize Menu component.
let menuObj: Menu = new Menu({ items: menuItems ,
  beforeItemRender: (args: MenuEventArgs) => {
      if (args.item.id == 'settingIcon') {
          args.element.setAttribute('title', 'Settings')
          }
          }}, '#menu');



