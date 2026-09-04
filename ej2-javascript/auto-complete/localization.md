---
layout: post
title: Localization in ##Platform_Name## AutoComplete | Syncfusion
description: Localize Syncfusion ##Platform_Name## AutoComplete static text such as noRecordsTemplate and actionFailureTemplate for any culture using the L10n library.
platform: ej2-javascript
control: Localization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Localization in ##Platform_Name## AutoComplete

The Localization library allows you to localize the static text content displayed by the [noRecordsTemplate](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#norecordstemplate) and [actionFailureTemplate](https://ej2.syncfusion.com/javascript/documentation/api/auto-complete/index-default#actionfailuretemplate) properties according to the culture currently assigned to the AutoComplete.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No Records Found |
| actionFailureTemplate | The Request Failed |

## Loading translations

To load a translation object into your application, use the `load` function of the **L10n** class.

In the following sample, the French culture is assigned to the AutoComplete and no data is loaded. As a result, the `noRecordsTemplate` property displays its text in French initially. If the sample is run offline, the `actionFailureTemplate` property displays the corresponding localized text.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/autocomplete/basic-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/basic-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/autocomplete/basic-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/autocomplete/basic-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs10" %}
{% endif %}

## See Also

* [Accessibility](./accessibility)
* [How to bind data to the AutoComplete](./data-binding)