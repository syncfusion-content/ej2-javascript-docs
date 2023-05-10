---
layout: post
title: Prevent the focus on the first element in ##Platform_Name## Dialog control | Syncfusion
description: Learn here all about Prevent the focus on the first element in Syncfusion ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Prevent the focus on the first element 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Prevent the focus on the first element in ##Platform_Name## Dialog control

By default, the dialog focuses on the first elements of the content area which can be active and focusable. You can prevent this default focusing behavior using the [open](../../api/dialog/#open) event and by enabling the `preventFocus` argument.

Bind the open event and enable the preventFocus argument within an event like the below sample.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/dlg-focus-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dlg-focus-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dlg-focus-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/dlg-focus-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/dlg-focus-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/dlg-focus-cs1" %}
{% endif %}