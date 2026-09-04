---
layout: post
title: How to show fullscreen Dialog in ##Platform_Name## Dialog | Syncfusion
description: Display the ##Platform_Name## Dialog in fullscreen by passing true to the show method and control initial visibility with the visible property.
platform: ej2-javascript
control: Show dialog with full screen 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to show a Dialog in fullscreen in ##Platform_Name## Dialog

You can show the Dialog in fullscreen by passing `true` as an argument to the Dialog `show` method. This boolean argument enables fullscreen mode for the Dialog display. By using the [visible](https://ej2.syncfusion.com/documentation/api/dialog/index-default#visible) property, you can prevent the Dialog from being shown initially. In the following sample, the Dialog is initially hidden (`visible: false`) and opened in fullscreen on a `#targetButton` click via `dialog.show(true)`. Note that the configured `width` is the non-fullscreen size and is overridden while the Dialog is in fullscreen mode.

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