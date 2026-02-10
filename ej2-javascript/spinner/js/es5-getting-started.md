---
layout: post
title: Getting started with ##Platform_Name## Spinner control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Spinner control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Spinner control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Spinner and demonstrate the basic usage of the Spinner control in a JavaScript application.

## Dependencies

The following list of dependencies are required to use spinner in your application.

```javascript

|-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-base

```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Spinner control.

## Create Spinner

Initialize the Spinner using the `createSpinner` method and show/hide the spinner using the `showSpinner` and `hideSpinner` methods. Set the target to render the spinner based on a specific element:

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