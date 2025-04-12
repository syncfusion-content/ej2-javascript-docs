---
layout: post
title: Getting started with ##Platform_Name##  Markdown Editor control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Markdown Editor control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Markdown Editor control

This section explains the steps to create a simple Markdown Editor and demonstrates the basic usage of the Markdown Editor control using the Essential<sup style="font-size:70%">&reg;</sup> JS 2  [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following minimum dependencies are required to use the Markdown Editor.

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

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

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

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme), which are available in the installed packages. It's easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls to match the style of your application by referring to one of the built-in themes.

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

To create Markdown Editor with additional features, inject the required modules. The following modules are used to extend Markdown Editor’s basic functionality.

* `Toolbar` - Inject this module to use Toolbar feature.
* `Link` - Inject this module to use link feature in Markdown Editor.
* `Image`- Inject this module to use image feature in Markdown Editor.
* `MarkdownEditor` - Inject this module to use Rich Text Editor as Markdown editor.

These modules should be injected into the Markdown Editor using the `RichTextEditor.Inject` method.

> Additional feature modules are available [here](https://ej2.syncfusion.com/documentation/rich-text-editor/getting-started)

## Adding Markdown Editor control

To get started, add the Markdown Editor control in app.ts and index.html files. Markdown Editor can be initialized through div element or textarea element.

Place the following Markdown Editor code in the `app.ts` file.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { RichTextEditor, Toolbar, Link, Image, MarkdownEditor } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, MarkdownEditor);

let editor: RichTextEditor = new RichTextEditor({ });
editor.appendTo('#editor');

{% endhighlight %}
{% endtabs %}

Markdown Editor can be initialized on div element as shown below

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

Now import the Markdown Editor control to your `app.ts` and initialize it to the element `#editor` as shown below.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { RichTextEditor, Toolbar, Link, Image, MarkdownEditor } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, MarkdownEditor);

// initialize Markdown control
let editor: RichTextEditor = new RichTextEditor({
    editorMode: 'Markdown',
    value: 'In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.'
 });
// render initialized Markdown Editor
editor.appendTo('#editor');

{% endhighlight %}
{% endtabs %}

Output will be displayed as follows

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/markdown-editor/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/markdown-editor/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/markdown-editor/getting-started-cs1" %}

## Configure the Toolbar

Configure the toolbar with the tools using items field of the [toolbarSettings](../api/rich-text-editor/toolbarSettings/#toolbarsettings) property as your application requires.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/markdown-editor/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/markdown-editor/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/markdown-editor/getting-started-cs2" %}

> `|` and `-` can insert a vertical and horizontal separator lines in the toolbar.

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

> You can refer to our [TypeScript Rich Text Editor](https://www.syncfusion.com/javascript-ui-controls/js-wysiwyg-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [TypeScript Markdown Editor example](https://ej2.syncfusion.com/demos/#/bootstrap5/mark-down-editor/overview.html) that shows how to render the Markdown Editor.

## See Also

* [How to change the editor type](./editor-modes)
* [How to render the iframe](./iframe)
* [How to render the toolbar in inline mode](./inline-mode)
* [How to insert Emoticons](https://ej2.syncfusion.com/javascript/demos/#/material/rich-text-editor/insert-emoticons)
* [Blog posting using Rich Text Editor](https://ej2.syncfusion.com/javascript/demos/#/material/rich-text-editor/blog-posting)
* [Reactive Form with Rich Text Editor](https://ej2.syncfusion.com/javascript/demos/#/material/rich-text-editor/reactive-form)
* [Accessibility in Rich text editor](https://ej2.syncfusion.com/documentation/rich-text-editor/accessibility)
* [Keyboard support in Rich text editor](https://ej2.syncfusion.com/documentation/rich-text-editor/keyboard-support)
* [Globalization in Rich text editor](https://ej2.syncfusion.com/documentation/rich-text-editor/globalization)