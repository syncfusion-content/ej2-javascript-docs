---
layout: post
title: Set title in ##Platform_Name## Menu control | Syncfusion
description: Learn here all about Set title in Syncfusion ##Platform_Name## Menu control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Set title 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Set title in ##Platform_Name## Menu control

In Menu , we can provide title for menu items by using title property in 'beforeItemRender' client-side event in Menu component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/title-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/title-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/title-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/title-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/title-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/title-cs1" %}
{% endif %}