

import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

let items: BreadcrumbItemModel[] = [
    {
        iconCss: 'e-icons e-home'
    },
    {
        iconCss: "e-icons e-folder"
    },
    {
        iconCss: "e-icons e-file"
    }
];

new Breadcrumb({
    items: items,
    enableNavigation: false
}, '#breadcrumb');


