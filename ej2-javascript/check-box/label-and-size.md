---
layout: post
title: Label and size in ##Platform_Name## Check box control | Syncfusion
description: Learn here all about Label and size in Syncfusion ##Platform_Name## Check box control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Label and size 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Label and size in ##Platform_Name## Check box control

This section explains the different sizes and labels.

## Label

The CheckBox caption can be defined by using the [`label`](../api/check-box#label) property. This reduces the manual addition of label for CheckBox. You can customize the label position before or after the CheckBox through the [`labelPosition`](../api/check-box#labelposition) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/check-box/label-and-size-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/check-box/label-and-size-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/check-box/label-and-size-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/check-box/label-and-size-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/check-box/label-and-size-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/check-box/label-and-size-cs1" %}
{% endif %}

## Size

The different CheckBox sizes available are default and small. To reduce the size of default CheckBox to small, set the [`cssClass`](../api/check-box#cssclass) property to `e-small`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/check-box/label-and-size-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/check-box/label-and-size-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/check-box/label-and-size-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/check-box/label-and-size-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/check-box/label-and-size-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/check-box/label-and-size-cs2" %}
{% endif %}

## See Also

* [CheckBox customization](./how-to/customized-checkbox)
