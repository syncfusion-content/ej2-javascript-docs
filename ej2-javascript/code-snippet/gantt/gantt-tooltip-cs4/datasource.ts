export let GanttData: Object[]  = [
    { TaskId: 1, TaskName: 'Product Concept', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), },
    { TaskId: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30, ParentId: 1 },
    { TaskId: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3, ParentId: 1 },
    { TaskId: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 2, Predecessor: '2', Progress: 30, ParentId: 1 },
    { TaskId: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3,4', Indicators: [ { 'date': '04/10/2019', 'name': '#briefing', 'title': 'Product concept breifing', }]},
    { TaskId: 6, TaskName: 'Market Research',StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), },
    { TaskId: 7, TaskName: 'Demand Analysis', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentId: 6,},
    { TaskId: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5', Progress: 30, ParentId: 7, },
    { TaskId: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5', ParentId: 7,  },
    { TaskId: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '7, 8', Progress: 30, ParentId: 6, },
    { TaskId: 11, TaskName: 'Product strength analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '9', ParentId: 6, },
    { TaskId: 12, TaskName: 'Research complete', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '10', ParentId: 6, Indicators: [ { 'date': '04/20/2019', 'name': '#meeting', 'title': '1st board of directors meeting', } ] },
    { TaskId: 13, TaskName: 'Product Design and Development', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), },
    { TaskId: 14, TaskName: 'Functionality design', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '12', ParentId: 13, },
    { TaskId: 15, TaskName: 'Quality design', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '12', ParentId: 13, },
    { TaskId: 16, TaskName: 'Define Reliability', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30, Predecessor: '15', ParentId: 13, },
    { TaskId: 17, TaskName: 'Identifying raw materials', StartDate: new Date('04/04/2019'), Duration: 2, Predecessor: '15', ParentId: 13, },
    { TaskId: 18, TaskName: 'Define cost plan', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentId: 13 },
    { TaskId: 19, TaskName: 'Manufacturing cost', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30, Predecessor: '17', ParentId: 18, },
    { TaskId: 20, TaskName: 'Selling cost', StartDate: new Date('04/04/2019'), Duration: 2, Predecessor: '17', ParentId: 18, },
    { TaskId: 21, TaskName: 'Development of the final design', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentId: 13, },
    { TaskId: 22, TaskName: 'Defining dimensions and package volume', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30, Predecessor: '19,20', ParentId: 21, },
    { TaskId: 23, TaskName: 'Develop design to meet industry standards', StartDate: new Date('04/04/2019'), Duration: 2, Predecessor: '22', ParentId: 21, },
    { TaskId: 24, TaskName: 'Include all the details', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '23', ParentId: 21, },
    { TaskId: 25, TaskName: 'CAD Computer-aided design', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 30, Predecessor: '24',  ParentId: 13, },
    { TaskId: 26, TaskName: 'CAM Computer-aided manufacturing', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '25', ParentId: 13, },
    { TaskId: 27, TaskName: 'Design complete', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '26', ParentId: 13, Indicators: [ { 'date': '05/18/2019', 'name': '#meeting', 'title': '2nd board of directors meeting', } ] },
    { TaskId: 28, TaskName: 'Prototype Testing', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 30, Predecessor: '27' },
    { TaskId: 29, TaskName: 'Include feedback', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '28ss' },
    { TaskId: 30, TaskName: 'Manufacturing', StartDate: new Date('04/04/2019'), Duration: 5, Progress: 30, Predecessor: '28,29' },
    { TaskId: 31, TaskName: 'Assembling materials to finished goods', StartDate: new Date('04/04/2019'), Duration: 5, Predecessor: '30' },
    { TaskId: 32, TaskName: 'Feedback and Testing', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), },
    { TaskId: 33, TaskName: 'Internal testing and feedback', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 45, Predecessor: '31', ParentId: 32, },
    { TaskId: 34,  TaskName: 'Customer testing and feedback', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, Predecessor: '33', ParentId: 32, },
    { TaskId: 35, TaskName: 'Final Product Development', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), },
    { TaskId: 36, TaskName: 'Important improvements', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 30, Predecessor: '34',  ParentId: 35, },
    { TaskId: 37, TaskName: 'Address any unforeseen issues', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 30, Predecessor: '36ss',  ParentId: 35, },
    { TaskId: 38, TaskName: 'Final Product', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), },
    { TaskId: 39, TaskName: 'Branding product', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '37', ParentId: 38 },
    { TaskId: 40, TaskName: 'Marketing and presales', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 30, Predecessor: '39', ParentId: 38 }    
];
	
export let ganttData: Object[]  = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4,Predecessor:"2FS", Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0,Predecessor:"6SS", Progress: 50 }
            ]
        },
    ];
   