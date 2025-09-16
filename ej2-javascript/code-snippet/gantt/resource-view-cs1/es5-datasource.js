var selfReferenceData = [
    { TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'), parentID: null },
    { TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 3, Progress: 30, work: 10, resources: [{ resourceId: 1, resourceUnit: 50 }], parentID: 1 },
    { TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('04/03/2019'), Duration: 4, resources: [{ resourceId: 1, resourceUnit: 70 }], Predecessor: 2, Progress: 30, work: 20, parentID: 1 },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/09/2019'), Duration: 4, resources: [{ resourceId: 1, resourceUnit: 25 }], Predecessor: 3, Progress: 30, work: 10, parentID: 1 },

    { TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'), parentID: null },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/01/2019'), Duration: 5, Progress: 30, resources: [{ resourceId: 2, resourceUnit: 50 }], work: 30, parentID: 5 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 4, resources: [{ resourceId: 2, resourceUnit: 40 }], Predecessor: '6FS-2', Progress: 30, work: 40, parentID: 5 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/09/2019'), Duration: 4, resources: [{ resourceId: 2, resourceUnit: 75 }], Predecessor: '7FS-1', Progress: 30, work: 60, parentID: 5 },

    { TaskID: 9, TaskName: 'Site work', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), parentID: null },
    { TaskID: 10, TaskName: 'Install temporary power service', StartDate: new Date('04/01/2019'), Duration: 14, Progress: 30, resources: [{ resourceId: 3, resourceUnit: 75 }], parentID: 9 },
    { TaskID: 11, TaskName: 'Clear the building site', StartDate: new Date('04/08/2019'), Duration: 9, Progress: 30, Predecessor: '10FS-9', resources: [3], parentID: 9 },
    { TaskID: 12, TaskName: 'Sign contract', StartDate: new Date('04/12/2019'), Duration: 5, resources: [3], Predecessor: '11FS-5', parentID: 9 }
];
var resourceCollection = [
    { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team'},
    { resourceId: 2, resourceName: 'Rose Fuller', resourceGroup: 'Testing Team' },
    { resourceId: 3, resourceName: 'Margaret Buchanan', resourceGroup: 'Approval Team' },
    { resourceId: 4, resourceName: 'Fuller King', resourceGroup: 'Development Team' },
    { resourceId: 5, resourceName: 'Davolio Fuller', resourceGroup: 'Approval Team' },
    { resourceId: 6, resourceName: 'Van Jack', resourceGroup: 'Development Team' },
];
var resources = [
    { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team', isExpand: false},
    { resourceId: 2, resourceName: 'Rose Fuller', resourceGroup: 'Testing Team', isExpand: true},
    { resourceId: 3, resourceName: 'Margaret Buchanan', resourceGroup: 'Approval Team', isExpand: false }
];