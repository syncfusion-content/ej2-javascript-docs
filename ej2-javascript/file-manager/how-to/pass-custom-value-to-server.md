---
layout: post
title: Custom server values in ##Platform_Name## File Manager control | Syncfusion
description: Learn about how to Pass custom value to server in the Syncfusion ##Platform_Name## File Manager control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Perform custom sorting 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Pass custom value to server in ##Platform_Name## File Manager control

The Syncfusion File Manager control allows you to pass custom values from the client to the server for various operations. This guide demonstrates how to implement this functionality for **Upload**, **Download**, and **GetImage** operations using the [`beforeSend`](https://ej2.syncfusion.com/javascript/documentation/api/file-manager/#beforesend), [`beforeDownload`](https://ej2.syncfusion.com/javascript/documentation/api/file-manager/#beforedownload), and [`beforeImageLoad`](https://ej2.syncfusion.com/javascript/documentation/api/file-manager/#beforeimageload) events respectively.

## Upload Operation

To pass custom values during the upload operation, utilize the [`beforeSend`](https://ej2.syncfusion.com/javascript/documentation/api/file-manager/#beforesend) event of the File Manager control.

### Client-side Implementation

{% if page.publishingplatform == "typescript" %}

```ts
import { FileManager, Toolbar, NavigationPane,
DetailsView, BeforeSendEventArgs } from '@syncfusion/ej2-filemanager';
FileManager.Inject(Toolbar, NavigationPane, DetailsView);

let hostUrl = 'http://localhost:{port}/';

// Initializing File Manager with file system provider.
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        // Replace the hosted port number in the place of "{port}"
        url: hostUrl + "api/FileManager/FileOperations",
        downloadUrl: hostUrl + "api/FileManager/Download",
        uploadUrl: hostUrl + "api/FileManager/Upload",
        getImageUrl: hostUrl + "api/FileManager/GetImage"
    },
    beforeSend: (args: BeforeSendEventArgs) => {
        if (args.ajaxSettings) {
            args.ajaxSettings.beforeSend = function (args) {
                args.httpRequest.setRequestHeader('Authorization', 'User1');
            };
        }
    }
});

filemanagerInstance.appendTo('#filemanager');
```

{% elsif page.publishingplatform == "javascript" %}

```ts
var filemanagerInstance = new ej.filemanager.FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    beforeSend: function (args) {
        if (args.ajaxSettings) {
            args.ajaxSettings.beforeSend = function (args) {
                args.httpRequest.setRequestHeader('Authorization', 'User1');
            };
        }
    }
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

```

{% endif %}

### Server-side Implementation (C#)

```typescript

public class FileManagerController : Controller
{
    ...
    [Route("FileOperations")]
    public object FileOperations([FromBody] FileManagerDirectoryContent args)
    {
        var header = HttpContext.Request.Headers["Authorization"];
        this.root = (header == "User1") ? "wwwroot\\FileBrowser" : "wwwroot\\Files";
        this.operation.RootFolder(this.basePath + "\\" + this.root);
        ...
    }

    // uploads the file(s) into a specified path
    [Route("Upload")]
    public IActionResult Upload(string path, long size, IList<IFormFile> uploadFiles, string action)
    {
        var header = HttpContext.Request.Headers["Authorization"];
        ...
    }
    ...
}


```
## Download Operation
For the download operation, use the [`beforeDownload`](https://ej2.syncfusion.com/javascript/documentation/api/file-manager/#beforedownload) event to send custom values to the server.

### Client-side Implementation

{% if page.publishingplatform == "typescript" %}

```ts
import { FileManager, Toolbar, NavigationPane, DetailsView, BeforeDownloadEventArgs } from '@syncfusion/ej2-filemanager';
FileManager.Inject(Toolbar, NavigationPane, DetailsView);

let hostUrl = 'http://localhost:{port}/';

// Initializing File Manager with file system provider.
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        // Replace the hosted port number in the place of "{port}"
        url: hostUrl + "api/FileManager/FileOperations",
        downloadUrl: hostUrl + "api/FileManager/Download",
        uploadUrl: hostUrl + "api/FileManager/Upload",
        getImageUrl: hostUrl + "api/FileManager/GetImage"
    },
    beforeDownload: (args: BeforeDownloadEventArgs) => {
        args.cancel = true;
        if(args.data){
            var obj= {
                action: 'download',
                path: (args.data as any).path,
                names:(args.data as any).names,
                data: (args.data as any).data,
            };
        }
        var xhr = new XMLHttpRequest();
        xhr.open(
            'POST',
            'http://localhost:{port}/api/FileManager/Download',
            true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            if (this.status === 200) {
                var name = '';
                // Getting file name from content-disposition header
                let header = xhr.getResponseHeader('Content-Disposition');
                if (header && header.indexOf('attachment') !== -1) {
                    var regex = /name[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                    var matches = regex.exec(header);
                    if (matches != null && matches[1])
                        name = matches[1].replace(/['"]/g, '');
                }
                //saving the file locally using anchor tag
                var blob = new Blob([this.response], {
                    type: xhr.getResponseHeader('Content-Type'),
                });
                var anchorUrl = window.URL.createObjectURL(blob);
                if (name) {
                    var anchor = document.createElement('a');
                    anchor.href = anchorUrl;
                    anchor.download = name;
                    anchor.click();
                } else {
                    window.location = <any>anchorUrl;
                }
                setTimeout(function () {
                    URL.revokeObjectURL(anchorUrl);
                }, 100);
            }
        };
        var fdata = new FormData();
        fdata.append('downloadInput', JSON.stringify(obj));
        //Custom Header Added to XHR
        xhr.setRequestHeader('Authorization', 'User1');
        xhr.send(fdata);
    }
});

filemanagerInstance.appendTo('#filemanager');
```

{% elsif page.publishingplatform == "javascript" %}

```ts
var filemanagerInstance = new ej.filemanager.FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    beforeDownload: function (args){
        args.cancel = true;
        if(args.data){
            var obj= {
                action: 'download',
                path: args.data.path,
                names:args.data.names,
                data: args.data.data,
            };
        }
        var xhr = new XMLHttpRequest();
        xhr.open(
            'POST',
            'http://localhost:{port}/api/FileManager/Download',
            true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            if (this.status === 200) {
                var name = '';
                // Getting file name from content-disposition header
                let header = xhr.getResponseHeader('Content-Disposition');
                if (header && header.indexOf('attachment') !== -1) {
                    var regex = /name[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                    var matches = regex.exec(header);
                    if (matches != null && matches[1])
                        name = matches[1].replace(/['"]/g, '');
                }
                //saving the file locally using anchor tag
                var blob = new Blob([this.response], {
                    type: xhr.getResponseHeader('Content-Type'),
                });
                var anchorUrl = window.URL.createObjectURL(blob);
                if (name) {
                    var anchor = document.createElement('a');
                    anchor.href = anchorUrl;
                    anchor.download = name;
                    anchor.click();
                } else {
                    window.location = anchorUrl;
                }
                setTimeout(function () {
                    URL.revokeObjectURL(anchorUrl);
                }, 100);
            }
        };
        var fdata = new FormData();
        fdata.append('downloadInput', JSON.stringify(obj));
        //Custom Header Added to XHR
        xhr.setRequestHeader('Authorization', 'User1');
        xhr.send(fdata);
    }
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

```

{% endif %}

### Server-side Implementation (C#)

```typescript
[Route("Download")]
public IActionResult Download(string downloadInput)
{
    var header = Request.Headers["Authorization"].ToString();
    Response.Headers.Add("Access-Control-Expose-Headers", "Content-Disposition");
    ...
}

```

## GetImage Operation

For the GetImage operation, use the [`beforeImageLoad`](https://ej2.syncfusion.com/javascript/documentation/api/file-manager/#beforeimageload) event to pass custom values as query parameters.

### Client-side Implementation
{% if page.publishingplatform == "typescript" %}

```ts
import { FileManager, Toolbar, NavigationPane, DetailsView, BeforeImageLoadEventArgs } from '@syncfusion/ej2-filemanager';
FileManager.Inject(Toolbar, NavigationPane, DetailsView);

let hostUrl = 'http://localhost:{port}/';

// Initializing File Manager with file system provider.
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        // Replace the hosted port number in the place of "{port}"
        url: hostUrl + "api/FileManager/FileOperations",
        downloadUrl: hostUrl + "api/FileManager/Download",
        uploadUrl: hostUrl + "api/FileManager/Upload",
        getImageUrl: hostUrl + "api/FileManager/GetImage"
    },
    beforeImageLoad: (args: BeforeImageLoadEventArgs) => {
        // Add custom parameter in image URL
        args.imageUrl = args.imageUrl + "&Authorization=" + "User1";
    }
});

filemanagerInstance.appendTo('#filemanager');
```

{% elsif page.publishingplatform == "javascript" %}

```ts
var filemanagerInstance = new ej.filemanager.FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    beforeImageLoad: function (args){
        // Add custom parameter in image URL
        args.imageUrl = args.imageUrl + "&Authorization=" + "User1";
    }
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

```

{% endif %}

### Server-side Implementation (C#)

```typescript

public class FileManagerAccessController : Controller
{
    ...
    public class FileManagerDirectoryContent1 : FileManagerDirectoryContent
    {
        public string Authorization { get; set; }
    }
    ...

    // gets the image(s) from the given path
    [Route("GetImage")]
    public IActionResult GetImage(FileManagerDirectoryContent1 args)
    {
        var header = args.Authorization;
        return this.operation.GetImage(args.Path, args.Id, false, null, null);
    }

    ...
}


```

## Implementing custom value transfer in Syncfusion File Manager with server-side integration.

The below file system provider allows the users to access and manage the file system which includes the server side code for custom values passing from client. To get started, clone the [provider](https://github.com/SyncfusionExamples/How-to-pass-custom-values-from-client-to-server-in-filemanager) using the following command.

```typescript

git clone https://github.com/SyncfusionExamples/How-to-pass-custom-values-from-client-to-server-in-filemanager  How-to-pass-custom-values-from-client-to-server-in-filemanager

```

After cloning, just open the project in Visual Studio and restore the NuGet packages. The root directory of the provided file system in the File Manager controller is **Files** for **User1**. Now, just build and run the project. 

Run the sample which includes all the above event for passing custom values to server:

{% if page.publishingplatform == "typescript" %}

[How-to-pass-custom-values-from-client-to-server-in-filemanager](https://stackblitz.com/edit/how-to-pass-custom-value-from-client-to-server-ts?file=index.ts)

{% elsif page.publishingplatform == "javascript" %}

[How-to-pass-custom-values-from-client-to-server-in-filemanager](https://stackblitz.com/edit/how-to-pass-custom-value-from-client-to-server?file=index.html)

{% endif %}

```ts
let hostUrl = 'http://localhost:{port}/';   // Replace the hosted port number in the place of "{port}" wherever used.
```

The project will be hosted and map the local host in the **ajaxSettings** property of the File Manager control.
