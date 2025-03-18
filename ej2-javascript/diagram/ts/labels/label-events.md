---
layout: post
title: Label Events in ##Platform_Name## Diagram control | Syncfusion®
description: Learn here all about Labels in Syncfusion® ##Platform_Name## Diagram control of Syncfusion Essential® JS 2 and more.
platform: ej2-javascript
control: Label Events
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Annotation events.

There are some events which will trigger while interacting with annotation.
* KeyDown.
* KeyUp.
* DoubleClick.
* TextEdit.

## KeyDown event


The [`keyDown`](../api/diagram/iKeyEventArgs/) event is triggered whenever any key is pressed. The following example shows how to capture the keyDown event and modify the fill color of a node on each key press:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-keyDown/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-keyDown/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/annotations-keyDown" %}

## KeyUp event

The [`keyUp`](../api/diagram/iKeyEventArgs/) event is triggered whenever we press and release any key. The following example shows how to capture the keyUp event and modify the fill color of a node on each key press:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-keyUp/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-keyUp/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/annotations-keyUp" %}

## Double click event

The [`doubleClick`](../api/diagram/idoubleclickeventargs/) event is triggered when you double-click on a node, connector, or the diagram surface. Double-clicking on a diagram element activates the annotation editing mode. The following code example shows how to capture the [`doubleClick`](../api/diagram/idoubleclickeventargs/) event:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-doubleClick/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-doubleClick/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/annotations-doubleClick" %}

## TextEdit event

The [`textEdit`](../api/diagram/iTextEditEventArgs/) event triggers when you finish editing the annotation text and the focus is removed from the annotation text.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-textEdit/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-textEdit/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/annotations-textEdit" %}

You can prevent adding new text to the annotation by setting the `cancel` property of [`textEdit`](../api/diagram/iTextEditEventArgs/) to true.

``` javascript
textEdit: function (args: ITextEditEventArgs) {
    // Prevents any new content from being added to the annotation
    args.cancel = true;
  },

```

## Selection change event

The [`selectionChange`](https://ej2.syncfusion.com/documentation/api/diagram/#selectionchange) event is triggered when an annotation of a node or connector is selected in the diagram.

You can prevent selection by setting the `cancel` property of [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/documentation/api/diagram/iselectionchangeeventargs/) to true, as shown in the code snippet below.

```ts
selectionChange: function (args: ISelectionChangeEventArgs) {
  if (args.state === 'Changing') {
    // Prevents selection
    args.cancel = true;
  }
}
```