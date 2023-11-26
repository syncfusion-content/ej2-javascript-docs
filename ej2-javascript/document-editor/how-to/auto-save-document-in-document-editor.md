---
layout: post
title: Auto save document in document editor in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Auto save document in document editor in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Auto save document in document editor 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Auto save document in document editor in ##Platform_Name## Document editor control

In this article, we are going to see how to autosave the document in AWS S3. You can automatically save the edited content in regular intervals of time. It helps reduce the risk of data loss by saving an open document automatically at customized intervals.

The following example illustrates how to auto save the document in AWS S3.

* In the client-side, using content change event, we can automatically save the edited content in regular intervals of time. Based on `contentChanged` boolean, the document send as Docx format to server-side using [`saveAsBlob`](../../api/document-editor/#saveasblob) method.

```ts
import {
    DocumentEditorContainer,
    Toolbar,
} from '@syncfusion/ej2-documenteditor';
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });
let contentChanged: boolean = false;
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
container.created = function () {
    setInterval(() => {
        if (contentChanged) {
            //You can save the document as below
            container.documentEditor.saveAsBlob('Docx').then((blob: Blob) => {
                console.log('Saved sucessfully');
                let exportedDocument: Blob = blob;
                //Now, save the document where ever you want.
                let formData: FormData = new FormData();
                formData.append('fileName', 'sample.docx');
                formData.append('data', exportedDocument);
                /* tslint:disable */
                var req = new XMLHttpRequest();
                // Replace your running Url here
                req.open(
                    'POST',
                    'http://localhost:62869/api/documenteditor/SaveToS3',
                    true
                );
                req.onreadystatechange = () => {
                    if (req.readyState === 4) {
                        if (req.status === 200 || req.status === 304) {
                            console.log('Saved sucessfully');
                        }
                    }
                };
                req.send(formData);
            });
            contentChanged = false;
        }
    }, 1000);
};
container.appendTo('#container');

container.contentChange = (): void => {
    contentChanged = true;
};
```

* In server-side, configure the access key and secret key in `web.config` file and register profile in `startup.cs`.

In `web.config`, add key like below format:

```c#
 <appSettings>
    <add key="AWSProfileName" value="sync_development" />
    <add key="AWSAccessKey" value="" />
    <add key="AWSSecretKey" value="" />
  </appSettings>
```

In `startup.cs`, register profile in below format:

```c#
Amazon.Util.ProfileManager.RegisterProfile("sync_development","", "");
```

* In server-side, Receives the stream content from client-side and process it to save the document in aws s3. Add Web API in controller file like below to save the document in aws s3.

```c#
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("SaveToS3")]
public string SaveToS3()
{
    IFormFile file = HttpContext.Request.Form.Files[0];
    Stream stream = new MemoryStream();
    file.CopyTo(stream);
    UploadFileStreamToS3(stream, "documenteditor", "", "GettingStarted.docx");
    stream.Close();
    return "Sucess";
}

public bool UploadFileStreamToS3(System.IO.Stream localFilePath, string bucketName, string subDirectoryInBucket, string fileNameInS3)
{
    AWSCredentials credentials = new StoredProfileAWSCredentials("sync_development");
    IAmazonS3 client = new AmazonS3Client(credentials, Amazon.RegionEndpoint.USEast1);
    TransferUtility utility = new TransferUtility(client);
    TransferUtilityUploadRequest request = new TransferUtilityUploadRequest();

    if (subDirectoryInBucket == "" || subDirectoryInBucket == null)
    {
      request.BucketName = bucketName; //no subdirectory just bucket name  
    }
    else
    {   // subdirectory and bucket name  
      request.BucketName = bucketName + @"/" + subDirectoryInBucket;
    }
    request.Key = fileNameInS3; //file name up in S3  
    request.InputStream = localFilePath;
    utility.Upload(request); //commensing the transfer  

    return true; //indicate that the file was sent  
}
```

Get the complete working sample in this [`link`](https://github.com/SyncfusionExamples/Auto-Save-documents-in-Word-Processor).
