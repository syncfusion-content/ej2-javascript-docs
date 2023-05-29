---
layout: post
title: Create dropdownbutton with rounded corner in ##Platform_Name## Drop down button control | Syncfusion
description: Learn here all about Create dropdownbutton with rounded corner in Syncfusion ##Platform_Name## Drop down button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Create dropdownbutton with rounded corner 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Create dropdownbutton with rounded corner in ##Platform_Name## Drop down button control

DropDownButton with rounded corner can be achieved by adding `border-radius` CSS property to button element.

In the following example, `e-round-corner` class is defined with `5px` `border-radius` property and added that class to button element using [`cssClass`](../../api/drop-down-button#cssclass) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/drop-down-button/rounded-drop-down-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/rounded-drop-down-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/drop-down-button/rounded-drop-down-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/rounded-drop-down-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/drop-down-button/rounded-drop-down-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/rounded-drop-down-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/drop-down-button/rounded-drop-down-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/rounded-drop-down-cs1" %}
{% endif %}