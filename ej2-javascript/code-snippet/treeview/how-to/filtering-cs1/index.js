ej.base.enableRipple(true);

var localData = [
  { id: 1, name: "Australia", hasChild: true },
  { id: 2, pid: 1, name: "New South Wales" },
  { id: 3, pid: 1, name: "Victoria" },
  { id: 4, pid: 1, name: "South Australia" },
  { id: 6, pid: 1, name: "Western Australia" },
  { id: 7, name: "Brazil", hasChild: true },
  { id: 8, pid: 7, name: "Paraná" },
  { id: 9, pid: 7, name: "Ceará" },
  { id: 10, pid: 7, name: "Acre" },
  { id: 11, name: "China", hasChild: true },
  { id: 12, pid: 11, name: "Guangzhou" },
  { id: 13, pid: 11, name: "Shanghai" },
  { id: 14, pid: 11, name: "Beijing" },
  { id: 15, pid: 11, name: "Shantou" },
  { id: 16, name: "France", hasChild: true },
  { id: 17, pid: 16, name: "Pays de la Loire" },
  { id: 18, pid: 16, name: "Aquitaine" },
  { id: 19, pid: 16, name: "Brittany" },
  { id: 20, pid: 16, name: "Lorraine" },
  { id: 21, name: "India", hasChild: true },
  { id: 22, pid: 21, name: "Assam" },
  { id: 23, pid: 21, name: "Bihar" },
  { id: 24, pid: 21, name: "Tamil Nadu" },
  { id: 25, pid: 21, name: "Punjab" }
];

// Render the TreeView with list data source
var listTreeObj = new ej.navigations.TreeView({
  fields: { dataSource: localData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
});
listTreeObj.appendTo('#treeView');

//Render the MaskedTextBox input element
var mask = new ej.inputs.MaskedTextBox({
  placeholder: "Enter the tree node to search",
  change: searchNodes
});
mask.appendTo('#mask');

//Change the dataSource for TreeView
function changeDataSource(data) {
  listTreeObj.fields = {
    dataSource: data, id: 'id', text: 'name',
    parentID: 'pid', hasChildren: 'hasChild'
  }
}

//Filtering the TreeNodes
function searchNodes(args) {
  var _text = args.value.trim();
  if (_text === "") {
    changeDataSource(localData);
    return;
  }
  var predicate = new ej.data.Predicate('name', 'contains', _text, true);
  var filteredList = new ej.data.DataManager(localData)
    .executeLocal(new ej.data.Query().where(predicate));
  if (filteredList.length === 0) {
    changeDataSource([]);
    return;
  }
  var predicates = [];
  var _setArray = new Set();
  filteredList.forEach(function (item) {
    var filters = getFilterItems(item, localData);

    filters.forEach(function (filter) {
      if (filter !== null && !_setArray.has(filter)) {
        _setArray.add(filter);
        predicates.push(new ej.data.Predicate('id', 'equal', filter, false));
      }
    });
  });
  if (predicates.length > 0) {
    var query = new ej.data.Query().where(ej.data.Predicate.or.apply(null, predicates));
    var newList = new ej.data.DataManager(localData).executeLocal(query);
    changeDataSource(newList);

    setTimeout(function () {
      listTreeObj.expandAll();
    }, 400);
  } else {
    changeDataSource([]);
  }
}

//Find the Parent Nodes for corresponding childs
function getFilterItems(fList, list) {
  var nodes = [];
  nodes.push(fList["id"]);
  var query2 = new ej.data.Query().where('id', 'equal', fList["pid"], false);
  var fList1 = new ej.data.DataManager(list).executeLocal(query2);
  if (fList1.length != 0) {
    var pNode = getFilterItems(fList1[0], list);
    for (var i = 0; i < pNode.length; i++) {
      if (nodes.indexOf(pNode[i]) == -1 && pNode[i] != null)
        nodes.push(pNode[i]);
    }
    return nodes;
  }
  return nodes;
}