---
layout: post
title: Attachments in ##Platform_Name## Chat UI control | Syncfusion
description: Checkout and learn about attachments with ##Platform_Name## Chat UI control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Chat UI 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# File Attachments in ##Platform_Name## Chat UI control

The Chat UI control supports message attachments, enabling users to upload and send files (images, documents, and more) alongside messages for richer, more contextual conversations. Enable this functionality using the [enableAttachments](../api/chat-ui#enableAttachments) property and customize the behavior through the [attachmentSettings](../api/chat-ui#attachmentSettings) configuration.

## Enable file attachments

Enable file attachment support by setting the [enableAttachments](../api/chat-ui#enableAttachments) property to `true`. By default, it is `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/file-attachments/enableAttachments/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/enableAttachments/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/enableAttachments" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/file-attachments/enableAttachments/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/enableAttachments/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/enableAttachments" %}
{% endif %}

## Configure attachment settings

Use the [attachmentSettings](../api/chat-ui#attachmentSettings) property to customize file attachment behavior, including upload endpoints, file type restrictions, and size limits.

### Setting saveUrl and removeUrl

Set the [saveUrl](../api/chat-ui/fileattachmentsettingsmodel#saveurl) and [removeUrl](../api/chat-ui/fileattachmentsettingsmodel#removeurl) properties to specify server endpoints for handling file uploads and removals. The `saveUrl` processes file uploads, while the `removeUrl` handles file deletion requests.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/file-attachments/save-remove-url/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/save-remove-url/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/save-remove-url" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/file-attachments/save-remove-url/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/save-remove-url/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/save-remove-url" %}
{% endif %}

### Setting file type

Use the [allowedFileTypes](../api/chat-ui/fileattachmentsettingsmodel#allowedfiletypes) property to specify which file types users can upload. This property accepts file extensions (e.g., '.pdf', '.docx') or MIME types to control the types of files that can be attached.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/file-attachments/allowedFileTypes/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/allowedFileTypes/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/allowedFileTypes" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/file-attachments/allowedFileTypes/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/allowedFileTypes/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/allowedFileTypes" %}
{% endif %}

### Setting file size

Configure the [maxFileSize](../api/chat-ui/fileattachmentsettingsmodel#maxfilesize) property to define the maximum file size allowed for uploads. Specify the size in bytes. The default value is `30000000` bytes (approximately 30 MB). Files exceeding this limit will not be uploaded.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/file-attachments/maxFileSize/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/maxFileSize/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/maxFileSize" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/file-attachments/maxFileSize/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/maxFileSize/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/maxFileSize" %}
{% endif %}

### Setting save format

Control the format used to send files to the server using the [saveFormat](../api/chat-ui/fileattachmentsettingsmodel#saveformat) property when path is not set. It does not change how files are uploaded. The default value is `Blob`.

 - `Blob`: Used for fast, memory‑efficient local previews.
 - `Base64`: Reads the file as a Base64 data URL, useful when you need an inline data URL.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/file-attachments/saveFormat/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/saveFormat/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/saveFormat" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/file-attachments/saveFormat/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/saveFormat/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/saveFormat" %}
{% endif %}

### Setting server path

The [path](../api/chat-ui/fileattachmentsettingsmodel#path) property specifies the public base URL where uploaded files are (or will be) hosted. When this property is set, it takes precedence over the value defined in `saveFormat`. This means that even if saveFormat includes a different location or structure for storing files, the path property will be used it for generating the file URL.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/file-attachments/path/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/path/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/path" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/file-attachments/path/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/path/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/path" %}
{% endif %}

### Enabling drag-and-drop

Toggle drag-and-drop support for attachments via [enableDragAndDrop](../api/chat-ui/fileattachmentsettingsmodel#enabledraganddrop) property. The default value is `true`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/file-attachments/drag-and-drop/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/drag-and-drop/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/drag-and-drop" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/file-attachments/drag-and-drop/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/drag-and-drop/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/drag-and-drop" %}
{% endif %}

### Setting maximum count

Restrict how many files can be attached at once using [maximumCount](../api/chat-ui/fileattachmentsettingsmodel#maximumcount). The default value is `10`. If users select more than the allowed count, the maximum count reached error will be displayed.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/file-attachments/maximumCount/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/maximumCount/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/maximumCount" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/file-attachments/maximumCount/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/maximumCount/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/maximumCount" %}
{% endif %}

## Templates

### Customizing the file preview

Provide a custom UI for previewing selected files using [previewTemplate](../api/chat-ui/fileattachmentsettingsmodel#previewtemplate). Use this to render thumbnails, filenames, progress, remove buttons, or any additional metadata prior to sending.

### Customizing the attachments

Control how attachments appear inside message bubbles with [attachmentTemplate](../api/chat-ui/fileattachmentsettingsmodel#attachmenttemplate). Use this to tailor the display of images, documents, or custom file types once the message is posted.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/file-attachments/template/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/template/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/template" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/file-attachments/template/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/file-attachments/template/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/template" %}
{% endif %}