// Description: This snippet shows how to update the node text in TreeView.
var countries = [
    { id: 1, name: 'Australia', hasChild: true, expanded: true },
    { id: 2, pid: 1, name: 'New South Wales', isSelected: true },
    { id: 3, pid: 1, name: 'Victoria' },
    { id: 4, pid: 1, name: 'South Australia' },
    { id: 6, pid: 1, name: 'Western Australia', isSelected: true },
    { id: 7, name: 'Brazil', hasChild: true },
    { id: 8, pid: 7, name: 'Paraná' },
    { id: 9, pid: 7, name: 'Ceará' },
    { id: 10, pid: 7, name: 'Acre' },
];

var treeObj = new ej.navigations.TreeView({
    fields: { dataSource: countries, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild', selected: 'isSelected' },
    allowEditing: true,
});
treeObj.appendTo('#tree');

document.getElementById('button1').onclick = function () {
    // Update the new node text for the node having id 4.
    treeObj.updateNode('4', 'Node updated');
};