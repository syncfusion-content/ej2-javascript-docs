---
layout: post
title: How to prevent focus in ##Platform_Name## Dialog | Syncfusion
description: Prevent the ##Platform_Name## Dialog from returning focus to the previously focused element on close by setting preventFocus to true in beforeClose.
platform: ej2-javascript  
control: Dialog  
publishingplatform: ##Platform_Name##  
documentation: ug  
domainurl: ##DomainURL##  
---

# How to prevent focus to previous element in ##Platform_Name## Dialog

By default, when the dialog is closed, focus returns to the element that was previously focused before the dialog opened. You can prevent this behavior using the `beforeClose` event and setting the `preventFocus` argument to `true`.

Bind the `beforeClose` event and enable the `preventFocus` argument as shown in the sample below.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/dlg-focus-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dlg-focus-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dlg-focus-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/dlg-focus-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dlg-focus-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dlg-focus-cs2" %}
{% endif %}
