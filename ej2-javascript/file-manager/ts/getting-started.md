---
layout: post
title: Getting started with ##Platform_Name## File Manager control | Syncfusion
description: Learn how to get started with the ##Platform_Name## File Manager component using Syncfusion Essential JS 2.
platform: ej2-javascript
control: File Manager
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## File Manager control

This section explains the steps to create a simple File Manager and demonstrates the basic usage of the File Manager control using the Essential<sup style="font-size:70%">&reg;</sup> JS 2
[quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

> This application is integrated with the **webpack.config.js** configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli#commands). It requires node **v14.15.0** or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started).

## Setup for local development

Clone the Essential<sup style="font-size:70%">&reg;</sup> JS 2 quickstart application project from [GitHub](https://github.com/syncfusion/ej2-quickstart.git) using the following command line scripts.

```
git clone https://github.com/syncfusion/ej2-quickstart.git
cd ej2-quickstart
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

Use the following command to install the dependent npm packages from the command prompt.

```
npm install
```

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Combined CSS files are available in the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package root folder. This can be referenced in your `[src/styles/styles.css]` using the following code.

```
@import '../../node_modules/@syncfusion/ej2/fluent2.css';
```

## Adding File Manager control

You can start adding Essential<sup style="font-size:70%">&reg;</sup> JS 2 file manager control to the application. To get started, add the file manager control in **app.ts** file using the following code.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { FileManager } from '@syncfusion/ej2-filemanager';

let hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations'
    }
});

filemanagerInstance.appendTo('#filemanager');

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 File Manager control</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div>
        <!--HTML file manager element, which is going to render as Essential JS 2 File Manager-->
        <div id="filemanager"></div>
    </div>
</body>

</html>

{% endhighlight %}

{% endtabs %}

>Note: The [`ajaxSettings`](../api/file-manager#ajaxsettings) must be defined when initializing the File Manager. The File Manager uses the URLs specified in `ajaxSettings` to send file operation requests to the server. The File Manager service link is provided in `hostUrl`.

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

```
npm start
```

Output will be displayed as follows.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/getting-started-cs1/index.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/file-manager/getting-started-cs1" %}

## See also

* [Ajax Settings Configuration (uploadUrl, downloadUrl, getImageUrl)](../file-operations.md#ajax-settings-configuration)
* [Injecting Services for Overview](../user-interface#injecting-services-for-overview)
* [File Manager Views](../views)
* [File Manager File Operations](../file-operations)
* [File Manager Upload](../upload)
* [File Manager Customization](../customization)