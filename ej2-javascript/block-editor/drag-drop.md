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

The drag and drop feature in Block Editor allows users to easily rearrange blocks within the editor by dragging them to different positions.

## Enable Drag and Drop

You can control drag and drop operations within Block Editor using the [enableDragAndDrop](../api/blockeditor/#enabledraganddrop) property. By default, it is set to `true`.

## Dragging blocks

When drag and drop is enabled, users can rearrange blocks in the following ways:

The Block Editor supports both single and multiple block dragging. Users can drag individual blocks or select multiple blocks and drag them together to a new position.

- **Single Block Dragging**: For single block, users can hover over a block to reveal the drag handle, then click and drag to move it to a new position.

- **Multiple Block Dragging**: For multiple blocks, users first select the blocks they want to move. Once selected, users can drag the entire group to a new position.

During the drag operation, the editor provides visual cues to indicate where the blocks will be positioned when dropped. This helps users precisely place blocks where they want it.

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
