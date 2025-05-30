---
layout: post
title: Es5 getting started with ##Platform_Name## File Manager control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## File Manager control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Es5 getting started in ##Platform_Name## File Manager control

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Control Initialization

Create an app folder `myapp` in local machine to initialize Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls.

Using either of the following way to refer the required script and styles.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `myapp` for Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls.

**Step 2:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\material.css`

**Example:**

> Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-filemanager\dist\global\ej2-filemanager.min.js`
>
> Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-filemanager\styles\material.css`

The below located script and style file contains all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\material.css`

**Step 3:** Create a folder `myapp/resources` and copy/paste the global scripts and styles from the above installed location to `myapp/resources` location.

**Step 4:** Create a HTML page (index.html) in `myapp` location and add the Essentials JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 File Manager Control</title>
            <!-- File Manager and its dependent theme -->
            <link href=" resources/ej2-base/styles/material.css" rel="stylesheet" />
            <link href=" resources/ej2-inputs/styles/material.css" rel="stylesheet" />
            <link href=" resources/ej2-popups/styles/material.css" rel="stylesheet" />
            <link href=" resources/ej2-buttons/styles/material.css" rel="stylesheet" />
            <link href=" resources/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
            <link href=" resources/ej2-layouts/styles/material.css" rel="stylesheet" />
            <link href=" resources/ej2-navigations/styles/material.css" rel="stylesheet" />
            <link href=" resources/ej2-grids/styles/material.css" rel="stylesheet" />
            <link href=" resources/ej2-filemanager/styles/material.css" rel="stylesheet" />
            <!-- Essential JS 2 File-Manager's global script -->
            <script src="resources/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-layouts/dist/global/ej2-layouts.min.js" type="text/javascript"></script>
            <script src="resources/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="resources/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="resources/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="resources/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
            <script src="resources/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
            <script src="resources/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
            <script src="resources/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
            <script src="resources/ej2-filemanager/dist/global/ej2-filemanager.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

>Note: If you want to refer the combined control styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

**Step 5:** Now, add the `div` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 File Manager** control in the `index.html` by using following code

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
            <title>Essential JS 2 File Manager Control</title>
            <!-- File Manager and its dependent theme -->
            <link href=" resources/ej2-base/styles/material.css" rel="stylesheet" />
            <link href=" resources/ej2-inputs/styles/material.css" rel="stylesheet" />
            <link href=" resources/ej2-popups/styles/material.css" rel="stylesheet" />
            <link href=" resources/ej2-buttons/styles/material.css" rel="stylesheet" />
            <link href=" resources/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
            <link href=" resources/ej2-layouts/styles/material.css" rel="stylesheet" />
            <link href=" resources/ej2-navigations/styles/material.css" rel="stylesheet" />
            <link href=" resources/ej2-grids/styles/material.css" rel="stylesheet" />
            <link href=" resources/ej2-filemanager/styles/material.css" rel="stylesheet" />
            <!-- Essential JS 2 File-Manager's global script -->
            <script src="resources/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-layouts/dist/global/ej2-layouts.min.js" type="text/javascript"></script>
            <script src="resources/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="resources/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="resources/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="resources/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
            <script src="resources/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
            <script src="resources/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
            <script src="resources/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
            <script src="resources/ej2-filemanager/dist/global/ej2-filemanager.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!-- Add the HTML <div> element  -->
            <div id="filemanager"></div>
            <script>
              var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
              // initialize File Manager Control
              var filemanagerInstance = new ej.filemanager.FileManager({
                  ajaxSettings: {
                      url: hostUrl + 'api/FileManager/FileOperations'
                  }
              });
              // render initialized File Manager
              filemanagerInstance.appendTo('#filemanager');
            </script>
       </body>
  </html>
