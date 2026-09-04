---
layout: post
title: How to add tooltip in ##Platform_Name## Dropdown List | Syncfusion
description: Show a Syncfusion ##Platform_Name## Tooltip on hover for each Dropdown List option to display extra information about the item.
platform: ej2-javascript
control: Tooltip 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to show options with tooltip in ##Platform_Name## Dropdown List

You can achieve this behavior by using the `ej2-tooltip` component. When the mouse hovers over a DropDownList option, the tooltip displays details about that list item.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/how-to/tooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/how-to/tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/how-to/tooltip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/how-to/tooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/how-to/tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/how-to/tooltip-cs1" %}
{% endif %}