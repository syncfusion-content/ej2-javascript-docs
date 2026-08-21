---
layout: post
title: Resizing in ##Platform_Name## Dropdown List | Syncfusion
description: Enable a resizable Syncfusion ##Platform_Name## Dropdown List popup via allowResize so users can adjust the dropdown size, with dimensions persisted.
platform: ej2-javascript
control: Resizing
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Resizing in ##Platform_Name## Dropdown List

You can dynamically adjust the size of the popup in the Autocomplete component by using the [AllowResize](https://ej2.syncfusion.com/javascript/documentation/api/drop-down-list/#allowresizee) property. When enabled, users can resize the popup, improving visibility and control, with the resized dimensions being retained across sessions for a consistent user experience.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/basic-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/basic-cs15/index.html %}
{% endhighlight %}
{% endtabs %}        

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/basic-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/basic-cs15/index.html %}
{% endhighlight %}
{% endtabs %}


{% endif %}

![Resizing in DropDownList Component](../images/dropdownlist-resize.gif)
