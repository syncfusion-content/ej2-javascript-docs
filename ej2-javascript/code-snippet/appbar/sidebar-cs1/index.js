var data = [
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
var defaultAppBarObj = new ej.navigations.AppBar({});
defaultAppBarObj.appendTo("#defaultAppBar");

var defaultButtonMenuObj = new ej.buttons.Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-menu' });
defaultButtonMenuObj.appendTo('#defaultButtonMenu');

defaultButtonMenuObj.element.addEventListener("click", toggle);

var sidebarMenu = new ej.navigations.Sidebar({
    width: '220px',
    target: '.main-content',
    mediaQuery: '(min-width: 600px)',
    isOpen: true
});
sidebarMenu.appendTo('#sideTree');
var inputObj = new ej.inputs.TextBox({
    placeholder: "Search..."
});
inputObj.appendTo("#resSearch");

var mainTreeView = new ej.navigations.TreeView({
    cssClass: "main-treeview",
    fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: "iconCss" },
    expandOn: 'Click'
});
mainTreeView.appendTo('#mainTree');

function toggle() {
    sidebarMenu.toggle();
}

