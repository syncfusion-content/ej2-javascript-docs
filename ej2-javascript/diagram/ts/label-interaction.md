---
layout: post
title: Label Interaction in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Labels in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Label Interaction
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

## Annotation Interactions

Diagram allows annotation to be interacted by selecting, dragging, rotating, and resizing. Annotation interaction is disabled, by default. You can enable annotation interaction with the `constraints` property of annotation. You can also curtail the services of interaction by enabling either selecting, dragging, rotating, or resizing individually with the respective constraints property of annotation. The following code illustrates how to enable interactive mode.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs16" %}

## Constraints

The [`constraints`](./constraints#Annotation-Constraints) property of annotation allows you to enable/disable certain annotation behaviors.


## Annotation rotation

The [`rotationReference`](../api/diagram/shapeAnnotationModel/#rotationreference) property of an annotation allows you to control whether the text should rotate relative to its parent node or the Page. The following code examples illustrate how to configure rotationReference for an annotation.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs39/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs39/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs39" %}

| Value | Description | Image |
| -------- | -------- | -------- |
| Page | When this option is set, the annotation remains fixed in its original orientation even if its parent node is rotated. | ![No_Rotation](images/page_rotationreference.gif) |
| Parent | In this case, the annotation rotates along with its parent node. | ![Rotation](images/parent_rotationreference.gif)|

### Read-only annotations

Diagram allows to create read-only annotations. You have to set the read-only constraints to the annotation's [`constraints`](../api/diagram/annotationModel/#constraints-annotationconstraints). property. The following code illustrates how to enable read-only mode.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs17" %}

## Edit

Diagram provides support to edit an annotation at runtime, either programmatically or interactively. By default, annotation is in view mode. But it can be brought to edit mode in two ways;

### Programmatically
By using [`startTextEdit`](../api/diagram/#startTextEdit) method, edit the text through programmatically.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-startTextEdit/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-startTextEdit/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/annotations-startTextEdit" %}

### Interactively
    1. By double-clicking the annotation.
    2. By selecting the item and pressing the F2 key.

Double-clicking any annotation will enables editing mode. When the focus of editor is lost, the annotation for the node is updated. When you double-click on the node/connector/diagram model, the [`doubleClick`](../api/diagram/#doubleClick--emittypeidoubleClickeventargs) event gets triggered.

## Drag Limit

* The diagram control now supports defining the [`dragLimit`](../api/diagram/annotationModel/#dragLimit) to the label while dragging from the connector and also update the position to the nearest segment offset.

* You can set the value to dragLimit [`left`](../api/diagram/marginModel/#left), [`right`](../api/diagram/marginModel/#right), [`top`](../api/diagram/marginModel/#top), and [`bottom`](../api/diagram/marginModel/#bottom) properties which allow the dragging of connector labels to a certain limit based on the user defined values.

* By default, drag limit will be disabled for the connector. It can be enabled by setting connector constraints as drag.

* The following code illustrates how to set a dragLimit for connector annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs18" %}

## Multiple annotations

You can add any number of annotations to a node or connector. The following code illustrates how to add multiple annotations to a node and connector.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs19" %}


