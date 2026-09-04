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

# How to clear an item in the ##Platform_Name## Dropdown List

You can clear the selected item in the following two different ways.

By clicking the `clear icon` shown on the DropDownList element, you can clear the selected item through **interaction**. By setting the [`showClearButton`](../../api/drop-down-list#showclearbutton) property, you can enable the clear icon on the DropDownList element.

**Programmatically**, you can set a `null` value to any of the `index`, `text`, or `value` properties to clear the selected item in the DropDownList.

The following example demonstrates how to clear the selected item in the DropDownList.

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