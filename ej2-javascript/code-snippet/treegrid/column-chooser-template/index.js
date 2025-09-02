ej.treegrid.TreeGrid.Inject(ej.treegrid.Selection, ej.treegrid.Toolbar, ej.treegrid.ColumnChooser);

var treeObj;
var treeData = [];

function renderCustomColumnChooser(targetElement, columns) {
    var parentNodes = [
        { id: 1, name: 'Task Info', hasChild: true, expanded: true },
        { id: 2, name: 'Schedule', hasChild: true, expanded: true },
        { id: 3, name: 'Progress', hasChild: true, expanded: true }
    ];

    treeData = columns.map(function (column) {
        var parentId;
        switch (column.field) {
            case 'taskID':
            case 'taskName':
                parentId = 1;
                break;
            case 'startDate':
            case 'endDate':
                parentId = 2;
                break;
            case 'duration':
            case 'progress':
            case 'priority':
                parentId = 3;
                break;
        }
        return {
            id: column.uid,
            name: column.headerText,
            pid: parentId,
            isChecked: column.visible
        };
    });

    var uniquePids = [...new Set(treeData.map(item => item.pid))];
    var filteredParents = parentNodes.filter(parent => uniquePids.includes(parent.id));
    treeData.push(...filteredParents);

    treeObj = new ej.navigations.TreeView({
        fields: { dataSource: treeData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
        showCheckBox: true,
        nodeClicked: nodeCheck,
        keyPress: nodeCheck,
        cssClass: "no-border"
    });

    treeObj.appendTo(targetElement);
}

function nodeCheck(args) {
    var node = args.node;
    var getNodeDetails = treeObj.getNode(node);
    var checkedNode = [node];

    if (args.event.target.classList.contains('e-fullrow') || args.event.key === "Enter") {
        if (getNodeDetails.isChecked === 'true') {
            treeObj.uncheckAll(checkedNode);
        } else {
            treeObj.checkAll(checkedNode);
        }
    }
}

function columnChooserSubmit() {
    var checkedElements = [];
    var uncheckedElements = [];

    var treeItems = document.querySelectorAll('.e-list-item');
    treeItems.forEach(function (item) {
        var itemDetails = treeObj.getNode(item);
        if (!itemDetails.hasChildren) {
            if (item.getAttribute('aria-checked') === 'true') {
                checkedElements.push(itemDetails.text);
            } else {
                uncheckedElements.push(itemDetails.text);
            }
        }
    });

    var visibleColumns = checkedElements;
    var hiddenColumns = uncheckedElements;

    treeGridObj.grid.columnChooserModule.changeColumnVisibility({ visibleColumns, hiddenColumns });
}

function onCreated() {
    if (document.getElementById('submitButton') && document.getElementById('abortButton')) {
        new ej.buttons.Button().appendTo('#submitButton');
        new ej.buttons.Button().appendTo('#abortButton');

        document.getElementById('submitButton').onclick = columnChooserSubmit;
        document.getElementById('abortButton').onclick = function () {
            treeGridObj.grid.columnChooserModule.hideDialog();
        };
    }
}

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    showColumnChooser: true,
    treeColumnIndex: 1,
    toolbar: ['ColumnChooser'],
    columnChooserSettings: {
        headerTemplate: '#ccHeaderTemplate',
        template: '#ccContentTemplate',
        footerTemplate: '#ccFooterTemplate',
        renderCustomColumnChooser: function () {
            renderCustomColumnChooser(document.getElementById('treeViewContainer'), treeGridObj.grid.columns);
        },
        enableSearching: true
    },
    columns: [
        { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'taskName', headerText: 'Task Name', width: 240, showInColumnChooser: false },
        { field: 'startDate', headerText: 'Start Date', width: 110, format: 'yMd' },
        { field: 'endDate', headerText: 'End Date', width: 110, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'duration', headerText: 'Duration', width: 100, textAlign: 'Right' },
        { field: 'progress', headerText: 'Progress', width: 100, textAlign: 'Right' },
        { field: 'priority', headerText: 'Priority', width: 90 }
    ],
    height: 315,
    created: onCreated
});

treeGridObj.appendTo('#TreeGrid');