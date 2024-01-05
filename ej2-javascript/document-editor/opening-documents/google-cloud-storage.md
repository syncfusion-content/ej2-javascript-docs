---
layout: post
title: Open document from Google Cloud Storage in ##Platform_Name## Document editor control | Syncfusion
description: Learn about how to Open document from Google Cloud Storage in ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Open document from Google Cloud Storage
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open document from Google Cloud Storage

To load a document from Google Cloud Storage in a Document editor, you can follow the steps below

{% if page.publishingplatform == "typescript" %}

**Step 1:** Create a Simple Document Editor Sample in TypeScript

Start by following the steps provided in this [link](../../document-editor/getting-started) to create a simple Document Editor sample in Typescript. This will give you a basic setup of the Document Editor component. 

{% elsif page.publishingplatform == "javascript" %}

**Step 1:** Create a Simple Document Editor Sample in Javascript

Start by following the steps provided in this [link](../../document-editor/getting-started) to create a simple Document Editor sample in Javascript. This will give you a basic setup of the Document Editor component.

{% endif %}

**Step 2:** Modify the `DocumentEditorController.cs` File in the Web Service Project

{% if page.publishingplatform == "typescript" %}

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../../document-editor/web-services-overview) for instructions on how to create a web service project.

{% elsif page.publishingplatform == "javascript" %}

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../../document-editor/web-services-overview) for instructions on how to create a web service project.

{% endif %}

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Cloud.Storage.V1;
using Google.Apis.Auth.OAuth2;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
// Private readonly object _storageClient
private readonly StorageClient _storageClient;

private IConfiguration _configuration;

public readonly string _bucketName;

public DocumentEditorController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;

  // The key file is used to authenticate with Google Cloud Storage.
  string keyFilePath = "path/to/service-account-key.json";

  // Load the service account credentials from the key file.
  var credentials = GoogleCredential.FromFile(keyFilePath);

  // Create a storage client with Application Default Credentials
  _storageClient = StorageClient.Create(credentials);

   _configuration = configuration;

   _bucketName = _configuration.GetValue<string>("BucketName");
}
```

* Create the `LoadFromGoogleCloud()` method to load the document from Google Cloud Storage.

```csharp
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("LoadFromGoogleCloud")]
//Post action for Loading the documents

public async Task<string> LoadFromGoogleCloud([FromBody] Dictionary<string, string> jsonObject)
{
    if (jsonObject == null && !jsonObject.ContainsKey("documentName"))
    {
      return null
    }
    MemoryStream stream = new MemoryStream();

    string bucketName = _bucketName;
    string objectName = jsonObject["document"];
    _storageClient.DownloadObject(bucketName, objectName, stream);
    stream.Position = 0;

    WordDocument document = WordDocument.Load(stream, FormatType.Docx);
    string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
    document.Dispose();
    stream.Close();
    return json;
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
  "BucketName": "Your Bucket name from Google Cloud Storage"
}
```

N> Replace **Your Bucket name from Google Cloud Storage** with the actual name of your Google Cloud Storage bucket

N> Replace **path/to/service-account-key.json** with the actual file path to your service account key JSON file. Make sure to provide the correct path and filename.

**Step 3:**  Modify the index File in the Document Editor sample

In the client-side, the document is returned from the web service is opening using [`open`](../../api/document-editor/#open) method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/open-google-cloud-storage/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/open-google-cloud-storage/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/open-google-cloud-storage/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

N> The **Google.Cloud.Storage.V1** NuGet package must be installed in your application to use the previous code example.
