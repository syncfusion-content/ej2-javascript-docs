---
layout: post
title: Getting Started with ##Platform_Name## Range Slider | Syncfusion
description: Learn how to set up the ##Platform_Name## Range Slider from scratch using local script references, CDN links, and initialization in a basic HTML page.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Range Slider

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Range Slider and demonstrate the basic usage of the Range Slider control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Range Slider component in your application is given below:

```js
|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Range Slider control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® Slider CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base` scripts are required dependency packages for the Slider component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/slider/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-inputs/dist/global/ej2-inputs.min.js
```


## Adding Slider component to the application

Add the `Slider` element and initialize the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Range Slider** control in the `index.html` file by using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/es5-getting-started-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/slider/es5-getting-started-cs1" %}

## See Also

[Slider Types](./types)

[Slider Formatting](./format)

[Orientation Slider](./orientation)

[Ticks in Slider](./ticks)

[Tooltip in Slider](./tooltip)