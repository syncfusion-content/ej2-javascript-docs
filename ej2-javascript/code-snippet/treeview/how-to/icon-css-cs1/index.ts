


import { enableRipple } from '@syncfusion/ej2-base';
import { TreeView } from '@syncfusion/ej2-navigations';
enableRipple(true);

/**
 * TreeView dynamic iconCss sample
 */

    // List data source for TreeView component
   let treeData: { [key: string]: Object }[] = [
    {
    "nodeId": "01", "nodeText": "Music", "icon": "folder", "expanded": true,
    "nodeChild": [
      { "nodeId": "01-01", "nodeText": "Gouttes.mp3", "icon": "audio" }
    ]
  },
  {
    "nodeId": "02", "nodeText": "Videos", "icon": "folder", "expanded": true,
    "nodeChild": [
      { "nodeId": "02-01", "nodeText": "Naturals.mp4", "icon": "video" },
      { "nodeId": "02-02", "nodeText": "Wild.mpeg", "icon": "video" }
    ]
  }
];

let tree1: TreeView = new TreeView({
     fields: { dataSource: treeData, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', expanded: 'expanded' },
     showCheckBox: true,
     nodeChecking: onNodeChecking,
     autoCheck: false
});
tree1.appendTo('#tree');

function onNodeChecking(args) {
  let nodeId = args.data[0].id;
  // To get the iconCss
  let iconClass = this.getTreeData(nodeId)[0].icon;
  alert('Icon class is ' + iconClass);
}



