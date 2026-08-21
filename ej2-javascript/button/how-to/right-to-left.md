---
layout: post
title: How to enable right to left in ##Platform_Name## Button | Syncfusion
description: Learn how to enable right-to-left rendering in the ##Platform_Name## Button by setting the enableRtl property to true.
platform: ej2-javascript
control: Right to left 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to enable right to left in ##Platform_Name## Button

Button component has RTL support. This can be achieved by setting [`enableRtl`](../../api/button#enablertl) as `true`.

The following example illustrates how to enable right-to-left support in Button component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/button/howto-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button/howto-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/button/howto-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/howto-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/button/howto-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button/howto-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/button/howto-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/button/howto-cs2" %}
{% endif %}