---
layout: post
title: How to enable right to left in ##Platform_Name## Menu | Syncfusion
description: Learn how to enable RTL with the Syncfusion ##Platform_Name## Menu control for bidirectional navigation and accessibility.
platform: ej2-javascript
control: Right to left
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to enable right to left in ##Platform_Name## Menu

Menu component has RTL support. This can be achieved by setting [`enableRtl`](../../api/menu#enablertl) as `true`.

The following example illustrates how to enable right-to-left support in Menu component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/getting-started-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/getting-started-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs8" %}
{% endif %}