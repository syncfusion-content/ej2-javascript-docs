---
layout: post
title: Right to left in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about Right to left in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Right-To-Left support in Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Controls

Right-to-Left (RTL) support allows applications to effectively communicate with users who use languages that are written from right to left, such as Arabic, Hebrew, etc.

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls support RTL by setting the [enableRtl](https://ej2.syncfusion.com/documentation/api/base/staticFunctions/#enablertl) property to `true`. This adds the `e-rtl` CSS class to the control's root element and adjusts layout, alignment, and direction for supported controls.

## Enable RTL for all controls

To enable RTL globally for all controls, set the [enableRtl](https://ej2.syncfusion.com/documentation/api/base/staticFunctions/#enablertl) property in the application. The example below demonstrates enabling RTL using the ListView control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/right-to-left-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/right-to-left-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/right-to-left-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/right-to-left-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/right-to-left-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/right-to-left-cs1" %}
{% endif %}

## Enable RTL for an individual control

To enable RTL for a single control, set the [enableRtl](https://ej2.syncfusion.com/documentation/api/base/component/#enablertl) property in that control's options. The following example shows how to enable RTL for a `ListView` instance.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/individual-rtl-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/individual-rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/individual-rtl-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/individual-rtl-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/individual-rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/individual-rtl-cs1" %}
{% endif %}