---
layout: post
title: ##Platform_Name## DataManager - Custom headers | Syncfusion
description: Send custom HTTP headers (e.g., authentication tokens, API keys) with Syncfusion ##Platform_Name## DataManager using the headers property.
platform: ej2-javascript
control: Adding custom headers in ##Platform_Name## DataManager
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Custom headers for ##Platform_Name## DataManager

Custom headers provide a mechanism to send additional information along with HTTP requests made by the Syncfusion<sup style="font-size:70%">&reg;</sup> [DataManager](../api/data/datamanager). These headers can include authentication tokens, API keys, session identifiers, or any other metadata required by the server to validate and process the request correctly.

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager supports custom headers through its `headers` property, enabling secure and flexible communication between the client application and the server. This feature is particularly useful when requests must carry additional information for authentication, authorization, or contextual processing.

Steps to integrate custom headers into DataManager requests:

1. Create a new instance of `DataManager` with the required `URL` and `adaptor`.

2. Assign the custom headers to the `headers` property of the `DataManager` instance. 

3. Trigger the [executeQuery](../api/data/dataManager/executequery) method to send the request to the server with the custom headers.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { DataManager, ReturnOption, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

let compiledFunction: Function = compile(template);

const SERVICE_URL: string =  'https://services.syncfusion.com/js/production/api/Orders';

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

let dataManager: DataManager = new DataManager({ 
  url: SERVICE_URL, 
  adaptor: new ODataV4Adaptor(), 
  headers: [{ 'syncfusion-data-manager': 'true' }] 
});

dataManager.executeQuery(new Query()).then((e: ReturnOption) => {
  (<Object[]>e.result).forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});

{% endraw %}
{% endhighlight %}

{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}

var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

var compiledFunction = ej.base.compile(template);

const SERVICE_URL =  'https://services.syncfusion.com/js/production/api/Orders';

var table = (document.getElementById('datatable'));

var dm = new ej.data.DataManager({ 
  url: SERVICE_URL, 
  adaptor: new ej.data.ODataV4Adaptor, 
  headers: [{ 'syncfusion-data-manager': 'true' }] 
});

dm.executeQuery(new ej.data.Query()).then((e) => {
  (e.result).forEach((data) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});


{% endraw %}
{% endhighlight %}

{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}
