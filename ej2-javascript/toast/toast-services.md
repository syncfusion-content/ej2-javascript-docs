---
layout: post
title: Toast services in ##Platform_Name## Toast control | Syncfusion
description: Learn here all about Toast services in Syncfusion ##Platform_Name## Toast control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Toast services 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Toast services in ##Platform_Name## Toast control

The Toast component provides a built-in utility function to render the toast with minimal code. The utility function will render the toast without the need of rendering the container element in the DOM where the toast is appended. So that, the toast can now be rendered on the go. The following are the option to render the toast using the utility function.

## Show Toast with predefined types

The Toast component support 4 types of predefined toast with essential colors for various situations which can be shown using the `ToastUtility.show` by just defining the type of the toast without defining any class names. The following options are used as an argument on calling the utility function for predefined types:

| Options   | Description |
|-----------|-------------|
| [content](../api/toast/#content) | Specifies the content that can be displayed on the Toast. |
| type | Specifies the type of the predefined Toasts. The 4 types of predefined toasts are `Information`, `Success`, `Error`, `Warning` |
| [timeOut](../api/toast/#timeOut) | Specifies the Toast display time duration on the page in milliseconds. Once the time expires, Toast message will be removed. Setting 0 as a time out value displays the Toast on the page until the user closes it manually. |

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/typeUtility-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/typeUtility-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/typeUtility-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/typeUtility-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/typeUtility-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/typeUtility-cs1" %}
{% endif %}

## Show Toast with ToastModel

The utility function can be called using the [ToastModel](../api/toast/toastModel/) as argument to show the toast where all the properties in the `ToastModel` like any events, position, close icon, action buttons, etc. can be used in the `ToastUtility.show`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/toastModelUtility-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toastModelUtility-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/toastModelUtility-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/toastModelUtility-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toastModelUtility-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/toastModelUtility-cs1" %}
{% endif %}
