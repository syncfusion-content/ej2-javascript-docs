---
layout: post
title: Getting started with ##Platform_Name## Badge control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Badge control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Badge control

The following section explains how to create a simple badge component using styles and badge’s basic usage.

## Dependencies

Install the following required dependent package to render the `Badge` component.

```javascript
|-- @syncfusion/ej2-notifications
```

## Set up your development environment

To get started with a badge component, clone the [`Essential JS 2 quickstart`](https://github.com/syncfusion/ej2-quickstart) project, and install the packages by using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> By default, the project is configured with all the Essential JS 2 dependencies. As the badge component is a pure CSS component, do not configure the `src/system.config.js` file. You can remove that file.

## Include badge theme file

The badge CSS files are available in the `ej2-notifications` package folder. This can be referenced in your application using the following code.

`[src/styles/styles.css]`

```
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-notifications/styles/material.css';
```

> We can also use [CRG](https://crg.syncfusion.com/) to generate combined component styles.

## Add badge into application

Add an HTML span element with `e-badge` class inside any wrapper element (h1) into your `index.html`.

`[src/index.html]`

```
<h1>Badge Component <span class="e-badge">New</span></h1>
```

## Run the application

Run the application in the browser using the following command.

```
npm start
```

The following example shows a basic badge component.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/badge/getting-started-cs1" %}

## See Also

[Types of Badge](./types/)
