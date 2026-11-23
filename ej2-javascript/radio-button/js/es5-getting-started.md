---
layout: post
title: Getting Started with ##Platform_Name## Radio Button | Syncfusion
description: Learn how to get started with the ##Platform_Name## Radio Button in JavaScript (ES5) from package setup to first render.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Radio Button

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Radio button and demonstrate the basic usage of the Radio button control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Radio button component in your application is given below:

```js
|-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Radio button control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® RadioButton CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base` scripts are required dependency packages for the RadioButton component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/radio-button/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
```

## Adding Radio Button component to the application

Add the `RadioButton` element and initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> Javascript RadioButton** control in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/radio-button/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/radio-button/es5-getting-started-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/radio-button/es5-getting-started-cs1" %}

## Change the RadioButton state

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 RadioButton contains 2 states visually, they are as follows:
* Checked
* Unchecked

The RadioButton [`checked`](../api/radio-button#checked) property is used to handle the checked and unchecked state. In the checked state an inner circle will be added to the visualization of RadioButton.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/radio-button/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/radio-button/es5-getting-started-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/radio-button/es5-getting-started-cs2" %}

## See Also

* [How to programmatically select a JavaScript RadioButton](https://www.syncfusion.com/forums/168711)