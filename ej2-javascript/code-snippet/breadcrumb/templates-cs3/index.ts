

import { BreadcrumbItemModel, Breadcrumb } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);


var specificTemplateItems = [
{
    text: "Home",
    url: "https://ej2.syncfusion.com/demos",
},
{
    text: "Components",
    url: "https://ej2.syncfusion.com/demos/#/material/grid/grid-overview",
},
{
    text: "Navigations",
    url: "https://ej2.syncfusion.com/demos/#/material/menu/default",
},
{
    text: "Breadcrumb",
    url: "./breadcrumb/default",
}
];

new Breadcrumb({
    items: specificTemplateItems,
    itemTemplate: '<div>${if(text=="Breadcrumb")}<span class="e-searchfor-text"><span style="margin-right: 5px">Search for:</span><a class="e-breadcrumb-text" href="${url}" onclick="return false">${text}</a></span>${else}<a class="e-breadcrumb-text" href="${url}" onclick="return false">${text}</a>${/if}</div>',
    cssClass: 'e-specific-item-template'
}, '#breadcrumb');


