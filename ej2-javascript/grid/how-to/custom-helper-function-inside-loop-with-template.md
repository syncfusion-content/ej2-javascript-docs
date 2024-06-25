---
layout: post
title: Custom helper function with template in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Custom helper function inside loop with template in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Custom helper function inside loop with template 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Use custom helper with templates in ##Platform_Name## Grid control

The Syncfusion ##Platform_Name## Grid allows you to use custom helpers inside the loop with `template` property of a column. This feature enables you to create complex templates that can incorporate additional helper functions.

The **Customer Rating** column includes a custom template defined using `template`. Inside this template, iterates through the **item** array and generates `<span>` tag, displayed as stars using the CSS below:

```css
.e-grid .rating .star:before {
    content: '★';
}

.e-grid .rating .star {
    font-size: 132%;
    color: lightgrey;
}
```

The class is dynamically assigned based on the rating value, highlighting the stars using the CSS below:

```css
.e-grid .rating .star.checked {
    color: #ffa600;
}
```

This is demonstrated in the following example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/custom-help-function-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-help-function-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/custom-help-function-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/custom-help-function-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-help-function-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/custom-help-function-cs1" %}
{% endif %}