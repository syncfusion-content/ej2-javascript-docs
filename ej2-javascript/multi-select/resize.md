---
layout: post
title: Resizing in ##Platform_Name## MultiSelect Dropdown | Syncfusion
description: Let users resize the Syncfusion ##Platform_Name## MultiSelect Dropdown popup dynamically and retain the dimensions across sessions.
platform: ej2-javascript
control: Resizing
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Resizing in ##Platform_Name## MultiSelect Dropdown

You can dynamically adjust the size of the popup in the MultiSelect component by using the [`allowResize`](https://ej2.syncfusion.com/javascript/documentation/api/multi-select#allowresize) property. When enabled, users can resize the popup, and the resized dimensions are retained across sessions for a consistent user experience.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/basic-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/basic-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/basic-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/basic-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/basic-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/basic-cs18" %}

{% endif %}

![Resizing in Multi select Component](../images/multiselect-resize.gif)