---
layout: post
title: Validation in ##Platform_Name## MultiSelect Dropdown | Syncfusion
description: Validate the Syncfusion ##Platform_Name## MultiSelect Dropdown inside a form using FormValidator rules and a customPlacement error message.
platform: ej2-javascript
control: Validation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Validation in ##Platform_Name## MultiSelect Dropdown

The MultiSelect component inside a form can be validated using `FormValidator`. Add the `name` attribute of the component to be validated in the rules of the `FormValidator`. The error message after validation can be placed in the DOM based on the requirement using `customPlacement`.

In the following sample, validation is added for the MultiSelect component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/validation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/validation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/validation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/validation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/validation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/validation-cs1" %}
{% endif %}