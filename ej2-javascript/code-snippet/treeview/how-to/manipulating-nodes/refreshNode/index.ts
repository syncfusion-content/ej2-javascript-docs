// Description: This snippet demonstrates how to refresh the node in TreeView control.
import { TreeView } from '@syncfusion/ej2-navigations';

let countries: { [key: string]: Object }[] = [
    { id: 1, name: 'Australia', hasChild: true, expanded: true },
    { id: 2, pid: 1, name: 'New South Wales', isSelected: true },
    { id: 3, pid: 1, name: 'Victoria' },
    { id: 4, pid: 1, name: 'South Australia' },
    { id: 6, pid: 1, name: 'Western Australia', isSelected: true },
    { id: 7, name: 'Brazil', hasChild: true },
    { id: 8, pid: 7, name: 'Paraná' },
    { id: 9, pid: 7, name: 'Ceará' },
    { id: 10, pid: 7, name: 'Acre' }
];

let treeObj: TreeView = new TreeView({
    fields: { dataSource: countries, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild', selected: 'isSelected' },
});
treeObj.appendTo('#tree');

document.getElementById('button1')!.onclick = (): void => {
    var nodeData = treeObj.getTreeData('4');
    // Update the name text from backend.
    nodeData[0].name = 'Node Refreshed';
    // Refresh the updated data.
    treeObj.refreshNode('4', nodeData);
};