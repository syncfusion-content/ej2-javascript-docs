---
layout: post
title: Action buttons in ##Platform_Name## Toast control | Syncfusion
description: Learn here all about Action buttons in Syncfusion ##Platform_Name## Toast control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Action buttons 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Action buttons in ##Platform_Name## Toast control

You can include action buttons to the toast control by adding the [buttons](../api/toast#buttons) property. The collection of Essential JS 2 button models can be bound to the `model` property inside the buttons property. You can also include the click event callback function for each button.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/actionBtn-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/actionBtn-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/actionBtn-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/actionBtn-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/actionBtn-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/actionBtn-cs1" %}
{% endif %}

## See Also

* [How to add dynamic template](./how-to/add-dynamic-template/)