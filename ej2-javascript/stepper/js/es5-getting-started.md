---
layout: post
title: Es5 getting started with ##Platform_Name## Stepper | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Stepper control in ES5 apps with a simple setup flow.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Stepper

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Dependencies

The following list of dependencies is required to use the Stepper control in your application.

```js
|-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
```

## Create a Folder and HTML File

- Create a folder named `quickstart` in your desired directory.

- Inside the `quickstart` folder, create a new file named `index.html`.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® Stepper CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base` scripts are required dependency packages for the Stepper component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/stepper/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-navigations/dist/global/ej2-navigations.min.js
```

## Adding Stepper component to the application

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stepper/es5-getting-started-cs1" %}

## Configure icon and label

You can define the step icon and label by setting the `iconCss` and `label` properties.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/es5-iconWithLabel-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/es5-iconWithLabel-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stepper/es5-iconWithLabel-cs1" %}