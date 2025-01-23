---
layout: post
title: Drag and drop in ##Platform_Name## File Manager control | Syncfusion
description: Learn here all about Drag and drop in Syncfusion ##Platform_Name## File Manager control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Drag and drop
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in ##Platform_Name## File Manager control

The File Manager allows files and folders to be moved within the file system by drag and dropping them, this support can be enabled or disabled using the [allowDragAndDrop](../api/file-manager/#allowdraganddrop) property of the File Manager.

The events triggered in drag and drop support are:

* [fileDragStart](../api/file-manager/#filedragstart) - Triggered when the file/folder dragging is started.
* [fileDragging](../api/file-manager/#filedragging) - Triggered while dragging the file/folder.
* [fileDragStop](../api/file-manager/#filedragstop) - Triggered when the file/folder is about to be dropped at the target.
* [fileDropped](../api/file-manager/#filedropped) - Triggered when the file/folder is dropped.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/drag-and-drop-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/drag-and-drop-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/drag-and-drop-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/drag-and-drop-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager/drag-and-drop-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/drag-and-drop-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/drag-and-drop-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/drag-and-drop-cs1" %}
{% endif %}