---
layout: post
title: Drag and drop in ##Platform_Name## Block Editor control | Syncfusion
description: Checkout and learn about Drag and drop with ##Platform_Name## Block Editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Block Editor
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in ##Platform_Name## Block Editor control

The drag and drop feature in the Block Editor allows users to intuitively rearrange content blocks by dragging them to different positions within the editor.

## Enable Drag and Drop

You can control the drag and drop functionality within the Block Editor using the [enableDragAndDrop](../api/blockeditor#enabledraganddrop) property. This feature is enabled by default (`true`).

When drag and drop is enabled, users can rearrange blocks in the following ways:

The Block Editor supports both single and multiple block dragging. Users can drag individual blocks or select multiple blocks and drag them together to a new position.

- **Single Block Dragging**: To drag a single block, hover over it to reveal the drag handle. Click and hold the handle, then drag the block to a new position.

- **Multiple Block Dragging**: To move multiple blocks, first select the desired blocks. Once selected, click and drag the entire group to a new location.

During the drag operation, a visual indicator will show precisely where the blocks will be placed when dropped, ensuring accurate placement.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/drag-drop/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/drag-drop/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/drag-drop" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/drag-drop/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/drag-drop/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/drag-drop" %}
{% endif %}
