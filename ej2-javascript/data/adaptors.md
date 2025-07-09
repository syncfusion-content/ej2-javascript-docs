---
layout: post
title: Adaptors in ##Platform_Name## DataManager | Syncfusion
description: Learn here all about Adaptors in Syncfusion ##Platform_Name## DataManager of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Adaptors 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Adaptors in Syncfusion ##Platform_Name## DataManager

Different data sources and remote services often follow distinct protocols for handling requests and returning responses. While the DataManager is designed to support a wide range of data services, it cannot natively interpret every possible data format or communication pattern.

To tackle this challenge, the DataManager leverages a flexible adaptor system. Adaptors act as intermediaries that translate requests and responses between the DataManager and the data service, ensuring seamless interaction regardless of the backend’s architecture.

Adaptors in Syncfusion ##Platform_Name## DataManager act as communication bridges between the component and various data sources. They format queries and interpret responses appropriately depending on whether the data source is local or remote.

**Purpose of Adaptors:**

**For local data sources:** An adaptor facilitates the management of data that is already present within the application, such as a list or table maintained in memory. It handles operations like searching, sorting, filtering, and paging directly on this local dataset, eliminating the need for communication with an external server.

For example, imagine you have a contact list saved on your phone. If you want to quickly find all contacts with the name "John" or sort them by last called date, the adaptor handles this immediately on your phone without needing internet or asking a server.

**For remote data sources:** An adaptor serves as a bridge between the application and the server, translating data operations into appropriate request formats. It constructs and sends queries to the server using protocols like REST, OData, or GraphQL. Once the server responds, the adaptor processes and formats the data so the application can understand and use it.

For example, in an online shopping app where product information is stored on a remote server, when you search for products or browse pages, the adaptor formats your request properly, sends it to the server, and then converts the returned data into a list that the app can display.

**Types of Adaptors:**

Syncfusion provides several built-in adaptors to work with different data sources:

| Adaptor          | Description                                |
|------------------|--------------------------------------------|
| JsonAdaptor      | Works with local JavaScript arrays.        |
| ODataAdaptor     | Communicates with OData v3 services.       |
| ODataV4Adaptor   | For OData v4 endpoints.                     |
| WebApiAdaptor    | Integrates with ASP.NET Web API.            |
| WebMethodAdaptor | Integrates with web methods (e.g., ASP.NET server methods). |
| UrlAdaptor       | A generic adaptor for RESTful endpoints.   |
| CustomAdaptor    | Enables fully custom data processing logic.|
| GraphQLAdaptor   | Used to communicate with GraphQL services.|

## Json adaptor

The `JsonAdaptor` is a built-in adaptor provided by Syncfusion ##Platform_Name## DataManager module. It is specifically designed to work with local data sources, such as JavaScript arrays or in-memory collections.  It allows you to perform various data operations like filtering, sorting, paging, and grouping directly on the client-side, without the need for server-side requests.

If you're building a feature like a product listing or a customer table where data is already available on the client-side (e.g., fetched once from an API or stored locally), the `JsonAdaptor` allows you to perform data operations directly in the browser, eliminating unnecessary server requests and improving performance.

To achieve the manipulation of local data using `JsonAdaptor`, follow these steps:

**Step 1:** Import **DataManager**, **Query**, **JsonAdaptor** modules from **@syncfusion/ej2-data**, and the **compile** module from **@syncfusion/ej2-base**.

  ```ts

  import { DataManager, Query, JsonAdaptor } from '@syncfusion/ej2-data';
  import { compile } from '@syncfusion/ej2-base';

  ```

**Step 2:** Provide your local data array to `json` of **DataManager**.

  ```ts

  const data: Object[] = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 },
    // ... more data items.
  ];

  ```

**Step 3: Configure the DataManager:**

  Assign your local data array to the `json` property and set the `adaptor` to an instance of `JsonAdaptor`.

  ```ts

  const dataManager = new DataManager({
    json: data,
    adaptor: new JsonAdaptor()
  });

  ```

**Step 4: Apply a query using executeLocal method:**

  Use the [executeLocal](../../api/data/dataManager/#executelocal) method with a [Query](../../api/data/query/) object to retrieve and manipulate data directly on the client-side. This method allows you to perform operations like filtering, sorting, paging, and grouping on local data without any server requests. For example, to retrieve the first 8 records.

  ```ts

  const result: Object[] = dataManager.executeLocal(new Query().take(8));

  ```

Here is an example that demonstrates how to use the `JsonAdaptor`:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/data/getting-started-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/data/getting-started-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs1" %}
{% endif %}


## Client and server API integration

{% if page.publishingplatform == "typescript" %}

**Step 1: Set up your development environment:**

Before you start, make sure you have the following installed:

- .NET Core SDK
- Node.js
- Visual Studio or any other preferred code editor.

**Step 2: Create a new ASP.NET Core project:**

Open Visual Studio and create an ASP.NET Core Web API project named any of Adaptor(For ex: **UrlAdaptor**).

**Step 3: Add the Microsoft.TypeScript.MSBuild NuGet package to the project:**

In Solution Explorer, right-click the project node and select Manage NuGet Packages. In the Browse tab, search for [Microsoft.TypeScript.MSBuild](https://www.nuget.org/packages/Microsoft.TypeScript.MSBuild/) and then select **Install** on the right to install the package.

**Step 4: Configure the server:**

In `Program.cs`, call `UseDefaultFiles` and `UseStaticFiles`.

```cs
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();
```

Comment out the below line in `launchSettings.json`:

```json
  "https": {
    "commandName": "Project",
    "dotnetRunMessages": true,
    "launchBrowser": true,
    // "launchUrl": "swagger",
    "applicationUrl": "https://localhost:xxxx;http://localhost:xxxx",
    "environmentVariables": {
      "ASPNETCORE_ENVIRONMENT": "Development"
    }
  }
```
This configuration enables the server to locate and serve the `index.html` file.

**Step 5: Model class creation:**

Create a model class named **OrdersDetails.cs** in the **Models** folder to represent the order data.

{% tabs %}
{% highlight cs tabtitle="OrdersDetails.cs" %}

namespace UrlAdaptor.Models
{
  public class OrdersDetails
  {
    public static List<OrdersDetails> order = new List<OrdersDetails>();
    public OrdersDetails()
    {

    }
    public OrdersDetails(
    int OrderID, string CustomerId, int EmployeeId, double Freight, bool Verified,
    DateTime OrderDate, string ShipCity, string ShipName, string ShipCountry,
    DateTime ShippedDate, string ShipAddress)
    {
      this.OrderID = OrderID;
      this.CustomerID = CustomerId;
      this.EmployeeID = EmployeeId;
      this.Freight = Freight;
      this.ShipCity = ShipCity;
      this.Verified = Verified;
      this.OrderDate = OrderDate;
      this.ShipName = ShipName;
      this.ShipCountry = ShipCountry;
      this.ShippedDate = ShippedDate;
      this.ShipAddress = ShipAddress;
    }

    public static List<OrdersDetails> GetAllRecords()
    {
      if (order.Count() == 0)
      {
        int code = 10000;
        for (int i = 1; i < 10; i++)
        {
        order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, 2.3 * i, false, new DateTime(1991, 05, 15), "Berlin", "Simons bistro", "Denmark", new DateTime(1996, 7, 16), "Kirchgasse 6"));
        order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, 3.3 * i, true, new DateTime(1990, 04, 04), "Madrid", "Queen Cozinha", "Brazil", new DateTime(1996, 9, 11), "Avda. Azteca 123"));
        order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, 4.3 * i, true, new DateTime(1957, 11, 30), "Cholchester", "Frankenversand", "Germany", new DateTime(1996, 10, 7), "Carrera 52 con Ave. Bolívar #65-98 Llano Largo"));
        order.Add(new OrdersDetails(code + 4, "BLONP", i + 3, 5.3 * i, false, new DateTime(1930, 10, 22), "Marseille", "Ernst Handel", "Austria", new DateTime(1996, 12, 30), "Magazinweg 7"));
        order.Add(new OrdersDetails(code + 5, "BOLID", i + 4, 6.3 * i, true, new DateTime(1953, 02, 18), "Tsawassen", "Hanari Carnes", "Switzerland", new DateTime(1997, 12, 3), "1029 - 12th Ave. S."));
        code += 5;
        }
      }
      return order;
    }

    public int? OrderID { get; set; }
    public string? CustomerID { get; set; }
    public int? EmployeeID { get; set; }
    public double? Freight { get; set; }
    public string? ShipCity { get; set; }
    public bool? Verified { get; set; }
    public DateTime OrderDate { get; set; }
    public string? ShipName { get; set; }
    public string? ShipCountry { get; set; }
    public DateTime ShippedDate { get; set; }
    public string? ShipAddress { get; set; }
  }
}

{% endhighlight %}
{% endtabs %}

**Step 6: API controller creation:**

Create a file named `OrdersController.cs` under the **Controllers** folder. This controller will handle data communication with the table or Syncfusion controls.

{% tabs %}
{% highlight cs tabtitle="OrdersController.cs" %}

using Microsoft.AspNetCore.Mvc;
using Syncfusion.EJ2.Base;
using UrlAdaptor.Models;

namespace UrlAdaptor.Controllers
{
  [ApiController]
  public class OrdersController
  {
    /// <summary>
    /// Processes the DataManager request to perform paging operations (skip and take) on the ordersdetails data.
    /// </summary>
    /// <param name="DataManagerRequest">Contains the details of the data operation requested, including paging parameters.</param>
    /// <returns>Returns a JSON object and the total record count.</returns>
    [HttpPost]
    [Route("api/[controller]")]
    public object Post([FromBody] DataManagerRequest DataManagerRequest)
    {
      // Retrieve data from the data source (e.g., database).
      IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

        // Return the paginated data and the total record count.
        return new { result = DataSource, count = totalRecordsCount };
      }

      /// <summary>
      /// Retrieves all order data records from the data source.
      /// </summary>
      /// <returns>Returns a list of all order records.</returns>
      [HttpGet]
      [Route("api/[controller]")]
      public List<OrdersDetails> GetOrderData()
      {
        var data = OrdersDetails.GetAllRecords().ToList();
        return data;
      }
    }
}
{% endhighlight %}
{% endtabs %}

