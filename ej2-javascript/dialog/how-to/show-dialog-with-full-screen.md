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

# How to show Dialog with fullscreen in ##Platform_Name## Dialog

You can show the dialog in fullscreen by passing `true` as argument to the dialog `show` method. By using [visible](https://ej2.syncfusion.com/documentation/api/dialog/index-default#visible) property you can prevent the dialog from initially shown.

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