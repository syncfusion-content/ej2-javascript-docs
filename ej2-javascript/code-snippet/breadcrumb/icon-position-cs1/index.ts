

import { BreadcrumbItemModel, Breadcrumb, BreadcrumbBeforeItemRenderEventArgs } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Breadcrumb items definition

let items: BreadcrumbItemModel[] = [
        {
            text: "Program Files",
            iconCss: "e-icons e-folder"
        },
        {
            text: "Services",
            iconCss: "e-icons e-folder"
        },
        {
            text: "Config.json",
            iconCss: "e-icons e-file"
        }
    ];

new Breadcrumb({
    items: items,
    enableNavigation: false
}, '#breadcrumb');

new Breadcrumb({
    items: items,
    enableNavigation: false,
    beforeItemRender: (args: BreadcrumbBeforeItemRenderEventArgs) => {
        if (args.item.text !== '') {
            args.element.classList.add('e-icon-right');
        }
    }
}, '#breadcrumb2');


