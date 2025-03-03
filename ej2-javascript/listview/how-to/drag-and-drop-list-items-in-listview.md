---
layout: post
title: Drag and drop list items in ListView in ##Platform_Name## ListView control | Syncfusion
description: Learn how to display a spinner while loading list items from remote data in Syncfusion ##Platform_Name## ListView control of Essential JS 2 and more.
platform: ej2-javascript
control: Drag and drop list items in ListView
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop list items in ##Platform_Name## ListView control

The ListView control does not have native drag and drop support. However, you can achieve drag and drop functionality by using the [`TreeView`](https://ej2.syncfusion.com/documentation/treeview/getting-started/) control styled to appear like a ListView.

Drag and Drop in TreeView control was enabled by setting the [`allowDragAndDrop`](../../api/treeview/#allowdraganddrop) to `true`.

```ts

let treeViewInstance: TreeView = new TreeView({

    fields: { dataSource: data, id: 'id', text: 'text' },
    allowDragAndDrop: true

});

```

The TreeView control displays hierarchical data in a tree-like structure. List items in the TreeView can be prevented from being dropped as children of another element by cancelling the [`nodeDragStop`](../../api/treeview/#nodedragstop) and [`nodeDragging`](../../api/treeview/#nodedragging) events:

```ts

let treeViewInstance: TreeView = new TreeView({
    fields: { dataSource: data, id: 'id', text: 'text' },
    allowDragAndDrop: true,
    nodeDragging: onDragStop,
    nodeDragStop: onDragStop

});

function onDragStop(args: DragAndDropEventArgs) {
    //Block the Child Drop operation in TreeView
   let  draggingItem: HTMLCollection = document.getElementsByClassName("e-drop-in");
    if (draggingItem.length == 1) {
        draggingItem[0].classList.add('e-no-drop');
        args.cancel = true;
    }
}

```

In the sample below, we have rendered draggable list items using the TreeView control with ListView appearance.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/reorder-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/reorder-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/reorder-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/reorder-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/reorder-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/reorder-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/reorder-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/reorder-cs1" %}
{% endif %}