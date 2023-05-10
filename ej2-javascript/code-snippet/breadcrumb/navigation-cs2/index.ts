

import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

let items: BreadcrumbItemModel[] = [
        {
            text: "Home",
            url: "../"
        },
        {
            text: "Getting",
            url: "./breadcrumb/getting-started"
        },
        {
            text: "Icons",
            url: "./breadcrumb/icons"
        },
        {
            text: "Navigation",
            url: "./breadcrumb/navigation"
        },
        {
            text: "Overflow",
            url: "./breadcrumb/overflow"
        }
    ];

new Breadcrumb({
        items: items,
        enableNavigation: false
    }, '#breadcrumb');


