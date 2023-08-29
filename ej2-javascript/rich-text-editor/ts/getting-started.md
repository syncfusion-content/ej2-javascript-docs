---
layout: post
title: Getting started with ##Platform_Name## Rich text editor control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Rich text editor control

This section explains the steps to create a simple Rich Text Editor and demonstrates the basic usage of the Rich Text Editor component using the Essential JS 2  [quickstart](https://github.com/syncfusion/ej2-quickstart.git) seed repository. This seed repository is pre-configured with the Essential JS 2 package.

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

## Setup for local development

Clone the Essential JS 2 quickstart application project from [`GitHub`](https://github.com/syncfusion/ej2-quickstart.git), and install the necessary npm packages using the following command line scripts.

```

git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install

```

## Configuring system JS

Map the Syncfusion Rich Text Editor packages in the system.config.js configuration file

```javascript
System.config({
    paths: {
          "syncfusion:": "./node_modules/@syncfusion/"
          },
    map: {
        main: "index.ts",
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        'plugin-json':'https://cdnjs.cloudflare.com/ajax/libs/systemjs-plugin-json/0.3.0/json.min.js',
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-layouts": "syncfusion:ej2-layouts/dist/ej2-layouts.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js",
        "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js",
        "@syncfusion/ej2-excel-export": "syncfusion:ej2-excel-export/dist/ej2-excel-export.umd.min.js",
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-grids": "syncfusion:ej2-grids/dist/ej2-grids.umd.min.js",
        "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-filemanager": "syncfusion:ej2-filemanager/dist/ej2-filemanager.umd.min.js",
        "@syncfusion/ej2-richtexteditor": "syncfusion:ej2-richtexteditor/dist/ej2-richtexteditor.umd.min.js"
      },
  packages: {
  'app': { main: 'app', defaultExtension: 'js' }
  }
});
System.import('app');
```

## Adding CSS reference

Combined CSS files are available in the Essential JS 2 package root folder. This can be referenced in your [src/styles/styles.css] using the following code.

```
@import '../../node_modules/@syncfusion/ej2/material.css';

```

> To know about individual component CSS, refer to the [Individual Component theme files](https://ej2.syncfusion.com/documentation/appearance/theme#referring-individual-control-theme) section.

## Adding Rich Text Editor component

To get started, add the Rich Text Editor component in app.ts and index.html files. Rich Text Editor can be initialized through div element or textarea element.

Place the following Rich Text Editor code in the `app.ts` file.

```ts

import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

let defaultRTE: RichTextEditor = new RichTextEditor({ });
defaultRTE.appendTo('#defaultRTE');

```

### Initialize from textarea

Initialize the Rich Text Editor on a textarea.

Now, add an HTML textarea element to act as the Rich Text Editor element in `index.html` using the following code.

`[src/index.html]`

```html
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

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <!--Element which will render as RTE-->
     <textarea id="defaultRTE">
     </textarea>
</body>
</html>

```

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

### Initialize from `<div>` element

Rich Text Editor can be initialized on div element as shown below

`[src/index.html]`

```html
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

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <!--Element which will render as RTE-->
     <div id="defaultRTE">
       <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p>
      <p><b>Key features:</b></p>
        <ul><li><p>Provides IFRAME and DIV modes</p></li>
        <li><p>Capable of handling markdown editing.</p></li>
        <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
        <li><p>Provides a fully customizable toolbar.</p></li>
        <li><p>Provides HTML view to edit the source directly for developers.</p></li>
        <li><p>Supports third-party library integration.</p></li>
        <li><p>Allows preview of modified content before saving it.</p></li>
        <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
        </ul>
     </div>
</body>
</html>
```

Now import the Rich Text Editor component to your `app.ts` and initialize it to the element `#defaultRTE` as shown below.

`[src/app/app.ts]`

```ts

import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

// initialize Rich Text Editor component
let defaultRTE: RichTextEditor = new RichTextEditor({ });
// render initialized Rich Text Editor
defaultRTE.appendTo('#defaultRTE');

```

### Initialize from `<IFRAME>` element

The Rich Text Editor’s content is placed in an iframe and isolated from the rest of the page.

Initialize the Rich Text Editor on div element and set the `enable` field of [iframeSettings](../api/rich-text-editor/iFrameSettings/#iframesettings) property to true.

`[src/index.html]`

```html
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

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <!--Element which will render as RTE-->
     <div id="defaultRTE">
       <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p>
      <p><b>Key features:</b></p>
        <ul><li><p>Provides IFRAME and DIV modes</p></li>
        <li><p>Capable of handling markdown editing.</p></li>
        <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
        <li><p>Provides a fully customizable toolbar.</p></li>
        <li><p>Provides HTML view to edit the source directly for developers.</p></li>
        <li><p>Supports third-party library integration.</p></li>
        <li><p>Allows preview of modified content before saving it.</p></li>
        <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
        </ul>
     </div>
</body>
</html>
```

Now import the Rich Text Editor component to your `app.ts` and initialize it to the element `#defaultRTE` as shown below.

`[src/app/app.ts]`

```ts

import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

// initialize Rich Text Editor component
let defaultRTE: RichTextEditor = new RichTextEditor({
  iframeSettings: {
      enable: true
  }});
// render initialized Rich Text Editor
defaultRTE.appendTo('#defaultRTE');

```

## Module Injection

To create Rich Text Editor with additional features, inject the required modules. The following modules are used to extend Rich Text Editor’s basic functionality.

* `Toolbar` - Inject this module to use Toolbar feature.
* `Link` - Inject this module to use link feature in Rich Text Editor.
* `Image`- Inject this module to use image feature in Rich Text Editor.
* `Table`- Inject this module to use table feature in Rich Text Editor.
* `Count` - Inject this module to use character count in Rich Text Editor.
* `HtmlEditor` - Inject this module to use Rich Text Editor as html editor.
* `MarkdownEditor`-Inject this module to use Rich Text Editor as markdown editor.
* `QuickToolbar` - Inject this module to use quick toolbar feature for the target element.
* `Resize` - Inject this module to use resize feature in Rich Text Editor.
* `FileManager` - Inject this module to use file browser feature in Rich Text Editor.
* `PasteCleanup` - Inject this module to use paste cleanup feature in Rich Text Editor.

These modules should be injected into the Rich Text Editor using the `RichTextEditor.Inject` method.

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

## Insert images and links

The [`image`](../api/rich-text-editor/image/#insertimagesettings) module inserts an image into Rich Text Editor’s content area, and the [`link`](../api/rich-text-editor/iLinkCommandsArgs) module links external resources such as website URLs, to selected text in the Rich Text Editor's content, respectively.

The link inject module adds a link icon to the toolbar and the image inject module adds an image icon to the toolbar.

Specifies the items to be rendered in the quick toolbar based on the target element such image, link and text element. The quick toolbar opens to customize the element by clicking the target element.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs23/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs23/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs23" %}

## Retrieve the formatted content

To retrieve the editor contents, use [`value`](../api/rich-text-editor/#value) property of Rich Text Editor.

```ts
     let rteValue: string = defaultRTE.value;
```

Or, you can use the public method, [`getHtml`](../api/rich-text-editor/#gethtml) to retrieve the Rich Text Editor content.

```ts
  let rteValue: string = defaultRTE.getHtml();
```

To fetch the Rich Text Editor's text content, use [`getText`](../api/rich-text-editor/#gettext) method of Rich Text Editor.

```ts
  let rteValue: string = defaultRTE.getText();
```

## Retrieve the number of characters in the Rich Text Editor

To get the maximum number of characters in the Rich Text Editor's content, use [`getCharCount`](../api/rich-text-editor/#getcharcount)

```ts
  let rteCount: number = defaultRTE.getCharCount();
```

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

```
  npm start
```

Output will be displayed as follows

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs24/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs24/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs24" %}

> You can refer to our [TypeScript Rich Text Editor](https://www.syncfusion.com/javascript-ui-controls/js-wysiwyg-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [TypeScript Rich Text Editor example](https://ej2.syncfusion.com/demos/#/material/rich-text-editor/rich-text-editor.html) that shows how to render the rich text editor tools.

## See Also

* [How to change the editor type](./editor-modes/)
* [How to render the iframe](./iframe/)
* [How to render the toolbar in inline mode](./inline-mode/)
* [How to insert Emoticons](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/insert-emoticons)
* [Blog posting using Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/blog-posting)
* [Reactive Form with Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/reactive-form)