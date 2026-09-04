---
layout: post
title: Model Binding in ##Platform_Name## Query Builder UI | Syncfusion
description: Customize the ##Platform_Name## Query Builder UI field, operator, and value columns by binding properties through fieldModel, operatorModel, and valueModel.
platform: ej2-javascript
control: Model binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Model Binding in ##Platform_Name## Query Builder UI

Model binding allows binding properties for the components used in the field, operator, and value columns. To implement model binding, assign the `fieldModel`, `operatorModel`, and `valueModel` properties in the Query Builder.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/query-builder/model-binding-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/model-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/model-binding-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/query-builder/model-binding-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/query-builder/model-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/query-builder/model-binding-cs1" %}
{% endif %}