---
layout: post
title: Save document to Dropbox cloud file storage in ##Platform_Name## Document editor control | Syncfusion
description:  Learn about how to Save document to Dropbox cloud file storage in ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Save document to Dropbox cloud file storage
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Save document to Dropbox cloud file storage

To save a document to Dropbox cloud file storage, you can follow the steps below

**Step 1:** Create a Dropbox API

To create a Dropbox API App, you should follow the official documentation provided by Dropbox [link](https://www.dropbox.com/developers/documentation/dotnet#tutorial). The process involves visiting the Dropbox Developer website and using their App Console to set up your API app. This app will allow you to interact with Dropbox programmatically, enabling secure access to files and data.

{% if page.publishingplatform == "typescript" %}

**Step 2:** Create a Simple Document Editor sample in TypeScript

Follow the instructions provided in this [link](../../document-editor/getting-started) to create a simple Document Editor sample in Typescript. This will give you a basic setup of the Document Editor component.

{% elsif page.publishingplatform == "javascript" %}

**Step 2:** Create a Simple Document Editor sample in JavaScript

Follow the instructions provided in this [link](../../document-editor/getting-started) to create a simple Document Editor sample in Javascript. This will give you a basic setup of the Document Editor component.

{% endif %}

**Step 3:** Modify the `DocumentEditorController.cs` File in the Web Service Project

{% if page.publishingplatform == "typescript" %}

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../../document-editor/web-services-overview) for instructions on how to create a web service project.

{% elsif page.publishingplatform == "javascript" %}

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../../document-editor/web-services-overview) for instructions on how to create a web service project.

{% endif %}

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Dropbox.Api;
using Dropbox.Api.Files;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private IConfiguration _configuration;
public readonly string _accessToken;
public readonly string _folderName;

public DocumentEditorController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
   _configuration = configuration;
  _accessToken = _configuration.GetValue<string>("AccessToken");
  _folderName = _configuration.GetValue<string>("FolderName");
}
```

* Create the `SaveToDropBox()` method to save the downloaded document to Dropbox cloud file storage bucket

```csharp

[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToDropBox")]
//Post action for downloading the document

public void SaveToDropBox(IFormCollection data)
{
  if (data.Files.Count == 0)
    return;

  IFormFile file = data.Files[0];
  string documentName = this.GetValue(data, "documentName");
  string result = Path.GetFileNameWithoutExtension(documentName);
  string fileName = result + "_downloaded.docx";

  using (var dropBox = new DropboxClient(_accessToken))
  {
      Stream stream = new MemoryStream();
      file.CopyTo(stream);

      // Upload the document to Dropbox
      var uploadedFile = await dropBox.Files.UploadAsync(
        _folderName + "/" + fileName,
        WriteMode.Overwrite.Instance,
        body: stream
      );
  }
}

private string GetValue(IFormCollection data, string key)
{
    if (data.ContainsKey(key))
    {
        string[] values = data[key];
        if (values.Length > 0)
        {
            return values[0];
        }
    }
    return "";
}
```

* Open the `appsettings.json` file in your web service project, Add the following lines below the existing `"AllowedHosts"` configuration

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "AccessToken": "Your_Dropbox_Access_Token",
  "FolderName": "Your_Folder_Name"
}
```

N> Replace **Your_Dropbox_Access_Token** with your actual Dropbox access token and **Your_Folder_Name** with your folder name.

**Step 4:**  Modify the index File in the Document Editor sample

In the client-side, to export the document into blob the document using [`saveAsBlob`](../../api/document-editor/#saveAsBlob) and sent to server-side for saving in Dropbox cloud file storage.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/save-dropbox-cloud-file-storage/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/save-dropbox-cloud-file-storage/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/save-dropbox-cloud-file-storage/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

N> The **Dropbox.Api** NuGet package must be installed in your application to use the previous code example.
