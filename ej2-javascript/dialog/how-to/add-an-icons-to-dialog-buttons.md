---
layout: post
title: How to add Dialog icon buttons in ##Platform_Name## Dialog | Syncfusion
description: Add icons to the ##Platform_Name## Dialog footer buttons by configuring icon properties in the buttons array or via the footerTemplate property.
platform: ej2-javascript
control: Add an icons to dialog buttons 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add icons to Dialog buttons in ##Platform_Name## Dialog

You can add icons to the dialog buttons using the [buttons](https://ej2.syncfusion.com/documentation/api/dialog/index-default#buttons) property or [footerTemplate](https://ej2.syncfusion.com/documentation/api/dialog/index-default#footertemplate) property . For detailed information about dialog buttons, refer to the [documentation](https://ej2.syncfusion.com/documentation/api/dialog/index-default#buttons)&nbsp;section.

In the following sample, dialog footer buttons are customized with icons using `buttons` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/dialog-button-icons-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-button-icons-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dialog-button-icons-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/dialog-button-icons-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-button-icons-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dialog-button-icons-cs1" %}
{% endif %}

In the following sample, dialog footer buttons are customized with icons using `footerTemplate` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/dialog-footer-icons-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-footer-icons-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dialog-footer-icons-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/dialog-footer-icons-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-footer-icons-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dialog-footer-icons-cs1" %}
{% endif %}