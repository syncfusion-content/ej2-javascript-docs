---
layout: post
title: Getting started with ##Platform_Name## File Manager control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## File Manager control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## File Manager control

This section briefly explains how to create File Manager control and configure its available functionalities in TypeScript, using Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following are the dependencies required to use the File Manager control in your application:

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

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

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

Import the File Manager and its dependent control styles as given below in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-icons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-filemanager/styles/material.css';

{% endhighlight %}
{% endtabs %}

## Initialize the File Manager

Now, you can start initializing the Essential<sup style="font-size:70%">&reg;</sup> JS 2 File Manager control in your application. To get started, add a HTML `<div>` element with id attribute value `filemanager` to your `index.html`.

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

Now, import the File Manager control to your `app.ts` and append to `#filemanager` as follows.

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

>**Note:** The [`ajaxSettings`](../api/file-manager/#ajaxsettings) must be defined while initializing the File Manager. File Manager utilizes the URL's mentioned in ajaxSettings to send [`file operation`](./file-operations) request to the server.
>The File Manager service link is given in `hostUrl`.

## Run the application

Now use the `npm run start` command to run the application in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

The following example shows the basic File Manager control.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/getting-started-cs1/index.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/file-manager/getting-started-cs1" %}

## File Download support

To perform the download operation, initialize the [`downloadUrl`](../api/file-manager/ajaxSettingsModel/#downloadurl) property in a [`ajaxSettings`](../api/file-manager/#ajaxsettings) of File Manager control.

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

## File Upload support

To perform the upload operation, initialize the [`uploadUrl`](../api/file-manager/ajaxSettingsModel/#uploadurl) property in a [`ajaxSettings`](../api/file-manager/#ajaxsettings) of File Manager Control.

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

## Image Preview support

To perform the image preview support in the File Manager control, need to initialize the [`getImageUrl`](../api/file-manager/ajaxSettingsModel/#getimageurl) property in a [`ajaxSettings`](../api/file-manager/#ajaxsettings) of File Manager control.

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

Basically, the File Manager control contains a context menu for performing file operations, large-icons view for displaying the files and folders, and a breadcrumb for navigation. However, these basic functionalities can be extended by using the additional feature modules like toolbar, navigation pane, and details view to simplify the navigation and file operations within the file system. The above modules can be injected using the `FileManager.Inject()` method.

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

The following example shows you the File Manager with all feature modules.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/overview-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/overview-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/file-manager/overview-cs1" %}

>**Note:** The appearance of the File Manager can be customized by using [`cssClass`](../api/file-manager/#cssclass) property. This adds a css class to the root of the File Manager which can be used to add new styles or override existing styles to the File Manager.

## Switching initial view of the File Manager

The initial view of the File Manager can be changed to details or large icons view with the help of [`view`](../api/file-manager/#view) property. By default, the File Manager will be rendered in large icons view.

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

The File Manager supports maintaining the control state on page reload. This can be achieved by enabling [`enablePersistence`](../api/file-manager/#enablepersistence) property which maintains the following,
* Previous view of the File Manager - [`View`](../api/file-manager/#view)
* Previous path of the File Manager - [`Path`](../api/file-manager/#path)
* Previous selected items of the File Manager - [`SelectedItems`](../api/file-manager/#selecteditems)

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/persistence-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/persistence-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/file-manager/persistence-cs1" %}

>**Note:** The files of the current folder opened in the File Manager can be refreshed programmatically by calling [`refreshFiles`](../api/file-manager/#refreshfiles) method.

## Rendering control in right-to-left direction

It is possible to render the File Manager in right-to-left direction by setting the [`enableRtl`](../api/file-manager/#enablertl) API to true.

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

The current path of the File Manager can be specified initially or dynamically using the [`path`](../api/file-manager/#path) property.

The following code snippet demonstrates specifying the current path in File Manager on rendering.

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