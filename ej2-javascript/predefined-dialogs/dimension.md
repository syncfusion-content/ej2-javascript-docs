---
layout: post
title: Dimension in ##Platform_Name## Predefined dialogs control | Syncfusion
description: Learn here all about Dimension in Syncfusion ##Platform_Name## Predefined dialogs control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Dimension 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Dimension in ##Platform_Name## Predefined dialogs control

Customize the predefined dialogs dimensions using the `height` and `width` properties. You can specify the dimension values in both pixels and percentage format to change the default dialog width and height values.

## Alert dimension

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/predefined-dialogs/alert-dimension-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/alert-dimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/alert-dimension-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/predefined-dialogs/alert-dimension-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/alert-dimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/predefined-dialogs/alert-dimension-cs1" %}
{% endif %}

## Confirm dimension

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/predefined-dialogs/confirm-dimension-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/confirm-dimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/confirm-dimension-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/predefined-dialogs/confirm-dimension-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/confirm-dimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/predefined-dialogs/confirm-dimension-cs1" %}
{% endif %}

## Prompt dimension

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/predefined-dialogs/prompt-dimension-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/prompt-dimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/prompt-dimension-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/predefined-dialogs/prompt-dimension-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/prompt-dimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/predefined-dialogs/prompt-dimension-cs1" %}
{% endif %}

## Max-width and max-height

To have a restricted max-width and max-height dialog dimension, you need to specify the max-width, max-height CSS properties for the component’s container element by using the `cssClass` property. The max-height value is calculated in source level and set to the dialog. so, need to override the max-height property.

Use the following code to customize the max-width and max-height for alert dialog:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/predefined-dialogs/maxWidth-maxHeight-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/maxWidth-maxHeight-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/maxWidth-maxHeight-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/predefined-dialogs/maxWidth-maxHeight-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/maxWidth-maxHeight-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/predefined-dialogs/maxWidth-maxHeight-cs1" %}
{% endif %}

## Min-width and min-height

To have a restricted min-width and min-height dialog dimension, you need to specify the min-width, min-height CSS properties for the component’s container element by using the `cssClass` property.

Use the following code to customize the min-width and min-height for alert dialog:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/predefined-dialogs/minWidth-minHeight-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/minWidth-minHeight-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/minWidth-minHeight-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/predefined-dialogs/minWidth-minHeight-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/minWidth-minHeight-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/predefined-dialogs/minWidth-minHeight-cs1" %}
{% endif %}
