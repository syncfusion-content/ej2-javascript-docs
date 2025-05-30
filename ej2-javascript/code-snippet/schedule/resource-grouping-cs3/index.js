var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    currentView: 'TimelineWeek',
    views: ['TimelineDay', 'TimelineWeek', 'TimelineMonth'],
    selectedDate: new Date(2018, 3, 4),
    group: {
        resources: ['Rooms', 'Owners']
    },
    resources: [{
        field: 'RoomId', title: 'Room',
        name: 'Rooms', allowMultiple: false,
        dataSource: [
            { RoomText: 'ROOM 1', Id: 1, RoomColor: '#cb6bb2' },
            { RoomText: 'ROOM 2', Id: 2, RoomColor: '#56ca85' }
            ],
            textField: 'RoomText', idField: 'Id', colorField: 'RoomColor'
        }, {
        field: 'OwnerId', title: 'Owner',
        name: 'Owners', allowMultiple: true,
        dataSource: [
            { OwnerText: 'Nancy', Id: 1, OwnerGroupId: 1, OwnerColor: '#ffaa00' },
            { OwnerText: 'Steven', Id: 2, OwnerGroupId: 2, OwnerColor: '#f8a398' },
            { OwnerText: 'Michael', Id: 3, OwnerGroupId: 1, OwnerColor: '#7499e1' }
        ],
        textField: 'OwnerText', idField: 'Id', groupIDField: 'OwnerGroupId', colorField: 'OwnerColor'
    }],
    eventSettings: { dataSource: resourceData },
    renderCell: function onRenderCell(args) {
      if (args.elementType == 'resourceGroupCells' && args.element.className.indexOf('e-work-hours') > 0) {
        args.element.style.background = "#FAFAE3";
      }
    }
});
scheduleObj.appendTo('#Schedule');