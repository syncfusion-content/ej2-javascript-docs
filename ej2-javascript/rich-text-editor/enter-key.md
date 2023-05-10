---
layout: post
title: Enter key in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Enter key in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Enter key 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Enter key in ##Platform_Name## Rich text editor control

Rich Text Editor allows to customize the tag that is inserted when pressing the enter key and shift + enter key in the Rich Text Editor.

## Enter key customization

By default, the `<p>` tag will be created while pressing the enter key. The enter key can be customized by using the [`enterKey`](../api/rich-text-editor/#enterkey) property, where the possible tags that can be used to customize are `<p>`, `<div>`, and `<br>`.

When the enter key is customized with any of the possible values, pressing the enter key in the editor will create a new tag that is configured. Also, when the enter key is configured the default value of the Rich Text Editor will also change respectively with the configured values.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/enter-key-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/enter-key-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/enter-key-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/enter-key-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/enter-key-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/enter-key-cs1" %}
{% endif %}

## Shift-Enter key customization

By default, the `<br>` tag will be created while pressing the shift + enter key. The shift + enter key can be customized by using the [`shiftEnterKey`](../api/rich-text-editor/#shiftEnterkey) property where the possible tags that can be used to customize are `<br>`, `<p>`, `<div>`.  

When the shift + enter key is customized with any of the possible values, pressing the shift + enter key in the editor will create a new tag that is configured. Also, when the shift + enter key is configured the default value of the Rich Text Editor will change respectively with the configured values.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/shift-enter-key-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/shift-enter-key-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/shift-enter-key-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/shift-enter-key-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/shift-enter-key-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/shift-enter-key-cs1" %}
{% endif %}