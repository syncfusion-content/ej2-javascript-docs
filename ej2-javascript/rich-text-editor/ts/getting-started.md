---
layout: post
title: Getting started with ##Platform_Name## Rich Text Editor | Syncfusion
description: Checkout and learn how to create and run a Rich Text Editor using a Vite-based TypeScript project and Syncfusion Essential JS 2.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Rich Text Editor control

This section explains the steps to create a simple Rich Text Editor and demonstrates the basic usage of the Rich Text Editor control using a Vite-based TypeScript project scaffolded with Vite 7.

> This guide uses Vite for bundling and development. Scaffold the project with `npm create vite@7` and choose the `vanilla` framework with the `typescript` variant. It requires Node `24.13.0` or higher. For more information about Vite and its features, refer to the [Vite documentation](https://vitejs.dev/).

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

Run the following commands to set up a Typescript application:

```bash
npm create vite@7 my-app
```
To set-up a Typescript application in TypeScript environment, run the following command.

```bash
npm create vite@7 my-app -- --template vanilla-ts
cd my-app
npm install
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Rich Text Editor packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Rich Text Editor component, use the following command

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
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';

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

To get started, add the Rich Text Editor control in main.ts and index.html files. Rich Text Editor can be initialized through div element or textarea element.

Place the following Rich Text Editor code in the `main.ts` file.

{% tabs %}
{% highlight ts tabtitle="main.ts" %}

import './style.css';
import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

const editor: RichTextEditor = new RichTextEditor({ });
editor.appendTo('#editor');

{% endhighlight %}
{% endtabs %}

Rich Text Editor can be initialized on div element as shown below

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Syncfusion Typescript Rich Text Editor</title>
  </head>
  <body>
    <div id="editor"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>

{% endhighlight %}
{% endtabs %}

Output will be displayed as follows

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/text-area-sample-cs3/index.ts %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';

{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/text-area-sample-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rich-text-editor/text-area-sample-cs3" %}

## Configure the Toolbar

Configure the toolbar with the tools using items field of the [toolbarSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarSettings#toolbarsettings) property as your application requires. Below are some basic toolbar items added for reference.

Place the following Rich Text Editor code in the `main.ts` file.

{% tabs %}
{% highlight ts tabtitle="main.ts" %}

import './style.css';
import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

const editor: RichTextEditor = new RichTextEditor({
  toolbarSettings: {
      items: ['Undo', 'Redo', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', '|', 'FontName',
        'FontSize', 'FontColor', 'BackgroundColor', '|', 'SubScript', 'SuperScript', '|', 'LowerCase',
        'UpperCase', '|', 'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|', 'Indent',
        'Outdent', '|', 'CreateLink', 'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
    }
});
editor.appendTo('#editor');

{% endhighlight %}
{% endtabs %}

> `|` and `-` can insert a vertical and horizontal separator lines in the toolbar.

## To Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% endtabs %}

Replace the contents of `main.ts` with the code below to initialize the Rich Text Editor with default content.
This adds default content to the editor so you can verify its rendering and basic functionality.

`[src/main.ts]`

{% tabs %}
{% highlight ts tabtitle="main.ts" %}

import './style.css';
import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

const editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
      items: ['Undo', 'Redo', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', '|', 'FontName',
        'FontSize', 'FontColor', 'BackgroundColor', '|', 'SubScript', 'SuperScript', '|', 'LowerCase',
        'UpperCase', '|', 'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|', 'Indent',
        'Outdent', '|', 'CreateLink', 'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
    },
    value: '<p>The Rich Text Editor control is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p><p><b> Key features: </b></p><ul><li><p>Provides IFRAME and DIV modes </p></li><li><p>Capable of handling markdown editing.</p></li><li><p>Contains a modular library to load the necessary functionality on demand.</p></li><li><p>Provides a fully customizable toolbar.</p></li><li><p>Provides HTML view to edit the source directly for developers.</p></li><li><p>Supports third - party library integration.</p></li><li><p>Allows preview of modified content before saving it.</p></li><li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li></ul>'
 });
editor.appendTo('#editor');

{% endhighlight %}
{% endtabs %}

Output will be displayed as follows

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs22/index.ts %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';

{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs22/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs22" %}

> You can refer to our [TypeScript Rich Text Editor](https://www.syncfusion.com/javascript-ui-controls/js-wysiwyg-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [TypeScript Rich Text Editor example](https://ej2.syncfusion.com/demos/#/tailwind3/rich-text-editor/rich-text-editor.html) that shows how to render the Rich Text Editor tools.

## See also

* [How to change the editor type](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/editor-types/editor-modes)
* [How to render the iframe](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/editor-types/iframe)
* [How to render the toolbar in inline mode](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/editor-types/inline-editing)
* [How to insert Emoticons](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/insert-emoticons)
* [Blog posting using Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/blog-posting)
* [Reactive Form with Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/reactive-form)
* [Accessibility in Rich text editor](https://ej2.syncfusion.com/documentation/rich-text-editor/accessibility)
* [Keyboard support in Rich text editor](https://ej2.syncfusion.com/documentation/rich-text-editor/keyboard-support)
* [Globalization in Rich text editor](https://ej2.syncfusion.com/documentation/rich-text-editor/globalization)