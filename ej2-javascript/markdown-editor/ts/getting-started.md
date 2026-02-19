---
layout: post
title: Getting started with ##Platform_Name##  Markdown Editor | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Markdown Editor control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Markdown Editor control

This section explains the steps to create a simple Markdown Editor and demonstrates the basic usage of the Markdown Editor control using a Vite-based TypeScript project scaffolded with Vite 7.

> This guide uses Vite for bundling and development. Scaffold the project with `npm create vite@7` and choose the `vanilla` framework with the `typescript` variant. It requires Node `24.13.0` or higher. For more information about Vite and its features, refer to the [Vite documentation](https://vitejs.dev/).

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

Run the following commands to set up a Typescript application:

```bash
npm create vite@7 my-app
```
To set-up a Typescript application in TypeScript environment, run the following command.

```bash
npm create vite@7 my-app -- --template vanilla-ts
cd my-app
npm run dev
```

## Add Syncfusion JavaScript packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Markdown Editor component, use the following command

```
npm install @syncfusion/ej2-richtexteditor
```

## Import the Syncfusion CSS styles

Add the following imports inside the `~/src/styles.css` file to include the `tailwind3` theme styles:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';;

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

> Additional feature modules are available [here](https://ej2.syncfusion.com/documentation/rich-text-editor/getting-started)

## Adding Markdown Editor control

To get started, add the Markdown Editor control in app.ts and index.html files. Markdown Editor can be initialized through div element or textarea element.

Place the following Markdown Editor code in the `app.ts` file.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { RichTextEditor, Toolbar, Link, Image, MarkdownEditor } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, MarkdownEditor);

let editor: RichTextEditor = new RichTextEditor({ 
    editorMode: 'Markdown'
});
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
    <title>Essential JS 2 Markdown Editor</title>
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

Configure the toolbar with the tools using items field of the [toolbarSettings](../api/rich-text-editor/toolbarSettings#toolbarsettings) property as your application requires.

{% tabs %}
{% highlight ts tabtitle="main.ts" %}

var editor = new ej.richtexteditor.RichTextEditor({
    editorMode: 'Markdown',
    toolbarSettings: {
        items: ['Bold', 'Italic', 'StrikeThrough', 'InlineCode', 'SuperScript', 'SubScript', '|', 
            'Formats', 'Blockquote', '|', 'OrderedList', 'UnorderedList', 'CreateLink', 'Image', 'CreateTable', '|', 
            'Undo', 'Redo']
    }
});

editor.appendTo("#editor");

{% endhighlight %}
{% endtabs %}

> `|` and `-` can insert a vertical and horizontal separator lines in the toolbar.

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% endtabs %}

Replace the contents of `main.ts` with the code below to initialize the Rich Text Editor with default content.
This adds default content to the editor so you can verify its rendering and basic functionality.

Output will be displayed as follows

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/markdown-editor/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/markdown-editor/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/markdown-editor/getting-started-cs2" %}

> You can refer to our [TypeScript Rich Text Editor](https://www.syncfusion.com/javascript-ui-controls/js-wysiwyg-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [TypeScript Markdown Editor example](https://ej2.syncfusion.com/demos/#/bootstrap5/mark-down-editor/overview.html) that shows how to render the Markdown Editor.

## See Also

* [How to change the editor type](./editor-modes)
* [How to render the iframe](./iframe)
* [How to render the toolbar in inline mode](./inline-mode)
* [How to insert Emoticons](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/rich-text-editor/insert-emoticons)
* [Blog posting using Rich Text Editor](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/rich-text-editor/blog-posting)
* [Reactive Form with Rich Text Editor](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/rich-text-editor/reactive-form)
* [Accessibility in Rich text editor](https://ej2.syncfusion.com/documentation/rich-text-editor/accessibility)
* [Keyboard support in Rich text editor](https://ej2.syncfusion.com/documentation/rich-text-editor/keyboard-support)
* [Globalization in Rich text editor](https://ej2.syncfusion.com/documentation/rich-text-editor/globalization)