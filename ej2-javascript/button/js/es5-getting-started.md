---
layout: post
title: Es5 getting started with ##Platform_Name## Button control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Button control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Button control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Button and demonstrate the basic usage of the Button control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Button component in your application is given below:

```js
|-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Button control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® Button CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base` scripts are required dependency packages for the Button component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/button/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
```

## Adding Button component to the application

Add the Button element and initialize the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) Button** control in `index.html` using the following code:

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/es5-getting-started-cs1" %}

## Change Button type

To change the default Button to flat Button, set the [`cssClass`](https://ej2.syncfusion.com/javascript/documentation/api/button/index-default#cssclass) property to `e-flat`.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/es5-getting-started-cs2" %}

## See Also

* [Types of Button](https://ej2.syncfusion.com/javascript/documentation/button/types-and-styles#button-types)