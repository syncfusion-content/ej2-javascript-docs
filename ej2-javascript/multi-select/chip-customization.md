---
layout: post
title: Chip Customization in ##Platform_Name## MultiSelect Dropdown | Syncfusion
description: Customize the selected chip element of the Syncfusion ##Platform_Name## MultiSelect Dropdown via the tagging event and setClass method.
platform: ej2-javascript
control: Chip customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Chip Customization in ##Platform_Name## MultiSelect Dropdown

The MultiSelect allows the user to customize the selected chip element through the [`tagging`](../api/multi-select#tagging) event. Within that event, you can set custom CSS classes on the chip element by using the `setClass` method on the event argument.

The following sample demonstrates chip customization with the MultiSelect component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/chip-customization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/chip-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/chip-customization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/chip-customization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/chip-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/chip-customization-cs1" %}
{% endif %}
