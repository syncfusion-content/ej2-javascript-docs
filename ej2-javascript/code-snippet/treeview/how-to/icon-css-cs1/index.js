 /**
 * TreeView icon css sample
 */

// Hierarchical data source for TreeView component
  var treeData = [
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
]

// Render the TreeView with icons
var treeObj = new ej.navigations.TreeView({
  fields: { dataSource: treeData, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', expanded: 'expanded' },
  showCheckBox: true,
  nodeChecking: onNodeChecking,
  autoCheck: false
});
treeObj.appendTo('#tree');

function onNodeChecking(args) {
  var nodeId = args.data[0].id;
  // To get the iconCss
  var iconClass = this.getTreeData(nodeId)[0].icon;
  alert('Icon class is ' + iconClass);
}

