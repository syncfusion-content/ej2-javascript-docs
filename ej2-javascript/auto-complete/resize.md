---
layout: post
title: Resizing in ##Platform_Name## AutoComplete control | Syncfusion
description: Learn here all about Popup Resizing in Syncfusion ##Platform_Name## AutoComplete control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Resizing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Resizing ##Platform_Name## AutoComplete control

You can dynamically adjust the size of the popup in the Autocomplete component by using the [AllowResize](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/#allowresize) property. When enabled, users can resize the popup, improving visibility and control, with the resized dimensions being retained across sessions for a consistent user experience.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/basic-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/basic-cs12/index.html %}
{% endhighlight %}
{% endtabs %}


{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/basic-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/basic-cs12/index.html %}
{% endhighlight %}
{% endtabs %}


{% endif %}

![Resizing in AutoComplete Component](../images/autocomplete-resize.gif)