---
layout: post
title: Getting started with ##Platform_Name## Uploader control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Uploader control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Uploader control

This section explains how to create and configure the simple uploader component.

## Dependencies

The following are the dependencies required to use the uploader component in your application:

```js
|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons

```

## Configuring system JS

[Syncfusion Uploader packages](#dependencies) have to be mapped in the `system.config.js` configuration file.

```javascript
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',
        //Syncfusion packages mapping
         typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js"
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

## Set up of the development environment

To get started with the uploader component, you have to clone the Essential JS 2 [`quickstart`](https://github.com/syncfusion/ej2-quickstart.git) project and install the npm packages by using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

>The [project](https://github.com/syncfusion/ej2-quickstart.git) is preconfigured with common settings (`src/styles/styles.css`, `system.config.js` ) to start all the Essential JS 2 components.

## Initialize the uploader

The uploader can be initialized through input tag. Add the HTML input element that needs to be initialized as a uploader in `index.html`.

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

Now, import the  uploader component to your `app.ts` and initialize it to the element `#fileupload` as follows.

`[src/app/app.ts]`

```ts

import { Uploader } from '@syncfusion/ej2-inputs';

// initialize Uploader component
let uploadObject: Uploader = new Uploader();

// render initialized Uploader
uploadObject.appendTo('#fileupload');

```

## Run the application

After completing the configuration to render the basic uploader, run the following command to display the output in your default browser.

```
npm run start
```

> From v16.2.41 version, the `Essential JS2 AJAX` library has been integrated for uploader server requests. Hence, use the third party `promise` library like blue-bird to use the uploader in Internet Explorer.

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/getting-started-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/getting-started-cs2/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/uploader/getting-started-cs2" %}

## Adding drop area

By default, the uploader component allows to upload files by drag the files from file explorer, and drop into the drop area.  You can configure any other external element as drop target using [dropArea](../api/uploader/#droparea) property.

In the following sample, drop target is configured.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/drop-area-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/drop-area-cs4/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/drop-area-cs4/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/uploader/drop-area-cs4" %}

## Configure asynchronous settings

The uploader component process the files to upload in Asynchronous mode by default. Define the properties [saveUrl](../api/uploader/asyncSettingsModel/#saveurl) and [removeUrl](../api/uploader/asyncSettingsModel/#removeurl) to handle the save and remove action as follows.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/async-settings-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/async-settings-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/async-settings-cs2/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/uploader/async-settings-cs2" %}

## Handle success and failed upload

You can handle the success and failure actions using the [success](../api/uploader/#success) and [failure](../api/uploader/#failure) &nbsp;events. To handle these event, define the function and assign it to corresponding event as follows.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/success-failed-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/success-failed-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/success-failed-cs2/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/uploader/success-failed-cs2" %}

> You can also explore [TypeScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [TypeScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) that shows how to render the file upload and browse the files which you want to upload to the server.

## See Also

* [How to add additional data on upload](./how-to/add-additional-data-on-upload)
* [Achieve file upload programmatically](./how-to/achieve-file-upload-programmatically)
* [Achieve invisible upload](./how-to/achieve-invisible-upload)
