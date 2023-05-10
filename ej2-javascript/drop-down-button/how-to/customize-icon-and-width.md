---
layout: post
title: Customize icon and width in ##Platform_Name## Drop down button control | Syncfusion
description: Learn here all about Customize icon and width in Syncfusion ##Platform_Name## Drop down button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize icon and width 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize icon and width in ##Platform_Name## Drop down button control

Width of the DropDownButton can be customized by setting required width to the dropdown element.

The following UI can be achieved by setting [`iconPosition`](https://ej2.syncfusion.com/documentation/api/drop-down-button/dropDownButtonModel/#iconposition) as `Top`, width as `85px` and size of the font icon as `40px` by adding `e-custom` class.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/drop-down-button/custom-width-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/custom-width-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/custom-width-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/drop-down-button/custom-width-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/custom-width-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/custom-width-cs1" %}
{% endif %}