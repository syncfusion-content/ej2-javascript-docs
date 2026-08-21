---
layout: post
title: How to prevent first focus in ##Platform_Name## Dialog | Syncfusion
description: Prevent the ##Platform_Name## Dialog from focusing the first content element by enabling the preventFocus argument inside the open event.
platform: ej2-javascript
control: Prevent the focus on the first element 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent focus on first element in ##Platform_Name## Dialog

By default, the dialog focuses on the first elements of the content area which can be active and focusable. You can prevent this default focusing behavior using the [open](https://ej2.syncfusion.com/documentation/api/dialog/index-default#open) event and by enabling the `preventFocus` argument.

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

## See Also

* [Prevent the focus to the previous element](./how-to/prevent-the-focus-to-the-previous-element.md)
