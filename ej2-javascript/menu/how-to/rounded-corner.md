---
layout: post
title: How to add rounded corner in ##Platform_Name## Menu | Syncfusion
description: Learn how to add rounded corners to the Syncfusion ##Platform_Name## Menu control for a softer and more modern UI.
platform: ej2-javascript
control: Rounded corner
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add rounded corner in ##Platform_Name## Menu

The rounded corner can be achieved by using the [`cssClass`](../../api/menu/#cssclass) property. Add a custom class to the menu component and customize it using the `border-radius` CSS property. For more information, refer to the `style.css` file mapped under the source tab.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/rounded-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/rounded-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/rounded-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/rounded-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/rounded-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/rounded-cs2" %}
{% endif %}