> The **GetOrderData** method retrieves sample order data. You can replace it with your custom logic to fetch data from a database or any other source.

> The controller logic can be modified based on the selected adaptor configuration such as Web API or OData to ensure seamless integration and optimal performance for each integration scenario.

**Step 7:** To integrate the table or Syncfusion controls into your ##Platform_Name## and ASP.NET Core project using Visual Studio, follow these steps:

  **1: Create a package.json file:**

  Run the following command in the project root to create a `package.json` file.

  ```bash
  npm init -y
  ```

  **2: Install webpack and other dependencies:**

  ```bash
  npm i -D -E clean-webpack-plugin css-loader html-webpack-plugin mini-css-extract-plugin ts-loader typescript webpack webpack-cli
  ```

  **3: Configure package.json scripts:**

  Replace the **scripts** property of `package.json` file with the following code:

  ```JSON
  "scripts": {
    "build": "webpack --mode=development --watch",
    "release": "webpack --mode=production",
    "publish": "npm run release && dotnet publish -c Release"
  },
  ```

  **4: Create wwwroot folder:**

  Create a folder named `wwwroot` in the project root directory. This folder will contain static files served by the web server.

  **5: Create webpack.config.js:**

  Create a file named `webpack.config.js` in the project root, with the following code to configure the Webpack compilation process:

  ```js
  const path = require("path");
  const HtmlWebpackPlugin = require("html-webpack-plugin");
  const { CleanWebpackPlugin } = require("clean-webpack-plugin");
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");

  module.exports = {
      entry: "./src/index.ts",
      output: {
          path: path.resolve(__dirname, "wwwroot"),
          filename: "[name].[chunkhash].js",
          publicPath: "/",
      },
      resolve: {
          extensions: [".js", ".ts"],
      },
      module: {
          rules: [
              {
                  test: /\.ts$/,
                  use: "ts-loader",
              },
              {
                  test: /\.css$/,
                  use: [MiniCssExtractPlugin.loader, "css-loader"],
              },
          ],
      },
      plugins: [
          new CleanWebpackPlugin(),
          new HtmlWebpackPlugin({
              template: "./src/index.html",
          }),
          new MiniCssExtractPlugin({
              filename: "css/[name].[chunkhash].css",
          }),
      ],
  };
  ```

  **6:** Create a new directory named `src` in the project root for the client code.

  **7: Install Syncfusion packages:**

  Open your terminal in the project’s root folder and install the required Syncfusion packages using npm:

  ```bash
  npm install @syncfusion/ej2-data --save
  ```

  **8: Implement Adaptor:** 

  Create `src/index.html` to add the required HTML structure, and create `src/index.ts` to implement the adapter logic, which has been elaborated based on each adaptor in below topics.

  **9:** Create `src/tsconfig.json` in the project and add the following content:

  ```json
  {
    "compilerOptions": {
      "noImplicitAny": true,
      "noEmitOnError": true,
      "removeComments": false,
      "sourceMap": true,
      "target": "es5"
    },
    "exclude": [
      "node_modules",
      "wwwroot"
    ]
  }
  ```

  **11: Install additional packages and build the project:**

  ```bash
  npm i @types/node
  npm run build
  ```

  **12: Run the project:**

  Run the project in Visual Studio.

  The `wwwroot/index.html` file is served at **https://localhost:xxxx**.

{% elsif page.publishingplatform == "javascript" %}

**Step 1: Create a new ASP.NET Core project:**

To create a new ASP.NET Core Web API project named any of Adaptor(For ex: **UrlAdaptor**), follow these steps:

* Open Visual Studio.
* Select "Create a new project"
* Choose **ASP.NET Core Web API** project template.
* Name the project **UrlAdaptor**.
* Click "Create"

**Step 2: Configure the server:** 

In the `Program.cs` file of your project, configure the server to serve static files by adding the following code:

```cs
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();
```

Additionally, comment out the following line in the `launchSettings.json` file:

```json
    "https": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": true,
     // "launchUrl": "swagger",
      "applicationUrl": "https://localhost:xxxx;http://localhost:xxxx",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
```
This configuration enables the server to locate and serve the index.html file.

**Step 3: Model class creation:**

Create a model class named **OrdersDetails.cs** in the **Models** folder to represent the order data.

{% tabs %}
{% highlight cs tabtitle="OrdersDetails.cs" %}

 namespace UrlAdaptor.Models
 {
 public class OrdersDetails
 {
    public static List<OrdersDetails> order = new List<OrdersDetails>();
    public OrdersDetails()
    {

    }
    public OrdersDetails(
    int OrderID, string CustomerId, int EmployeeId, double Freight, bool Verified,
    DateTime OrderDate, string ShipCity, string ShipName, string ShipCountry,
    DateTime ShippedDate, string ShipAddress)
    {
      this.OrderID = OrderID;
      this.CustomerID = CustomerId;
      this.EmployeeID = EmployeeId;
      this.Freight = Freight;
      this.ShipCity = ShipCity;
      this.Verified = Verified;
      this.OrderDate = OrderDate;
      this.ShipName = ShipName;
      this.ShipCountry = ShipCountry;
      this.ShippedDate = ShippedDate;
      this.ShipAddress = ShipAddress;
    }

    public static List<OrdersDetails> GetAllRecords()
    {
      if (order.Count() == 0)
      {
        int code = 10000;
        for (int i = 1; i < 10; i++)
        {
        order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, 2.3 * i, false, new DateTime(1991, 05, 15), "Berlin", "Simons bistro", "Denmark", new DateTime(1996, 7, 16), "Kirchgasse 6"));
        order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, 3.3 * i, true, new DateTime(1990, 04, 04), "Madrid", "Queen Cozinha", "Brazil", new DateTime(1996, 9, 11), "Avda. Azteca 123"));
        order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, 4.3 * i, true, new DateTime(1957, 11, 30), "Cholchester", "Frankenversand", "Germany", new DateTime(1996, 10, 7), "Carrera 52 con Ave. Bolívar #65-98 Llano Largo"));
        order.Add(new OrdersDetails(code + 4, "BLONP", i + 3, 5.3 * i, false, new DateTime(1930, 10, 22), "Marseille", "Ernst Handel", "Austria", new DateTime(1996, 12, 30), "Magazinweg 7"));
        order.Add(new OrdersDetails(code + 5, "BOLID", i + 4, 6.3 * i, true, new DateTime(1953, 02, 18), "Tsawassen", "Hanari Carnes", "Switzerland", new DateTime(1997, 12, 3), "1029 - 12th Ave. S."));
        code += 5;
        }
      }
      return order;
    }

    public int? OrderID { get; set; }
    public string? CustomerID { get; set; }
    public int? EmployeeID { get; set; }
    public double? Freight { get; set; }
    public string? ShipCity { get; set; }
    public bool? Verified { get; set; }
    public DateTime OrderDate { get; set; }
    public string? ShipName { get; set; }
    public string? ShipCountry { get; set; }
    public DateTime ShippedDate { get; set; }
    public string? ShipAddress { get; set; }
  }
}

{% endhighlight %}
{% endtabs %}

**Step 4: API controller creation:**

Create a file named `OrdersController.cs` under the **Controllers** folder. This controller will handle data communication with the table or syncfusion controls.

{% tabs %}
{% highlight cs tabtitle="OrdersController.cs" %}

using Microsoft.AspNetCore.Mvc;
using Syncfusion.EJ2.Base;
using UrlAdaptor.Models;

namespace UrlAdaptor.Controllers
{
  [ApiController]
  public class OrdersController
  {
    /// <summary>
    /// Processes the DataManager request to perform paging operations (skip and take) on the ordersdetails data.
    /// </summary>
    /// <param name="DataManagerRequest">Contains the details of the data operation requested, including paging parameters.</param>
    /// <returns>Returns a JSON object and the total record count.</returns>
    [HttpPost]
    [Route("api/[controller]")]
    public object Post([FromBody] DataManagerRequest DataManagerRequest)
    {
      // Retrieve data from the data source (e.g., database).
      IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

        // Return the paginated data and the total record count.
        return new { result = DataSource, count = totalRecordsCount };
      }

      /// <summary>
      /// Retrieves all order data records from the data source.
      /// </summary>
      /// <returns>Returns a list of all order records.</returns>
      [HttpGet]
      [Route("api/[controller]")]
      public List<OrdersDetails> GetOrderData()
      {
        var data = OrdersDetails.GetAllRecords().ToList();
        return data;
      }
    }
}
{% endhighlight %}
{% endtabs %}

> The **GetOrderData** method retrieves sample order data. You can replace it with your custom logic to fetch data from a database or any other source.

> The controller logic can be modified based on the selected adaptor configuration such as Web API or OData to ensure seamless integration and optimal performance for each integration scenario.

**Step 7:** To integrate the table or Syncfusion controls into your ##Platform_Name## and ASP.NET Core project using Visual Studio, follow these steps:

  **1: Create wwwroot folder:**

  Create a folder named `wwwroot` in the project root directory. This folder will contain static files served by the web server.

  **2: Create JS and CSS folders:**

  Inside the wwwroot folder, create js and css folders to hold script and CSS files, respectively.

  **3: Implement Adaptor:** 

  Create an `index.html` file under the `wwwroot` folder to add the required HTML structure, and create a `index.js` file under the `wwwroot/js` folder to implement the adapter, which has been elaborated based on each adaptor in below topics.

  **4: Run the project:**

  Now, run the project to see the table or Syncfusion controls connected to the API service in action.

{% endif %}

> * In an API service project, add `Syncfusion.EJ2.AspNet.Core` by opening the NuGet package manager in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), search and install it.
> * To access `DataManagerRequest` and `QueryableOperation`, import `Syncfusion.EJ2.Base` in `OrdersController.cs` file.

## Url adaptor

The `UrlAdaptor` is a built-in adaptor in Syncfusion ##Platform_Name## DataManager module designed to interact with remote web services such as RESTful APIs. It acts as the base class for many other adaptors (like WebApiAdaptor and ODataAdaptor), providing core functionality for HTTP communication.

