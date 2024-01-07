/**
 * TreeGrid DataSource
 */


export let griddata: Object[] = [
       {
            "TaskID": 1,
            "TaskName": "Parent Task 1",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "In Progress",
            "Priority": "High",
            "Duration": 90,
            "ParentItem": null,
            "isParent": true
        },
        {
            "TaskID": 3,
            "TaskName": "Child Task 3",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "Validated",
            "Priority": "Critical",
            "Duration": 18,
            "ParentItem": 1,
            "isParent": false
        },
        {
            "ParentItem": 1,
            "TaskID": 9,
            "TaskName": "Child Task 9",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "Open",
            "Priority": "Low",
            "Duration": 3,
            "isParent": false
        },
        {
            "ParentItem": 1,
            "TaskID": 11,
            "TaskName": "Child Task 11",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "Validated",
            "Priority": "Critical",
            "Duration": 33,
            "isParent": false
        },
        {
            "ParentItem": null,
            "TaskID": 17,
            "TaskName": "Parent Task 17",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "In Progress",
            "Priority": "High",
            "Duration": 90,
            "isParent": true
        },
        {
            "ParentItem": 17,
            "TaskID": 19,
            "TaskName": "Child Task 19",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "Validated",
            "Priority": "Critical",
            "Duration": 18,
            "isParent": false
        },
        {
            "ParentItem": 17,
            "TaskID": 25,
            "TaskName": "Child Task 25",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "Open",
            "Priority": "Critical",
            "Duration": 3,
            "isParent": false
        },
        {
            "ParentItem": 17,
            "TaskID": 27,
            "TaskName": "Child Task 27",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "Validated",
            "Priority": "Low",
            "Duration": 33,
            "isParent": false
        },
        {
            "ParentItem": null,
            "TaskID": 33,
            "TaskName": "Parent Task 33",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "In Progress",
            "Priority": "High",
            "Duration": 90,
            "isParent": true
        },
        {
            "ParentItem": 33,
            "TaskID": 35,
            "TaskName": "Child Task 35",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "Validated",
            "Priority": "Low",
            "Duration": 18,
            "isParent": false
        },
        {
            "ParentItem": 33,
            "TaskID": 41,
            "TaskName": "Child Task 41",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "Open",
            "Priority": "Critical",
            "Duration": 3,
            "isParent": false
        },
        {
            "ParentItem": 33,
            "TaskID": 43,
            "TaskName": "Child Task 43",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "Validated",
            "Priority": "Critical",
            "Duration": 33,
            "isParent": false
        },
        {
            "ParentItem": null,
            "TaskID": 49,
            "TaskName": "Parent Task 49",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "In Progress",
            "Priority": "High",
            "Duration": 90,
            "isParent": true
        },
        {
            "ParentItem": 49,
            "TaskID": 51,
            "TaskName": "Child Task 51",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "Validated",
            "Priority": "Critical",
            "Duration": 18,
            "isParent": false
        },
        {
            "ParentItem": 49,
            "TaskID": 57,
            "TaskName": "Child Task 57",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "Open",
            "Priority": "Low",
            "Duration": 3,
            "isParent": false
        },
        {
            "ParentItem": 49,
            "TaskID": 59,
            "TaskName": "Child Task 59",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "Validated",
            "Priority": "Critical",
            "Duration": 33,
            "isParent": false
        },
        {
            "ParentItem": null,
            "TaskID": 65,
            "TaskName": "Parent Task 65",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "In Progress",
            "Priority": "High",
            "Duration": 90,
            "isParent": true
        },
        {
            "ParentItem": 65,
            "TaskID": 67,
            "TaskName": "Child Task 67",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "Validated",
            "Priority": "Critical",
            "Duration": 18,
            "isParent": false
        },
        {
            "ParentItem": 65,
            "TaskID": 73,
            "TaskName": "Child Task 73",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "Open",
            "Priority": "Critical",
            "Duration": 3,
            "isParent": false
        },
        {
            "ParentItem": 65,
            "TaskID": 75,
            "TaskName": "Child Task 75",
            "StartDate": "new Date('02/03/2017')",
            "EndDate": "new Date('02/07/2017')",
            "Progress": "Validated",
            "Priority": "Low",
            "Duration": 33,
            "isParent": false
        }
    
    ];
   
