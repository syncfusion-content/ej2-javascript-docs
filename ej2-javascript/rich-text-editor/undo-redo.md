---
layout: post
title: Undo redo in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Undo redo in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Undo redo
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in the ##Platform_Name## Rich Text Editor control

The Undo and Redo features in the Rich Text Editor allowing you to reverse or restore recent changes, providing a safety net for text edits and enhancing the overall editing experience.

There are two ways to perform Undo and Redo operations:

1. Click the Undo or Redo buttons on the toolbar.
2. Use keyboard shortcuts:
   - For Undo: `Ctrl + Z` (Windows) or `Cmd + Z` (Mac)
   - For Redo: `Ctrl + Y` (Windows) or `Cmd + Shift + Z` (Mac)

## Customizing Undo/Redo Timer

By default, the time interval for storing Undo/Redo actions is 300 milliseconds. You can adjust this interval using the [undoRedoTimer](../api/rich-text-editor/#undoredotimer) property.

## Configuring Undo/Redo Steps

The editor allows up to 30 Undo/Redo actions by default. You can modify the number of undo/redo steps using the [undoRedoSteps](../api/rich-text-editor/#undoredosteps) property.

Here's an example of how to customize both the Undo/Redo timer and steps:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/getting-started-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs18" %}
{% endif %}