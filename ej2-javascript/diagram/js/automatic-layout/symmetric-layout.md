---
layout: post
title: Symmetric Layout in ##Platform_Name## Diagram | Syncfusion®
description: Lay out nodes using the Symmetric Layout in the Syncfusion® ##Platform_Name## Diagram, with spring length, spring factor, and max iteration properties.
platform: ej2-javascript
control: Symmetric 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Symmetric Layout in ##Platform_Name## Diagram

The symmetric layout has been formed using nodes position by closer together or pushing them further apart. This is repeated iteratively until the system comes to an equilibrium state.

## Symmetric layout

The layout’s [`springLength`](../../api/diagram/layout#springlength) defined as how long edges should be, ideally. This will be the resting length for the springs. Edge attraction and vertex repulsion forces to be defined by using layout’s [`springFactor`](../../api/diagram/layout#springfactor), the more sibling nodes repel each other. The relative positions do not change any more from one iteration to the next. The number of iterations can be specified by using layout’s [`maxIteration`](../../api/diagram/layout#maxiteration).

The following code illustrates how to arrange the nodes in a radial tree structure.



{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/AutomaticLayout-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-cs7" %}

N> If you want to use symmetric layout in diagram, you need to inject SymmetricLayout in the diagram.

![Symmetric layout](../images/symmetric.png)