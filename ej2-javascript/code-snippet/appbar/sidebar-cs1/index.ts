

import { AppBar, Sidebar, TreeView } from "@syncfusion/ej2-navigations";
import { Button } from "@syncfusion/ej2-buttons";
import { TextBox } from '@syncfusion/ej2-inputs';

let data: { [key: string]: Object }[] = [
    {
        nodeId: '01', nodeText: 'Installation',
    },
    {
        nodeId: '02', nodeText: 'Deployment',
    },
    {
        nodeId: '03', nodeText: 'Quick Start',
    },
    {
        nodeId: '04', nodeText: 'Components',
        nodeChild: [
            { nodeId: '04-01', nodeText: 'Calendar' },
            { nodeId: '04-02', nodeText: 'DatePicker' },
            { nodeId: '04-03', nodeText: 'DateTimePicker' },
            { nodeId: '04-04', nodeText: 'DateRangePicker' },
            { nodeId: '04-05', nodeText: 'TimePicker' },
            { nodeId: '04-06', nodeText: 'SideBar' }
        ]
    }
];

const defaultAppBarObj: AppBar = new AppBar({});
defaultAppBarObj.appendTo("#defaultAppBar");

const defaultButtonMenuObj: Button = new Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-menu' });
defaultButtonMenuObj.appendTo('#defaultButtonMenu');

defaultButtonMenuObj.element.addEventListener("click", toggle);

let sidebarMenu: Sidebar = new Sidebar({
    width: '220px',
    target: '.main-content',
    mediaQuery: '(min-width: 600px)',
    isOpen: true
});
sidebarMenu.appendTo('#sideTree');

let inputObj: TextBox = new TextBox({
    placeholder: "Search..."
});
inputObj.appendTo("#resSearch");

let mainTreeView: TreeView = new TreeView({
    cssClass: "main-treeview",
    fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' },
    expandOn: 'Click'
});
mainTreeView.appendTo('#mainTree');

function toggle() {
    sidebarMenu.toggle();
}


