---
layout: post
title: BPMN Data Source in ##Platform_Name## Diagram | Syncfusion®
description: Store and access process data in a BPMN diagram using the DataSource shape in the Syncfusion® ##Platform_Name## Diagram control.
platform: ej2-javascript
control: Bpmn DataSource 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# BPMN Data Source in ##Platform_Name## Diagram

## Datasource

Datasource is used to store or access data associated with a business process. To create a datasource, set the shape as **datasource**. The following code example illustrates how to create a datasource.


![DataSource BPMN Shape](../images/Datasource.png)


{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/bpmnShapes-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/bpmnShapes-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/bpmnShapes-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/bpmnShapes-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes-cs15" %}
{% endif %}
