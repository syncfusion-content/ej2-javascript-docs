var kanbanObj = new ej.kanban.Kanban({
    dataSource: kanbanData,
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'Testing', keyField: 'Testing' },
        { headerText: 'Done', keyField: 'Close' }
    ],
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id',
    },
    allowColumnDragAndDrop: true,
    columnDragStart: function (args) {
        if (args.column.properties.keyField == 'Open') {
            args.cancel = true;
        }
    }
});
kanbanObj.appendTo('#Kanban');

