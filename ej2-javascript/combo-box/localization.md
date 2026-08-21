---
layout: post
title: Localization in ##Platform_Name## ComboBox | Syncfusion
description: Localize Syncfusion ##Platform_Name## ComboBox static text such as noRecordsTemplate and actionFailureTemplate for any culture using the L10n library.
platform: ej2-javascript
control: Localization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Localization in ##Platform_Name## ComboBox

The Localization library allows you to localize static text content of the [noRecordsTemplate](https://ej2.syncfusion.com/javascript/documentation/api/combo-box/index-default#norecordstemplate) and [actionFailureTemplate](https://ej2.syncfusion.com/javascript/documentation/api/combo-box/index-default#actionfailuretemplate) &nbsp;properties according to the culture currently assigned to the ComboBox.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No records found |
| actionFailureTemplate | The request failed |

## Loading translations

To load translation object to your application, use `load` function of **L10n** class.

In the following sample, French culture is set to the ComboBox and no data is loaded. Hence, the [`noRecordsTemplate`](https://ej2.syncfusion.com/javascript/documentation/api/combo-box/index-default#norecordstemplate) property displays its text in French culture initially, and if the sample is run offline, the [`actionFailureTemplate`](https://ej2.syncfusion.com/javascript/documentation/api/combo-box/index-default#actionfailuretemplate) property displays its text appropriately.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/combobox/basic-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/basic-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/basic-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/combobox/basic-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/basic-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/combobox/basic-cs10" %}
{% endif %}

## See Also

* [Accessibility](./accessibility)
* [How to bind the data to the combobox](./data-binding)