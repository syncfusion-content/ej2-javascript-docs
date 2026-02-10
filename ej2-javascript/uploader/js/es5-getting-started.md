---
layout: post
title: Es5 getting started with ##Platform_Name## Uploader control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Uploader control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Uploader control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Uploader and demonstrate the basic usage of the Uploader control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Uploader component in your application is given below:

```js
|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Uploader control.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Uploader control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

## Initialize the uploader

The uploader can be initialized through an input tag. Add an HTML input element to be initialized as an uploader in your `index.html` file.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Uploader component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <div id='container' style="margin:0 auto; width:300px;">
        <!--element which is going to render the Uploader-->
        <input type="file" id='fileupload' />
    </div>

</body>

</html>
```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

Now, import the uploader component in your `app.ts` file and initialize it with the `#uploader` element.

`[src/app/app.ts]`

```ts

// initialize Uploader component
var uploadObject = new ej.inputs.Uploader();
// render initialized Uploader
uploadObject.appendTo('#uploader');

```

## Run the application

After completing the configuration to render the basic uploader, run the following command to display the output in your default browser.

```
npm run start
```

> From v16.2.41 version, the **Essential<sup style="font-size:70%">&reg;</sup> JS2 AJAX** library has been integrated for uploader server requests. Hence, use the third party `promise` library like blue-bird to use the uploader in Internet Explorer.

The following example illustrates the output in your browser.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/getting-started-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/getting-started-cs1" %}

## Adding drop area

By default, the uploader component allows to upload files by drag the files from file explorer, and drop into the drop area.  You can configure any other external element as drop target using [dropArea](https://ej2.syncfusion.com/javascript/documentation/api/uploader/index-default#droparea) property.

In the following sample, drop target is configured.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/drop-area-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/drop-area-cs3/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/drop-area-cs3/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/drop-area-cs3" %}

## Configure asynchronous settings

The uploader component process the files to upload in Asynchronous mode by default. Define the properties [saveUrl](https://ej2.syncfusion.com/javascript/documentation/api/uploader/asyncsettingsmodel#saveurl) and [removeUrl](https://ej2.syncfusion.com/javascript/documentation/api/uploader/asyncsettingsmodel#removeurl) to handle the save and remove action as follows.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/async-settings-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/async-settings-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/async-settings-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/async-settings-cs1" %}

## Handle success and failed upload

You can handle the success and failure actions using the [success](https://ej2.syncfusion.com/javascript/documentation/api/uploader/index-default#success) and [failure](https://ej2.syncfusion.com/javascript/documentation/api/uploader/index-default#failure) &nbsp;events. To handle these event, define the function and assign it to corresponding event as follows.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/success-failed-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/success-failed-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/success-failed-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/success-failed-cs1" %}

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/javascript/demos/#/material/uploader/default.html) that shows how to render the file upload and browse the files which you want to upload to the server.

## See Also

* [How to add additional data on upload](./how-to/add-additional-data-on-upload)
* [Achieve file upload programmatically](./how-to/achieve-file-upload-programmatically)
* [Achieve invisible upload](./how-to/achieve-invisible-upload)
