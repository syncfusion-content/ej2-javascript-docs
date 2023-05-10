---
layout: post
title: Config in ##Platform_Name## Toast control | Syncfusion
description: Learn here all about Config in Syncfusion ##Platform_Name## Toast control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Config 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Config in ##Platform_Name## Toast control

This section explains the steps required to customize the appearance of the toast using built-in APIs.

## Title and content template

Toast can be created with the notification message. The message contains [title](../api/toast/#title) and [content](../api/toast/#content) of the toasts. The title and contents are adaptable in any resolution.

> The Title or Content property can be given as HTML element/element ID to a string that can be displayed as a toast.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/toast-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/toast-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/toast-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/toast-cs2" %}
{% endif %}

## Specifying custom target

By default, the toast can be rendered in the document body. You can change the target position for toast rendering using the [target](../api/toast/#target) property. Based on the target, the [position](../api/toast/#position) will be updated.

## Close button

By default, the [showCloseButton](../api/toast/#showclosebutton) is not enabled. You can enable it by setting the true value. Before expiring the toast, you can use this button to close or destroy toasts manually.

## Progress bar

By default, the [showProgressBar](../api/toast/#showprogressbar) is not enabled. If it is enabled, it can visually indicate when will the toast gets expired. Based on the [timeOut](../api/toast/#timeout) property, progress bar will appear.

### Progress bar direction

By default, the [progressDirection](../api/toast/#progressDirection) is set to "Rtl" and it will appear from right to left direction. You can change the progressDirection to "Ltr" to make it appear from left to right direction.

## Newest on top

By default, the newly created toasts will append next with existing toasts. You can change the sequence like inserting before the toast by enabling the [newestOnTop](../api/toast/#newestontop).

Here, The following sample demonstrates the combination of the `target`, `showCloseButton`, `showProgressBar`, and `newestOnTop` properties in toast.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/toast-target-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-target-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/toast-target-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/toast-target-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-target-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/toast-target-cs1" %}
{% endif %}

## Width and height

The dimensions of the toast can be set using the [width](../api/toast/#width) and [height](../api/toast/#height) properties. This will individually set all toasts. You can create different custom dimension toasts.

By default, the toast can be rendered with `300px` width with `auto` height.

> In mobile devices, the default width of the toast gets '100%' width of the page.
> When you set toast width as '100%', the toast occupies full width and will be displayed at the top or bottom based on the position `Y` property.

Both the width and height properties allow setting pixels/numbers/percentage. The number value is considered as pixels.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/full-width-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/full-width-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/full-width-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/full-width-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/full-width-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/full-width-cs1" %}
{% endif %}

## See Also

* [Prevent duplicate toasts](./how-to/prevent-duplicate-toast-display/)
* [Customize the progress bar](./how-to/customize-progress-bar-theme-and-sizing/)