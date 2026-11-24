---
layout: post
title: Getting Started with ##Platform_Name## Progress Button | Syncfusion
description: Learn how to get started with the ##Platform_Name## Progress Button in JavaScript (ES5) from package setup to first render.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Progress Button

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Progress button and demonstrate the basic usage of the Progress button control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Progress button component in your application is given below:

```js
|-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Progress button control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and scripts

## Add Syncfusion® Progress Button CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base`, `ej2-popups`, `ej2-splitbuttons` scripts are required dependency packages for the Progress Button component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/progress-button/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js
```

## Adding Progress Button component to the application

Add the `ProgressButton` element and initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript ProgressButton** control in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/progress-button/es5-getting-started-cs1" %}

## Enabling Progress in Button

You can enable the background filler UI by setting the `enableProgress` property to `true`:

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/progress-button/es5-getting-started-cs2" %}

## See Also

* [Spinner and Progress options](spinner-and-progress#spinner)