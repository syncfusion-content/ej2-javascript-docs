export let GanttData: Object[]  = [
    {
        TaskID: 1,
        TaskName: 'Product concept',
        StartDate: new Date('01/02/2019'),
        EndDate: new Date('01/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('01/02/2019'), Duration: 3, Progress: 30 },
            { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('01/02/2019'), Duration: 3 },
            {
                TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('01/02/2019'), Duration: 2,
                Predecessor: '2', Progress: 30
            },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Market research',
        StartDate: new Date('01/02/2019'),
        EndDate: new Date('01/21/2019'),
        subtasks: [
            {
                TaskID: 6,
                TaskName: 'Demand analysis',
                StartDate: new Date('01/04/2019'),
                EndDate: new Date('01/21/2019'),
                subtasks: [
                    {
                        TaskID: 7, TaskName: 'Customer strength', StartDate: new Date('01/04/2019'), Duration: 4,
                        Predecessor: '5', Progress: 30
                    },
                    { TaskID: 8, TaskName: 'Market opportunity analysis', StartDate: new Date('01/04/2019'), Duration: 4, Predecessor: '5' }
                ]
            },
            {
                TaskID: 9, TaskName: 'Competitor analysis', StartDate: new Date('01/04/2019'), Duration: 4,
                Predecessor: '7, 8', Progress: 30
            },
            { TaskID: 10, TaskName: 'Product strength analsysis', StartDate: new Date('01/04/2019'), Duration: 4, Predecessor: '9' },
            {
                TaskID: 11, TaskName: 'Research complete', StartDate: new Date('01/04/2019'), Duration: 0, Predecessor: '10',
                Indicators: [
                    {
                        'date': '01/20/2019',
                        'name': 'Research completed',
                        'tooltip': 'Research completed',
                        'iconClass': 'description e-icons'
                    }
                ]
            }
        ]
    },
];
