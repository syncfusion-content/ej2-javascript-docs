import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

//start of Sidebar initialization
let defaultSidebar: Sidebar = new Sidebar({
    mediaQuery: window.matchMedia('(max-width: 400px)'), width: "280px",
});
defaultSidebar.appendTo('#default');
//end of Sidebar initialization