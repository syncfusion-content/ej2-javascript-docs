

import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

let items: BreadcrumbItemModel[] = [
        {
            text: "Home",
            url: "https://ej2.syncfusion.com/documentation/introduction/"
        },
        {
            text: "Getting",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/getting-started"
        },
        {
            text: "Icons",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/icons"
        },
        {
            text: "Navigation",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/navigation"
        },
        {
            text: "Overflow",
            url: "https://ej2.syncfusion.com/documentation/breadcrumb/overflow"
        }
    ];

new Breadcrumb({
        items: items,
        enableNavigation: false
    }, '#breadcrumb');


