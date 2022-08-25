---
title: "Data Binding"
component: "TreeView"
description: "Binding local, remote, hirarchical data for treeview"
---

# Data Binding

The TreeView component provides the option to load data either from local data sources or from remote data services. This can be done through `dataSource` property that is a member of the [fields](../api/treeview#fields) property. The `dataSource` property supports array of JavaScript objects and [DataManager](../api/data/dataManager/). It also supports different kinds of data services such as OData, OData V4, Web API, URL, and JSON with the help of `DataManager` adaptors.

TreeView has `load on demand` (Lazy load), by default. It reduces the bandwidth size when consuming huge data. It loads first level nodes initially, and when parent node is expanded,  loads the child nodes based on the `parentID/child` member.

By default, the `loadOnDemand` is set to true. By disabling this property, all the tree nodes are rendered at the beginning itself.

You can use the [`dataBound`](../api/treeview#databound) event to perform actions. This event will be triggered once the data source is populated in the TreeView.

## Local data

To bind local data to the TreeView, you can assign a JavaScript object array to the [dataSource](../api/treeview/fieldsSettingsModel#datasource) property.
The TreeView component requires three  fields (ID, text, and parentID) to render local data source. When mapper fields are not specified, it takes the default values as the mapping fields. Local data source can also be provided as an instance of the `DataManager`. It supports two kinds of local data binding methods.

* Hierarchical data

* Self-referential data

### Hierarchical data

TreeView can be populated with hierarchical data source that contains nested array of JSON objects. You can directly assign hierarchical data to the [dataSource](../api/treeview/fieldsSettingsModel#datasource) property, and map all the field members with corresponding keys from the hierarchical data to `fields` property.

In the following example, **code**, **name**, and **countries** columns from hierarchical data have been mapped to **id**, **text**, and **child** fields, respectively.

{% tab template="treeview/data-binding/hierarchical-data", sourceFiles="index.ts,index.html", es5Template="treeview-hierarchical-template" %}

```typescript

import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { TreeView } from '@syncfusion/ej2-navigations';

//define the nested array of JSON objects
let continents: { [key: string]: Object; }[] = [
    {
        code: 'AF', name: 'Africa', countries: [
            { code: 'NGA', name: 'Nigeria' },
            { code: 'EGY', name: 'Egypt' },
            { code: 'ZAF', name: 'South Africa' }
        ]
    },
    {
        code: 'AS', name: 'Asia', expanded: true, countries: [
            { code: 'CHN', name: 'China' },
            { code: 'IND', name: 'India', selected: true },
            { code: 'JPN', name: 'Japan' }
        ]
    },
    {
        code: 'EU', name: 'Europe', countries: [
            { code: 'DNK', name: 'Denmark' },
            { code: 'FIN', name: 'Finland' },
            { code: 'AUT', name: 'Austria' }
        ]
    },
    {
        code: 'NA', name: 'North America', countries: [
            { code: 'USA', name: 'United States of America' },
            { code: 'CUB', name: 'Cuba' },
            { code: 'MEX', name: 'Mexico' }
        ]
    },
    {
        code: 'SA', name: 'South America', countries: [
            { code: 'BRA', name: 'Brazil' },
            { code: 'COL', name: 'Colombia' },
            { code: 'ARG', name: 'Argentina' }
        ]
    },
    {
        code: 'OC', name: 'Oceania', countries: [
            { code: 'AUS', name: 'Australia' },
            { code: 'NZL', name: 'New Zealand' },
            { code: 'WSM', name: 'Samoa' }
        ]
    },
    {
        code: 'AN', name: 'Antarctica', countries: [
            { code: 'BVT', name: 'Bouvet Island' },
            { code: 'ATF', name: 'French Southern Lands' }
        ]
    },
];


let treeObj: TreeView = new TreeView({
    fields: { dataSource: continents, id: 'code', text: 'name', child: 'countries' }
});
treeObj.appendTo('#tree');

```

{% endtab %}

### Self-referential data

TreeView can be populated from self-referential data structure that contains array of JSON objects with `parentID` mapping.

You can directly assign self-referential data to the `dataSource` property, and map all the field members with corresponding keys from self-referential data to [fields](../api/treeview#fields) property.

To render the root level nodes, specify the parentID as null or no need to specify the parentID in `dataSource`.

In the following example, **id**, **pid**, **hasChild**, and **name** columns from self-referential data have been mapped to **id**, **parentID**, **hasChildren**, and **text** fields, respectively.

{% tab template="treeview/data-binding/self-referential-data", sourceFiles="index.ts,index.html", es5Template="treeview-self-referential-template" %}

```typescript

import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { TreeView } from '@syncfusion/ej2-navigations';

let localData: { [key: string]: Object }[] = [
    { id: 1, name: 'Discover Music', hasChild: true, expanded: true },
    { id: 2, pid: 1, name: 'Hot Singles' },
    { id: 3, pid: 1, name: 'Rising Artists' },
    { id: 4, pid: 1, name: 'Live Music' },
    { id: 6, pid: 1, name: 'Best of 2017 So Far' },
    { id: 7, name: 'Sales and Events', hasChild: true },
    { id: 8, pid: 7, name: '100 Albums - $5 Each' },
    { id: 9, pid: 7, name: 'Hip-Hop and R&B Sale' },
    { id: 10, pid: 7, name: 'CD Deals' },
    { id: 11, name: 'Categories', hasChild: true },
    { id: 12, pid: 11, name: 'Songs' },
    { id: 13, pid: 11, name: 'Bestselling Albums' },
    { id: 14, pid: 11, name: 'New Releases' },
    { id: 15, pid: 11, name: 'Bestselling Songs' },
    { id: 16, name: 'MP3 Albums', hasChild: true },
    { id: 17, pid: 16, name: 'Rock' },
    { id: 18, pid: 16, name: 'Gospel' },
    { id: 19, pid: 16, name: 'Latin Music' },
    { id: 20, pid: 16, name: 'Jazz' },
    { id: 21, name: 'More in Music', hasChild: true },
    { id: 22, pid: 21, name: 'Music Trade-In' },
    { id: 23, pid: 21, name: 'Redeem a Gift Card' },
    { id: 24, pid: 21, name: 'Band T-Shirts' },
];

let treeObj: TreeView = new TreeView({
    fields: { dataSource: localData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' }
});
treeObj.appendTo('#tree');

```

{% endtab %}

## Remote data

TreeView can also be populated from a remote data service with the help of [DataManager](../api/data/dataManager/) component and `Query` property.

It supports different kinds of data services such as OData, OData V4, Web API, URL, and JSON with the help of `DataManager` adaptors.

You can assign service data as an instance of `DataManager` to the `dataSource` property. To interact with remote data source, you have to provide the endpoint `url`.

The `DataManager` that acts as an interface between the service endpoint and the TreeView requires the following information to interact with service endpoint properly.

* `DataManager->url`: Defines the service endpoint to fetch data.

* `DataManager->adaptor`: Defines the adaptor option. By default, ODataAdaptor is used for remote binding.

Adaptor is responsible for processing response and request from/to the service endpoint. The `@syncfusion/ej2-data` package provides some predefined adaptors  designed to interact with service endpoints. They are,

* `UrlAdaptor`: Used to interact with remote services. This is the base adaptor for all remote based adaptors.

* `ODataAdaptor`: Used to interact with OData endpoints.

* `ODataV4Adaptor`: Used to interact with OData V4 endpoints.

* `WebApiAdaptor`: Used to interact with Web API created under OData standards.

* `WebMethodAdaptor`: Used to interact with web methods.

In the following example, `ODataV4Adaptor` is  used to fetch data from remote services. The **EmployeeID**, **FirstName**, and **EmployeeID**
columns from Employees table have been mapped to **id**, **text**, and **hasChildren** fields respectively for first level nodes.

The **OrderID**, **EmployeeID**, and **ShipName** columns from orders table have been mapped to **id**, **parentID**, and **text** fields respectively for second level nodes.

{% tab template="treeview/data-binding/remote-data", sourceFiles="index.ts,index.html", es5Template="treeview-remote-data-template" %}

```typescript

import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { TreeView } from '@syncfusion/ej2-navigations';
//import data manager related classes
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
    adaptor: new ODataV4Adaptor,
    crossDomain: true,
});
let query: Query = new Query().from('Employees').select('EmployeeID,FirstName,Title').take(5);
let query1: Query = new Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5);

let treeObj: TreeView = new TreeView({
    fields: { dataSource: data, query: query, id: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID', tooltip: 'Title',
        child: { dataSource: data, query: query1, id: 'OrderID', parentID: 'EmployeeID', text: 'ShipName' }
    }
});
treeObj.appendTo('#tree');

```

{% endtab %}