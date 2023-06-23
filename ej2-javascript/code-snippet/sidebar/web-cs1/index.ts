


import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let defaultSidebar: Sidebar = new Sidebar({
    mediaQuery: window.matchMedia('(min-width: 600px)'), width: "280px",
});
defaultSidebar.appendTo('#default');
    //end of Sidebar initialization
}



