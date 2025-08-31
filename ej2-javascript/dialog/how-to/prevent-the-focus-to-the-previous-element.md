---
layout: post
title: Prevent the focus to previous element | Syncfusion
description: Learn how to prevent focus from returning to the previously focused element in Syncfusion ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more.  
platform: ej2-javascript  
control: Dialog  
publishingplatform: ##Platform_Name##  
documentation: ug  
domainurl: ##DomainURL##  
---

# Prevent focus to previous element in ##Platform_Name## Dialog control

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
