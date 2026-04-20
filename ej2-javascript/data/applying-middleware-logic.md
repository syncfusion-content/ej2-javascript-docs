---
layout: post
title: ##Platform_Name## DataManager - Applying Middleware logic | Syncfusion
description: Use middleware logic in Syncfusion ##Platform_Name## DataManager to add authentication, validate requests, or transform responses.
platform: ej2-javascript
control: Applying Middleware logic 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Applying Middleware logic in ##Platform_Name## DataManager

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager supports applying middleware logic to modify requests and responses during data processing. This capability is useful for handling tasks such as authentication, validation, logging, and transforming response data. Middleware can be applied through two methods: `applyPreRequestMiddlewares` and `applyPostRequestMiddlewares`, each serving a specific stage in the data handling workflow.

**Pre-Request Middleware**

The `applyPreRequestMiddlewares` method executes before a request is sent to the server. It enables modification of request headers, query parameters, or payloads. This is commonly used for adding authentication tokens, restructuring requests, or performing validations. The following code snippet demonstrates how to add an authorization token:

```ts

dataManager.applyPreRequestMiddlewares([
   async (context) => {
      context.request.headers['Authorization'] = 'Bearer your-access-token';
   }
]);

```

**Post-Request Middleware**

The `applyPostRequestMiddlewares` method runs after a response is received from the server but before the data is bound to a component. It allows filtering, formatting, or restructuring the response to meet application requirements. The following code snippet demonstrates how to format response data:

```ts

dataManager.applyPostRequestMiddlewares([
   async (context) => {
    context.response.result = context.response.result.map(item => ({
      id: item.Id,
      name: item.Name.toUpperCase(),
      date: new Date(item.Timestamp).toLocaleDateString()
    }));
  }
]);

```

**Supported data adaptors**

Middleware functions are supported across multiple DataManager adaptors, including the [WebApiAdaptor](./adaptors/webapi-adaptor), [ODataAdaptor](./adaptors/odatav4-adaptor), and [CustomAdaptor](./adaptors/custom-adaptor), and can be applied to both local and remote data operations. This enhances flexibility, security, and overall control of data processing.

The example demonstrates using the [UrlAdaptor](./adaptors/url-adaptor) with middleware to adjust requests and responses. Before sending a request, `applyPreRequestMiddlewares` fetches an authentication token from an external server and adds it to the request headers. If the token retrieval fails, the DataManager failure event handles the error. Likewise, `applyPostRequestMiddlewares` processes the server response before it is bound to the UI, enabling any required transformations or filtering.

{% if page.publishingplatform == "typescript" %}

{% tabs %} 
{% highlight ts tabtitle="index.ts" %} 
{% raw %}

import { DataManager, Query, UrlAdaptor, ReturnOption } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

const template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
const compiledFunction = compile(template);
const table = document.getElementById('datatable') as HTMLElement;

const data = new DataManager({
  url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
  adaptor: new UrlAdaptor(),
}).executeQuery(new Query()).then((e: ReturnOption) => {
  (e.result as Object[]).forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});

// Method to apply middleware before sending a request to the server.
data.applyPreRequestMiddlewares = async (request: string | Object): Promise<object> => {
  // Fetch authentication token from an external service.
  const response = await fetch('https://example.com/api/token', { // Replace with your actual endpoint. This URL is just for example purposes.
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
  throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  // Return the authentication token.
  return { token: "your_token_value" };
};

data.dataManagerFailure = (e: Error) => {
  //Handle DataManager failure event.
}

// Method to apply middleware after receiving a response from the server
data.applyPostRequestMiddlewares = async (response: string | Object): Promise<Object> => {
  return response;
};

{% endraw %}
{% endhighlight %}

{% highlight html tabtitle="index.html" %} 
{% include code-snippet/data/supported-adaptors/index.html %} 
{% endhighlight %} 
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %} 
{% highlight js tabtitle="index.js" %} 
{% raw %}

var template =
'<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
var compiledFunction = ej.base.compile(template);
var table = document.getElementById('datatable');

const data = new ej.data.DataManager({
   url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
   adaptor: new ej.data.UrlAdaptor(),
   }).executeQuery(new ej.data.Query()).then(function (e) {
   e.result.forEach(function (data) {
      table.appendChild(compiledFunction(data)[0]);
   });
});

// Method to apply middleware before sending a request to the server.
data.applyPreRequestMiddlewares = async function(request) {
   // Fetch authentication token from an external service.
   const response = await fetch('https://example.com/api/token', { // Replace with your actual endpoint. This URL is just for example purposes.
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      }
   });

   if (!response.ok) {
   throw new Error(`HTTP error! Status: ${response.status}`);
   }
   // Return the authentication token.
   return { token: "your_token_value" };
};

data.dataManagerFailure = (e) => {
   // Handle DataManager failure event.
}

// Method to apply middleware after receiving a response from the server.
data.applyPostRequestMiddlewares = async function(response) {
   return response;
};

{% endraw %}
{% endhighlight %} 

{% highlight html tabtitle="index.html" %} 
{% include code-snippet/data/supported-adaptors/index.html %} 
{% endhighlight %} 
{% endtabs %}

{% endif %}
