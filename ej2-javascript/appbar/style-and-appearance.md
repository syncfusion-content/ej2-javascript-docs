---
layout: post
title: Style and appearance in ##Platform_Name## Appbar control | Syncfusion
description: Learn here all about Style and appearance in Syncfusion ##Platform_Name## Appbar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Style and appearance 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in ##Platform_Name## Appbar control

To modify the AppBar appearance, you need to override the default CSS of the AppBar component. Please find the list of CSS classes and their corresponding sections in the AppBar component. Also, you have an option to create your own custom theme for the controls using our [Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material).

|CSS Class | Purpose of Class |
|-----|----- |
|.e-appbar|To customize the appbar.|
|.e-appbar.e-prominent|To customize the prominent appbar.|
|.e-appbar.e-dense|To customize the dense appbar.|
|.e-appbar.e-light|To customize the light appbar.|
|.e-appbar.e-dark|To customize the dark appbar.|
|.e-appbar.e-primary|To customize the dark appbar.|
|.e-appbar.e-inherit|To customize the inherit appbar.|

>Note: You can change the prominent AppBar height if larger titles, images, or texts are used.

## CssClass

CssClass is used for AppBar customization based on the custom class. In the example below, the AppBar background and color are customized using the [cssClass](../api/appbar#cssclass) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/appbar/cssclass-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/appbar/cssclass-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/appbar/cssclass-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/appbar/cssclass-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/appbar/cssclass-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/appbar/cssclass-cs1" %}
{% endif %}

## HtmlAttributes

It can be used for additional inline attributes by specifying as inline attributes or by specifying htmlAttributes directive. In the code example below, the aria-label of the AppBar is customized by specifying as attributes.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/appbar/htmlattributes-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/appbar/htmlattributes-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/appbar/htmlattributes-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/appbar/htmlattributes-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/appbar/htmlattributes-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/appbar/htmlattributes-cs1" %}
{% endif %}