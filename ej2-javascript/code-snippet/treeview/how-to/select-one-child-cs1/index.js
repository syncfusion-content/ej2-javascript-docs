/**
* Single child selection
*/

// Hierarchical data source for TreeView control
var localData = [
  { id: 1, name: 'Parent 1', hasChild: true, expanded: true },
  { id: 2, pid: 1, name: 'Child 1' },
  { id: 3, pid: 1, name: 'Child 2' },
  { id: 4, pid: 1, name: 'Child 3' },
  { id: 7, name: 'Parent 2', hasChild: true, expanded: true },
  { id: 8, pid: 7, name: 'Child 1' },
  { id: 9, pid: 7, name: 'Child 2' },
  { id: 10, pid: 7, name: 'Child 3' },
];
var tree1 = new ej.navigations.TreeView({
  fields: { dataSource: localData, id: 'id', text: 'name', parentID: 'pid', hasChildren: 'hasChild' },
  loadOnDemand: false,
  allowMultiSelection: true,
  nodeSelecting: onNodeSelecting
});
tree1.appendTo('#tree');

var parent, child;
var count = false;
var childCount = false;

function onNodeSelecting(args) {
  var id = args.nodeData.parentID;
  if (!count) {
    parent = id;
    count = true;
  }
  if (!childCount) {
    child = args.nodeData.id;
    childCount = true
  }
  if (id != null && id === parent) {
    var element = tree1.element.querySelector('[data-uid="' + id + '"]');
    var liElements = element.querySelectorAll('ul li');
    for (var i = 0; i < liElements.length; i++) {
      var nodeData = tree1.getNode(liElements[i]);
      if (nodeData.selected && args.action === "select" && child !== args.nodeData.id) {
        args.cancel = true;
      }
      // For unselect the selectedNodes
      else if (args.action === "un-select" && child === args.nodeData.id) {
        childCount = false;
        child = null;
        parent = null;
        count = false;
      }
    }
  } else if (id !== parent && id !== null) {
    if (args.action == "select") {
      args.cancel = true
    }
  } else if (id === null) {
    childCount = false;
    child = null;
    parent = null;
    count = false
  }
}