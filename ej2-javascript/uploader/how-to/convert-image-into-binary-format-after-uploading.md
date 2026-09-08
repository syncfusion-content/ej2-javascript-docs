---
layout: post
title: How to encode image binary in ##Platform_Name## File Upload | Syncfusion
description: Learn how to convert uploaded images into binary format in the Syncfusion ##Platform_Name## File Upload by reading the posted input stream as bytes on the server.
platform: ej2-javascript
control: Convert image into binary format after uploading 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to encode image binary in ##Platform_Name## File Upload

By default, the file upload component saves uploaded image files in physical directories. You can also convert the images into binary format on the server side before saving them. To retrieve the binary format of the image files, convert the posted file's input stream into a binary reader and read it as bytes using the `ReadBytes` method.

## Server side (ASP.NET)

Refer to the following server-side code snippet. Configure the Uploader's `asyncSettings.saveUrl` to point to this `Save` action. If the input stream was accessed before reading, reset its position to `0` before using the `BinaryReader`.

```c#

[AcceptVerbs("Post")]
public void Save()
{
    try
    {
        if (System.Web.HttpContext.Current.Request.Files.AllKeys.Length > 0)
        {
            var httpPostedFile = System.Web.HttpContext.Current.Request.Files["UploadFiles"];

            if (httpPostedFile != null)
            {
                byte[] fileBytes;
                using (BinaryReader br = new BinaryReader(httpPostedFile.InputStream))
                {
                    fileBytes = br.ReadBytes((int)httpPostedFile.InputStream.Length);
                    // bytes will be stored in variable fileBytes
                }
                HttpResponse Response = System.Web.HttpContext.Current.Response;
                Response.Clear();
                Response.ContentType = "application/json; charset=utf-8";
                Response.StatusCode = 200;
                Response.Status = "200 Success";
                Response.End();
            }
        }
    }
    catch (Exception e)
    {
        HttpResponse Response = System.Web.HttpContext.Current.Response;
        Response.Clear();
        Response.ContentType = "application/json; charset=utf-8";
        Response.StatusCode = 204;
        Response.Status = "204 No Content";
        Response.StatusDescription = e.Message;
        Response.End();
    }
}

```

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.