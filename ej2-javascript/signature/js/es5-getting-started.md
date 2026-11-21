---
layout: post
title: Getting Started with ##Platform_Name## Signature | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Signature control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Signature

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Signature and demonstrate the basic usage of the Signature control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Signature component in your application is given below:

```js
|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Signature control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® Signature CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base` scripts are required dependency packages for the Signature component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/signature/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-inputs/dist/global/ej2-inputs.min.js
```

## Adding Signature component to the application

Add the HTML canvas tag with the `id` attribute as `signature` to your `index.html` file.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/signature/es5-getting-started-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/es5-getting-started-cs1" %}
