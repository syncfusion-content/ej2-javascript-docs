

import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

let items: BreadcrumbItemModel[] = [
    {
        iconCss: 'e-icons e-home',
        url: "https://ej2.syncfusion.com/demos",
    },
    {
        text: "Components",
        url: "https://ej2.syncfusion.com/demos/#/material/grid/grid-overview",
    },
    {
        text: "Navigations",
        url: "https://ej2.syncfusion.com/demos/#/material/breadcrumb/default",
    },
    {
        text: "Breadcrumb",
        url: "./breadcrumb/default",
    }
    ];

new Breadcrumb({
    items: items,
    enableNavigation: false
}, '#breadcrumb');


