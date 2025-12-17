---
layout: post
title: Adornments in ##Platform_Name## NumericTextBox Control | Syncfusion
description: Learn how to add adornments in Syncfusion ##Platform_Name## NumericTextBox control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Adornments
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Adornments in ##Platform_Name## NumericTextBox control

Adornments allow you to add custom elements before or after the numeric textbox using the `prependTemplate` and `appendTemplate` properties. These elements can include currency symbols, unit labels, or action icons to provide context and quick actions without affecting numeric behavior or float label functionality.

## Common Use Cases

- **Currency Symbols**: Add indicators like $, €, ¥ for monetary inputs.
- **Unit Labels**: Show measurement units (kg, cm, km).
- **Action Icons**: Include buttons for clear, reset, or custom actions.
- **Visual Context**: Display icons for input type or status.

## Adding Adornments to NumericTextBox

Use `prependTemplate` and `appendTemplate` to inject HTML content before and after the masked input respectively. These templates do not alter mask behavior and support any inline HTML or icon.

**prependTemplate**: Renders elements before the numeric textbox.
**appendTemplate**: Renders elements after the numeric textbox.

The following example demonstrates how to add adornments in the NumericTextBox control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/numeric-textbox/adornments-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/adornments-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/numeric-textbox/adornments-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/adornments-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/numeric-textbox/adornments-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/adornments-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/numeric-textbox/adornments-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/numeric-textbox/adornments-cs1" %}
{% endif %}
