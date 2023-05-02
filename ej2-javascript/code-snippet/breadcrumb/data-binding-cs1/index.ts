

import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

new Breadcrumb({
        enableNavigation: false,
        url: "https://ej2.syncfusion.com/demos/breadcrumb/bind-to-location"
    }, '#breadcrumb');


