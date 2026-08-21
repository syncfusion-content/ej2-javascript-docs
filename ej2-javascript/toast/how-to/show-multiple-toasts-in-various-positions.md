---
layout: post
title: How to show toasts in positions in ##Platform_Name## Toast | Syncfusion
description: Show ##Platform_Name## Toasts in different positions by initiating separate instances since positions update only after destroy.
platform: ej2-javascript
control: Show multiple toasts in various positions
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to show toasts in positions in ##Platform_Name## Toast

By default, the positions of the new toasts are only updated after the visible toasts have been destroyed. If You need to display multiple toasts with different positions, initiate another toasts.

The following sample demonstrates adding multiple toasts in different positions.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/toast-position-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-position-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/toast/toast-position-cs1" %}