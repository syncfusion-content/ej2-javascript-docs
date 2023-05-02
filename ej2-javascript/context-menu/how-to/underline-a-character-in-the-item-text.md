---
layout: post
title: Underline a character in the item text in ##Platform_Name## Context menu control | Syncfusion
description: Learn here all about Underline a character in the item text in Syncfusion ##Platform_Name## Context menu control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Underline a character in the item text 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Underline a character in the item text in ##Platform_Name## Context menu control

Underline a particular character in a text can be handled in [`beforeItemRender`](../api/context-menu#beforeitemrender) event by
adding `<u>` tag in between the text and given as innerHTML in `li` rendering.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/context-menu/underline-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/underline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/underline-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/context-menu/underline-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/underline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/underline-cs1" %}
{% endif %}
