import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

// Sidebar Initialization
let defaultSidebar: Sidebar = new Sidebar({
  width: '260px',
  created: onCreate
});
defaultSidebar.appendTo('#default-sidebar');
//end of Sidebar initialization  
let hamburger: HTMLElement = document.querySelector('#hamburger') as HTMLElement;
if (hamburger) {
  hamburger.addEventListener('click', () => {
    defaultSidebar.toggle();
  });
}
function onCreate(): void {
  this.element.style.visibility = '';
}