---
layout: post
title: Open PDF files from Google Drive in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn about how to Open PDF files from Google Drive in ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Open PDF files from Google Drive
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF file from Google Drive

To load a PDF file from Google Drive in a PDF Viewer, you can follow the steps below

**Step 1** Set up Google Drive API

You must set up a project in the Google Developers Console and enable the Google Drive API. Obtain the necessary credentials to access the API. For more information, view the official [link](https://developers.google.com/drive/api/guides/enable-sdk).

**Step 2:** Create a Simple PDF Viewer Sample in JavaScript

Start by following the steps provided in this [link](https://ej2.syncfusion.com/javascript/documentation/pdfviewer/getting-started) to create a simple PDF viewer sample in JavaScript. This will give you a basic setup of the PDF viewer component.

**Step 3:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Apis.Drive.v3;
using Google.Apis.Util.Store;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private IConfiguration _configuration;
public readonly string folderId;
public readonly string applicationName;
public readonly string credentialPath;
private static readonly string[] Scopes = { DriveService.Scope.DriveFile, DriveService.Scope.DriveReadonly};

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  folderId = _configuration.GetValue<string>("FolderId");
  credentialPath = _configuration.GetValue<string>("CredentialPath");
  applicationName = _configuration.GetValue<string>("ApplicationName");
}
```

5. Modify the [Load()](https://helpej2.syncfusion.com/documentation/api/pdfviewer/#load) method to load the PDF file from Google Drive.

```csharp
[HttpPost("Load")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Load")]
//Post action for Loading the PDF documents 
public async Task<IActionResult> Load([FromBody] Dictionary<string, string> jsonObject)
{
  //Initialize the PDF viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  MemoryStream stream = new MemoryStream();
  object jsonResult = new object();

  if (jsonObject != null && jsonObject.ContainsKey("document"))
  {
    if (bool.Parse(jsonObject["isFileName"]))
    {
      string objectName = jsonObject["document"];

      UserCredential credential;
      using (var stream1 = new FileStream(credentialPath, FileMode.Open, FileAccess.Read))
      {
        string credPath = "token.json";
        credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
          GoogleClientSecrets.Load(stream1).Secrets,
          Scopes,
          "user",
          CancellationToken.None,
          new FileDataStore(credPath, true));
      }

      // Create Google Drive API service.
      var service = new DriveService(new BaseClientService.Initializer()
      {
        HttpClientInitializer = credential,
        ApplicationName = applicationName,
      });

      // List PDF files in Google Drive
      listRequest.Q = "mimeType='application/pdf' and '" + folderId + "' in parents and trashed=false";
      listRequest.Fields = "files(id, name)";
      var files = await listRequest.ExecuteAsync();
      string fileIdToDownload = string.Empty;
      foreach (var file in files.Files)
      { 
        string fileId = file.Id;
        string fileName = file.Name;
        if (fileName == objectName)
        {
          // Save the matching fileId
          fileIdToDownload = fileId;
          break;
        }
      }
      string fileIds = fileIdToDownload;
      var request = service.Files.Get(fileIds);
      await request.DownloadAsync(stream);
      stream.Position = 0;
    }
    else
    {
      byte[] bytes = Convert.FromBase64String(jsonObject["document"]);
      stream = new MemoryStream(bytes);
    }
  }
  jsonResult = pdfviewer.Load(stream, jsonObject);
  return Content(JsonConvert.SerializeObject(jsonResult));
}
```

6. Open the `appsettings.json` file in your web service project, Add the following lines below the existing `"AllowedHosts"` configuration

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "FolderId": "Your Google Drive Folder ID",
  "CredentialPath": "Your Path to the OAuth 2.0 Client IDs json file",
  "ApplicationName": "Your Application name"
}
```

N> Replace **Your Google Drive Folder ID**, **Your Application name**, and **Your Path to the OAuth 2.0 Client IDs json file** with your actual Google drive folder ID , Your name for your application and the path for the JSON file.

N> The **FolderId** part is the unique identifier for the folder. For example, if your folder URL is: `https://drive.google.com/drive/folders/abc123xyz456`, then the folder ID is `abc123xyz456`.

**Step 4:**  Set the PDF Viewer Properties in JavaScript PDF viewer component

Modify the [serviceUrl](https://helpej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl) property of the PDF viewer component with the accurate URL of your web service project, replacing `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the `documentPath` property of the PDF viewer component to the desired name of the PDF file you wish to load from Google Drive. Ensure that you correctly pass the document name from the files available in your drive folder to the documentPath property.

```javascript

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,
         BookmarkView, TextSelection, Annotation, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,
                  BookmarkView, TextSelection, Annotation, FormFields, FormDesigner);

let viewer: PdfViewer = new PdfViewer();
// Replace the "localhost:44309" with the actual URL of your server
viewer.serviceUrl = 'https://localhost:44396/pdfviewer';
viewer.appendTo('#pdfViewer');
viewer.load('PDF_Succinctly.pdf', null);

```

N> The **Google.Apis.Drive.v3** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-google-drive)