This adaptor is especially useful when your data resides on a server and you need to perform operations like filtering, sorting, paging, or grouping on that remote data.

The `UrlAdaptor` expects the server's response to be a JSON object containing two primary properties:

- **result:**
  An array that contains the actual data records to be processed or displayed.

- **count:**
  A number representing the total count of records available on the server. This is especially important for enabling accurate pagination.

A sample response object should look like this:

![UrlAdaptor](./image/url-adaptor.png)

To achieve this, follow these steps:

{% if page.publishingplatform == "typescript" %}

**Step 1:** Import **DataManager**, **Query**, **UrlAdaptor** modules from **@syncfusion/ej2-data**.

```ts

import { DataManager, Query, UrlAdaptor, ReturnOption } from '@syncfusion/ej2-data';

```
**Step 2: Configure the DataManager:**

Assign your API endpoint to the `url` property and use `UrlAdaptor` as the `adaptor`.

```ts

const datamanger = new DataManager({
  // Use remote server host and port instead of 'xxxx'.
  url: 'https://localhost:xxxx/api/Orders',
  adaptor: new UrlAdaptor(),
});

```

**Step 3: Apply a query using executeQuery:**

Use the [executeQuery](../../api/data/dataManager/#executequery) method with a [Query](../../api/data/query/) object to retrieve data. This enables you to perform server-side operations such as paging, filtering, or sorting. For example, the following code retrieves the first 10 records from the remote data source in the form of `result` and `count`.

```ts

datamanger.executeQuery(new Query().take(10)).then((e: ReturnOption) => {
  (<Object[]>e.result.result).forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
  });
}).catch(error => {
  console.error("Data fetch failed:", error);
});

```

{% elsif page.publishingplatform == "javascript" %}

**Step 1: Configure the DataManager:**

Assign your API endpoint to the `url` property and use `UrlAdaptor` as the `adaptor`.

```js

const datamanger = new ej.data.DataManager({
  // Use remote server host and port instead of 'xxxx'.
  url: 'https://localhost:xxxx/api/Orders',
  adaptor: new ej.data.UrlAdaptor(),
});

```

**Step 2: Apply a query using executeQuery:**

Use the [executeQuery](../../api/data/dataManager/#executequery) method with a [Query](../../api/data/query/) object to retrieve data. This enables you to perform server-side operations such as paging, filtering, or sorting. For example, the following code retrieves the first 10 records from the remote data source in the form of `result` and `count`.

```js
datamanger.executeQuery(new Query().take(10)).then((e) => {
  e.result.result.forEach((data) => {
    table.appendChild(compiledFunction(data)[0]);
  });
}).catch(error => {
  console.error("Data fetch failed:", error);
})

```

{% endif %}

>* Built-in support is available for handling data operations such as searching, sorting, filtering, aggregate and paging on the server-side. These operations can be handled using methods such as `PerformSearching`, `PerformFiltering`, `PerformSorting`, `PerformTake` and `PerformSkip` available in the `Syncfusion.EJ2.AspNet.Core` package.

This example demonstrates how to use the `UrlAdaptor` and return the data in result and count format from server end with **OrdersController.cs** as below:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs34/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs34/index.html %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersController.cs" %}
{% include code-snippet/data/getting-started-cs34/OrdersController.cs %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersDetails.cs" %}
{% include code-snippet/data/getting-started-cs34/OrdersDetails.cs %}
{% endhighlight %}
{% endtabs %}
        
{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs34/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs34/index.html %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersController.cs" %}
{% include code-snippet/data/getting-started-cs34/OrdersController.cs %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersDetails.cs" %}
{% include code-snippet/data/getting-started-cs34/OrdersDetails.cs %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## OData adaptor

The `ODataAdaptor` in Syncfusion ##Platform_Name## DataManager facilitates seamless integration with [OData](http://www.odata.org/documentation/odata-version-3-0/) services, which are standardized RESTful APIs designed for querying and manipulating data over HTTP. This adaptor streamlines operations such as querying, filtering, sorting, and paging data from OData endpoints, making it especially suitable for enterprise applications that require standardized and interoperable data access.

This adaptor is especially useful when:

* Connecting to an OData-compliant REST API.

* Utilizing built-in support for `OData` query options such as **$filter**, **$orderby**, **$top**, and **$skip**.

* Performing efficient server-side data operations, including paging, sorting, and filtering.

The `ODataAdaptor` automatically translates DataManager query operations into OData-compliant HTTP requests. It manages response parsing and maps the server data into the format expected by Syncfusion components, enabling smooth client-server communication.

The `ODataAdaptor` expects the server's response to be a JSON object containing two primary properties:

- **result:**
  An array that contains the actual data records to be processed or displayed.

- **count:**
  A number representing the total count of records available on the server. This is especially important for enabling accurate pagination.

A sample response object should look like this:

![OData adaptor](./image/odata-adaptor.png)


To retrieve data from an OData service using the DataManager, follow these steps:

{% if page.publishingplatform == "typescript" %}

**Step 1:** Import **DataManager**, **Query**, **ODataAdaptor** modules from **@syncfusion/ej2-data**, and the **compile** module from **@syncfusion/ej2-base**.

```ts

import { DataManager, Query, ODataAdaptor, ReturnOption } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

```
**Step 2: Configure the DataManager:**

Assign your API endpoint to the `url` property and use `ODataAdaptor` as the `adaptor`.

```ts

const datamanger = new DataManager({
  // Use remote server host and port instead of 'xxxx'.
  url: 'https://localhost:xxxx/api/Orders',
  adaptor: new ODataAdaptor(),
});

```

**Step 3: Apply a query using executeQuery:**

Use the [executeQuery](../../api/data/dataManager/#executequery) method with a [Query](../../api/data/query/) object to retrieve data. This enables you to perform server-side operations such as paging, filtering, or sorting. For example, the following code retrieves the first 8 records from the remote data source in the form of `result` and `count`.

```ts

datamanger.executeQuery(new Query().take(8)).then((e: ReturnOption) => {
  (<Object[]>e.result.result).forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});

```

{% elsif page.publishingplatform == "javascript" %}

**Step 1: Configure the DataManager:**

Assign your API endpoint to the `url` property and use `ODataAdaptor` as the `adaptor`.

```js

const datamanger = new ej.data.DataManager({
  // Use remote server host and port instead of 'xxxx'.
  url: 'https://localhost:xxxx/api/Orders',
  adaptor: new ej.data.ODataAdaptor(),
});

```

**Step 2: Apply a query using executeQuery:**

Use the [executeQuery](../../api/data/dataManager/#executequery) method with a [Query](../../api/data/query/) object to retrieve data. This enables you to perform server-side operations such as paging, filtering, or sorting. For example, the following code retrieves the first 8 records from the remote data source in the form of `result` and `count`.

```js
datamanger.executeQuery(new ej.data.Query().take(8)).then((e) => {
  e.result.result.forEach((data) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});

```
{% endif %}

This example demonstrates how to use the `ODataAdaptor` and return the data in result and count format from server end with **OrdersController.cs** as below:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs2/index.html %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersController.cs" %}
{% include code-snippet/data/getting-started-cs2/OrdersController.cs %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersDetails.cs" %}
{% include code-snippet/data/getting-started-cs2/OrdersDetails.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs2/index.html %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersController.cs" %}
{% include code-snippet/data/getting-started-cs2/OrdersController.cs %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersDetails.cs" %}
{% include code-snippet/data/getting-started-cs2/OrdersDetails.cs %}
{% endhighlight %}
{% endtabs %}

{% endif %}

> By default, `ODataAdaptor` is used by **DataManager**.

## ODataV4 adaptor

The `ODataV4Adaptor` is a specialized adaptor in Syncfusion ##Platform_Name## DataManager module, designed for interacting with OData v4 services. OData (Open Data Protocol) is a standardized protocol for creating and consuming RESTful APIs. The ODataV4 protocol is an improved version of previous OData protocols, offering enhanced capabilities and better support for modern web standards.

Syncfusion’s `ODataV4Adaptor` allows the DataManager to communicate with OData V4-compliant services, performing operations like filtering, sorting, paging, and grouping directly via OData query options in the URL. These operations are translated into OData query options and appended to the request URL, allowing the server to process them efficiently. This adaptor is particularly useful when integrating enterprise-grade OData services, such as those provided by Microsoft Dynamics 365, Azure, or SAP.

If you're building a reporting dashboard that connects to a Microsoft Dynamics 365 service (which exposes data via OData V4), you can use the `ODataV4Adaptor` to retrieve and manipulate data like customer orders, sales reports, or invoices directly from the OData-compliant API.

For more information on OData v4 protocol, refer to the official [OData V4 documentation](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197).

To achieve this, follow these steps:

{% if page.publishingplatform == "typescript" %}

**Step 1:** Import **DataManager**, **Query**, **ODataV4Adaptor** modules from **@syncfusion/ej2-data**, and the **compile** module from **@syncfusion/ej2-base**.

```ts

import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

```
**Step 2: Configure the DataManager:**

Assign your API endpoint to the `url` property and use `ODataV4Adaptor` as the `adaptor`.

```ts

const datamanger = new DataManager({
  // Use remote server host and port instead of 'xxxx'.
  url: "https://localhost:xxxx/odata/Orders/", 
  adaptor: new ODataV4Adaptor 
});

```

**Step 3: Apply a query using executeQuery:**

Use the [executeQuery](../../api/data/dataManager/#executequery) method with a [Query](../../api/data/query/) object to retrieve data. This enables you to perform server-side operations such as paging, filtering, or sorting. For example, the following code retrieves the first 8 records from the remote data source.

```ts

datamanger.executeQuery(new Query().take(8)).then((e: ReturnOption) => {
  (<Object[]>e.result).forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});

```

{% elsif page.publishingplatform == "javascript" %}

**Step 1: Configure the DataManager:**

Assign your API endpoint to the `url` property and use `ODataV4Adaptor` as the `adaptor`.

```js

const datamanger= new ej.data.DataManager({ 
  // Use remote server host and port instead of 'xxxx'.
  url: 'https://localhost:xxxx/odata/Orders/', 
  adaptor: new ej.data.ODataV4Adaptor 
});


```

**Step 2: Apply a query using executeQuery:**

Use the [executeQuery](../../api/data/dataManager/#executequery) method with a [Query](../../api/data/query/) object to retrieve data. This enables you to perform server-side operations such as paging, filtering, or sorting. For example, the following code retrieves the first 8 records from the remote data source.

```js
datamanger.executeQuery(new ej.data.Query().take(8)).then((e) => {
  (e.result).forEach((data) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});

```

{% endif %}

>  To construct the entity data model for your ODataV4 service, utilize the `ODataConventionModelBuilder` to define the model's structure. Start by creating an instance of the `ODataConventionModelBuilder`, then register the entity set **Orders** using the `EntitySet<T>` method, where `OrdersDetails` represents the CLR type containing order details. Once the entity data model is built, you need to register the ODataV4 services in your ASP.NET Core application. Please refer to the **Program.cs** file below.

This example demonstrates how to use the `ODataV4Adaptor` and return data from server side end with **OrdersController.cs** as below:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs3/index.html %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersController.cs" %}
{% include code-snippet/data/getting-started-cs3/OrdersController.cs %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersDetails.cs" %}
{% include code-snippet/data/getting-started-cs3/OrdersDetails.cs %}
{% endhighlight %}
{% highlight cs tabtitle="Program.cs" %}
{% include code-snippet/data/getting-started-cs3/program.cs %}
{% endhighlight %}
{% endtabs %}
        
{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs3/index.html %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersController.cs" %}
{% include code-snippet/data/getting-started-cs3/OrdersController.cs %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersDetails.cs" %}
{% include code-snippet/data/getting-started-cs3/OrdersDetails.cs %}
{% endhighlight %}
{% highlight cs tabtitle="Program.cs" %}
{% include code-snippet/data/getting-started-cs3/program.cs %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## Web API adaptor

The `WebApiAdaptor` is a specialized adaptor in Syncfusion ##Platform_Name## DataManager module designed to interact with Web APIs, particularly those that support OData query options. Since the `WebApiAdaptor` is extended from the `ODataAdaptor`, it requires that the remote service endpoint understands and can process OData-formatted queries sent along with the request.

Since `WebApiAdaptor` inherits from `ODataAdaptor`, it expects the API endpoint to understand and process OData-formatted queries such as **$top**, **$**, **$filter**, sent along with the request.

For example, if you are fetching employee records from a Web API that accepts OData queries (like $top, $skip, $filter, etc.), the `WebApiAdaptor` automatically formats and sends these queries and parses the response appropriately.

To enable OData query options for your Web API, you need to ensure that the Web API is configured to understand OData requests. For more information on how to implement OData in a Web API, refer to the [documentation](https://docs.microsoft.com/en-us/aspnet/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options).

The `WebApiAdaptor` expects the server's response to be a JSON object containing two primary properties:

- **Items:**
  An array that contains the actual data records to be displayed or processed.

- **Count:**
  A number representing the total count of records available on the server. This is especially important for enabling accurate pagination.

A sample response object should look like this:

![Web API adaptor](./image/webapi-format.png)

To achieve this, follow these steps:

{% if page.publishingplatform == "typescript" %}

**Step 1:** Import **DataManager**, **Query**, **WebApiAdaptor** modules from **@syncfusion/ej2-data**, and the **compile** module from **@syncfusion/ej2-base**.


```ts

import { DataManager, Query, WebApiAdaptor, ReturnOption } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

```
**Step 2: Configure the DataManager:**

Assign your API endpoint to the `url` property and use `WebApiAdaptor` as the `adaptor`.

```ts

const datamanger = new DataManager({
  // Use remote server host and port instead of 'xxxx'.
  url: 'https://localhost:xxxx/api/Orders',
  adaptor: new WebApiAdaptor(),
});

```

**Step 3: Apply a query using executeQuery:**

Use the [executeQuery](../../api/data/dataManager/#executequery) method with a [Query](../../api/data/query/) object to retrieve data. This enables you to perform server-side operations such as paging, filtering, or sorting. For example, the following code retrieves the first 8 records from the remote data source in the form of `Items` and `Count`.

```ts

datamanger.executeQuery(new Query().take(8)).then((e: ReturnOption) => {
  ((e as any).actual.Items.).forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});

```

{% elsif page.publishingplatform == "javascript" %}

**Step 1: Configure the DataManager:**

Assign your API endpoint to the `url` property and use `WebApiAdaptor` as the `adaptor`.

```js

const datamanger = new ej.data.DataManager({
  // Use remote server host and port instead of 'xxxx'.
  url: 'https://localhost:xxxx/api/Orders',
  adaptor: new ej.data.WebApiAdaptor(),
});

```

**Step 2: Apply a query using executeQuery:**

Use the [executeQuery](../../api/data/dataManager/#executequery) method with a [Query](../../api/data/query/) object to retrieve data. This enables you to perform server-side operations such as paging, filtering, or sorting. For example, the following code retrieves the first 8 records from the remote data source in the form of `Items` and `Count`.

```js
datamanger.executeQuery(new ej.data.Query().take(8)).then((e) => {
  e.actual.Items.forEach((data) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});

```
{% endif %}

This example demonstrates how to use the `WebApiAdaptor` and return the data in items and count format from server end with **OrdersController.cs** as below:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs35/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs35/index.html %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersController.cs" %}
{% include code-snippet/data/getting-started-cs35/OrdersController.cs %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersDetails.cs" %}
{% include code-snippet/data/getting-started-cs35/OrdersDetails.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs35/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs35/index.html %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersController.cs" %}
{% include code-snippet/data/getting-started-cs35/OrdersController.cs %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersDetails.cs" %}
{% include code-snippet/data/getting-started-cs35/OrdersDetails.cs %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## WebMethod Adaptor

The `WebMethodAdaptor` is a powerful and flexible adaptor provided by Syncfusion ##Platform_Name## DataManager module, specifically designed to interact with remote services or server-side methods that accept data via HTTP POST requests. Unlike adaptors that communicate with standard REST or OData services, the `WebMethodAdaptor` enables seamless data binding from custom server-side logic such as controller actions, web services, or business-layer functions.

This adaptor is ideal for applications where server-side methods are responsible for data retrieval and business logic processing. It ensures that data operations such as paging, sorting, filtering, and grouping are handled on the server and returned to the client in a structured format.

The `WebMethodAdaptor` expects the server's response to be a JSON object containing two primary properties:

- **result:**
  An array that contains the actual data records to be displayed or processed.

- **count:**
  A number representing the total count of records available on the server. This is especially important for enabling accurate pagination.

A sample response object should look like this:

![WebMethod Adaptor](./image/webmethod-result.png)

To achieve this, follow these steps:

{% if page.publishingplatform == "typescript" %}

**Step 1:** Import **DataManager**, **Query**, **WebMethodAdaptor** modules from **@syncfusion/ej2-data**, and the **compile** module from **@syncfusion/ej2-base**.

```ts

import { DataManager, Query, WebMethodAdaptor, ReturnOption } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

```
**Step 2: Configure the DataManager:**

Assign your API endpoint to the `url` property and use `WebMethodAdaptor` as the `adaptor`.

```ts

const datamanger = new DataManager({
  // Use remote server host and port instead of 'xxxx'.
  url: "https://localhost:xxxx/api/Orders",
  adaptor: new WebMethodAdaptor()
});

```

**Step 3: Apply a query using executeQuery:**

Use the [executeQuery](../../api/data/dataManager/#executequery) method with a [Query](../../api/data/query/) object to retrieve data. This enables you to perform server-side operations such as paging, filtering, or sorting. For example, the following code retrieves the first 8 records from the remote data source in the form of `result` and `count`.

```ts

datamanger.executeQuery(new Query().take(8)).then((e: ReturnOption) => {
  (<Object[]>e.result.result).forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
  });
})

```

{% elsif page.publishingplatform == "javascript" %}

**Step 1: Configure the DataManager:**

Assign your API endpoint to the `url` property and use `WebMethodAdaptor` as the `adaptor`.

```js

const datamanger = new ej.data.DataManager({
  // Use remote server host and port instead of 'xxxx'.
  url: "https://localhost:xxxx/api/Orders",
  adaptor: new ej.data.WebMethodAdaptor()
});

```

**Step 2: Apply a query using executeQuery:**

Use the [executeQuery](../../api/data/dataManager/#executequery) method with a [Query](../../api/data/query/) object to retrieve data. This enables you to perform server-side operations such as paging, filtering, or sorting. For example, the following code retrieves the first 8 records from the remote data source in the form of `result` and `count`.

```js

datamanger.executeQuery(new ej.data.Query().take(8)).then((e) => {
  (e.result.result).forEach((data) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});

```
{% endif %}

> The server-side method must accept a parameter named `value` to receive the request payload from the client.

This example demonstrates how to use the `WebMethodAdaptor` and return the data in result and count format from server end with **OrdersController.cs** as below:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs36/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs36/index.html %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersController.cs" %}
{% include code-snippet/data/getting-started-cs36/OrdersController.cs %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersDetails.cs" %}
{% include code-snippet/data/getting-started-cs36/OrdersDetails.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs36/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs36/index.html %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersController.cs" %}
{% include code-snippet/data/getting-started-cs36/OrdersController.cs %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersDetails.cs" %}
{% include code-snippet/data/getting-started-cs36/OrdersDetails.cs %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## RemoteSaveAdaptor

The `RemoteSaveAdaptor` is a specialized adaptor in Syncfusion ##Platform_Name## DataManager module designed to perform actions such as sorting, filtering, searching and paging primarily on the client-side while handling CRUD operations(Create, Read, Update, and Delete), on the server-side for data persistence. This approach optimizes your experience by minimizing unnecessary server interactions.

For example, if you are building a dashboard that displays order data stored remotely and users need to add, edit, or delete records with changes saved back to the server, the `RemoteSaveAdaptor` helps manage these interactions effectively.

To achieve this, follow these steps:

{% if page.publishingplatform == "typescript" %}

**Step 1:** Import **DataManager**, **Query**, **RemoteSaveAdaptor** modules from **@syncfusion/ej2-data**, and the **compile** module from **@syncfusion/ej2-base**.

```ts

import { DataManager, Query, RemoteSaveAdaptor, ReturnOption } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

```
**Step 2: Configure the DataManager:**

Assign your API endpoint to the `url` property and use `RemoteSaveAdaptor` as the `adaptor`.

```ts

const datamanger = new DataManager({
  // Use remote server host and port instead of 'xxxx'.
  url: "https://localhost:xxxx/api/Orders",
  adaptor: new RemoteSaveAdaptor()
});
```

**Step 3: Apply a query using executeQuery:**

Use the [executeQuery](../../api/data/dataManager/#executequery) method with a [Query](../../api/data/query/) object to retrieve data. This enables you to perform server-side operations such as paging, filtering, or sorting. For example, the following code retrieves the first 8 records from the remote data source.

```ts

datamanger.executeQuery(new Query().take(8)).then((e: ReturnOption) => {
  (<Object[]>e.result).forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
  });
})

```

{% elsif page.publishingplatform == "javascript" %}

**Step 1: Configure the DataManager:**

Assign your API endpoint to the `url` property and use `RemoteSaveAdaptor` as the `adaptor`.

```js

const datamanger = new ej.data.DataManager({
  // Use remote server host and port instead of 'xxxx'.
  url: "https://localhost:xxxx/api/Orders",
  adaptor: new ej.data.RemoteSaveAdaptor()
});

```

**Step 2: Apply a query using executeQuery:**

Use the [executeQuery](../../api/data/dataManager/#executequery) method with a [Query](../../api/data/query/) object to retrieve data. This enables you to perform server-side operations such as paging, filtering, or sorting. For example, the following code retrieves the first 8 records from the remote data source.

```js

datamanger.executeQuery(new ej.data.Query().take(8)).then((e) => {
  e.result.forEach((data) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});

```
{% endif %}

This example demonstrates how to use the `RemoteSaveAdaptor` and return data from server side end with **OrdersController.cs** as below:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs37/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs37/index.html %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersController.cs" %}
{% include code-snippet/data/getting-started-cs37/OrdersController.cs %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersDetails.cs" %}
{% include code-snippet/data/getting-started-cs37/OrdersDetails.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs37/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs37/index.html %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersController.cs" %}
{% include code-snippet/data/getting-started-cs37/OrdersController.cs %}
{% endhighlight %}
{% highlight cs tabtitle="OrdersDetails.cs" %}
{% include code-snippet/data/getting-started-cs37/OrdersDetails.cs %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## GraphQL Adaptor

The `GraphQLAdaptor` enables seamless data retrieval and manipulation from a GraphQL server. It allows you to precisely fetch the data you need, reducing over-fetching and under-fetching of data. GraphQL provides a flexible and expressive syntax for querying, enabling clients to request only the specific data they require. It allows efficient data retrieval with support for various operations like CRUD (Create, Read, Update, and Delete), paging, sorting, and filtering.

The adaptor extends the `UrlAdaptor`, which means it expects the server to return responses in a specific JSON format for proper data processing.

To achieve this, follow these steps:

**Step 1: Create service for GraphQL:**

**1:** Create a new folder named **GraphQLServer** specifically for your GraphQL server.

**2:** Install the [graph pack](https://www.npmjs.com/package/graphpack) npm package. Open your terminal and navigate to the server folder, then run:

  ```bash
  npm i graphpack
  ```

**3:** To utilize Syncfusion's  **ej2-data** package, you need to include it as a dependency in your project's **package.json** file. Here's how you can mention it in the configuration:
  
  ```json
    {
      "name": "graphql-server",
      "version": "1.0.0",
      "description": "",
      "scripts": {
        "dev": "graphpack --port 4205",
        "build": "graphpack build"
      },
      "devDependencies": {
        "graphpack": "^1.0.9"
      },
      "dependencies": {
        "@syncfusion/ej2-data": "24.1.41"
      }
    }
  ```

**4:** Create a schema file (e.g., **src/schema.graphql**) in your GraphQL server project and write the schema definition.

  * **Define Types:** Create types representing the structure of data retrieved from GraphQL queries. Since the `GraphQLAdaptor` in  Syncfusion extends from `UrlAdaptor`, it expects a JSON response with specific properties:

    **result:** An array containing the data entities.
    **count:** The total number of records.
    **aggregates:** Contains total aggregate data(optional).

  * **Define Queries:** Define queries to retrieve data from the server. Whether using a normal table or Syncfusion controls, you can define a query to fetch orders, accepting parameters such as a DataManager for advanced data operations.

  * **Define DataManager Input:** Define input types for DataManager, specifying parameters for sorting, filtering, paging, aggregates, etc., to be used in queries. The query parameters will be send in a string format which contains the below details.

  | Parameters       | Description                                                                     |
  | ---------------- | ------------------------------------------------------------------------------- |
  | `requiresCounts` | If it is **true** then the total count of records will be included in response. |
  | `skip`           | Holds the number of records to skip.                                            |
  | `take`           | Holds the number of records to take.                                            |
  | `sorted`         | Contains details about current sorted column and its direction.                 |
  | `where`          | Contains details about current filter column name and its constraints.          |
  | `group`          | Contains details about current grouped column names.                            |
  | `search`         | Contains details about current search data.                                     |
  | `aggregates`     | Contains details about aggregate data.                                          |

  {% tabs %}
  {% highlight text tabtitle="schema.graphql" %}
  {% include code-snippet/data/getting-started-cs38/schema.graphql %}
  {% endhighlight %}
  {% endtabs %}

**5:** Create a resolver file (e.g., **src/resolvers.js**) to handle GraphQL queries and fetch data from your database or data source. Resolver functions are responsible for processing incoming GraphQL requests and returning the appropriate data in the expected `result` and `count` format.  To efficiently handle filtering, sorting, searching, and paging, you can use the utilities from the **@syncfusion/ej2-data** package such as **DataUtil**, [Query](../../api/data/query/), and **DataManager**.

  {% tabs %}
  {% highlight js tabtitle="resolvers.js" %}
  {% include code-snippet/data/getting-started-cs38/resolvers.js %}
  {% endhighlight %}
  {% endtabs %}

**6:** Create a simple data file **src/db.js** that exports your data array.

  {% tabs %}
  {% highlight js tabtitle="db.js" %}
  {% include code-snippet/data/getting-started-cs38/db.js %}
  {% endhighlight %}
  {% endtabs %}

**7:** Install required packages and start the GraphQL server by running the following commands in your terminal:

  ```bash
    npm install
    npm run dev
  ```
The server will be hosted at **http://localhost:xxxx/**. (where xxxx represents the port number).


**Step 2: Connect Syncfusion DataManager to GraphQL:**

{% if page.publishingplatform == "typescript" %}

**1:** Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from GitHub.

```bash
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ClientApp
cd ClientApp
```

**2: Add Syncfusion packages:**

```bash
npm install
```

{% elsif page.publishingplatform == "javascript" %}

**1:** Create a root folder named `ClientApp` for your application.

**2:** Open Visual Studio Code and create `ClientApp/index.js` and `ClientApp/index.html` files to initialize either a normal table or Syncfusion controls.

{% endif %}

**3: Configure DataManager with GraphQLAdaptor:**

{% if page.publishingplatform == "typescript" %}

**A.** Import **DataManager**, **Query**, **GraphQLAdaptor** modules from **@syncfusion/ej2-data**, and the **compile** module from **@syncfusion/ej2-base**.

```ts

import { DataManager, Query, ReturnOption, GraphQLAdaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

```
**B. Configure the DataManager:**

Assign your API endpoint to the `url` property and use `GraphQLAdaptor` as the `adaptor`.

```ts

let data: DataManager = new DataManager({
  // Use remote server host and port instead of 'xxxx'.
  url: "http://localhost:xxxx",
  adaptor: new GraphQLAdaptor({
    // Additional adaptor options can be specified here.
  })
});

```

**C.Define the GraphQL query and map the response:**

* The `GraphQLAdaptor` includes a `query` property where you define your GraphQL query string. The response from the server should follow this JSON structure:

  ```ts

    query: `query getOrders($datamanager: DataManager) {
      getOrders(datamanager: $datamanager) {
        count,
        result {
          OrderID,
          CustomerID,
          ShipCity,
          ShipCountry
        }
      }
    }

  ```

  ```ts

    {
     "data": {
        "getOrders": {
          "result": [...],
          "count": 100
        }
     }
    }

  ```

* To map this structure, set the `result` and `count` fields in the `response` property of the adaptor:

    ```ts

    response: {
      result: 'getOrders.result',
      count: 'getOrders.count'
    }

    ```

**D. Apply a query using executeQuery:**

Use the [executeQuery](../../api/data/dataManager/#executequery) method with a [Query](../../api/data/query/)object to retrieve data. This enables you to perform server-side operations such as paging, filtering, or sorting.  The example below retrieves the first 8 records where the **ShipCity** contains "Cunewalde" and **ShipCountry** equals "Germany," sorted by **OrderID** descending.

```ts

const query = new Query()
  .skip(0).take(8).search('Cunewalde', ['ShipCity']).where('ShipCountry', 'equal', 'Germany').sortBy('OrderID', 'descending');

data.executeQuery(query).then((e: ReturnOption) => {
  const response = e.result as { result: Order[] };
  response.result.forEach((data: Order) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});

```

{% elsif page.publishingplatform == "javascript" %}

**A. Configure the DataManager:**

Assign your API endpoint to the `url` property and use `GraphQLAdaptor` as the `adaptor`.

```ts

let data: DataManager = new ej.data.DataManager({
  // Use remote server host and port instead of 'xxxx'.
  url: "http://localhost:xxxx",
  adaptor: new ej.data.GraphQLAdaptor({
    // Additional adaptor options can be specified here.
  })
});

```

**B. Define the GraphQL query and map the response:**

* The `GraphQLAdaptor` includes a `query` property where you define your GraphQL query string. The response from the server should follow this JSON structure:

  ```ts

    query: `query getOrders($datamanager: DataManager) {
      getOrders(datamanager: $datamanager) {
        count,
        result {
          OrderID,
          CustomerID,
          ShipCity,
          ShipCountry
        }
      }
    }

    ```

    ```ts

    {
    "data": {
      "getOrders": {
        "result": [...],
        "count": 100
      }
    }
    }

    ```

* To map this structure, set the `result` and `count` fields in the `response` property of the adaptor:

    ```ts

    response: {
      result: 'getOrders.result',
      count: 'getOrders.count'
    }

    ```

**C. Apply a query using executeQuery:**

Use the [executeQuery](../../api/data/dataManager/#executequery) method with a [Query](../../api/data/query/) object to retrieve data. This enables you to perform server-side operations such as paging, filtering, or sorting.  The example below retrieves the first 8 records where the **ShipCity** contains "Cunewalde" and **ShipCountry** equals "Germany," sorted by **OrderID** descending.

```ts

const query = new Query()
  .skip(0).take(8).search('Cunewalde', ['ShipCity']).where('ShipCountry', 'equal', 'Germany').sortBy('OrderID', 'descending');

data.executeQuery(query).then((e) => {
  const response = e.result
  response.result.forEach((data) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});

```
{% endif %}

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs38/index.ts %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs38/index.js %}
{% endhighlight %}
{% endtabs %}

{% endif %}

**5: Add HTML Table:**

Create a basic HTML structure with a <table> element where data using the GraphQL adaptor will be rendered.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs38/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs38/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

{% if page.publishingplatform == "typescript" %}

**6: Run the Application:**

Once the GraphQL server is running, assign its URL (e.g., http://localhost:xxxx/) to the `dataManager.url` property of the `DataManager` in your application.

```bash
npm start
```
{% endif %}

### Performing CRUD action with GraphQLAdaptor

The `GraphQLAdaptor` in Syncfusion ##Platform_Name## DataManager provides a smooth way to integrate GraphQL endpoints for performing CRUD operations (Create, Read, Update, and Delete). This adaptor requires you to supply the appropriate GraphQL queries and mutations corresponding to each CRUD action.

You perform these actions by defining mutation queries dynamically inside the `getMutation` method, which returns the correct GraphQL mutation based on the CRUD operation being performed.

To implement CRUD operations using the `GraphQLAdaptor`, follow these steps:

**Step 1: Configure the DataManager:**

  * Define the GraphQL query to fetch data via the `query` property.

  * Map the response to extract the actual data and total count using the `response` object.

  * Implement mutation queries for `insert`, `update`, and `delete` actions inside the `getMutation` method.

**Step 2: Use DataManager CRUD methods:**

Use the `insert`, `update`, and `remove` methods of the **DataManager** configured with the `GraphQLAdaptor` to perform respective CRUD operations.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs39/index.ts %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs39/index.js %}
{% endhighlight %}
{% endtabs %}

{% endif %}

**Step 3: Implement server-side GraphQL resolvers:**

Create resolver functions on the server side to handle the GraphQL queries and mutations. These functions perform data processing using the **@syncfusion/ej2-data** library.

{% tabs %}
{% highlight cs tabtitle="resolvers.js" %}
{% include code-snippet/data/getting-started-cs39/resolvers.js %}
{% endhighlight %}
{% endtabs %}

**Step 4: Define GraphQL schema:**

Create a schema that supports Syncfusion DataManager queries and mutations with the required input types.

{% tabs %}
{% highlight cs tabtitle="schema.graphql" %}
{% include code-snippet/data/getting-started-cs39/schema.graphql %}
{% endhighlight %}
{% endtabs %}

**Step 5:** Create an HTML file with forms for insert, update, delete and a table to display the data:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs39/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs39/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

**Step 6:** Create a simple data file (e.g., **src/db.js**) that exports an array of order objects used by the server-side resolvers.

{% tabs %}
{% highlight js tabtitle="db.js" %}
{% include code-snippet/data/getting-started-cs39/db.js %}
{% endhighlight %}
{% endtabs %}

## CustomDataAdaptor

The `CustomDataAdaptor` in Syncfusion ##Platform_Name## DataManager provides an option to send your own request and manually manage all data operations. It offers complete control over the way data is retrieved, processed, and transmitted between client and server. This adaptor is especially valuable when working with APIs that have non-standard request structures, authentication requirements, or custom business rules.

By extending the `UrlAdaptor`, `CustomDataAdaptor` inherits support for RESTful endpoints while allowing deep customization through method overrides.

**Custom request construction:**

Within the `getData` method of `CustomDataAdaptor`, you can inspect the `option` object to access details about the current action, such as:

- **Filtering:** `option.queries.where`
- **Sorting:** `option.queries.sort`
- **Paging:** `option.queries.skip`, `option.queries.take`
- **Searching:** `option.queries.search`

Use this information to build a custom request payload that matches your backend API requirements.

**Handling the server response:**

After fetching data from your service, you must notify the DataManager of the result:

- **On success, call:** `option.onSuccess(responseData, additionalArgs);`
- **On failure, call:** `option.onFailure(additionalArgs, error);`

Alternatively, you can use `this.processResponse(data, dataSource, option)` if you need to process the response before passing it to the DataManager.

**Expected server response format:**

Since `CustomDataAdaptor` extends `UrlAdaptor`, it expects the server to return a JSON object with the following structure:

- **result:** An array of data objects representing the records.
- **count:** The total number of records (for paging support).

Example:

```json
{
        "result": [
                { /* record 1 */ },
                { /* record 2 */ }
                // ...
        ],
        "count": 67
}
```

This structure ensures that DataManager can correctly handle data binding, paging, and other operations.

{% if page.publishingplatform == "typescript" %}

**Implement the CustomDataAdaptor**

Use the following steps in your `src/index.ts` to fetch and display data with a `CustomDataAdaptor`:

**1. Import required modules:**

  Import the necessary classes from the Syncfusion packages:

  ```ts
    import { CustomDataAdaptor, DataManager, Query, ReturnOption } from "@syncfusion/ej2-data";
    import { compile } from "@syncfusion/ej2-base";
  ```
**2. Set up the CustomDataAdaptor with a getData function:**

  Define how data is fetched from the server using the fetch API inside the `CustomDataAdaptor`.

  ```ts
    const SERVICE_URI = '/Home/UrlDatasource';

    new DataManager({
      adaptor: new CustomDataAdaptor({
        getData: function (option: {
          onSuccess: (data: any, args: object) => void;
          onFailure: (args: object, error: any) => void;
        }): void {
          fetch(SERVICE_URI, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(option)
          }).then((response: Response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Network response was not ok.');
          }).then((data: any) => {
            option.onSuccess(data, {});
          }).catch((error: any) => {
            option.onFailure({}, error);
          });
        },
      }),
    }).executeQuery(new Query())
      .then((e: ReturnOption) => {
        console.log("Fetched Data:", e.result);
        (e.result as Object[]).forEach((data: Object) => {
          table!.innerHTML += compiledFunction(data)[0].outerHTML;
        });
      })
      .catch((error) => {
        console.error('Data fetch error:', error);
      });
  ```

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import { CustomDataAdaptor, DataManager, Query, ReturnOption } from "@syncfusion/ej2-data";
import { compile } from "@syncfusion/ej2-base";

let template: string = '<tr><td>${orderID}</td><td>${customerID}</td><td>${employeeID}</td><td>${shipCountry}</td></tr>';

const compiledFunction: Function = compile(template);

let table: HTMLElement = document.getElementById('datatable') as HTMLElement;

const SERVICE_URI: string = '/Home/UrlDatasource';

new DataManager({
  adaptor: new CustomDataAdaptor({
    getData: function (option: {
      onSuccess: (data: any, args: object) => void;
      onFailure: (args: object, error: any) => void;
    }): void {
      fetch(SERVICE_URI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(option)
      }).then((response: Response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      }).then((data: any) => {
        option.onSuccess(data, {});
      }).catch((error: any) => {
        option.onFailure({}, error);
      });
    },
  }),
}).executeQuery(new Query())
  .then((e: ReturnOption) => {
    console.log("Fetched Data:", e.result);
    (e.result as Object[]).forEach((data: Object) => {
      table!.innerHTML += compiledFunction(data)[0].outerHTML;
    });
  })
  .catch((error) => {
    console.error('Data fetch error:', error);
  });

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CustomDataAdaptor in TS DataManager</title>
</head>
<body>
  <div id='container'>
    <table id="datatable" class="e-table" border="1">
      <thead>
        <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th><th>Ship Country</th></tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
  <script src="js/index.js"></script>
</body>
</html>

{% endhighlight %}

{% highlight cs tabtitle="HomeController.cs" %}

using System.Diagnostics;
using CustomDataAdaptor.Models;
using Microsoft.AspNetCore.Mvc;

namespace CustomDataAdaptor.Controllers
{
  public class HomeController : Controller
  {
    public IActionResult Index()
    {
      return View();
    }

    [HttpPost]
    public IActionResult UrlDatasource()
    {
      var data = OrdersDetails.GetAllRecords();
      var totalRecordsCount = data.Count();
      return Json(new { result = data, count = totalRecordsCount });
    }
  }
}

{% endhighlight %}

{% highlight cs tabtitle="OrdersDetails.cs" %}

using System.ComponentModel.DataAnnotations;

namespace CustomDataAdaptor.Models
{
  public class OrdersDetails
  {
    public static List<OrdersDetails> order = new List<OrdersDetails>();
    public OrdersDetails()
    {

    }
    public OrdersDetails(
    int OrderID, string CustomerId, int EmployeeId, string ShipCountry)
    {
      this.OrderID = OrderID;
      this.CustomerID = CustomerId;
      this.EmployeeID = EmployeeId;
      this.ShipCountry = ShipCountry;
    }

    public static List<OrdersDetails> GetAllRecords()
    {
      if (order.Count() == 0)
      {
        int code = 10000;
        for (int i = 1; i < 10; i++)
        {
          order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, "Denmark"));
          order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, "Brazil"));
          order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, "Germany"));
          order.Add(new OrdersDetails(code + 4, "BLONP", i + 3, "Austria"));
          order.Add(new OrdersDetails(code + 5, "BOLID", i + 4, "Switzerland"));
          code += 5;
        }
      }
      return order;
    }
    [Key]
    public int? OrderID { get; set; }
    public string? CustomerID { get; set; }
    public int? EmployeeID { get; set; }
    public string? ShipCountry { get; set; }
  }
}

{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

Use the following code in your `src/index.js` to fetch and display data with a `CustomDataAdaptor` by defining how data is fetched from the server using the fetch API inside the adaptor's `getData` function.

  ```js
  let template = '<tr><td>${orderID}</td><td>${customerID}</td><td>${employeeID}</td><td>${shipCountry}</td></tr>';
  let compiledFunction = ej.base.compile(template);
  let table = document.getElementById('datatable');

  const SERVICE_URI = '/Home/UrlDatasource';

  new ej.data.DataManager({
    adaptor: new ej.data.CustomDataAdaptor({
      getData: function (option) {
        fetch(SERVICE_URI, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(option)
        }).then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        }).then((data) => {
          option.onSuccess(data, {});
        }).catch((error) => {
          option.onFailure({}, error);
        });
      },
    }),
  }).executeQuery(new ej.data.Query()).then((e) => {
    e.result.result.forEach((data) => {
      table.appendChild(compiledFunction(data)[0]);
    });
  });
  ```

{% tabs %}
{% highlight js tabtitle="index.js" %}

let template = '<tr><td>${orderID}</td><td>${customerID}</td><td>${employeeID}</td><td>${shipCountry}</td></tr>';

let compiledFunction = ej.base.compile(template);

let table = document.getElementById('datatable');

const SERVICE_URI = '/Home/UrlDatasource';

new ej.data.DataManager({
  adaptor: new ej.data.CustomDataAdaptor({
    getData: function (option) {
      fetch(SERVICE_URI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(option)
      }).then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      }).then((data) => {
        option.onSuccess(data, {});
      }).catch((error) => {
        option.onFailure({}, error);
      });
    },
  }),
}).executeQuery(new ej.data.Query()).then((e) => {
  e.result.result.forEach((data) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
  <title>CustomDataAdaptor in Syncfusion JS DataManager</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="JavaScript DataManager Example">
  <meta name="author" content="Syncfusion">
</head>
<body>
    <div id="container">
        <table border="1" id="datatable">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer ID</th>
              <th>Employee ID</th>
              <th>Ship Country</th>
            </tr>
          </thead>
          <tbody id="table-body"></tbody>
        </table>
    </div>
    <script src="js/index.js" type="text/javascript"></script>
</body>
</html>

{% endhighlight %}

{% highlight cs tabtitle="HomeController.cs" %}

using System.Diagnostics;
using CustomDataAdaptor.Models;
using Microsoft.AspNetCore.Mvc;

namespace CustomDataAdaptor.Controllers
{
  public class HomeController : Controller
  {
    public IActionResult Index()
    {
      return View();
    }

    [HttpPost]
    public IActionResult UrlDatasource()
    {
      var data = OrdersDetails.GetAllRecords();
      var totalRecordsCount = data.Count();
      return Json(new { result = data, count = totalRecordsCount });
    }
  }
}


{% endhighlight %}

{% highlight cs tabtitle="OrdersDetails.cs" %}

using System.ComponentModel.DataAnnotations;

namespace CustomDataAdaptor.Models
{
  public class OrdersDetails
  {
    public static List<OrdersDetails> order = new List<OrdersDetails>();
    public OrdersDetails()
    {

    }
    public OrdersDetails(
    int OrderID, string CustomerId, int EmployeeId, string ShipCountry)
    {
      this.OrderID = OrderID;
      this.CustomerID = CustomerId;
      this.EmployeeID = EmployeeId;
      this.ShipCountry = ShipCountry;
    }

    public static List<OrdersDetails> GetAllRecords()
    {
      if (order.Count() == 0)
      {
        int code = 10000;
        for (int i = 1; i < 10; i++)
        {
          order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, "Denmark"));
          order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, "Brazil"));
          order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, "Germany"));
          order.Add(new OrdersDetails(code + 4, "BLONP", i + 3, "Austria"));
          order.Add(new OrdersDetails(code + 5, "BOLID", i + 4, "Switzerland"));
          code += 5;
        }
      }
      return order;
    }
    [Key]
    public int? OrderID { get; set; }
    public string? CustomerID { get; set; }
    public int? EmployeeID { get; set; }
    public string? ShipCountry { get; set; }
  }
}

{% endhighlight %}
{% endtabs %}

{% endif %}

## CustomAdaptor

The `CustomAdaptor` in Syncfusion ##Platform_Name## DataManager allows you to extend built-in adaptors (like UrlAdaptor) and override specific methods to customize the data communication between the client and server. This adaptor is useful when integrating with non-standard APIs or when the server's request and response formats do not match DataManager's default expectations.

To create and use custom adaptor, please refer to the below steps.

* Select an built-in adaptor which will act as base class for your custom adaptor.
* Override the desired method to achieve your requirement.
* Assign the custom adaptor to the `adaptor` property of **DataManager**.

With a `CustomAdaptor`, you have control over:

* **Query translation:** Customize how queries (filtering, sorting, paging) are serialized into API-compatible formats.
* **Request building:** Modify request URLs, headers, or payloads.
* **Response processing:** Transform server responses into formats consumable by UI components.

### Types of CustomAdaptor methods

There are three types of methods in custom adaptors.

**processQuery:**

The `processQuery` method is responsible for transforming the incoming `Query` object into a request format understood by the server. It is typically used to construct URLs, append parameters, and serialize complex queries such as filtering, sorting, paging, and grouping. The `processQuery` method accepts two arguments: 

* `DataManager`: Used to modify the URL dynamically.

* `Query`: Allows setting additional parameter values or modifying queries such as sorting, filtering, and grouping, etc.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/custom-adaptor-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/custom-adaptor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/custom-adaptor-cs1" %}

![Process Query](./images/custom-adaptor-process-query.png)

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/data/custom-adaptor-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/custom-adaptor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/custom-adaptor-cs1" %}

![Process Query](./images/custom-adaptor-process-query-js.png)

{% endif %}

**beforeSend:**

The `beforeSend` method is called immediately before the request is sent to the server, allowing you to modify the request or perform final checks. This method is particularly useful for dynamically adding authentication headers, customizing the request payload, or injecting additional metadata. It accepts the following arguments:

* `DataManager`: Provides access to the data and the adaptor instance.
* `Request`: Represents the request object, which can be used to set custom headers (for example, the `Authorization` header).
* `Settings` (optional): Allows for further configuration of the request.

**Common use cases include:**

- Injecting a bearer token or other authentication credentials.
- Adding custom headers such as client ID, language, or tenant information.
- Performing preflight validation or logging request details before sending.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/custom-adaptor-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/custom-adaptor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/custom-adaptor-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/data/custom-adaptor-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/custom-adaptor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/custom-adaptor-cs2" %}

{% endif %}

![Before Send](./images/custom-adaptor-before-send.png)

**processResponse:**

The `processResponse` method is executed after data is received from the server and before it is passed to the UI component. This method is responsible for parsing, transforming, or validating the server response to match the structure expected by Syncfusion controls. It can accept multiple optional arguments, allowing for customization based on specific requirements.

**Use cases include:**

- Formatting nested or wrapped data (for example, extracting `data.items` and `data.count`).
- Normalizing inconsistent field names.
- Handling API-specific pagination or error formats.
- Removing metadata or enriching records before binding.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/custom-adaptor-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/custom-adaptor-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/custom-adaptor-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/data/custom-adaptor-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/custom-adaptor-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/custom-adaptor-cs3" %}

{% endif %}

![CustomAdaptor Process Response](./images/custom-adaptor-process-response.png)

{% if page.publishingplatform == "typescript" %}

**Implement the custom adaptor:**

The following example demonstrates how to extend the `ODataV4Adaptor` to create a custom adaptor and bind data to a table using the Syncfusion ##Platform_Name## DataManager.

**1. Import required modules:**

```ts
import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';
```

**2. Create a custom adaptor by extending ODataV4Adaptor:**

```ts
class CustomAdaptor extends ODataV4Adaptor {
  // Override adaptor methods here as needed
}
```

**3. Configure the DataManager:**

```ts

const template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${ShipCountry}</td></tr>';
const compiledFunction: Function = compile(template);

const SERVICE_URI: string = 'https://localhost:xxxx/odata/orders';
const table: HTMLElement | null = document.getElementById('datatable');

new DataManager({ url: SERVICE_URI, adaptor: new CustomAdaptor() })
    .executeQuery(new Query())
    .then((e: ReturnOption) => {
      (e.result as Object[]).forEach((data: Object) => {
        if (table) {
          table.innerHTML += compiledFunction(data)[0].outerHTML;
        }
      });
    })
    .catch((error) => {
      console.error('Data fetch error:', error);
    });
```

This setup allows you to customize the adaptor's behavior by overriding methods in the `CustomAdaptor` class, while efficiently fetching and displaying data from your OData service.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

const template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${ShipCountry}</td></tr>';
const compiledFunction: Function = compile(template);

const SERVICE_URI: string = 'https://localhost:xxxx/odata/orders';
const table: HTMLElement | null = document.getElementById('datatable');

new DataManager({ url: SERVICE_URI, adaptor: new CustomAdaptor() })
  .executeQuery(new Query())
  .then((e: ReturnOption) => {
    (e.result as Object[]).forEach((data: Object) => {
      if (table) {
        table.innerHTML += compiledFunction(data)[0].outerHTML;
      }
    });
  })
  .catch((error) => {
    console.error('Data fetch error:', error);
  });

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CustomAdaptor in Syncfusion TS DataManager</title>
</head>
<body>
  <div id='container'>
    <p id="error-message" style="text-align:center;color:red">
      <table id="datatable" class="e-table" border="1">
        <thead>
          <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th><th>Ship Country</th></tr>
        </thead>
        <tbody>
        </tbody>
      </table>
  </div>
  <script src="js/index.js"></script>
</body>
</html>

{% endhighlight %}

{% highlight cs tabtitle="OrdersController.cs" %}

using CustomAdaptor.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;

namespace CustomAdaptor.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class OrdersController : ControllerBase
  {
    /// <summary>
    /// Retrieves all orders.
    /// </summary>
    /// <returns>The collection of orders.</returns>
    [HttpGet]
    [EnableQuery]
    public IActionResult Get()
    {
      var data = OrdersDetails.GetAllRecords().AsQueryable();
      return Ok(data);
    }
  }
}

{% endhighlight %}

{% highlight cs tabtitle="OrdersDetails.cs" %}
using System.ComponentModel.DataAnnotations;

namespace CustomAdaptor.Models
{
  public class OrdersDetails
  {
    public static List<OrdersDetails> order = new List<OrdersDetails>();
    public OrdersDetails()
    {

    }
    public OrdersDetails(
    int OrderID, string CustomerId, int EmployeeId, string ShipCountry)
    {
      this.OrderID = OrderID;
      this.CustomerID = CustomerId;
      this.EmployeeID = EmployeeId;
      this.ShipCountry = ShipCountry;
    }

    public static List<OrdersDetails> GetAllRecords()
    {
      if (order.Count() == 0)
      {
        int code = 10000;
        for (int i = 1; i < 10; i++)
        {
          order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, "Denmark"));
          order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, "Brazil"));
          order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, "Germany"));
          order.Add(new OrdersDetails(code + 4, "BLONP", i + 3, "Austria"));
          order.Add(new OrdersDetails(code + 5, "BOLID", i + 4, "Switzerland"));
          code += 5;
        }
      }
      return order;
    }
    [Key]
    public int? OrderID { get; set; }
    public string? CustomerID { get; set; }
    public int? EmployeeID { get; set; }
    public string? ShipCountry { get; set; }
  }
}

{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

**Implement the custom adaptor:**

The following example demonstrates how to extend the `ODataV4Adaptor` to create a custom adaptor and bind data to a table using the Syncfusion DataManager in JavaScript.

**1. Create a custom adaptor by extending ODataV4Adaptor:**

Extend the built-in `ODataV4Adaptor` to customize data operations as needed:

```js
class CustomAdaptor extends ej.data.ODataV4Adaptor {
  // Override adaptor methods here as needed.
}
```

**2. Configure the DataManager:**

Initialize the DataManager with your custom adaptor and fetch data from the OData service.

```js
var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${ShipCountry}</td></tr>';
var compiledFunction = ej.base.compile(template);
var table = document.getElementById('datatable');

const SERVICE_URI = 'https://localhost:xxxx/odata/Orders'; // Replace xxxx with your actual port number.

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new CustomAdaptor() })
  .executeQuery(new ej.data.Query())
  .then(function (e) {
    e.result.forEach(function (record) {
      table.innerHTML += compiledFunction(record)[0].outerHTML;
    });
  })
  .catch(function (error) {
    console.error('Data fetch error:', error);
  });
```

This approach allows you to fully customize the adaptor's behavior by overriding methods in the `CustomAdaptor` class, while efficiently retrieving and displaying data from your OData service.

{% tabs %}
{% highlight js tabtitle="index.js" %}

var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${ShipCountry}</td></tr>';
var compiledFunction = ej.base.compile(template);

var table = document.getElementById('datatable');
var errorMessage = document.getElementById('error-message');

class CustomAdaptor extends ej.data.ODataV4Adaptor {
  // Override adaptor methods here if needed.
}

const SERVICE_URI = 'https://localhost:xxxx/odata/Orders'; // Replace xxxx with your actual port number.

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new CustomAdaptor() })
  .executeQuery(new ej.data.Query())
  .then(function (e) {
    e.result.forEach(function (record) {
      if (table) {
        table.innerHTML += compiledFunction(record)[0].outerHTML;
      }
    });
  });

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
  <title>CustomAdaptor in Syncfusion JS DataManager</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Syncfusion">
  <script src="https://cdn.syncfusion.com/ej2/29.2.4/dist/ej2.min.js" type="text/javascript"></script>
</head>
<body>
  <div id="container">
    <p id="error-message" style="text-align:center;color:red"></p>
    <table id="datatable" class="e-table" border="1">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer ID</th>
          <th>Employee ID</th>
          <th>Ship Country</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
  <script src="js/index.js" type="text/javascript"></script>
</body>
</html>

{% endhighlight %}

{% highlight cs tabtitle="OrdersController.cs" %}

using CustomAdaptor.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;

namespace CustomAdaptor.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class OrdersController : ControllerBase
  {
    /// <summary>
    /// Retrieves all orders.
    /// </summary>
    /// <returns>The collection of orders.</returns>
    [HttpGet]
    [EnableQuery]
    public IActionResult Get()
    {
      var data = OrdersDetails.GetAllRecords().AsQueryable();
      return Ok(data);
    }
  }
}

{% endhighlight %}

{% highlight cs tabtitle="OrdersDetails.cs" %}
using System.ComponentModel.DataAnnotations;

namespace CustomAdaptor.Models
{
  public class OrdersDetails
  {
    public static List<OrdersDetails> order = new List<OrdersDetails>();
    public OrdersDetails()
    {

    }
    public OrdersDetails(
    int OrderID, string CustomerId, int EmployeeId, string ShipCountry)
    {
      this.OrderID = OrderID;
      this.CustomerID = CustomerId;
      this.EmployeeID = EmployeeId;
      this.ShipCountry = ShipCountry;
    }

    public static List<OrdersDetails> GetAllRecords()
    {
      if (order.Count() == 0)
      {
        int code = 10000;
        for (int i = 1; i < 10; i++)
        {
          order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, "Denmark"));
          order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, "Brazil"));
          order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, "Germany"));
          order.Add(new OrdersDetails(code + 4, "BLONP", i + 3, "Austria"));
          order.Add(new OrdersDetails(code + 5, "BOLID", i + 4, "Switzerland"));
          code += 5;
        }
      }
      return order;
    }
    [Key]
    public int? OrderID { get; set; }
    public string? CustomerID { get; set; }
    public int? EmployeeID { get; set; }
    public string? ShipCountry { get; set; }
  }
}

{% endhighlight %}
{% endtabs %}

{% endif %}

### Error handling

Proper error handling is essential when working with remote data sources to ensure a robust user experience and facilitate easier debugging. Syncfusion ##Platform_Name## DataManager provides built-in mechanisms to capture and respond to errors that occur during data operations.

When using a `CustomAdaptor`, you must explicitly invoke error callbacks in case of failures. This ensures that the DataManager triggers the appropriate error events on the bound UI components, such as Grid, allowing you to handle errors gracefully in the UI.

Use the following example to understand how to implement error handling in a `CustomAdaptor`:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/custom-adaptor-cs4/index.js %}
{% endhighlight %}

{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/custom-adaptor-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/custom-adaptor-cs4/index.js %}
{% endhighlight %}

{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/custom-adaptor-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

{% previewsample "page.domainurl/code-snippet/data/custom-adaptor-cs4" %}

![Error Handling](./images/error-handling.png)

## CacheAdaptor

The CacheAdaptor is a powerful feature in Syncfusion’s ##Platform_Name## DataManager that enhances application performance by reducing redundant server calls. It caches previously fetched data on the client side, allowing your app to quickly retrieve cached data instead of making repeated HTTP requests when navigating through pages or revisiting previously loaded data. This significantly improves the responsiveness of data-bound components and reduces server load, especially in applications with large datasets or frequent data navigation.

You can enable this functionality by setting the `enableCache` property to true in the `DataManager` configuration.

**How it works:**

* When `enableCache` is set to **true**, the DataManager generates a unique ID at initialization and uses it to store previously loaded page data in cache memory. This enables efficient data retrieval without redundant server requests.

* The cache is automatically cleared when data actions such as sorting, filtering, grouping, searching, or CRUD operations (Create, Read, Update, Delete) are performed.

* This feature is supported by all adaptors in DataManager, ensuring consistent caching behavior across different data sources.

Consider a customer order management dashboard that displays thousands of orders in a paginated grid with filtering and sorting options. By enabling `enableCache` in the DataManager:

* When the user first navigates to page 2, the data is fetched from the server and stored in the cache.

* If the user later returns to page 2, the DataManager serves the data directly from the cache, with no additional request sent.

* If the user applies a filter or sort, the cache is cleared to ensure new data is retrieved fresh from the server.

* This results in a smoother user experience, reduced load times, and improved overall performance.

This caching behavior is especially beneficial for:

* Applications with large datasets and frequent navigation.

* Scenarios with network latency or bandwidth constraints.

* Reducing costs in cloud-hosted backends by minimizing API calls.

The following example demonstrates how to enable caching using the `enableCache` property in the `DataManager`:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs6/index.ts %}
{% raw %}

import { Grid } from '@syncfusion/ej2-grids';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

let data: Object = new DataManager({
  url: "https://services.syncfusion.com/js/production/api/orders",
  adaptor: new WebApiAdaptor,
  crossDomain: true,
  enableCache: true // Enables caching to prevent repeated HTTP requests.
});

let grid: Grid = new Grid({
  dataSource: data,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, type: 'number' },
    { field: 'CustomerID', width: 100, headerText: 'Customer ID', type: 'string' },
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
    { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 120, textAlign: 'Right', type:'Date' },
  ],
});

grid.appendTo('#Grid');

{% endraw %}
{% endhighlight %}

{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}
{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}

var data = new ej.data.DataManager({
  url: "https://services.syncfusion.com/js/production/api/orders",
  adaptor: new ej.data.WebApiAdaptor(),
  crossDomain: true,
  enableCache: true // Enables caching to prevent repeated HTTP requests.
});

var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, type: 'number' },
    { field: 'CustomerID', width: 100, headerText: 'Customer ID', type: 'string' },
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
    { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 120, textAlign: 'Right', type:'Date' },
  ],
});

grid.appendTo('#Grid');

{% endraw %}
{% endhighlight %}

{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
{% endif %}