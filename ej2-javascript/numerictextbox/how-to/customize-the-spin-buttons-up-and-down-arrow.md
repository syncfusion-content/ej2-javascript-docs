---
layout: post
title: Customize spin buttons in ##Platform_Name## Numeric Textbox | Syncfusion
description: Customize the up and down arrow icons on the Syncfusion ##Platform_Name## Numeric Textbox spin buttons by overriding the e-spin-up and e-spin-down CSS classes.
platform: ej2-javascript
control: Customize the spin buttons up and down arrow 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to customize spin buttons in ##Platform_Name## Numeric Textbox

This section explains about how to change/customize spin up and down icons. You can customize spin button icons using `e-spin-up` and `e-spin-down` classes of those buttons.

You can override the default icons of `e-spin-up` and `e-spin-down` classes using the following CSS code snippets.

```
  .e-numeric .e-input-group-icon.e-spin-up:before {
    content: "\e823";
    color: rgba(0, 0, 0, 0.54);
  }
  .e-numeric .e-input-group-icon.e-spin-down:before {
    content: "\e934";
    color: rgba(0, 0, 0, 0.54);
  }
```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/numeric-textbox/custom-icons-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/custom-icons-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/numeric-textbox/custom-icons-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/custom-icons-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/numeric-textbox/custom-icons-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/custom-icons-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/numeric-textbox/custom-icons-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/numeric-textbox/custom-icons-cs1" %}
{% endif %}