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

MultiSelect component inside form can be validated through `FormValidator`. Add the name attribute of component to be validated inside rules of FormValidator. Error message after validation can be placed in DOM based on the requirement through customPlacement.

In the following sample, validation is added for MultiSelect component.

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