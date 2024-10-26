// Add nodes to the TreeView control using the addNodes method in the TreeView control.
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
    { id: 10, pid: 7, name: 'Acre' },
    { id: 11, name: 'China', hasChild: true },
    { id: 12, pid: 11, name: 'Guangzhou' },
    { id: 13, pid: 11, name: 'Shanghai' },
    { id: 14, pid: 11, name: 'Beijing' },
    { id: 15, pid: 11, name: 'Shantou' },
    { id: 16, name: 'France', hasChild: true },
    { id: 17, pid: 16, name: 'Pays de la Loire' },
    { id: 18, pid: 16, name: 'Aquitaine' },
    { id: 19, pid: 16, name: 'Brittany' },
    { id: 20, pid: 16, name: 'Lorraine' },
    { id: 21, name: 'India', hasChild: true },
    { id: 22, pid: 21, name: 'Assam' },
    { id: 23, pid: 21, name: 'Bihar' },
    { id: 24, pid: 21, name: 'Tamil Nadu' },
    { id: 25, pid: 21, name: 'Punjab' }
];

let treeObj: TreeView = new TreeView({
    fields: { dataSource: countries, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
});
treeObj.appendTo('#addtree');

document.getElementById('button1')!.onclick = (): void => {
  // Add a new parent node
  treeObj.addNodes([
    { id: 26, name: 'New Parent' },
    { id: 27, pid: 26, name: 'New Child1' },
  ]);
};
  
document.getElementById('button2')!.onclick = (): void => {
  // Add a new child node to the existing
  treeObj.addNodes([{ id: 28, name: 'New Child2', pid: 21 }], '21', null);
};