---
layout: post
title: Enable or disable toolbar item in ##Platform_Name## Toolbar control | Syncfusion
description: Learn here all about Enable or disable toolbar item in Syncfusion ##Platform_Name## Toolbar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Enable or disable toolbar item 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable toolbar item in ##Platform_Name## Toolbar control

The [`disabled`](../../api/toolbar/itemModel/#disabled) property of the Toolbar item is used to enable/disable the item by setting false/true value to the property. In the following code example initially paste action will be disabled. On clicking the cut or copy button, the paste button will be enabled.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toolbar/scrollstep-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/scrollstep-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/scrollstep-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toolbar/scrollstep-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/scrollstep-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/scrollstep-cs1" %}
{% endif %}