---
layout: post
title: Bpmn DataObject in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Bpmn shapes in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Bpmn DataObject 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# BPMN Data object in ##Platform_Name## Diagram control

## Data Object

A data object represents information flowing through the process, such as data placed into the process, data resulting from the process, data that needs to be collected, or data that must be stored. To define a [`data object`](../api/diagram/bpmnDataObject), set the shape as **DataObject** and the [`type`](../api/diagram/bpmnDataObjects/) property defines whether data is an input or an output. You can create multiple instances of data object with the collection property of data.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/bpmnShapes-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/bpmnShapes-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/bpmnShapes-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/bpmnShapes-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes-cs14" %}
{% endif %}

The following table contains various representation of BPMN data object.

| Boundary | Image |
| -------- | -------- |
| Collection Data Object | ![Collection Data BPMN Shape](images/Dataobject.png) |
| Data Input | ![Data Input BPMN Shape](images/DataInput.png) |
| Data Output | ![Data Output BPMN Shape](images/DataOutput.png) |
