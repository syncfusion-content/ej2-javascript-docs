---
layout: post
title: Model dialog with rte in ##Platform_Name## Dialog control | Syncfusion
description: Learn here all about Model dialog with rte in Syncfusion ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Model dialog with rte 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Modal dialog with RTE in ##Platform_Name## Dialog control

This section explains how to render a modal Dialog with the Rich Text Editor component. The sample uses a modal Dialog (`isModal`) and the RTE requires the `Toolbar`, `Link`, `Image`, `HtmlEditor`, and `QuickToolbar` modules. When you render a modal Dialog with the Rich Text Editor component, the first row of the content will be hidden because the dialog container and its wrapper elements are styled with `display: none`. As a result, the editor's toolbar does not get the proper offset width and is rendered above the edit area container. In this scenario, use the `refreshUI` method in the Dialog [`open`](https://ej2.syncfusion.com/documentation/api/dialog/index-default#open) event handler to correct the RTE rendering.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/model-dialog-with-rte-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/model-dialog-with-rte-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/model-dialog-with-rte-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/model-dialog-with-rte-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/model-dialog-with-rte-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/model-dialog-with-rte-cs1" %}
{% endif %}
