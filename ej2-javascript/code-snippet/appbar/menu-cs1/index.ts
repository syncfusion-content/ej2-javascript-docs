

import { AppBar, Menu, MenuItemModel } from "@syncfusion/ej2-navigations";
import { Button } from "@syncfusion/ej2-buttons";

const companyMenuItems: MenuItemModel[] = [
    {
        text : 'Company',
        items: [
            { text: 'About Us' },
            { text: 'Customers' },
            { text: 'Blog' },
            { text: 'Careers' }
        ]
    }
];

const productMenuItems: MenuItemModel[] = [
    {
        text : 'Products',
        items: [
            { text: 'Developer' },
            { text: 'Analytics' },
            { text: 'Reporting' },
            { text: 'Help Desk' }
        ]
    }
];

const aboutMenuItems: MenuItemModel[] = [
    {
        text : 'About Us'
    }
];

const carrerMenuItems: MenuItemModel[] = [
    {
        text : 'Carrers'
    }
];

const defaultAppBarObj: AppBar = new AppBar({
  colorMode: 'Primary'
});
defaultAppBarObj.appendTo("#defaultAppBar");

const defaultButtonMenuObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-menu' });
defaultButtonMenuObj.appendTo('#defaultButtonMenu');

const defaultMenuCompanyObj: Menu = new Menu({ cssClass: 'e-inherit', items: companyMenuItems });
defaultMenuCompanyObj.appendTo('#defaultMenuCompany');

const defaultMenuProductsObj: Menu = new Menu({ cssClass: 'e-inherit', items: productMenuItems });
defaultMenuProductsObj.appendTo('#defaultMenuProducts');

const defaultMenuAboutObj: Menu = new Menu({ cssClass: 'e-inherit', items: aboutMenuItems });
defaultMenuAboutObj.appendTo('#defaultMenuAbout');

const defaultMenuCarrersObj: Menu = new Menu({ cssClass: 'e-inherit', items: carrerMenuItems });
defaultMenuCarrersObj.appendTo('#defaultMenuCarrers');

const defaultButtonLoginObj: Button = new Button({ cssClass: 'e-inherit', content: 'Login' });
defaultButtonLoginObj.appendTo('#defaultButtonLogin');


