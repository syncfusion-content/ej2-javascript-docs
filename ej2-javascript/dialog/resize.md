---
layout: post
title: Resize in ##Platform_Name## Dialog | Syncfusion
description: Resize the ##Platform_Name## Dialog dynamically by enableResize and configure resizeHandles for supported directions within a target container.
platform: ej2-javascript
control: Resize 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Resize in ##Platform_Name## Dialog

The Dialog supports a resizing feature. To resize the dialog, select and resize it by using its handle (grip) or by hovering on any of the edges or borders of the dialog within the sample container.

The resizable dialog can be created by setting the [enableResize](https://ej2.syncfusion.com/javascript/documentation/api/dialog#enableresize) property to true, which is used to change the size of a dialog dynamically and view its content with expanded mode. The [resizeHandles](https://ej2.syncfusion.com/javascript/documentation/api/dialog#resizehandles) property can also be configured for all the directions in which the dialog should be resized. The supported resize handle directions include `south-east`, `south-west`, `north-east`, `north-west`, `east`, `west`, `north`, and `south`. When you configure the target property along with the [enableResize](https://ej2.syncfusion.com/javascript/documentation/api/dialog#enableresize) property, the dialog can be resized within the specified target container.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/resize-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/resize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/resize-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/resize-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/resize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/resize-cs1" %}
{% endif %}
