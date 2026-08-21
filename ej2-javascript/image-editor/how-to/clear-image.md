---
layout: post
title: How to clear an image in ##Platform_Name## Image Editor | Syncfusion
description: Use the clearImage method in the ##Platform_Name## Image Editor to reset the canvas when reopening the editor in a dialog, ensuring no leftover image data.
platform: ej2-javascript
control: Clear an Image 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to clear an image in ##Platform_Name## Image Editor

The [`clearImage`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#clearimage) method in the image editor control is indeed useful for scenarios where you need to ensure that the image editor is emptied before reopening it, especially if the editor is used within a dialog. By using `clearImage` before closing the dialog, you can ensure that the editor does not retain the previously loaded image when the dialog is reopened. This allows users to start fresh with a new image selection. 

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/how-to-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/how-to-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/how-to-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/how-to-cs1" %}
{% endif %}