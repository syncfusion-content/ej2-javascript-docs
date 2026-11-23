---
layout: post
title: Getting Started with ##Platform_Name## Floating Action Button | Syncfusion
description: Learn how to get started with the ##Platform_Name## Floating Action Button in JavaScript (ES5) from package setup to first render.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Floating Action Button

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Floating Action Button and demonstrate the basic usage of the Floating Action Button control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Floating Action Button component in your application is given below:

```js
|-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Floating Action Button control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® Floating Action Button CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base` scripts are required dependency packages for the Floating Action Button component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/floating-action-button/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
```

## Adding Floating Action Button component to the application

Add the `Floating Action Button` element and initiate the `JavaScript (ES5) Floating Action Button` control in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/floating-action-button/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/floating-action-button/es5-getting-started-cs1" %}

## Click event

The Floating Action Button control triggers the `onclick` event when clicked. You can use this event to perform the required action:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/floating-action-button/events-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/floating-action-button/events-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/floating-action-button/events-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/floating-action-button/events-cs1" %}
