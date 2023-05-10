---
layout: post
title: Show dialog with full screen in ##Platform_Name## Dialog control | Syncfusion
description: Learn here all about Show dialog with full screen in Syncfusion ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Show dialog with full screen 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Show dialog with full screen in ##Platform_Name## Dialog control

You can show the dialog in fullscreen by passing `true` as argument to the dialog `show` method. By using [visible](../../api/dialog/#visible) property you can prevent the dialog from initially shown.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/dlg-fullscreen-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dlg-fullscreen-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dlg-fullscreen-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/dlg-fullscreen-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dlg-fullscreen-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dlg-fullscreen-cs1" %}
{% endif %}