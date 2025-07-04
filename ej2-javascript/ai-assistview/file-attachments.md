---
layout: post
title: Attachments in ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about attachments with ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: AI AssistView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Attachments in ##Platform_Name## AI AssistView control

The `Attachment` support in AI AssistView specifies user to include file attachments along with their prompts in the AI AssistView. This enhances the interaction by allowing users to provide additional context through files. You can enable this feature using the `enableAttachments` property, and customize its behavior using the `attachmentSettings` configuration.

## Enable attachment

You can enable the attachment by using the `enableAttachments` property. By default, the value is `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/file-attachments/enable-attachment/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/file-attachments/enable-attachment/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/enable-attachment" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/file-attachments/enable-attachment/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/file-attachments/enable-attachment/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/enable-attachment" %}
{% endif %}

## Configuring attachments

You can use the `attachmentSettings` property to configure the attachments in the AI AssistView.

### Setting saveUrl and removeUrl

You can use the `saveUrl` and `removeUrl` property to add the save and remove the URL for the file uploaded in the AI AssistView.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/file-attachments/save-remove-url/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/file-attachments/save-remove-url/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/save-remove-url" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/file-attachments/save-remove-url/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/file-attachments/save-remove-url/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/save-remove-url" %}
{% endif %}

### Setting file type

You can use the `allowedFileType` property to upload the specific file types in the attachment.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/file-attachments/file-type/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/file-attachments/file-type/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/file-type" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/file-attachments/file-type/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/file-attachments/file-type/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/file-type" %}
{% endif %}

### Setting file size

You can use the `maxFileSize` property to allow the maximum file size of the upload file in the AI AssistView. By default, the value is `2000000` bytes.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/file-attachments/file-size/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/file-attachments/file-size/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/file-size" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/file-attachments/file-size/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/file-attachments/file-size/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/file-size" %}
{% endif %}