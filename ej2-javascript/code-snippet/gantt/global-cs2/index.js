ej.base.setCulture('de-DE');
ej.base.L10n.load({
    'de-DE': {
      'gantt': {
           "id": "Ich würde",
            "name": "Name",
            "startDate": "Anfangsdatum",
            "duration": "Dauer",
            "progress": "Fortschritt",
     }
  }
});
var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
        height: '450px',
        locale: 'de-DE',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID'
        },
});
ganttChart.appendTo('#Gantt');

