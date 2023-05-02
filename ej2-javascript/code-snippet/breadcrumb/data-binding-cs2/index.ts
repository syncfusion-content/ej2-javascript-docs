

import { BreadcrumbItemModel, Breadcrumb, BreadcrumbBeforeItemRenderEventArgs } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

new Breadcrumb({
    enableNavigation: false,
    url: "https://ej2.syncfusion.com/demos/breadcrumb/bind-to-location",
    beforeItemRender: (args: BreadcrumbBeforeItemRenderEventArgs) => {
        if (args.item.text === 'bind-to-location') {
            args.item.text = 'location';
        }
    }
}, '#breadcrumb');


