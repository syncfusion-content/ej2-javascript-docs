---
layout: post
title: Getting started with ##Platform_Name## Rich Text Editor control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Rich Text Editor control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Rich Text Editor control

This section explains the steps to create a simple Rich Text Editor and demonstrates the basic usage of the Rich Text Editor control using the Essential JS 2  [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository. This seed repository is pre-configured with the Essential JS 2 package.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following minimum dependencies are required to use the Rich Text Editor.

```javascript
|-- @syncfusion/ej2-richtexteditor
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-filemanager

```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion CSS styles

Syncfusion JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme), which are available in the installed packages. It's easy to adapt the Syncfusion JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';;

{% endhighlight %}
{% endtabs %}

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme) section to know more about built-in themes and CSS reference for individual controls.

## Module Injection

To create Rich Text Editor with additional features, inject the required modules. The following modules are used to extend Rich Text Editor’s basic functionality.

* `Toolbar` - Inject this module to use Toolbar feature.
* `Link` - Inject this module to use link feature in Rich Text Editor.
* `Image`- Inject this module to use image feature in Rich Text Editor.
* `HtmlEditor` - Inject this module to use Rich Text Editor as html editor.
* `QuickToolbar` - Inject this module to use quick toolbar feature for the target element.

These modules should be injected into the Rich Text Editor using the `RichTextEditor.Inject` method.

> Additional feature modules are available [here](https://ej2.syncfusion.com/documentation/rich-text-editor/getting-started)

## Adding Rich Text Editor control

To get started, add the Rich Text Editor control in app.ts and index.html files. Rich Text Editor can be initialized through div element or textarea element.

Place the following Rich Text Editor code in the `app.ts` file.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

let editor: RichTextEditor = new RichTextEditor({ });
editor.appendTo('#editor');

{% endhighlight %}
{% endtabs %}

Rich Text Editor can be initialized on div element as shown below

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Rich Text Editor</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <!--Element which will render as RTE-->
     <div id="editor">
     </div>
</body>
</html>

{% endhighlight %}
{% endtabs %}

Now import the Rich Text Editor control to your `app.ts` and initialize it to the element `#editor` as shown below.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

// initialize Rich Text Editor control
let editor: RichTextEditor = new RichTextEditor({
    value: '<p>The Rich Text Editor control is WYSIWYG ("what you see is what you get" ) editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p><p><b> Key features: </b></p ><ul><li><p>Provides IFRAME and DIV modes < /p></li ><li><p>Capable of handling markdown editing.< /p></li ><li><p>Contains a modular library to load the necessary functionality on demand.< /p></li ><li><p>Provides a fully customizable toolbar.< /p></li ><li><p>Provides HTML view to edit the source directly for developers.< /p></li ><li><p>Supports third - party library integration.< /p></li ><li><p>Allows preview of modified content before saving it.< /p></li ><li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.< /p></li ></ul>'
 });
// render initialized Rich Text Editor
editor.appendTo('#editor');

{% endhighlight %}
{% endtabs %}

Output will be displayed as follows

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/text-area-sample-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/text-area-sample-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rich-text-editor/text-area-sample-cs3" %}

## Configure the Toolbar

Configure the toolbar with the tools using items field of the [toolbarSettings](../api/rich-text-editor/toolbarSettings/#toolbarsettings) property as your application requires.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs22" %}

> `|` and `-` can insert a vertical and horizontal separator lines in the toolbar.

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

Output will be displayed as follows

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs22" %}
> You can refer to our [TypeScript Rich Text Editor](https://www.syncfusion.com/javascript-ui-controls/js-wysiwyg-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [TypeScript Rich Text Editor example](https://ej2.syncfusion.com/demos/#/material/rich-text-editor/rich-text-editor.html) that shows how to render the Rich Text Editor tools.

## See also

* [How to change the editor type](./editor-modes)
* [How to render the iframe](./iframe)
* [How to render the toolbar in inline mode](./inline-mode)
* [How to insert Emoticons](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/insert-emoticons)
* [Blog posting using Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/blog-posting)
* [Reactive Form with Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/reactive-form)
* [Accessibility in Rich text editor](https://ej2.syncfusion.com/documentation/rich-text-editor/accessibility)
* [Keyboard support in Rich text editor](https://ej2.syncfusion.com/documentation/rich-text-editor/keyboard-support)
* [Globalization in Rich text editor](https://ej2.syncfusion.com/documentation/rich-text-editor/globalization)