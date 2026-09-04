---
layout: post
title: Custom Value in ##Platform_Name## MultiSelect Dropdown | Syncfusion
description: Allow users to add new options to the Syncfusion ##Platform_Name## MultiSelect Dropdown with allowCustomValue and a customValueSelection event.
platform: ej2-javascript
control: Custom value 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Custom Value in ##Platform_Name## MultiSelect Dropdown

The MultiSelect allows users to add a new option that is not already present in the component's value when [`allowCustomValue`](../api/multi-select#allowcustomvalue) is enabled. When a new custom value is selected, the [`customValueSelection`](../api/multi-select#customvalueselection) event is triggered.

The following sample demonstrates the custom value support configuration with the MultiSelect component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/basic-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/basic-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/basic-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/basic-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/basic-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/basic-cs5" %}
{% endif %}
