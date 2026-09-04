---
layout: post
title: How to read values on click in ##Platform_Name## Dialog | Syncfusion
description: Read all values from ##Platform_Name## Dialog input elements on a footer button click by binding the action handler to the buttons property.
platform: ej2-javascript
control: Read all the values from dialog on button click
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to read values on button click in ##Platform_Name## Dialog

You can read the Dialog element values by binding the action handler to the footer buttons. The buttons property provides options to bind events to the action buttons. For detailed information about buttons, refer to the [footer](https://ej2.syncfusion.com/documentation/dialog/template#footer) section. In the following sample, the values of input elements within the Dialog are read in the footer button click event and sent as the content of a modal confirmation Dialog.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/read-values-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/read-values-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/read-values-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/read-values-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/read-values-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/read-values-cs1" %}
{% endif %}