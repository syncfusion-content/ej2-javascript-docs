---
layout: post
title: Customize UI appearance in ##Platform_Name## Input Mask | Syncfusion
description: Change the look of the Syncfusion ##Platform_Name## Input Mask by adding a custom cssClass to the component and enabling CSS styles.
platform: ej2-javascript
control: Customize the ui appearance of the control 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to customize UI appearance in ##Platform_Name## Input Mask

The appearance of the MaskedTextBox can be changed by adding custom `cssClass` to the component and enabling styles.

Refer to the following example to change the appearance of the MaskedTextBox.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maskedtextbox/custom-css-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maskedtextbox/custom-css-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maskedtextbox/custom-css-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maskedtextbox/custom-css-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maskedtextbox/custom-css-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maskedtextbox/custom-css-cs1" %}
{% endif %}