```

>**Note:** The [`ajaxSettings`](../api/file-manager/#ajaxsettings) must be defined while initializing the File Manager. File Manager utilizes the URL's mentioned in ajaxSettings to send [`file operation`](./file-operations) request to the server.
>The File Manager service link is given in `hostUrl`.

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 File Manager** control.

### Using CDN link for script and style reference

**Step 1:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 controls scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Style: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/ej2-filemanager/dist/global/ej2-filemanager.min.js`](https://cdn.syncfusion.com/ej2/ej2-filemanager/dist/global/ej2-filemanager.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/ej2-filemanager/styles/material.css`](https://cdn.syncfusion.com/ej2/ej2-filemanager/styles/material.css)
>

**Step 2:** Have to add `CDN` global script and style for File Manager and its dependent packages in `myapp/index.html` like below.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
            <title>Essential JS 2 File Manager Control</title>
            <!-- File Manager and its dependent theme -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-layouts/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-filemanager/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 File Manager's global script -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-layouts/dist/global/ej2-layouts.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-filemanager/dist/global/ej2-filemanager.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!-- Add the HTML <div> element  -->
            <div id="filemanager"></div>
            <script>
              var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
              // initialize File Manager Control
              var filemanagerInstance = new ej.filemanager.FileManager({
                  ajaxSettings: {
                      url: hostUrl + 'api/FileManager/FileOperations'
                  }
              });
              // render initialized File Manager
              filemanagerInstance.appendTo('#filemanager');
            </script>
       </body>
  </html>
```

>When referencing CDN links in application, always ensure the network connection will be in enabled state.

The following example shows the basic File Manager.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/es5-getting-started-cs1" %}

## File Download support

To perform the download operation, initialize the [`downloadUrl`](../api/file-manager/ajaxSettingsModel/#downloadurl) property in a [`ajaxSettings`](../api/file-manager/#ajaxsettings) of File Manager control.

```
<script>
        var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
        // initialize File Manager Control
        var filemanagerInstance = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'api/FileManager/FileOperations',
                downloadUrl: hostUrl + 'api/FileManager/Download'
            }
        });
        // render initialized File Manager
        filemanagerInstance.appendTo('#filemanager');
</script>
```

## File Upload support

To perform the upload operation, initialize the [`uploadUrl`](../api/file-manager/ajaxSettingsModel/#uploadurl) property in a [`ajaxSettings`](../api/file-manager/#ajaxsettings) of File Manager Control.

```
<script>
        var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
        // initialize File Manager Control
        var filemanagerInstance = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'api/FileManager/FileOperations',
                uploadUrl: hostUrl + 'api/FileManager/Upload'
            }
        });
        // render initialized File Manager
        filemanagerInstance.appendTo('#filemanager');
</script>
```

## Image Preview support

To perform the image preview support in the File Manager control, need to initialize the [`getImageUrl`](../api/file-manager/ajaxSettingsModel/#getimageurl) property in a [`ajaxSettings`](../api/file-manager/#ajaxsettings) of File Manager control.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/es5-getting-started-cs2" %}

## Injecting feature modules

Basically, the File Manager control contains a context menu for performing file operations, large-icons view for displaying the files and folders, and a breadcrumb for navigation. However, these basic functionalities can be extended by using the additional feature modules like toolbar, navigation pane, and details view to simplify the navigation and file operations within the file system. The above modules can be injected using the `ej.filemanager.FileManager.Inject()` method in the script as follows.

```javascript
var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
// inject feature modules of the File Manager
ej.filemanager.FileManager.Inject(ej.filemanager.DetailsView,ej.filemanager.Toolbar,ej.filemanager.NavigationPane);
// initialize File Manager Control
var filemanagerInstance = new ej.filemanager.FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    }
});
// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');
```

The following example shows you the File Manager with all feature modules.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/es5-getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/es5-getting-started-cs3" %}

>**Note:** The appearance of the File Manager can be customized by using [`cssClass`](../api/file-manager/#cssclass) property. This adds a css class to the root of the File Manager which can be used to add new styles or override existing styles to the File Manager.

## Switching initial view of the File Manager

The initial view of the File Manager can be changed to details or large icons view with the help of [`view`](../api/file-manager/#view) property. By default, the File Manager will be rendered in large icons view.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/es5-getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/es5-getting-started-cs4" %}

## Maintaining control state on page reload

The File Manager supports maintaining the control state on page reload. This can be achieved by enabling [`enablePersistence`](../api/file-manager/#enablepersistence) property which maintains the following,
* Previous view of the File Manager - [`View`](../api/file-manager/#view)
* Previous path of the File Manager - [`Path`](../api/file-manager/#path)
* Previous selected items of the File Manager - [`SelectedItems`](../api/file-manager/#selecteditems)

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/es5-getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/es5-getting-started-cs5" %}

>**Note:** The files of the current folder opened in the File Manager can be refreshed programatically by calling [`refreshFiles`](../api/file-manager/#refreshfiles) method.

## Rendering control in right-to-left direction

It is possible to render the File Manager in right-to-left direction by setting the [`enableRtl`](../api/file-manager/#enablertl) API to true.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/es5-getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/es5-getting-started-cs6" %}

## Specifying the current path of the File Manager

The current path of the File Manager can be specified initially or dynamically using the [`path`](../api/file-manager/#path) property.

```javascript
var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
// inject feature modules of the File Manager
ej.filemanager.FileManager.Inject(ej.filemanager.DetailsView,ej.filemanager.Toolbar,ej.filemanager.NavigationPane);
// initialize File Manager Control
var filemanagerInstance = new ej.filemanager.FileManager({
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
```
