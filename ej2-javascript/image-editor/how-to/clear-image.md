---
layout: post
title: Clear an Image in ##Platform_Name## Image editor control | Syncfusion
description: Learn here all about Clear an Image in Syncfusion ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Clear an Image 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Clear an Image 

The [`clearImage`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/#clearimage) method in the image editor control is indeed useful for scenarios where you need to ensure that the image editor is emptied before reopening it, especially if the editor is used within a dialog. By using `clearImage` before closing the dialog, you can ensure that the editor does not retain the previously loaded image when the dialog is reopened. This allows users to start fresh with a new image selection. 

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