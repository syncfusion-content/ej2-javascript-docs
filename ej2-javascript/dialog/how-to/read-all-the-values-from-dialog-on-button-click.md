---
layout: post
title: Read all the values from dialog on button click in ##Platform_Name## Dialog control | Syncfusion
description: Learn here all about Read all the values from dialog on button click in Syncfusion ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Read all the values from dialog on button click 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Read all the values from dialog on button click in ##Platform_Name## Dialog control

You can read the dialog element values by binding the action handler to the footer buttons. The buttons property provides the options to bind events to the action buttons. For detailed information about buttons, refer to the [footer](../template/#footer) section. In the below sample, value of input elements within the dialog has been checked in the footer button click event and send the values as the content of confirmation dialog.

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