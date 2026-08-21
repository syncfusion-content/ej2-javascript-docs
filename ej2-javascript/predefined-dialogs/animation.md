---
layout: post
title: Animation in ##Platform_Name## Predefined Dialogs | Syncfusion
description: Animate ##Platform_Name## Predefined Alert, Confirm, and Prompt dialogs with delay, duration, and Zoom or other effects via animationSettings.
platform: ej2-javascript
control: Animation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Animation in ##Platform_Name## Predefined Dialogs

The predefined dialogs can be animated during the open and close actions. Also, user can customize animation's `delay`, `duration` and `effect` of animation by using the `animationSettings` property.

In the below sample, `Zoom` effect is enabled. So, The Dialog will open with `ZoomIn` and close with `ZoomOut` effects.

## Alert animation

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/predefined-dialogs/alert-animation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/alert-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/alert-animation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/predefined-dialogs/alert-animation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/alert-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/predefined-dialogs/alert-animation-cs1" %}
{% endif %}

## Confirm animation

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/predefined-dialogs/confirm-animation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/confirm-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/confirm-animation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/predefined-dialogs/confirm-animation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/confirm-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/predefined-dialogs/confirm-animation-cs1" %}
{% endif %}

## Prompt animation

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/predefined-dialogs/prompt-animation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/prompt-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/prompt-animation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/predefined-dialogs/prompt-animation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/prompt-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/predefined-dialogs/prompt-animation-cs1" %}
{% endif %}