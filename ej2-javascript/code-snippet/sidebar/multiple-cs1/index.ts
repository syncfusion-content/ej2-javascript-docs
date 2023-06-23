


import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let leftSidebar: Sidebar = new Sidebar({
   width: "200px",
    type:'Push'

});
leftSidebar.appendTo('#default');
//end of leftSidebar initialization

let rightSidebar: Sidebar = new Sidebar({
   width: "200px",
    position:'Right',
    type:'Push'
 });
rightSidebar.appendTo('#default1');
//end of rightSidebar initialization

// Toggle(Open/Close) the Sidebar1
document.getElementById('toggle-btn').onclick = function () {
    leftSidebar.toggle();
};
// Toggle(Open/Close) the Sidebar2
document.getElementById('toggle-btn2').onclick = function () {
    rightSidebar.toggle();
};



