

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
            text: "Data-Binding",
            url: "./breadcrumb/data-binding"
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
            text: "templates",
            url: "./breadcrumb/templates"
        },
        {
            text: "Overflow",
            url: "./breadcrumb/overflow"
        }
    ];

new Breadcrumb({
        items: items,
        enableNavigation: false,
        maxItems: 3,
        overflowMode: 'Hidden'
    }, '#breadcrumb');


