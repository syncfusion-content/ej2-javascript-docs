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

# Getting started in ##Platform_Name## File Manager component

This section explains how to create the File Manager component and configure its features in TypeScript using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following are the dependencies required to use the File Manager component in your application:

```javascript
|-- @syncfusion/ej2-filemanager
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-grids
```

## Set up development environment

Open a command prompt in the desired directory and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Import the File Manager and its dependent control styles in the `~/src/styles/styles.css` file as shown below:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-icons/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-filemanager/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

## Initialize the File Manager

Now, initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 File Manager component in your application. To get started, add an HTML `<div>` element with the id attribute value `filemanager` to your `index.html`.

{% tabs %}
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
    <!--element which is going to render the File Manager-->
    <div id="filemanager"></div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Now, import the File Manager component into your `app.ts` and append it to `#filemanager` as follows.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { FileManager } from '@syncfusion/ej2-filemanager';

let hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
// initialize File Manager Control
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations'
    }
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

{% endhighlight %}
{% endtabs %}

>**Note:** The [`ajaxSettings`](../api/file-manager#ajaxsettings) must be defined when initializing the File Manager. The File Manager uses the URLs specified in `ajaxSettings` to send [file operation](./file-operations) requests to the server.
>The File Manager service link is provided in `hostUrl`.

## Run the application

Now use the `npm run start` command to run the application in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

The following example shows the basic File Manager component.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/getting-started-cs1/index.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/file-manager/getting-started-cs1" %}

## File download support

To perform the download operation, initialize the [`downloadUrl`](../api/file-manager/ajaxSettingsModel#downloadurl) property in [`ajaxSettings`](../api/file-manager#ajaxsettings) of the File Manager component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { FileManager } from '@syncfusion/ej2-filemanager';

let hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
// initialize File Manager Control
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    }
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

{% endhighlight %}
{% endtabs %}

## File upload support

To perform the upload operation, initialize the [`uploadUrl`](../api/file-manager/ajaxSettingsModel#uploadurl) property in [`ajaxSettings`](../api/file-manager#ajaxsettings) of the File Manager component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { FileManager } from '@syncfusion/ej2-filemanager';

let hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
// initialize File Manager Control
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        uploadUrl: hostUrl + 'api/FileManager/Upload'
    }
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

{% endhighlight %}
{% endtabs %}

## Image preview support

To enable image preview in the File Manager component, initialize the [`getImageUrl`](../api/file-manager/ajaxSettingsModel#getimageurl) property in [`ajaxSettings`](../api/file-manager#ajaxsettings).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/file-manager/getting-started-cs2" %}

## Injecting feature modules

The File Manager includes a context menu for file operations, a large-icons view for displaying files and folders, and a breadcrumb for navigation. These functionalities can be extended using additional feature modules such as Toolbar, NavigationPane, and DetailsView to simplify navigation and file operations. Inject these modules using the `FileManager.Inject()` method.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { FileManager, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView)

let hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
// initialize File Manager Control
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    }
});
// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

{% endhighlight %}
{% endtabs %}

The following example shows the File Manager with all feature modules.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/overview-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/overview-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/file-manager/overview-cs1" %}

>**Note:** Customize the appearance of the File Manager using the [`cssClass`](../api/file-manager#cssclass) property. This adds a CSS class to the root element, which can be used to add new styles or override existing styles for the File Manager.

## Switching initial view of the File Manager

Change the initial view of the File Manager to Details or Large Icons using the [`view`](../api/file-manager#view) property. By default, the File Manager renders in Large Icons view.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/view-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/view-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/file-manager/view-cs1" %}

## Maintaining control state on page reload

The File Manager can maintain its state on page reload. Enable the [`enablePersistence`](../api/file-manager#enablepersistence) property to preserve the following:
* Previous view of the File Manager - [`view`](../api/file-manager#view)
* Previous path of the File Manager - [`path`](../api/file-manager#path)
* Previous selected items of the File Manager - [`selectedItems`](../api/file-manager#selecteditems)

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/persistence-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/persistence-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/file-manager/persistence-cs1" %}

>**Note:** The files of the current folder opened in the File Manager can be refreshed programmatically by calling [`refreshFiles`](../api/file-manager#refreshfiles) method.

## Rendering control in right-to-left direction

Render the File Manager in the right-to-left direction by setting the [`enableRtl`](../api/file-manager#enablertl) API to `true`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/rtl-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/file-manager/rtl-cs1" %}

## Specifying the current path of the File Manager

The current path of the File Manager can be specified initially or dynamically using the [`path`](../api/file-manager#path) property.

The following code snippet demonstrates specifying the current path when rendering the File Manager.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import { FileManager, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView)

let hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
// initialize File Manager Control
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    // Specify the required current path
    path: '/Food'
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

{% endhighlight %}
{% endtabs %}