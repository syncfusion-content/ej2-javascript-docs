var companyMenuItems = [
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

var productMenuItems = [
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

var aboutMenuItems = [
    {
        text : 'About Us'
    }
];

var carrerMenuItems = [
    {
        text : 'Carrers'
    }
];

var defaultAppBarObj = new ej.navigations.AppBar({
    colorMode: 'Primary'
});
defaultAppBarObj.appendTo("#defaultAppBar");

var defaultButtonMenuObj = new ej.buttons.Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-menu' });
defaultButtonMenuObj.appendTo('#defaultButtonMenu');

var defaultMenuCompanyObj = new ej.navigations.Menu({ cssClass: 'e-inherit', items: companyMenuItems });
defaultMenuCompanyObj.appendTo('#defaultMenuCompany');

var defaultMenuProductsObj = new ej.navigations.Menu({ cssClass: 'e-inherit', items: productMenuItems });
defaultMenuProductsObj.appendTo('#defaultMenuProducts');

var defaultMenuAboutObj = new ej.navigations.Menu({ cssClass: 'e-inherit', items: aboutMenuItems });
defaultMenuAboutObj.appendTo('#defaultMenuAbout');

var defaultMenuCarrersObj = new ej.navigations.Menu({ cssClass: 'e-inherit', items: carrerMenuItems });
defaultMenuCarrersObj.appendTo('#defaultMenuCarrers');

var defaultButtonLoginObj = new ej.buttons.Button({ cssClass: 'e-inherit', content: 'Login' });
defaultButtonLoginObj.appendTo('#defaultButtonLogin');

