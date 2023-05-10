---
layout: post
title: Customize button appearance in ##Platform_Name## Button control | Syncfusion
description: Learn here all about Customize button appearance in Syncfusion ##Platform_Name## Button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize button appearance 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize button appearance in ##Platform_Name## Button control

You can customize the appearance of the Button by using the Cascading Style Sheets (CSS). Define the CSS according to your requirement, and assign the class name to the [`cssClass`](../../api/button#cssclass) property. In the following code snippet the background color, text color, height, width, and sharp corner of the Button can be customized through the `e-custom` class for all states (hover, focus, and active).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/button/howto-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button/howto-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/howto-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/button/howto-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button/howto-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/button/howto-cs1" %}
{% endif %}