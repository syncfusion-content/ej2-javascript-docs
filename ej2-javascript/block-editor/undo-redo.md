---
layout: post
title: Undo redo in ##Platform_Name## Block Editor control | Syncfusion
description: Checkout and learn about Undo redo with ##Platform_Name## Block Editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Block Editor
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in ##Platform_Name## Block Editor control

The undo/redo feature in Block Editor enables users to revert or reapply changes made to the content, offering a safety net for edits and enhancing the overall editing experience.

## Keyboard shortcuts

| Action | Windows | Mac | Description |
|------------|--------------|---------|-----------------|
| Undo       | Ctrl + Z     | ⌘ + Z   | Reverts the last action. |
| Redo       | Ctrl + Y     | ⌘ + Y | Reapplies the last undone action. |

## Configuring Undo/Redo stack

Block Editor allows up to `30` Undo/Redo actions by default. You can modify the number of undo/redo steps using the [undoRedoStack](../api/blockeditor/#undoRedoStack) property.

Below example demonstrates the Block Editor with undo/redo stack set to `20` actions.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/block-editor/undo-redo/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/undo-redo/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/undo-redo" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/block-editor/undo-redo/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/block-editor/undo-redo/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/undo-redo" %}
{% endif %}
