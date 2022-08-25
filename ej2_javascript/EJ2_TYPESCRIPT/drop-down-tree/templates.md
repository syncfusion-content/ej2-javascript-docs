---
title: "Dropdown Tree Template"
component: "Dropdown Tree"
description: "This section shows the customization of the appearance of each item in the pop-up list of Syncfusion JavaScript Dropdown Tree control using template option."
---

# Templates

The Dropdown Tree provides support to customize each list item, header, and footer elements. It uses the Essential JS 2 [Template engine](../../common/template-engine) to compile and render the elements properly.

## Item template

The content of each list item within the Dropdown Tree can be customized with the help of [itemTemplate](../api/drop-down-tree#itemtemplate) property.

In the following sample, the Dropdown Tree list items are customized with employee information such as **name** and **job** using the **itemTemplate** property.

The template expression should be provided inside the ${...} interpolation syntax.

{% tab template="dropdowntree/item-template",es5Template="dropdowntree-item-template", sourceFiles="app.ts,index.html,styles.css" %}

```typescript

import { DropDownTree } from '@syncfusion/ej2-dropdowns';
let data: { [key: string]: Object }[] = [
    { "id": 1, "name": "Steven Buchanan",  "job": "General Manager", "hasChild": true, "expanded": true },
    { "id": 2, "pid": 1, "name": "Laura Callahan",  "job": "Product Manager", "hasChild": true },
    { "id": 3, "pid": 2, "name": "Andrew Fuller",  "job": "Team Lead", "hasChild": true },
    { "id": 4, "pid": 3, "name": "Anne Dodsworth",  "job": "Developer" },
    { "id": 10, "pid": 3, "name": "Lilly",  "job": "Developer", "status":"online" },
    { "id": 5, "pid": 1, "name": "Nancy Davolio",  "job": "Product Manager", "hasChild": true},
    { "id": 6, "pid": 5, "name": "Michael Suyama",  "job": "Team Lead", "hasChild": true },
    { "id": 7, "pid": 6, "name": "Robert King",  "job": "Developer " },
    { "id": 11, "pid": 6, "name": "Mary", "job": "Developer " },
    { "id": 9, "pid": 1, "name": "Janet Leverling",  "job": "HR" }
];
let ddtreeObj: DropDownTree = new DropDownTree({
    fields: { dataSource: data, text: 'name', value: 'id', parentValue: 'pid', hasChildren: 'hasChild' },
    itemTemplate: '#itemTemplate',
    width: '100%',
    cssClass: 'custom',
    placeholder: 'Select an employee',
    popupHeight: '250px'
});
ddtreeObj.appendTo('#template');

```

{% endtab %}

## Header template

The header element is shown statically at the top of the popup list items within the Dropdown Tree. A custom element can be placed as a header element using the [headerTemplate](../api/drop-down-tree/#headertemplate) property.

In the following sample, the header is customized with the custom element.

{% tab template="dropdowntree/header-template",es5Template="dropdowntree-header-template", sourceFiles="app.ts,index.html,styles.css" %}

```typescript

import { DropDownTree } from '@syncfusion/ej2-dropdowns';
let data: { [key: string]: Object }[] = [
    { "id": 1, "name": "Steven Buchanan",  "job": "General Manager", "hasChild": true, "expanded": true },
    { "id": 2, "pid": 1, "name": "Laura Callahan",  "job": "Product Manager", "hasChild": true },
    { "id": 3, "pid": 2, "name": "Andrew Fuller",  "job": "Team Lead", "hasChild": true },
    { "id": 4, "pid": 3, "name": "Anne Dodsworth",  "job": "Developer" },
    { "id": 10, "pid": 3, "name": "Lilly",  "job": "Developer", "status":"online" },
    { "id": 5, "pid": 1, "name": "Nancy Davolio",  "job": "Product Manager", "hasChild": true},
    { "id": 6, "pid": 5, "name": "Michael Suyama",  "job": "Team Lead", "hasChild": true },
    { "id": 7, "pid": 6, "name": "Robert King",  "job": "Developer " },
    { "id": 11, "pid": 6, "name": "Mary", "job": "Developer " },
    { "id": 9, "pid": 1, "name": "Janet Leverling",  "job": "HR" }
];
let ddtreeObj: DropDownTree = new DropDownTree({
    fields: { dataSource: data, text: 'name', value: 'id', parentValue: 'pid', hasChildren: 'hasChild' },
    headerTemplate: '#headerTemplate',
    width: '100%',
    cssClass: 'custom',
    placeholder: 'Select an employee',
    popupHeight: '250px'
});
ddtreeObj.appendTo('#template');

```

{% endtab %}

## Footer template

The Dropdown Tree has options to show a footer element at the bottom of the list items in the popup list. Here, you can place any custom element as a footer element using the [footerTemplate](../api/drop-down-tree/#footertemplate) property.

In the following sample, the footer element displays the total number of employees present in the Dropdown Tree.

{% tab template="dropdowntree/footer-template",es5Template="dropdowntree-footer-template", sourceFiles="app.ts,index.html,styles.css" %}

```typescript

import { DropDownTree } from '@syncfusion/ej2-dropdowns';
let data: { [key: string]: Object }[] = [
    { "id": 1, "name": "Steven Buchanan",  "job": "General Manager", "hasChild": true, "expanded": true },
    { "id": 2, "pid": 1, "name": "Laura Callahan",  "job": "Product Manager", "hasChild": true },
    { "id": 3, "pid": 2, "name": "Andrew Fuller",  "job": "Team Lead", "hasChild": true },
    { "id": 4, "pid": 3, "name": "Anne Dodsworth",  "job": "Developer" },
    { "id": 10, "pid": 3, "name": "Lilly",  "job": "Developer", "status":"online" },
    { "id": 5, "pid": 1, "name": "Nancy Davolio",  "job": "Product Manager", "hasChild": true},
    { "id": 6, "pid": 5, "name": "Michael Suyama",  "job": "Team Lead", "hasChild": true },
    { "id": 7, "pid": 6, "name": "Robert King",  "job": "Developer " },
    { "id": 11, "pid": 6, "name": "Mary", "job": "Developer " },
    { "id": 9, "pid": 1, "name": "Janet Leverling",  "job": "HR" }
];
let ddtreeObj: DropDownTree = new DropDownTree({  
    fields: { dataSource: data, text: 'name', value: 'id', parentValue: 'pid', hasChildren: 'hasChild' },
    footerTemplate:"<span class='foot'> Total number of employees: "+ data.length +"</span>",
    width: '100%',
    cssClass: 'custom',
    placeholder: 'Select an employee',
    popupHeight: '250px'
});
ddtreeObj.appendTo('#template');

```

{% endtab %}

## No records template

The Dropdown Tree is supports to display custom design in the popup list content using the [noRecordsTemplate](../api/drop-down-tree/#norecordstemplate) property when no matches found on search.

In the following sample, popup list content displays the notification of no data available.

{% tab template="dropdowntree/norecords-template",es5Template="dropdowntree-norecords-template",sourceFiles="app.ts,index.html,styles.css" %}

```typescript

import { DropDownTree } from '@syncfusion/ej2-dropdowns';
let data: { [key: string]: Object }[] = [ ];
let ddtreeObj: DropDownTree = new DropDownTree({
    fields: { dataSource: data, text: 'name', value: 'id', parentValue: 'pid', hasChildren: 'hasChild' },
    noRecordsTemplate:"<span class='norecord'> NO DATA AVAILABLE</span>",
    width: '100%',
    placeholder: 'Select an employee',
    popupHeight: '250px'
});
ddtreeObj.appendTo('#template');

```

{% endtab %}

## Action failure template

The Dropdown Tree provides an option to custom design the popup list content using [actionFailureTemplate](../api/drop-down-tree/#actionfailuretemplate) property, when the data fetch request fails at the remote server.

In the following sample, when the data fetch request fails, the Dropdown Tree displays the notification.

{% tab template="dropdowntree/actionfailure-template",es5Template="dropdowntree-actionfailure-template",sourceFiles="app.ts,index.html,styles.css" %}

```typescript

import { DropDownTree } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
let data: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svs',
    adaptor: new ODataV4Adaptor,
    crossDomain: true,
});
let query: Query = new Query().from('Employees').select('EmployeeID,FirstName,Title').take(5);
let query1: Query = new Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5);
let ddTreeObj: DropDownTree = new DropDownTree({
    fields: {
        dataSource: data, query: query, value: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID',
        child: { dataSource: data, query: query1, value: 'OrderID', parentValue: 'EmployeeID', text: 'ShipName' }
    },
    width: '100%',
    actionFailureTemplate:"<span class='action-failure'> Data fetch request fails</span>",
    placeholder: 'Select an employee',
    popupHeight: '250px'
});
ddTreeObj.appendTo('#template');

```

{% endtab %}

## Custom template to show selected items in input

In Dropdown Tree, while selecting more than one items via checkbox or multi selection support, all the selected items will be displayed in the input. Instead of displaying all the selected item text, the custom template can be displayed by setting the the [mode](../api/drop-down-tree/#mode) property as ***Custom*** and [customTemplate](../api/drop-down-tree/#customTemplate) property.

When the **mode** property is set as **Custom**, the Dropdown Tree displays the default template value **(${value.length} item(s) selected)** like **1 item(s) selected or 2 item(s) selected**. The default template can be customized by setting **customTemplate**  property.

In the following sample, the Dropdown Tree is rendered with default value of the **customTemplate** property like “**1 item(s) selected or 2 item(s) selected**”.

{% tab template="dropdowntree/custom-template-mode",es5Template="dropdowntree-custom-template-mode",sourceFiles="app.ts,index.html,styles.css" %}

```typescript

import { DropDownTree } from '@syncfusion/ej2-dropdowns';
let data: { [key: string]: Object }[] = [
    { "id": 1, "name": "Steven Buchanan",  "job": "General Manager", "hasChild": true, "expanded": true },
    { "id": 2, "pid": 1, "name": "Laura Callahan",  "job": "Product Manager", "hasChild": true },
    { "id": 3, "pid": 2, "name": "Andrew Fuller",  "job": "Team Lead", "hasChild": true },
    { "id": 4, "pid": 3, "name": "Anne Dodsworth",  "job": "Developer" },
    { "id": 10, "pid": 3, "name": "Lilly",  "job": "Developer", "status":"online" },
    { "id": 5, "pid": 1, "name": "Nancy Davolio",  "job": "Product Manager", "hasChild": true},
    { "id": 6, "pid": 5, "name": "Michael Suyama",  "job": "Team Lead", "hasChild": true },
    { "id": 7, "pid": 6, "name": "Robert King",  "job": "Developer " },
    { "id": 11, "pid": 6, "name": "Mary", "job": "Developer " },
    { "id": 9, "pid": 1, "name": "Janet Leverling",  "job": "HR" }
];
let checkList: DropDownTree = new DropDownTree({
    fields: { dataSource: data, text: 'name', value: 'id', parentValue: 'pid', hasChildren: 'hasChild' },
    placeholder: 'Select items',
    popupHeight: '200px',
    mode: 'Custom',
    showCheckBox: true,
    treeSettings: { autoCheck: true }
});
checkList.appendTo('#checkbox');

```

{% endtab %}

In the following sample, the Dropdown Tree is rendered with custom value of the **customTemplate** property like **Selected items count: 2**.

{% tab template="dropdowntree/custom-template",es5Template="dropdowntree-custom-template",sourceFiles="app.ts,index.html,styles.css" %}

```typescript

import { DropDownTree } from '@syncfusion/ej2-dropdowns';
let data: { [key: string]: Object }[] = [
    { "id": 1, "name": "Steven Buchanan",  "job": "General Manager", "hasChild": true, "expanded": true },
    { "id": 2, "pid": 1, "name": "Laura Callahan",  "job": "Product Manager", "hasChild": true },
    { "id": 3, "pid": 2, "name": "Andrew Fuller",  "job": "Team Lead", "hasChild": true },
    { "id": 4, "pid": 3, "name": "Anne Dodsworth",  "job": "Developer" },
    { "id": 10, "pid": 3, "name": "Lilly",  "job": "Developer", "status":"online" },
    { "id": 5, "pid": 1, "name": "Nancy Davolio",  "job": "Product Manager", "hasChild": true},
    { "id": 6, "pid": 5, "name": "Michael Suyama",  "job": "Team Lead", "hasChild": true },
    { "id": 7, "pid": 6, "name": "Robert King",  "job": "Developer " },
    { "id": 11, "pid": 6, "name": "Mary", "job": "Developer " },
    { "id": 9, "pid": 1, "name": "Janet Leverling",  "job": "HR" }
];
let checkList: DropDownTree = new DropDownTree({
    fields: { dataSource: data, text: 'name', value: 'id', parentValue: 'pid', hasChildren: 'hasChild' },
    placeholder: 'Select items',
    popupHeight: '200px',
    mode: 'Custom',
    customTemplate: "Selected items count: ${value.length}",
    showCheckBox: true,
    treeSettings: { autoCheck: true }
});
checkList.appendTo('#checkbox');

```

{% endtab %}