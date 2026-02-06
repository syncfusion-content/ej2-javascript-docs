---
layout: post
title: Getting started with ##Platform_Name## File Manager control | Syncfusion
description: Learn how to get started with the ES5 ##Platform_Name## File Manager component using Syncfusion Essential JS 2.
platform: ej2-javascript
control: File Manager
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# ES5 getting started in ##Platform_Name## File Manager component

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Control initialization

Create an app folder `myapp` in local machine to initialize Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls.

Use either of the following methods to reference the required scripts and styles.

* Using local script and style references in an HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in an HTML page

**Step 1:** Create an app folder `myapp` for Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls.

**Step 2:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\bootstrap5.3.css`

**Example:**

> Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-filemanager\dist\global\ej2-filemanager.min.js`
>
> Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-filemanager\styles\bootstrap5.3.css`

The below located script and style file contains all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\styles\bootstrap5.3.css`

**Step 3:** Create a folder `myapp/resources` and copy/paste the global scripts and styles from the above installed location to `myapp/resources` location.

**Step 4:** Create an HTML page (index.html) in the `myapp` location and add the Essential JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 File Manager Control</title>
            <!-- File Manager and its dependent theme -->
            <link href=" resources/ej2-base/styles/bootstrap5.3.css" rel="stylesheet" />
            <link href=" resources/ej2-inputs/styles/bootstrap5.3.css" rel="stylesheet" />
            <link href=" resources/ej2-popups/styles/bootstrap5.3.css" rel="stylesheet" />
            <link href=" resources/ej2-buttons/styles/bootstrap5.3.css" rel="stylesheet" />
            <link href=" resources/ej2-splitbuttons/styles/bootstrap5.3.css" rel="stylesheet" />
            <link href=" resources/ej2-layouts/styles/bootstrap5.3.css" rel="stylesheet" />
            <link href=" resources/ej2-navigations/styles/bootstrap5.3.css" rel="stylesheet" />
            <link href=" resources/ej2-grids/styles/bootstrap5.3.css" rel="stylesheet" />
            <link href=" resources/ej2-filemanager/styles/bootstrap5.3.css" rel="stylesheet" />
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

>Note: If you want to refer the combined control styles, please make use of our [`CRG`](https://crg.syncfusion.com) (Custom Resource Generator) in your application.

**Step 5:** Add the `div` element and initialize the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 File Manager** component in the `index.html` using the following code

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
            <title>Essential JS 2 File Manager Control</title>
            <!-- File Manager and its dependent theme -->
            <link href=" resources/ej2-base/styles/bootstrap5.3.css" rel="stylesheet" />
            <link href=" resources/ej2-inputs/styles/bootstrap5.3.css" rel="stylesheet" />
            <link href=" resources/ej2-popups/styles/bootstrap5.3.css" rel="stylesheet" />
            <link href=" resources/ej2-buttons/styles/bootstrap5.3.css" rel="stylesheet" />
            <link href=" resources/ej2-splitbuttons/styles/bootstrap5.3.css" rel="stylesheet" />
            <link href=" resources/ej2-layouts/styles/bootstrap5.3.css" rel="stylesheet" />
            <link href=" resources/ej2-navigations/styles/bootstrap5.3.css" rel="stylesheet" />
            <link href=" resources/ej2-grids/styles/bootstrap5.3.css" rel="stylesheet" />
            <link href=" resources/ej2-filemanager/styles/bootstrap5.3.css" rel="stylesheet" />
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

>**Note:** The [`ajaxSettings`](../api/file-manager#ajaxsettings) must be defined when initializing the File Manager. The File Manager uses the URLs specified in `ajaxSettings` to send [file operation](./file-operations) requests to the server.
>The File Manager service link is provided in `hostUrl`.

**Step 6:** Run `index.html` in a web browser to render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 File Manager** component.

### Using CDN links for script and style references

**Step 1:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 controls scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Style: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/bootstrap5.3.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/ej2-filemanager/dist/global/ej2-filemanager.min.js`](https://cdn.syncfusion.com/ej2/ej2-filemanager/dist/global/ej2-filemanager.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/ej2-filemanager/styles/bootstrap5.3.css`](https://cdn.syncfusion.com/ej2/ej2-filemanager/styles/bootstrap5.3.css)
>

**Step 2:** Add CDN global script and style references for the File Manager and its dependent packages in `myapp/index.html` as shown below.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
            <title>Essential JS 2 File Manager Control</title>
            <!-- File Manager and its dependent theme -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-layouts/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-grids/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-filemanager/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
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

>When referencing CDN links in the application, ensure the network connection is available.

The following example shows the basic File Manager.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/es5-getting-started-cs1" %}

## File download support

To perform the download operation, initialize the [`downloadUrl`](../api/file-manager/ajaxSettingsModel#downloadurl) property in [`ajaxSettings`](../api/file-manager#ajaxsettings) of the File Manager component.

```html
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

## File upload support

To perform the upload operation, initialize the [`uploadUrl`](../api/file-manager/ajaxSettingsModel#uploadurl) property in [`ajaxSettings`](../api/file-manager#ajaxsettings) of the File Manager component.

```html
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

## Image preview support

To enable image preview in the File Manager component, initialize the [`getImageUrl`](../api/file-manager/ajaxSettingsModel#getimageurl) property in [`ajaxSettings`](../api/file-manager#ajaxsettings).

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/es5-getting-started-cs2" %}

## Injecting feature modules

The File Manager includes a context menu for file operations, a large-icons view for displaying files and folders, and a breadcrumb for navigation. These functionalities can be extended using additional feature modules such as Toolbar, NavigationPane, and DetailsView to simplify navigation and file operations. Inject these modules using the `ej.filemanager.FileManager.Inject()` method as follows.

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

The following example shows the File Manager with all feature modules.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/es5-getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/es5-getting-started-cs3" %}

>**Note:** Customize the appearance of the File Manager using the [`cssClass`](../api/file-manager#cssclass) property. This adds a CSS class to the root element, which can be used to add new styles or override existing styles for the File Manager.

## Switching initial view of the File Manager

Change the initial view of the File Manager to Details or Large Icons using the [`view`](../api/file-manager#view) property. By default, the File Manager renders in Large Icons view.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/es5-getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/es5-getting-started-cs4" %}

## Maintaining control state on page reload

The File Manager can maintain its state on page reload. Enable the [`enablePersistence`](../api/file-manager#enablepersistence) property to preserve the following:
* Previous view of the File Manager - [`view`](../api/file-manager#view)
* Previous path of the File Manager - [`path`](../api/file-manager#path)
* Previous selected items of the File Manager - [`selectedItems`](../api/file-manager#selecteditems)

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/es5-getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/es5-getting-started-cs5" %}

>**Note:** Refresh the files of the current folder programmatically by calling the [`refreshFiles`](../api/file-manager#refreshfiles) method.

## Rendering control in right-to-left direction

Render the File Manager in the right-to-left direction by setting the [`enableRtl`](../api/file-manager#enablertl) API to `true`.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/es5-getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/es5-getting-started-cs6" %}

## Specifying the current path of the File Manager

The current path of the File Manager can be specified initially or dynamically using the [`path`](../api/file-manager#path) property.

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
