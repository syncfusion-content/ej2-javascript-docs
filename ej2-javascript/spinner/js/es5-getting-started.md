---
layout: post
title: Es5 getting started with ##Platform_Name## Spinner control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Spinner control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Spinner control

Initialize the Spinner using `createSpinner` method and show/hide the spinner using `showSpinner` and `hideSpinner` methods accordingly. Set the target to the spinner to render it based on specific target.

```ts
  createSpinner({
    target: document.getElementById('container')
  });
```

* Show and hide this spinner by using `showSpinner` and `hideSpinner` methods for loading in your page.

## Create the Spinner globally

The Spinner can be render globally in a page using public exported functions of the `ej.popups`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spinner/intro-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spinner/intro-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spinner/intro-cs1" %}