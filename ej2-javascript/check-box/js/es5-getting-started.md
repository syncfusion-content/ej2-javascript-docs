---
layout: post
title: Es5 getting started with ##Platform_Name## Check box control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Check box control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Check box control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 CheckBox and demonstrate the basic usage of the CheckBox control in a JavaScript application.

## Dependencies

The list of dependencies required to use the CheckBox component in your application is given below:

```js
|-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 CheckBox control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® CheckBox CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base` scripts are required dependency packages for the CheckBox component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/check-box/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
```

## Adding CheckBox component to the application

Add the `CheckBox` element and initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript CheckBox** control in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/check-box/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/check-box/es5-getting-started-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/check-box/es5-getting-started-cs1" %}

### Indeterminate State

The CheckBox indeterminate state can be set through [`indeterminate`](https://ej2.syncfusion.com/javascript/documentation/api/check-box/index-default#indeterminate) property. CheckBox indeterminate state masks the real value of CheckBox visually. The Checkbox cannot be changed to indeterminate state through the user interface, this state can be achieved only through the property.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/check-box/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/check-box/es5-getting-started-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/check-box/es5-getting-started-cs2" %}
