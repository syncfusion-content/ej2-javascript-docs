---
layout: post
title: Getting started with ##Platform_Name## Avatar control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Avatar control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Avatar control

The following section explains the steps required to create a simple avatar component using styles and its basic usage.

## Dependencies

Install the following required dependent packages to render the avatar component.

```javascript
|-- @syncfusion/ej2-layouts
```

## Set up your development environment

To get started with the `Avatar` component, you can clone the [`Essential JS 2 quickstart`](https://github.com/syncfusion/ej2-quickstart) project, and install the packages by using the following commands.

  ```
   git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
   cd quickstart
   npm install
  ```

> By default, the project is configured with all the Essential JS 2 dependencies. As avatar is a pure CSS component, do not configure the `src/system.config.js` file. You can remove the file.

## Include avatar theme file

The avatar CSS files are available in the `ej2-layouts` package folder. This can be referenced in your application using the following code.

`[src/styles/styles.css]`

```
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-layouts/styles/material.css';
```

## Add avatar into the application

Add an HTML span element with `e-avatar` class into your `index.html`.

`[src/index.html]`

```
<span class="e-avatar">GR</span>
```

## Run the application

Run the application in the browser using the following command.

  ```
    npm start
  ```

The following example shows a basic avatar component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/avatar/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/avatar/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/avatar/getting-started-cs1" %}

## See Also

[Types of Avatar](./types/)
