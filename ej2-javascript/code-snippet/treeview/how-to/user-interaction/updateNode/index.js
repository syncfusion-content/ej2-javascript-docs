// Description: This snippet shows how to update the node text in TreeView.
var countries = [
    { id: 1, name: 'Australia', value:10, hasChild: true, expanded: true },
    { id: 2, pid: 1, name: 'New South Wales', value:10, isSelected: true },
    { id: 3, pid: 1, name: 'Victoria', value:10 },
    { id: 4, pid: 1, name: 'South Australia', value:10 },
    { id: 6, pid: 1, name: 'Western Australia', value:10, isSelected: true },
    { id: 7, name: 'Brazil', value:10, hasChild: true },
    { id: 8, pid: 7, name: 'Paraná', value:10 },
    { id: 9, pid: 7, name: 'Ceará', value:10 },
    { id: 10, pid: 7, name: 'Acre', value:10 },
];

var treeObj = new ej.navigations.TreeView({
    fields: { dataSource: countries, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild', selected: 'isSelected' },
    nodeTemplate: '#treeTemplate'
});
treeObj.appendTo('#tree');

document.getElementById('button1').onclick = function () {
    // Update the node with id 4
    treeObj.updateNode('4', 'Node updated');
};