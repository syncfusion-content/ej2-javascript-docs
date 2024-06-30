---
layout: post
title: Bpmn shapes in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Bpmn shapes in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Bpmn shapes 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Bpmn shapes in ##Platform_Name## Diagram control

BPMN shapes are used to represent the internal business procedure in a graphical notation and enable you to communicate the procedures in a standard manner. To create a BPMN shape, in the node property shape, type should be set as “bpmn” and its shape should be set as any one of the built-in shapes. The following code example illustrates how to create a simple business process.

N> If you want to use BPMN shapes in diagram, you need to inject BpmnDiagrams in the diagram.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/bpmnShapes-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/bpmnShapes-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/bpmnShapes-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/bpmnShapes-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes-cs1" %}
{% endif %}

>Note : The default value for the property `shape` is “event”.

The list of BPMN shapes are as follows:

| Shape | Image |
| -------- | -------- |
| Event | ![Event Shape](images/Event.png) |
| Gateway | ![Gateway Shape](images/Gateway.png) |
| Task | ![Task Shape](images/Task.png) |
| Message | ![Message Shape](images/Message.png) |
| DataSource | ![Datasource Shape](images/Datasource.png) |
| DataObject | ![Dataobject Shape](images/Dataobject.png) |
| Group | ![Group Shape](images/Group.png) |

The BPMN shapes and its types are explained as follows.

<!-- markdownlint-disable MD033 -->



