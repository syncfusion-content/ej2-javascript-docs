---
layout: post
title: Getting Started with ##Platform_Name## OTP Input | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## OTP Input control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## OTP Input

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 OTP input and demonstrate the basic usage of the OTP input control in a JavaScript application.

## Dependencies

The list of dependencies required to use the OTP input component in your application is given below:

```js
|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 OTP input control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® OTP Input CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base` scripts are required dependency packages for the OTP Input component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/otp-input/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-inputs/dist/global/ej2-inputs.min.js
```


## Adding OTP Input component to the application

Add the `OTP Input` element and initiate the `JavaScript (ES5) OTP Input` control in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/otp-input/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/otp-input/es5-getting-started-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/otp-input/es5-getting-started-cs1" %}
