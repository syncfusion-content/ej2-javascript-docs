---
layout: post
title: Config in ##Platform_Name## Toast | Syncfusion
description: Configure ##Platform_Name## Toast title, content, target, close button, progress bar, width, height, and newestOnTop with built-in APIs.
platform: ej2-javascript
control: Config
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Config in ##Platform_Name## Toast

This section explains the steps required to customize the appearance of the Toast using built-in APIs.

## Title and content template

The Toast can be created with a notification message. The message contains the [title](../api/toast/index-default#title) and [content](../api/toast/index-default#content) of the toasts. The title and content are adaptable in any resolution.

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

By default, the Toast is rendered in the document body. The target position for Toast rendering can be changed using the [target](../api/toast/index-default#target) property. Based on the target, the [position](../api/toast/index-default#position) will be updated.

## Close button

By default, the [showCloseButton](../api/toast/index-default#showclosebutton) is not enabled. It can be enabled by setting the value to true. Before the Toast expires, this button can be used to close or destroy toasts manually.

## Progress bar

By default, the [showProgressBar](../api/toast/index-default#showprogressbar) is not enabled. If enabled, it visually indicates when the Toast will expire. Based on the [timeOut](../api/toast/index-default#timeout) property, the progress bar will appear.

### Progress bar direction

By default, the [progressDirection](../api/toast/index-default#progressDirection) is set to "Rtl" and it will appear in the right-to-left direction. The progressDirection can be changed to "Ltr" to make it appear in the left-to-right direction.

## Newest on top

By default, the newly created toasts are appended next to existing toasts. The sequence can be changed, inserting the new toast before the existing toasts by enabling the [newestOnTop](../api/toast/index-default#newestontop) property.

The following sample demonstrates the combination of the `target`, `showCloseButton`, `showProgressBar`, and `newestOnTop` properties in the Toast.

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

The dimensions of the Toast can be set using the [width](../api/toast/index-default#width) and [height](../api/toast/index-default#height) properties. This will individually set all toasts. Toasts with different custom dimensions can be created.

By default, the Toast is rendered with a `300px` width and `auto` height.

> In mobile devices, the default width of the Toast takes '100%' width of the page.
> When the Toast width is set as '100%', the Toast occupies the full width and will be displayed at the top or bottom based on the position `Y` property.

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

* [Prevent duplicate toasts](./how-to/prevent-duplicate-toast-display)
* [Customize the progress bar](./how-to/customize-progress-bar-theme-and-sizing)