---
layout: post
title: Style appearance in ##Platform_Name## Textbox control | Syncfusion
description: Learn here all about Style appearance in Syncfusion ##Platform_Name## Textbox control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Style appearance 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in ##Platform_Name## Textbox control

The [Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material) for Essential JS 2 can be used to customize a new theme from an existing theme. It allows modification and preview for primary font and color as well as secondary font and color of the chosen theme. This section covers the instructions and techniques to customize the appearance and styling of the TextBox component beyond the basic requirement provided by the theme studio.

>Note: The styling and customization provided in this section will be applied globally for all the Textbox in the page when used as such. To apply the customization only to a specific textbox component, the [cssClass](https://ej2.syncfusion.com/documentation/api/textbox#cssclass) property can be used. [cssClass](https://ej2.syncfusion.com/documentation/api/textbox#cssclass) API adds the custom class attribute to the textbox component, using which the styling can be restricted to the specific component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textbox/textbox-cssclass-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textbox/textbox-cssclass-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textbox/textbox-cssclass-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/textbox-cssclass-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textbox/textbox-cssclass-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textbox/textbox-cssclass-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textbox/textbox-cssclass-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textbox/textbox-cssclass-cs1" %}
{% endif %}

## Filled and Outline mode

The Filled and Outline modes can be enabled in the Textbox component by adding the `e-outline` or `e-filled` class to the [cssClass](https://ej2.syncfusion.com/documentation/api/textbox#cssclass) API.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textbox/filled-outlined-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textbox/filled-outlined-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textbox/filled-outlined-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/filled-outlined-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textbox/filled-outlined-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textbox/filled-outlined-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textbox/filled-outlined-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textbox/filled-outlined-cs1" %}
{% endif %}

>Note: Filled and Outline theme customization are available only with Material theme.