---
layout: post
title: Save document to Azure Blob Storage in ##Platform_Name## Document editor control | Syncfusion
description:  Learn about how to Save document to Azure Blob Storage in ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Save document to Azure Blob Storage
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Save document to Azure Blob Storage

To save a document to Azure Blob Storage, you can follow the steps below

{% if page.publishingplatform == "typescript" %}

**Step 1:** Create a Simple Document Editor sample in TypeScript

Follow the instructions provided in this [link](../../document-editor/getting-started) to create a simple Document Editor sample in Typescript. This will give you a basic setup of the Document Editor component.

{% elsif page.publishingplatform == "javascript" %}

**Step 1:** Create a Simple Document Editor sample in JavaScript

Follow the instructions provided in this [link](../../document-editor/getting-started) to create a simple Document Editor sample in Javascript. This will give you a basic setup of the Document Editor component.

{% endif %}

**Step 2:** Modify the `DocumentEditorController.cs` File in the Web Service Project

{% if page.publishingplatform == "typescript" %}

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../../document-editor/web-services-overview) for instructions on how to create a web service project.

{% elsif page.publishingplatform == "javascript" %}

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../../document-editor/web-services-overview) for instructions on how to create a web service project.

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private readonly string _storageConnectionString;
private readonly string _storageContainerName;
private readonly ILogger<DocumentEditorController> _logger;

public DocumentEditorController(IConfiguration configuration, ILogger<DocumentEditorController> logger)
{
  _storageConnectionString = configuration.GetValue<string>("connectionString");
  _storageContainerName = configuration.GetValue<string>("containerName");
  _logger = logger;
}
```

* Create then 'SaveToAzure' method to save the downloaded documents to Azure Blob Storage container

```csharp

[HttpPost("SaveToAzure")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/SaveToAzure")]
//Post action for downloading the documents

public void Download(IFormCollection data)
{
  if (data.Files.Count == 0)
    return;

  BlobServiceClient blobServiceClient = new BlobServiceClient(_storageConnectionString);
  BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_storageContainerName);

  IFormFile file = data.Files[0];
  string documentName = this.GetValue(data, "documentName");
  string result = Path.GetFileNameWithoutExtension(documentName);

  // Get a reference to the blob
  BlobClient blobClient = containerClient.GetBlobClient(result + "_downloaded.docx");

  Stream stream = new MemoryStream();
  file.CopyTo(stream);

  // Upload the document to Azure Blob Storage
  blobClient.Upload(stream, true);
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
  "connectionString": "*Your Connection string from Azure*",
  "containerName": "*Your container name in Azure*"
}
```

N> Replace **Your Connection string from Azure** with the actual connection string for your Azure Blob Storage account and **Your container name in Azure** with the actual container name 

**Step 3:**  Modify the index File in the Document Editor sample

In the client-side, to export the document into blob the document using [`saveAsBlob`](../../api/document-editor/#saveAsBlob) and sent to server-side for saving in Azure Blob Storage container.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/save-azure-blob/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/save-azure-blob/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/save-azure-blob/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

N> The **Azure.Storage.Blobs** NuGet package must be installed in your application to use the previous code example.
