---
layout: post
title: How to add min and max buttons in ##Platform_Name## Dialog | Syncfusion
description: Add custom minimize and maximize buttons next to the close icon in the ##Platform_Name## Dialog header using headerTemplate and click handlers.
platform: ej2-javascript
control: Add a minimize maximize buttons 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add minimize and maximize buttons in ##Platform_Name## Dialog

The Dialog component can be minimized or maximized by end users. You can add minimize and maximize custom buttons near the close icon in the Dialog header using the [header](https://ej2.syncfusion.com/documentation/api/dialog/index-default#header) property and handle the actions in the button click events, as shown in the following sample.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/dialog-minimize-maximize-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-minimize-maximize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dialog-minimize-maximize-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/dialog-minimize-maximize-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dialog-minimize-maximize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dialog-minimize-maximize-cs1" %}
{% endif %}
