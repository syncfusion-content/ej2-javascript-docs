---
layout: post
title: Microsoft sql server in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Microsoft sql server in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Microsoft sql server 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Microsoft sql server in ##Platform_Name## Pivotview control

This section describes how to retrieve data from Microsoft SQL Server using [Microsoft SqlClient](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient?view=dotnet-plat-ext-7.0) and bind it to the Pivot Table via a Web API controller.

## Create a Web API service to fetch SQL Server data

**1.** Open Visual Studio and create an ASP.NET Core Web App project type, naming it **MyWebService**. To create an ASP.NET Core Web application, follow the document [link](https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core?view=vs-2022).

![Create ASP.NET Core Web App project](../images/azure-asp-core-web-service-create.png)

**2.** To connect a SQL Server using the **SqlClient** in our application, we need to install the [System.Data.SqlClient](https://www.nuget.org/packages/System.Data.SqlClient/4.8.5?_src=template) NuGet package. To do so, open the NuGet package manager of the project solution, search for the package **System.Data.SqlClient** and install it.

![Add the NuGet package "System.Data.SqlClient" to the project](../images/system-Data-sql-client-nuget-package-install.png)

**3.** Create a Web API controller (aka, PivotController.cs) file under **Controllers** folder that helps to establish data communication with the Pivot Table.

**4.** In the Web API controller (aka, PivotController), **SqlConnection** helps to connect the SQL database (that is, Database1.mdf). Next, using **SqlCommand** and **SqlDataAdapter** you can process the desired SQL query string and retrieve data from the database. The **Fill** method of the DataAdapter is used to populate the SQL data into a **DataTable** as shown in the following code snippet.

```c#
    using Microsoft.AspNetCore.Mvc;
    using System.Data;
    using System.Data.SqlClient;

    namespace MyWebService.Controllers
    {
        [ApiController]
        [Route("[controller]")]
        public class PivotController : ControllerBase
        {
            private static DataTable FetchSQLResult()
            {
                // Replace with your own connection string.
                string conSTR = @"<Enter your valid connection string here>";
                SqlConnection sqlConnection = new(conSTR);
                sqlConnection.Open();
                SqlCommand cmd = new(xquery, sqlConnection);
                SqlDataAdapter dataAdapter = new(cmd);
                DataTable dataTable = new();
                dataAdapter.Fill(dataTable);
                return dataTable;
            }
        }
    }

```

**5.** In the **Get()** method of the **PivotController.cs** file, the **FetchSQLResult** method is used to retrieve the SQL data as a **DataTable**, which is then serialized into JSON using **JsonConvert.SerializeObject()**.

```c#
    using Microsoft.AspNetCore.Mvc;
    using Newtonsoft.Json;
    using System.Data;
    using System.Data.SqlClient;

    namespace MyWebService.Controllers
    {
        [ApiController]
        [Route("[controller]")]
        public class PivotController : ControllerBase
        {
            [HttpGet(Name = "GetSQLResult")]
            public object Get()
            {
                return JsonConvert.SerializeObject(FetchSQLResult());
            }

            private static DataTable FetchSQLResult()
            {
                string conSTR = @"<Enter your valid connection string here>";
                string xquery = "SELECT * FROM table1";
                SqlConnection sqlConnection = new(conSTR);
                sqlConnection.Open();
                SqlCommand cmd = new(xquery, sqlConnection);
                SqlDataAdapter dataAdapter = new(cmd);
                DataTable dataTable = new();
                dataAdapter.Fill(dataTable);
                return dataTable;
            }
        }
    }

```

**6.** Run the web application and it will be hosted within the URL `https://localhost:44393`.

**7.** Finally, the retrieved data from SQL Server which is in the form of JSON can be found in the Web API controller available in the URL link `https://localhost:44393/Pivot`, as shown in the browser page below.

![Hosted Web API URL](../images/code-web-app.png)

## Connecting the Pivot Table to a SQL database using the Web API service

**1.** Create a simple Javascript Pivot Table by following the **"Getting Started"** documentation [link](../getting-started).

**2.** Map the hosted Web API's URL link `https://localhost:44393/Pivot` to the Pivot Table in **index.js** by using the [url](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#url) property under [dataSourceSettings](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/).

```javascript
var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        url: 'https://localhost:44393/Pivot',
        //Other codes here...
    }
});
pivotObj.appendTo('#PivotView');

```

**3.** Frame and set the report based on the data retrieved from the SQL database.

```javascript
var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        url: 'https://localhost:44393/Pivot',
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Product' }],
        values: [{ name: 'Quantity' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'State' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    showFieldList: true,
    width: '100%'
});
pivotObj.appendTo('#PivotView');

```

When you run the sample, the resulting pivot table will look like this:

![PivotTable bound with SQL database](../images/sql-data-binding.png)

> Explore our Javascript Pivot Table sample and ASP.NET Core Web Application to extract data from a SQL database and bind to the Pivot Table in [this](https://github.com/SyncfusionExamples/how-to-bind-SQL-database-to-pivot-table) GitHub repository.
