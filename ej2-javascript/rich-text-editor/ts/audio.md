---
layout: post
title: Audios in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Audios in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Audios 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Audios in ##Platform_Name## Rich text editor control

The Rich Text Editor allows you to insert audio from online sources and local computers and then insert them into your content. You can insert the audio with the following list of options in the [insertAudioSettings](../api/rich-text-editor/#insertaudiosettings) property.

## Configuring the Audio Tool in the Toolbar

You can add an `Audio` tool in the Rich Text Editor toolbar using the `toolbarSettings` [items](../api/rich-text-editor/toolbarSettings/#items) property.

> Rich Text Editor features are segregated into individual feature-wise modules. To use audio tool, inject audio module using the `RichTextEditor.Inject(Audio)`.

To configure the `Audio` toolbar item, refer to the below code.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/remove-url-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/remove-url-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rich-text-editor/remove-url-cs4" %}


## Audio Save Formats

The audio files can be saved as `Blob` or `Base64` URL by using the [insertAudioSettings.saveFormat](../api/rich-text-editor/audioSettingsModel/#saveformat) property, which is of enum type, and the generated URL will be set to the `src` attribute of the `<source>` tag.

> The default `saveFormat` property is set to `Blob` format.

```HTML

<audio>
    <source src="blob:http://ej2.syncfusion.com/3ab56a6e-ec0d-490f-85a5-f0aeb0ad8879" type="audio/mp3" >
</audio>

<audio>
    <source src="data:audio/mp3;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHA" type="audio/mp3" >
</audio>

```

## Insert Audio from the Web

You can insert audio from either the hosted link or the local machine, by clicking the audio button in the editor's toolbar. On clicking the audio button, a dialog opens, which allows you to insert audio from the web URL.

### Inserting Audio from Web URLs

By default, the audio tool opens the audio dialog, allowing you to insert audio from an online source. Inserting the URL will be added to the `src` attribute of the `<source>` tag.

![JavaScript Rich Text Editor Audio insert](../images/javascript-richtexteditor-audio-web.png)

## Uploading Audio from Local Machine

You can use the `browse` option on the audio dialog, to select the audio from the local machine and insert it into the Rich Text Editor content.

If the path field is not specified in the [insertAudioSettings](../api/rich-text-editor/#insertaudiosettings), the audio will be converted into the `Blob` URL or `Base64` and inserted inside the Rich Text Editor.

### Server-Side Action

The selected audio can be uploaded to the required destination using the controller action below. Map this method name in [insertAudioSettings.saveUrl](../api/rich-text-editor/audioSettingsModel/#saveurl) and provide the required destination path through [insertAudioSettings.path](../api/rich-text-editor/audioSettingsModel/#path) properties.

> If you want to insert lower-sized audio files in the editor and don't want a specific physical location for saving the audio, you can opt to save the format as `Base64`.

In the following code blocks, the audio module has been injected and can insert the audio files saved in the specified path.

```ts

import { RichTextEditor, Toolbar, Audio, Link, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Audio, Link, HtmlEditor, QuickToolbar );

let defaultRTE: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['Audio']
    },
    insertAudioSettings: {
        saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/SaveFiles",
        path: "[SERVICE_HOSTED_PATH]/Files/"
    }
});
defaultRTE.appendTo('#defaultRTE');

```

```c#

using System;
using System.IO;
using FileUpload.Models;
using System.Diagnostics;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using Microsoft.AspNetCore.Hosting;

namespace FileUpload.Controllers
{
    public class HomeController : Controller
    {
        private IHostingEnvironment hostingEnv;

        public HomeController(IHostingEnvironment env)
        {
            hostingEnv = env;
        }

        public IActionResult Index()
        {
            return View();
        }

        [AcceptVerbs("Post")]
        public void SaveFiles(IList<IFormFile> UploadFiles)
        {
            try
            {
                foreach (IFormFile file in UploadFiles)
                {
                    if (UploadFiles != null)
                    {
                        string filename = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                        filename = hostingEnv.WebRootPath + "\\Files" + $@"\{filename}";

                        // Create a new directory, if it does not exists
                        if (!Directory.Exists(hostingEnv.WebRootPath + "\\Files"))
                        {
                            Directory.CreateDirectory(hostingEnv.WebRootPath + "\\Files");
                        }

                        if (!System.IO.File.Exists(filename))
                        {
                            using (FileStream fs = System.IO.File.Create(filename))
                            {
                                file.CopyTo(fs);
                                fs.Flush();
                            }
                            Response.StatusCode = 200;
                        }
                    }
                }
            }
            catch (Exception)
            {
                Response.StatusCode = 204;
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

```

## Saving Audio to the Server 

[saveFormat](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/audioSettingsModel/#saveformat) Sets the default save format of the audio element when inserted. Possible options are: `Blob` and `Base64`.

[saveUrl](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/audioSettingsModel/#saveurl) provides URL to map the action result method to save the audio.

[removeUrl](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/audioSettingsModel/#removeurl) provides URL to map the action result method to remove the audio.

### Renaming Audio Before Inserting

You can use the [insertAudioSettings](../api/rich-text-editor/#insertaudiosettings) property, to specify the server handler to upload the selected audio. Then by binding the [fileUploadSuccess](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#fileuploadsuccess) event, you can receive the modified file name from the server and update it in the Rich Text Editor's insert audio dialog.

```html
<div id='defaultRTE'></div>
```

```ts

import { RichTextEditor, Toolbar, Link, Audio, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Audio, Count, HtmlEditor, QuickToolbar);

let defaultRTE: RichTextEditor = new RichTextEditor({
        toolbarSettings: {
            items: ['Audio']
        },
        value: ` <p>The Rich Text Editor is WYSIWYG ("what you see is what you get") editor useful to create and edit content, and return the valid <a href="https://ej2.syncfusion.com/home/" target="_blank">HTML markup</a> or <a href="https://ej2.syncfusion.com/home/" target="_blank">markdown</a> of the content</p>`,
        insertAudioSettings: {
            saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/Rename",
            path: "[SERVICE_HOSTED_PATH]/Files/"
        },
        fileUploadSuccess: onFileUploadSuccess
    });
defaultRTE.appendTo('#defaultRTE');

function onFileUploadSuccess (args: any) {
    alert("Get the new file name here");
    if (args.e.currentTarget.getResponseHeader('name') != null) {
        args.file.name = args.e.currentTarget.getResponseHeader('name');
        let filename: any = document.querySelectorAll(".e-file-name")[0];
        filename.innerHTML = args.file.name.replace(document.querySelectorAll(".e-file-type")[0].innerHTML, '');
        filename.title = args.file.name;
    }
}

```

To configure server-side handler, refer to the below code.

```c#
int x = 0;
string file;
[AcceptVerbs("Post")]
public void Rename()
{
    try
    {
        var httpPostedFile = System.Web.HttpContext.Current.Request.Files["UploadFiles"];
        fileName = httpPostedFile.FileName;
        if (httpPostedFile != null)
        {
            var fileSave = System.Web.HttpContext.Current.Server.MapPath("~/Files");
            if (!Directory.Exists(fileSave))
            {
                Directory.CreateDirectory(fileSave);
            }
            var fileName = Path.GetFileName(httpPostedFile.FileName);
            var fileSavePath = Path.Combine(fileSave, fileName);
            while (System.IO.File.Exists(fileSavePath))
            {
                fileName = "rteFiles" + x + "-" + fileName;
                fileSavePath = Path.Combine(fileSave, fileName);
                x++;
            }
            if (!System.IO.File.Exists(fileSavePath))
            {
                httpPostedFile.SaveAs(fileSavePath);
                HttpResponse Response = System.Web.HttpContext.Current.Response;
                Response.Clear();
                Response.Headers.Add("name", fileName);
                Response.ContentType = "application/json; charset=utf-8";
                Response.StatusDescription = "File uploaded succesfully";
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

### Restricting Audio by Size

You can restrict the audio uploaded from the local machine when the uploaded audio file size is greater than the allowed size by using the [fileUploading](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#fileuploading) event.

> The file size in the argument will be returned in `bytes`.

In the following illustration, the audio size has been validated before uploading, and it is determined whether the audio has been uploaded or not.

```ts

import { RichTextEditor, Toolbar, Link, Audio, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
import { UploadingEventArgs } from '@syncfusion/ej2-inputs';
RichTextEditor.Inject(Toolbar, Link, Audio, Count, HtmlEditor, QuickToolbar);

let defaultRTE: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['Audio']
    },
    insertAudioSettings: {
        saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
        path: "../Files/"
    },
    fileUploading: onFileUpload
});
defaultRTE.appendTo('#defaultRTE');

function onFileUpload (args: UploadingEventArgs): void {
    let sizeInBytes: number = args.fileData.size;
    let fileSize: number = 500000;
    if (fileSize < sizeInBytes) {
        args.Cancel = true;
    }
}

```

### Uploading Audio with Authentication

You can add additional data with the audio uploaded from the Rich Text Editor on the client side, which can even be received on the server side by using the [fileUploading](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#fileuploading) event and its `customFormData` argument, you can pass parameters to the controller action. On the server side, you can fetch the custom headers by accessing the form collection from the current request, which retrieves the values sent using the POST method.

> By default, it doesn't support the `UseDefaultCredentials` property; we need to manually append the default credentials with the upload request.


```ts

import { RichTextEditor, Toolbar, Link, Audio, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Audio, Count, HtmlEditor, QuickToolbar);

let defaultRTE: RichTextEditor = new RichTextEditor({
        toolbarSettings: {
            items: ['Audio']
        },
        insertAudioSettings: {
            saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/SaveFiles",
            path: "[SERVICE_HOSTED_PATH]/Files/"
        },
        fileUploading: onFileUpload
    });
defaultRTE.appendTo('#defaultRTE');

function onFileUpload (args: UploadingEventArgs): void {
    var accessToken = "Authorization_token";
    // adding custom Form Data
    args.customFormData = [{ 'Authorization': accessToken }];
}

```

```c#

public void SaveFiles(IList<IFormFile> UploadFiles)
{
    string currentPath = Request.Form["Authorization"].ToString();
}

```

## Audio Replacement Functionality

Once an audio file has been inserted, you can change it using the Rich Text Editor [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#quicktoolbarsettings) `audioReplace` option. You can replace the audio file using the web URL or the browse option in the audio dialog.

![JavaScript Rich Text Editor Audio replace](../images/javascript-richtexteditor-audio-web.png)

## Deleting Audios

To remove audio from the Rich Text Editor content, select the audio and click the `audioRemove` button from the quick toolbar. It will delete the audio from the Rich Text Editor content as well as from the service location if the [insertAudioSettings.removeUrl](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/audioSettingsModel/#removeurl) is given.

Once you select the audio from the local machine, the URL for the audio will be generated. You can remove the audio from the service location by clicking the cross icon.

![JavaScript Rich Text Editor Audio delete](../images/javascript-richtexteditor-audio-del.png)

## Configuring Audio Display Position

Sets the default display property for audio when it is inserted in the Rich Text Editor using the [insertAudioSettings.layoutOption](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/audioSettingsModel/#layoutoption) property. It has two possible options: `Inline` and `Break`. When updating the display positions, it updates the audio elements’ layout position.

> The default `layoutOption` property is set to `Inline`.


```ts

let defaultRTE: RichTextEditor = new RichTextEditor({
    insertAudioSettings: {
        layoutOption: 'Inline'
    }
});
defaultRTE.appendTo('#defaultRTE');

```

## Customizing the Audio Quick Toolbar

The Rich Text Editor enables customization of the audio quick toolbar, allowing you to tailor its functionality with essential tools such as AudioReplace, Remove, and AudioLayoutOption.

By configuring these options in the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/#quicktoolbarsettings) property, you enhance the editor's capabilities, facilitating seamless management and editing of audio directly within your content. This customization ensures a user-friendly experience for manipulating audio elements efficiently.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/customize-audio-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/customize-audio-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/customize-audio-cs1" %}

## See Also

* [Quick Toolbars in the Toolbar](https://ej2.syncfusion.com/documentation/rich-text-editor/toolbar#quick-inline-toolbar)
* [How to Use the Video Editing Option in Toolbar Items](https://ej2.syncfusion.com/documentation/rich-text-editor/video)
* [How to Use the Image Editing Option in Toolbar Items](../insert-images)