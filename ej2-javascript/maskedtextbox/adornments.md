---
layout: post
title: Adornments in ##Platform_Name## MaskedTextBox Control | Syncfusion
description: Learn how to add adornments in Syncfusion ##Platform_Name## MaskedTextBox control of Syncfusion Essential JS 2 and more..
platform: ej2-javascript
control: Adornments
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Adornments in ##Platform_Name## MaskedTextBox control

Adornments in the MaskedTextBox control allow you to add custom elements before or after the masked input using the `prependTemplate` and `appendTemplate` properties. These elements can include prefixes, suffix labels, or action icons to provide context, guide user input, and offer quick actions while preserving mask validation and float label behavior.

## Common Use Cases

- **Entry Guidance**: Add icons/text to hint the expected input (e.g., user icon for username/login).
- **Quick Actions**: Include buttons to submit, clear, or copy the masked value.
- **Context Labels**: Add static prefixes/suffixes like country code, domain, or unit suffix.
- **Visual Feedback**: Show status indicators without interfering with the mask.

## Adding Adornments to MaskedTextBox

Use `prependTemplate` and `appendTemplate` to inject HTML content before and after the masked input respectively. These templates do not alter mask behavior and support any inline HTML or icon.

- **prependTemplate**: Renders elements before the masked input.
- **appendTemplate**: Renders elements after the masked input.

The following example demonstrates how to add adornments in the MaskedTextBox control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maskedtextbox/adornments-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maskedtextbox/adornments-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/maskedtextbox/adornments-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maskedtextbox/adornments-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maskedtextbox/adornments-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maskedtextbox/adornments-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/maskedtextbox/adornments-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maskedtextbox/adornments-cs1" %}
{% endif %}

