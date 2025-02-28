---
layout: post
title: Labels in ##Platform_Name## Diagram control | Syncfusion®
description: Learn here all about Labels in Syncfusion® ##Platform_Name## Diagram control of Syncfusion Essential® JS 2 and more.
platform: ej2-javascript
control: Labels 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Labels in ##Platform_Name## Diagram control

[`Annotation`](../api/diagram/annotationModel/) is a block of text that can be displayed over a node or connector. Annotation is used to textually represent an object with a string that can be edited at runtime. Multiple annotations can be added to a node/connector.

<!-- markdownlint-disable MD033 -->

## Create annotation

An annotation can be added to a node/connector by defining the annotation object and adding that to the annotation collection of the node/connector. The [`content`](../api/diagram/annotationModel/#content) property of annotation defines the text to be displayed. The following code illustrates how to create a annotation.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs1" %}

## Add annotations at runtime

Annotations can be added at runtime by using the diagram method [`addLabels`](../api/diagram/#addlabels). The following code illustrates how to add a annotation to a node.

The annotation's [`id`](../api/diagram/annotationModel/#id) property is used to define the name of the annotation and its further used to find the annotation at runtime and do any customization.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs2" %}

## Remove annotation

A collection of annotations can be removed from the node by using diagram method [`removeLabels`](../api/diagram/#removelabels). The following code illustrates how to remove a annotation to a node.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs22" %}

## Update annotation at runtime

You can get the annotation directly from the node’s annotations collection property and you can change any annotation properties at runtime. To reflect the changes immediately, we need to call [`dataBind`](../api/diagram/#databind).

The following code example illustrates how to change the annotation properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/annotations-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/annotations-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/annotations-cs4" %}
