---
layout: post
title: Getting started with ##Platform_Name## DataManager | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## DataManager of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## DataManager

This section provides a quick overview of how to get started with the Syncfusion DataManager in the ##Platform_Name## platform. It includes guidance on installation, basic setup, and connecting to both local and remote data sources.

## Dependencies

Below is the list of minimum dependencies required to use the DataManager.

```javascript
|-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-base
    |-- es6-promise (Required when window.Promise is not available)
```

> `@syncfusion/ej2-data` requires the presence of a Promise feature in global environment. In the browser, window.Promise must be available.

## Installation

You can install DataManager via npm for your preferred framework.

```bash
npm install @syncfusion/ej2-data

```

## Set up development environment

To get started with the Syncfusion ##Platform_Name## DataManager, follow the step-by-step instructions provided in the [Syncfusion Getting Started](https://ej2.syncfusion.com/documentation/getting-started/quick-start) documentation to configure your development environment.

## Connection to a data source

The Syncfusion ##Platform_Name## DataManager acts as a centralized data gateway, enabling seamless interaction with both local (in-memory) and remote (server-based) data sources. It abstracts the complexities of data handling by using a consistent API for data retrieval and manipulation across various components.

By integrating with the **Query** class, DataManager can perform essential operations such as:

* **Filtering** – Retrieve only the data that matches specific conditions.

* **Sorting** – Order records by one or more fields.

* **Paging** – Load and display data in chunks for performance.

* **CRUD** – Create, Read, Update, and Delete records efficiently.

Whether the data resides in a static JSON file, a RESTful Web API, or an OData service, DataManager ensures that components like Grid, DropDownList, or Chart can consume and manipulate the data with minimal code.

### Binding to JSON data

The Syncfusion ##Platform_Name## DataManager allows seamless integration with local JSON data sources, making it ideal for applications where data is managed entirely on the client-side without involving server communication.

This can be done in one of two ways:

* Assigning an array of JavaScript objects to the `json` property, or

* Passing the data array directly to the `DataManager` constructor.

To display the data in a clean, readable table format, add the following CSS inside the <head> tag of your index.html file:

```html
<style>
     .e-table {
          border: solid 1px #e0e0e0;
          border-collapse: collapse;
          font-family: Roboto;
     }

     .e-table td,
     .e-table th {
          border-style: solid;
          border-width: 1px 0 0;
          border-color: #e0e0e0;
          display: table-cell;
          font-size: 14px;
          line-height: 20px;
          overflow: hidden;
          padding: 8px 21px;
          vertical-align: middle;
          white-space: nowrap;
          width: auto;
     }
</style>
``` 

The following sample demonstrates passing the data array directly to the DataManager:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% raw %}
import { DataManager, Query } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';
import {data} from './datasource';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
let compiledFunction: Function = compile(template);

let result: Object[] = new DataManager(data).executeLocal(new Query().take(8));

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

result.forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
});
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs27/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/data/getting-started-cs27/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs27" %}

### Binding to OData

OData (Open Data Protocol) is a standardized protocol for querying and updating data using RESTful APIs. It is widely adopted in enterprise applications for enabling structured, scalable access to remote data services.

The Syncfusion ##Platform_Name## DataManager provides built-in support for interacting with OData v3 and v4 services, allowing seamless integration with external data sources.

You can bind a remote OData service to the DataManager by setting its `url` property to the service endpoint URL. This configuration enables the DataManager to automatically perform server-side operations such as sorting, filtering, paging, and CRUD by sending appropriate requests to the specified endpoint.

The following sample demonstrates how to bind the DataManager to a remote OData service:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/data/getting-started-cs28/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs28/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs28" %}
