---
layout: post
title: How to clear item in ##Platform_Name## Dropdown List | Syncfusion
description: Clear the selected Syncfusion ##Platform_Name## Dropdown List item using the clear icon with showClearButton or by setting index, text, or value to null.
platform: ej2-javascript
control: Clear item 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to clear item in ##Platform_Name## Dropdown List

You can clear the selected item in the below two different ways.

By clicking on the `clear icon` which is shown in DropDownList element, you can clear the selected item in DropDownList through **interaction**. By using [showClearButton](../../api/drop-down-list/#showclearbutton) property, you can enable the clear icon in DropDownList element.

Through **programmatic** you can set `null` value to anyone of the index, text or value property to clear the selected item in DropDownList.

The following example demonstrate about how to clear the selected item in DropDownList.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/how-to/clear-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/how-to/clear-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/how-to/clear-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/how-to/clear-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/how-to/clear-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/how-to/clear-cs1" %}
{% endif %}