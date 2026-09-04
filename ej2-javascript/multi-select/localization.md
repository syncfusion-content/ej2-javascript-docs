---
layout: post
title: Localization in ##Platform_Name## MultiSelect Dropdown | Syncfusion
description: Localize the noRecordsTemplate and actionFailureTemplate text of the Syncfusion ##Platform_Name## MultiSelect Dropdown to any culture.
platform: ej2-javascript
control: Localization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Localization in ##Platform_Name## MultiSelect Dropdown

The Localization library allows you to localize the static text content displayed by the [`noRecordsTemplate`](../api/multi-select#norecordstemplate) and [`actionFailureTemplate`](../api/multi-select#actionfailuretemplate) properties according to the culture currently assigned to the MultiSelect.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No records found |
| actionFailureTemplate | The request failed |

## Loading translations

To load a translation object into your application, use the `load` function of the **L10n** class.

In the following sample, the French culture is set for the MultiSelect and no data is loaded. As a result, the [`noRecordsTemplate`](../api/multi-select#norecordstemplate) property displays its text in French initially, and if the sample is run offline, the [`actionFailureTemplate`](../api/multi-select#actionfailuretemplate) property displays its corresponding text.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/basic-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/basic-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/basic-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/basic-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/basic-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/basic-cs16" %}
{% endif %}

## See Also

* [Accessibility](./accessibility)
* [How to bind data to the MultiSelect](./data-binding)