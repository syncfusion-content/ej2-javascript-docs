---
layout: post
title: How to enable or disable ##Platform_Name## ListBox | Syncfusion
description: Enable or disable items in the Syncfusion ##Platform_Name## ListBox at runtime by calling the enableItems method.
platform: ej2-javascript
control: Enable or disable items 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to Enable or Disable Items in ##Platform_Name## ListBox

To enable or disable items in the list box, [`enableItems`](../../api/list-box/#enableitems) method can be used. In the following example, the `Bugatti Veyron Super Sport` and `SSC Ultimate Aero` items are disabled by default and by clicking `Enable Items` buttons, the disabled items will be enabled.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/list-box/enable-items-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/enable-items-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/enable-items-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/list-box/enable-items-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/enable-items-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/list-box/enable-items-cs1" %}
{% endif %}