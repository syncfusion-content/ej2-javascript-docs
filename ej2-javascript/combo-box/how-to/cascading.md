---
layout: post
title: How to configure cascading in ##Platform_Name## ComboBox | Syncfusion
description: Configure a cascading Syncfusion ##Platform_Name## ComboBox where the parent's change event loads the child's data and dataBind reflects updates.
platform: ej2-javascript
control: Cascading 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to configure cascading in ##Platform_Name## ComboBox

The cascading ComboBox is a series of ComboBox, where the value of one ComboBox depends upon  another's value. This can be configured by using the [`change`](https://ej2.syncfusion.com/javascript/documentation/api/combo-box/index-default#change) event of the parent ComboBox. Within that change event handler, data has to be loaded to the child ComboBox based on the selected value of the parent ComboBox.

The following example, shows the cascade behavior of country, state, and city ComboBox. Here, the [`dataBind`](https://ej2.syncfusion.com/javascript/documentation/api/combo-box/index-default#databind) method is used to reflect the property changes immediately to the ComboBox.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/combobox/cascading-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/cascading-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/cascading-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/combobox/cascading-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/cascading-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/combobox/cascading-cs1" %}
{% endif %}