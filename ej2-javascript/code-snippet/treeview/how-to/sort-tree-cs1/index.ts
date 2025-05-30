import { enableRipple } from '@syncfusion/ej2-base';
import { TreeView, NodeExpandEventArgs } from '@syncfusion/ej2-navigations';
import { DataManager, Query } from '@syncfusion/ej2-data';
enableRipple(true);

/**
 * TreeView Sort TreeView level wise
 */

// List data source for TreeView control
let countries: { [key: string]: Object }[] = [
    { id: 1, name: 'India', hasChild: true },
    { id: 2, pid: 1, name: 'Assam' },
    { id: 3, pid: 1, name: 'Bihar' },
    { id: 4, pid: 1, name: 'Tamil Nadu' },
    { id: 6, pid: 1, name: 'Punjab' },
    { id: 7, name: 'Brazil', hasChild: true },
    { id: 8, pid: 7, name: 'Paraná' },
    { id: 9, pid: 7, name: 'Ceará' },
    { id: 10, pid: 7, name: 'Acre' },
    { id: 11, name: 'France', hasChild: true },
    { id: 12, pid: 11, name: 'Pays de la Loire' },
    { id: 13, pid: 11, name: 'Aquitaine' },
    { id: 14, pid: 11, name: 'Brittany' },
    { id: 15, pid: 11, name: 'Lorraine' },
    { id: 16, name: 'Australia', hasChild: true },
    { id: 17, pid: 16, name: 'New South Wales' },
    { id: 18, pid: 16, name: 'Victoria' },
    { id: 19, pid: 16, name: 'South Australia' },
    { id: 20, pid: 16, name: 'Western Australia' },
    { id: 21, name: 'China', hasChild: true },
    { id: 22, pid: 21, name: 'Guangzhou' },
    { id: 23, pid: 21, name: 'Shanghai' },
    { id: 24, pid: 21, name: 'Beijing' },
    { id: 25, pid: 21, name: 'Shantou' }
];
let newData;

let tree1: TreeView = new TreeView({
    fields: { dataSource: countries, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
    created: onCreate,
    nodeExpanding: onNodeExpand
});
tree1.appendTo('#tree');

function changeDataSource(data) {
    tree1.fields = {
        dataSource: data, id: 'id', text: 'name', parentID: 'pid', hasChildren: 'hasChild'
    }
}

function onCreate() {
    newData = this.fields.dataSource;
    // Selects the first level nodes alone
    let resultData = new DataManager(this.getTreeData()).executeLocal(new Query().where(this.fields.parentID, 'equal', null, false));
    let name: any = [];
    for (let i = 0; i < resultData.length; i++) {
        name.push(resultData[i][this.fields.text]);
    }
    name.sort();
    let arr: any = [];
    for (let j = 0; j < name.length; j++) {
        let sortedData = new DataManager(this.getTreeData()).executeLocal(new Query().where(this.fields.text, 'equal', name[j], false));
        let childData = new DataManager(newData).executeLocal(new Query().where(this.fields.parentID, 'equal', parseInt(sortedData[0][this.fields.id]), false));
        arr.push(sortedData[0]);
    }
    // Renders treeview with sorted Nodes
    changeDataSource(arr);
    tree1.dataBind();
}
function onNodeExpand(args: NodeExpandEventArgs) {
    if (args.isInteracted && args.node.querySelector('li') === null) {
        let childData = new DataManager(newData).executeLocal(new Query().where(this.fields.parentID, 'equal', parseInt(args.nodeData.id as string), false));
        tree1.addNodes((childData as { [key: string]: Object; }[]), args.node, null)
    }
}