---
layout: post
title: Localization in ##Platform_Name## Dropdown List | Syncfusion
description: Localize Syncfusion ##Platform_Name## Dropdown List static text such as noRecordsTemplate and actionFailureTemplate for any culture using the L10n library.
platform: ej2-javascript
control: Localization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Localization in ##Platform_Name## Dropdown List

The Localization library allows you to localize static text content of the [noRecordsTemplate](../api/drop-down-list/#norecordstemplate)
and [actionFailureTemplate](../api/drop-down-list/#actionfailuretemplate) &nbsp;properties according to the culture currently assigned to the DropDownList.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No records found |
| actionFailureTemplate | The request failed |

## Loading translations

To load translation object to your application, use load function of the **L10n** class.

In the following sample, French culture is set to the DropDownList and no data is loaded. Hence, the [`noRecordsTemplate`](../api/drop-down-list/#norecordstemplate) property displays its text in French culture initially, and if the sample is run offline, the[`actionFailureTemplate`](../api/drop-down-list/#actionfailuretemplate) property displays its text appropriately.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/basic-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/basic-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/basic-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/basic-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs13" %}
{% endif %}

## See Also

* [Accessibility](./accessibility)
* [How to bind the data to the combobox](./data-binding)