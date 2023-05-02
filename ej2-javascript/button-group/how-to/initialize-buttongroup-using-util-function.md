---
layout: post
title: Initialize buttongroup using util function in ##Platform_Name## Button group control | Syncfusion
description: Learn here all about Initialize buttongroup using util function in Syncfusion ##Platform_Name## Button group control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Initialize buttongroup using util function 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Initialize buttongroup using util function in ##Platform_Name## Button group control

Though, it is a CSS component for easy initialization of ButtonGroup `createButtonGroup` util function can be used.

To use `createButtonGroup` util function, [`SplitButton dependencies`](./../../split-button/getting-started#dependencies) should be configured and added in `system.config.js` and it should also be imported in `script` file.

Using `createButtonGroup` method, the button options, selector, and cssClass is passed and the corresponding classes is added to the elements.

## Create basic ButtonGroup

To create a basic ButtonGroup, the target element along with the button elements should be created in `index.html` file.

## Create radio type ButtonGroup

To create a radio type ButtonGroup, the target element along with the input elements should be created with type `radio` in `index.html`.

## Create checkbox type ButtonGroup

Checkbox type ButtonGroup creation is similar to radio type ButtonGroup, instead the type of the input elements should be `checkbox`.

The following example illustrates how to create ButtonGroup using `createButtonGroup` function for basic, checkbox, and radio
type behaviors.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/button-group/basic-util-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button-group/basic-util-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/basic-util-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/button-group/basic-util-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button-group/basic-util-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/button-group/basic-util-cs1" %}
{% endif %}

> If null value is passed in button options, then that particular button will be skipped from processing in `createButtonGroup` util function.