# Drill-down

The TreeMap supports drill-down to expose the hierarchy, achieved by clicking a node. If an item is clicked in the TreeMap, it will be moved to the next level or sub level hierarchy and returned back to the previous level by clicking the node.

## Perform drill-down action

The TreeMap items can be drilled by setting the `enableDrillDown` property to **true**.

{% tab template= "treemap/drilldown", sourceFiles="index.ts,index.html", es5Template="es5Drilldown" %}

```typescript

let jobData:Object[] = [
    { Category: 'Employees', Country: 'USA', JobDescription: 'Sales', JobGroup: 'Executive', EmployeesCount: 20 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Sales', JobGroup: 'Analyst', EmployeesCount: 30 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Marketing', EmployeesCount: 40 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Management', EmployeesCount: 80 },
    { Category: 'Employees', Country: 'India', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 100 },
    { Category: 'Employees', Country: 'India', JobDescription: 'HR Executives', EmployeesCount: 30 },
    { Category: 'Employees', Country: 'India', JobDescription: 'Accounts', EmployeesCount: 40 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Sales', JobGroup: 'Executive', EmployeesCount: 50 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Sales', JobGroup: 'Analyst', EmployeesCount: 60 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Marketing', EmployeesCount: 70 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 80 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Management', EmployeesCount: 10 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Accounts', EmployeesCount: 20 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 30 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'HR Executives', EmployeesCount: 50 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'Accounts', EmployeesCount: 60 },
    { Category: 'Employees', Country: 'France', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 70 },
    { Category: 'Employees', Country: 'France', JobDescription: 'Marketing', EmployeesCount: 100 }];

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
    palette: ["#f44336", "#29b6f6", "#ab47bc", "#ffc107", "#5c6bc0", "#009688"],
    dataSource: jobData,
    weightValuePath: 'EmployeesCount',
    enableDrillDown: true,
    levels: [
        { groupPath: 'Country', border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobDescription', border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobGroup', border: { color: 'black', width: 0.5 } },
    ]
}, '#container');

```

{% endtab %}

## On-demand data loading

All the child items are rendered during the normal drill-down process, and visible at the initial rendering of the TreeMap. But on-demand data loading, it will not render child items at initial rendering, and child nodes will be rendered during the drill-down process by setting the `drillDownView` property to **true**.

{% tab template= "treemap/drilldown", sourceFiles="index.ts,index.html", es5Template="es5OnDemandDrilldown" %}

```typescript

let jobData:Object[] = [
    { Category: 'Employees', Country: 'USA', JobDescription: 'Sales', JobGroup: 'Executive', EmployeesCount: 20 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Sales', JobGroup: 'Analyst', EmployeesCount: 30 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Marketing', EmployeesCount: 40 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Management', EmployeesCount: 80 },
    { Category: 'Employees', Country: 'India', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 100 },
    { Category: 'Employees', Country: 'India', JobDescription: 'HR Executives', EmployeesCount: 30 },
    { Category: 'Employees', Country: 'India', JobDescription: 'Accounts', EmployeesCount: 40 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Sales', JobGroup: 'Executive', EmployeesCount: 50 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Sales', JobGroup: 'Analyst', EmployeesCount: 60 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Marketing', EmployeesCount: 70 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 80 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Management', EmployeesCount: 10 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Accounts', EmployeesCount: 20 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 30 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'HR Executives', EmployeesCount: 50 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'Accounts', EmployeesCount: 60 },
    { Category: 'Employees', Country: 'France', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 70 },
    { Category: 'Employees', Country: 'France', JobDescription: 'Marketing', EmployeesCount: 100 }];

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
    palette: ["#f44336", "#29b6f6", "#ab47bc", "#ffc107", "#5c6bc0", "#009688"],
    dataSource: jobData,
    weightValuePath: 'EmployeesCount',
    enableDrillDown: true,
    drillDownView: true,
    levels: [
        { groupPath: 'Country', border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobDescription', border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobGroup', border: { color: 'black', width: 0.5 } },
    ]
}, '#container');

```

{% endtab %}

## Breadcrumb support

TreeMap items are drilled, up to any level of parent using breadcrumb navigation and the level from root parent to current level is displayed at the top of item layout. It can be enabled by using the `enableBreadcrumb` property to **true** and customize the breadcrumb connector using the `breadcrumbConnector` property. By default, **-**(hyphen) is the connector.

{% tab template= "treemap/drilldown", sourceFiles="index.ts,index.html", es5Template="es5Breadcrumb" %}

```typescript

let jobData:Object[] = [
    { Category: 'Employees', Country: 'USA', JobDescription: 'Sales', JobGroup: 'Executive', EmployeesCount: 20 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Sales', JobGroup: 'Analyst', EmployeesCount: 30 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Marketing', EmployeesCount: 40 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Management', EmployeesCount: 80 },
    { Category: 'Employees', Country: 'India', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 100 },
    { Category: 'Employees', Country: 'India', JobDescription: 'HR Executives', EmployeesCount: 30 },
    { Category: 'Employees', Country: 'India', JobDescription: 'Accounts', EmployeesCount: 40 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Sales', JobGroup: 'Executive', EmployeesCount: 50 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Sales', JobGroup: 'Analyst', EmployeesCount: 60 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Marketing', EmployeesCount: 70 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 80 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Management', EmployeesCount: 10 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Accounts', EmployeesCount: 20 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 30 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'HR Executives', EmployeesCount: 50 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'Accounts', EmployeesCount: 60 },
    { Category: 'Employees', Country: 'France', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 70 },
    { Category: 'Employees', Country: 'France', JobDescription: 'Marketing', EmployeesCount: 100 }];

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
    palette: ["#f44336", "#29b6f6", "#ab47bc", "#ffc107", "#5c6bc0", "#009688"],
    dataSource: jobData,
    weightValuePath: 'EmployeesCount',
    enableDrillDown: true,
    enableBreadcrumb:true,
    breadcrumbConnector: ' -> ',
    levels: [
        { groupPath: 'Country', border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobDescription', border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobGroup', border: { color: 'black', width: 0.5 } },
    ]
}, '#container');

```

{% endtab %}