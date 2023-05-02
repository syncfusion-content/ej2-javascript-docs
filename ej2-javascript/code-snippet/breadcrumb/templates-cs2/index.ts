

import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

const items: BreadcrumbItemModel[] = [
    {
        text: 'Cart'
    },
    {
        text: 'Billing'
    },
    {
        text: 'Shipping'
    },
    {
        text: 'Payment'
    }
];

new Breadcrumb({
    items: items,
    enableNavigation: false,
    separatorTemplate: '<span class="e-icons e-bullet-arrow"></span>'
}, '#breadcrumb');


