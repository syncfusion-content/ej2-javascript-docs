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

# Enter key Configuration in ##Platform_Name## Rich Text Editor control

Rich Text Editor allows you to customize the behavior of the Enter key and Shift+Enter key combinations. This feature provides flexibility in formatting and structuring content within the editor.

**Available Options**

The enterKey property accepts the following values:

* `P` (default)
* `DIV`
* `BR`

The shiftEnterKey property accepts the following values:

* `BR` (default)
* `P`
* `DIV`

## Enter key Customization

By default, pressing the Enter key in the Rich Text Editor creates a new `<p>` tag. You can customize this behavior using the [enterKey](../api/rich-text-editor/#enterkey) property.

When you customize the Enter key, the editor will create the specified tag when the Enter key is pressed. This configuration also affects the default content structure of the Rich Text Editor.

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

## Shift+Enter key Customization

By default, pressing Shift+Enter in the Rich Text Editor inserts a `<br>` tag. You can customize this behavior using the [shiftEnterKey](../api/rich-text-editor/#shiftEnterkey) property.

When you customize the Shift+Enter key, the editor will create the specified tag when the key combination is pressed. This configuration also affects the default content structure of the Rich Text Editor.

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

## Preventing Enter Key Manipulation

In some cases, you may want to prevent the default Enter key behavior entirely. The Rich Text Editor allows you to intercept and prevent the default action of the Enter key at the editor level by handling the `actionBegin event`. To ensure that the default behavior is also suppressed at the browser level, you need to call the `preventDefault()` method on the event object within the event handler. This approach allows for precise control over the editor's behavior in response to the Enter key press, facilitating the implementation of custom functionality.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/prevent-enter-key-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/prevent-enter-key-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/prevent-enter-key-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/prevent-enter-key-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/prevent-enter-key-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/prevent-enter-key-cs1" %}
{% endif %}
