# Levels

TreeMap supports **n** number of levels and each level is separated by using the `groupPath` property.

<!-- markdownlint-disable MD036 -->

## Group path

The `groupPath` property is used to separate each level of the TreeMap by specifying the property from the data source.

In the following example, three levels are added and each level is configured using the `groupPath` property.

{% tab template= "treemap/levels", sourceFiles="index.ts,index.html", es5Template="es5LevelGroupPath" %}

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
    levels: [
        { groupPath: 'Country', border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobDescription', border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobGroup', border: { color: 'black', width: 0.5 } },
    ]
}, '#container');

```

{% endtab %}

<!-- markdownlint-disable MD036 -->

## Group gap

The `groupGap` property is used to separate an item from each group or another item to differentiate the levels mentioned in the TreeMap.

{% tab template= "treemap/levels", sourceFiles="index.ts,index.html", es5Template="es5LevelGroupGap" %}

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
    levels: [
        { groupPath: 'Country', groupGap:10, border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobDescription', groupGap:10, border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobGroup', groupGap:10, border: { color: 'black', width: 0.5 } },
    ]
}, '#container');

```

{% endtab %}

<!-- markdownlint-disable MD036 -->

## Header format and Alignment

Customize header using the `headerFormat` property in which fields are mapping from the dataSource and align header using the `headerAlignment` property.

{% tab template= "treemap/levels", sourceFiles="index.ts,index.html", es5Template="es5LevelHeaderFormat" %}

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
    dataSource:jobData,
    weightValuePath: 'EmployeesCount',
    levels: [
        { groupPath: 'Country', headerFormat:'${Country}-${EmployeesCount}',
        headerAlignment:'Center', border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobDescription',headerFormat:'${JobDescription}-${EmployeesCount}', headerAlignment:'Far', border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobGroup', headerAlignment:'Near',
        headerFormat:'${JobGroup}-${EmployeesCount}', border: { color: 'black', width: 0.5 } },
    ]
}, '#container');

```

{% endtab %}

## Header height and style

Customize the font color, family, weight, opacity and size using the `headerStyle`. Based on the font settings, the header height is given using the `headerHeight` property in `levels`.

{% tab template= "treemap/levels", sourceFiles="index.ts,index.html", es5Template="es5LevelHeaderHeight" %}

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
    levels: [
        { groupPath: 'Country', headerHeight:35, headerStyle:{ size:'15px' }, border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobDescription',headerHeight:45, headerStyle:{ size:'15px' }, border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobGroup',headerHeight:40, headerStyle:{ size:'15px' }, border: { color: 'black', width: 0.5 } },
    ]
}, '#container');

```

{% endtab %}

## Header template and position

The TreeMap header supports to customize header of each item using the `headerTemplate` property. It uses Essential JS2 Template engine to render the elements. You can position the template using the `templatePosition` property.

{% tab template= "treemap/levels", sourceFiles="index.ts,index.html", es5Template="es5LevelHeaderTemplate" %}

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
    dataSource: jobData ,
    weightValuePath: 'EmployeesCount',
     levels: [
        { groupPath: 'Country',headerTemplate:'<div>{{Country}}</div>', headerPosition:'Center', border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobDescription',headerTemplate:'<div>{{JobDescription}}</div>', headerPosition:'Center', border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobGroup',headerTemplate:'<div>{{JobGroup}}</div>', headerPosition:'Far', border: { color: 'black', width: 0.5 } },
    ]
}, '#container');

```

{% endtab %}