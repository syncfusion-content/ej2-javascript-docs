---
layout: post
title: How to set Dialog maxHeight in ##Platform_Name## Dialog | Syncfusion
description: Set a custom maxHeight on the ##Platform_Name## Dialog inside the beforeOpen event so the dialog height fits the target element.
platform: ej2-javascript
control: Setting max height to the dialog 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to set maxHeight to the Dialog in ##Platform_Name## Dialog

By default, the maxHeight for the Dialog is calculated based on the target. If the target is not specified externally, the Dialog considers the document body as the target and will calculate the maxHeight based on it. You can set the maxHeight of the Dialog dynamically in the [beforeOpen](https://ej2.syncfusion.com/documentation/api/dialog/index-default#beforeopen) event by assigning a value to the `args.maxHeight` property (where `args` is of type `BeforeOpenEventArgs`). In the following sample, the Dialog is initially hidden (`visible: false`) and opened via a button click, and `args.maxHeight` is set to `'300px'` when the Dialog opens.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/max-height-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/max-height-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/max-height-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/max-height-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/max-height-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/max-height-cs1" %}
{% endif %}