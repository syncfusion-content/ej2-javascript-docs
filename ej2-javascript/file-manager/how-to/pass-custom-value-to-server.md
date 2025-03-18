---
layout: post
title: Custom server values in ##Platform_Name## File Manager control | Syncfusion
description: Learn about how to Pass custom value to server in the Syncfusion ##Platform_Name## File Manager control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: File Manager
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Pass custom value to server in ##Platform_Name## File Manager control

The Syncfusion File Manager component allows seamless backend server interaction by passing custom values. This enhances the functionality and security of file operations, particularly helpful for tasks like authentication, logging, or user role-based processing. In multi-user systems, it ensures file access permissions and actions are user-specific and secure. You can manage user-specific operations such as **Read**, **Delete**, **Rename**, **Create**, **Move**, **Copy**, **Details**, **Search**, **Upload**, **Download**, and **GetImage** using custom headers or query parameters. This guide demonstrates implementing these features using the [`beforeSend`](../../api/file-manager/#beforesend), [`beforeDownload`](../../api/file-manager/#beforedownload) and [`beforeImageLoad`](../../api/file-manager/#beforeimageload) events. Let's explore how to achieve this in [`Physical file system provider`](https://github.com/SyncfusionExamples/ej2-aspcore-file-provider).

## 1. Setting up the File Manager and provider

To create a basic File Manager component, start by following the easy steps in the [`Getting Started`](../../file-manager/getting-started) guide. This will allow you to manage files and folders on your system, whether they are stored physically or in the cloud.

For connecting the File Manager to a physical file system, check out the [`Physical file provider`](../../file-manager/file-system-provider#physical-file-system-provider) section. This part of the documentation will help you configure it correctly.

## 2. Handling File Operations 

After setting the File Manager component with the physical file system provider, you can handle file operations by passing custom values to the server. To pass custom values during the **Read**, **Delete**, **Rename**, **Create**, **Move**, **Copy**, **Details**, **Search** and **Upload** operations, utilize the [`beforeSend`](../../api/file-manager/#beforesend) event of the File Manager component. This event allows you to modify the request before it is sent to the server. You can add custom headers to the request to pass additional information to the server.

The `onBeforeSend` function is designed to enhance security by adding an authorization header to every outgoing AJAX request. Before a request is sent, this function is called, and it attaches the **Authorization** header with the value **User1** to the request. This ensures that the server can verify the request's authenticity and handle it accordingly.

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

In server-side, `FileOperations` and `Upload` methods access the **Authorization** header from the incoming HTTP request and perform the necessary operations.

```typescript

public class FileManagerController : Controller
{
    ...
    [Route("FileOperations")]
    public object FileOperations([FromBody] FileManagerDirectoryContent args)
    {
        var header = HttpContext.Request.Headers["Authorization"];
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

## 3. Handling Download Operation

For the **download** operation, use the [`beforeDownload`](../../api/file-manager/#beforedownload) event, setting [`useFormPost`](../../api/file-manager/beforeDownloadEventArgs/#useformpost) as false to use a fetch request to send the custom header in beforesend event. Here an **Authorization** header is appended to fetch request headers with the value **User1**.

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
        args.useFormPost = false;
        if (args.ajaxSettings) {
            (args.ajaxSettings as any).beforeSend = function (args: any) {
              args.fetchRequest.headers.append('Authorization', 'User1');
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
    beforeDownload: function (args){
        args.useFormPost = false;
        if (args.ajaxSettings) {
            args.ajaxSettings.beforeSend = function {
              args.fetchRequest.headers.append('Authorization', 'User1');
            };
        } 
    }
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

```

{% endif %}

In server-side, `Download` method access the **Authorization** header from the incoming HTTP request and perform the necessary operations.

```typescript
[Route("Download")]
public object Download([FromBody] FileManagerDirectoryContent args)
{
    var header = HttpContext.Request.Headers["Authorization"];
    ...
}

```

## 4. For GetImage Operation

For the **GetImage** operation, use the [`beforeImageLoad`](../../api/file-manager/#beforeimageload) event to pass custom value. Since the **GetImage** operation doesn't support custom headers in HTTP requests, pass the custom values along with **imageUrl** using query parameters instead.

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

In server-side, you can able to get the custom query parameter value using **Authorization** in `GetImage` method. To get the  custom query parameter value, extend the `FileManagerDirectoryContent` class and add the custom property **Authorization**.

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

> **Note:** View the complete [Github sample](https://github.com/SyncfusionExamples/How-to-pass-custom-values-from-client-to-server-in-filemanager) which includes all the above event along with service code for passing custom values to server.

