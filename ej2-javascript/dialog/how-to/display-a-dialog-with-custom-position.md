---
layout: post
title: How to position Dialog in ##Platform_Name## Dialog | Syncfusion
description: Display the ##Platform_Name## Dialog at a custom X and Y position by setting the position property with numeric or named offset values.
platform: ej2-javascript
control: Display a dialog with custom position 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to position a Dialog in ##Platform_Name## Dialog

By default, the Dialog is displayed in the center of the [target](https://ej2.syncfusion.com/documentation/api/dialog/index-default#target) container. The Dialog position can be set using the [position](https://ej2.syncfusion.com/documentation/api/dialog/index-default#position) property by providing custom X and Y values, which can be either numeric coordinates (e.g., `{X: 420, Y: 14}`) or named alignment values such as `'Center'`, `'TopLeft'`, or `'BottomRight'`. The following sample demonstrates two Dialogs positioned at different X/Y coordinates within the target container.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/dlg-position-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dlg-position-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dlg-position-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/dlg-position-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dlg-position-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dlg-position-cs1" %}
{% endif %}