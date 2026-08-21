---
layout: post
title: How to customize Radio Button appearance in ##Platform_Name## Radio Button | Syncfusion
description: Learn how to customize the ##Platform_Name## Radio Button appearance with primary, success, info, warning, and danger CSS classes.
platform: ej2-javascript
control: Customize radiobutton appearance 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to customize Radio Button appearance in ##Platform_Name## Radio Button

You can customize the appearance of the RadioButton component by using the CSS rules. Define own CSS rules according to your requirement and assign the class name to the [`cssClass`](../../api/radio-button/#cssclass) property.

The background and border color of the RadioButton is customized through the custom classes to create the primary, success, info, warning, and danger type of RadioButton.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/radio-button/howto-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/radio-button/howto-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/radio-button/howto-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/radio-button/howto-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/radio-button/howto-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/radio-button/howto-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/radio-button/howto-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/radio-button/howto-cs1" %}
{% endif %}