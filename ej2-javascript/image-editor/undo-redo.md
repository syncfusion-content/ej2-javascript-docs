---
layout: post
title: Undo Redo in ##Platform_Name## Image Editor | Syncfusion
description: Reverse and repeat up to 16 editing actions on images in the ##Platform_Name## Image Editor with the undo and redo methods.
platform: ej2-javascript
control: Undo Redo 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Undo Redo in ##Platform_Name## Image Editor

The undo and redo functionalities provide a way to reverse and repeat editing actions performed on an image. These features are essential for maintaining control and flexibility during the editing process.

The Image Editor stores the last 16 actions in its undo/redo history. When the history reaches its maximum capacity of 16 actions, any new action results in the removal of the oldest action from the history. This step limit is fixed and not configurable.

## Undo the action

The [`undo`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#undo) method in the Image Editor allows you to revert the most recent editing action or a series of actions back to their previous state. When the undo command is triggered, the Image Editor undoes the last applied modification, restoring the image to its state before the action was performed. The undo action is useful for correcting mistakes, removing unwanted changes, or exploring different editing options without permanently altering the image. The method takes no parameters and returns `void`.

## Redo the action

The [`redo`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#redo) method in the Image Editor allows you to reapply previously undone actions or modifications to the image. When the redo command is triggered, the Image Editor reapplies the last action that was undone, bringing the image back to the state it was in after the action was initially applied. The redo action is useful when you want to repeat an action that was previously undone or restore changes that were temporarily reversed. The method takes no parameters and returns `void`.

In the following example, the [`undo`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#undo) and [`redo`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#redo) methods are used in the button click event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/undo-redo-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/undo-redo-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/undo-redo-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/undo-redo-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/undo-redo-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/undo-redo-cs1" %}
{% endif %}