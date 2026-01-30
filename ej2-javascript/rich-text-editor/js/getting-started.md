---
layout: post
title: Getting started with ##Platform_Name## Rich text editor | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Rich text editor control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Dependencies

The following list of dependencies are required to use the `Rich Text Editor` control in the application.

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

Refer to the following steps to set up your local environment.

**Step 1:** Create an app folder `my-app` for Essential JS 2 JavaScript controls.

**Step 2:** Create a `my-app/resources` folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create `my-app/index.js` and `my-app/index.html` files for initializing the Essential JS 2 Rich Text Editor control.

## Adding Syncfusion resources

The Essential JS 2 JavaScript controls can be initialized by using either of the following ways.

* Using local script and style
* Using CDN link for script and style

### Using local script and style

**1. Download Essential Studio JavaScript (Essential JS 2):** Obtain the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**2. Locate Script and Style Files:** After installing the Essential JS 2 product build, identify the location of the Rich Text Editor’s script and style file. The syntax for the file paths is as follows:

**Syntax:**
> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/tailwind3.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-richtexteditor/dist/global/ej2-richtexteditor.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-richtexteditor/styles/tailwind3.css`

**3. Copy Files to Resources Folder:** Create a folder `my-app/resources` and copy/paste the global scripts and styles from the above installed location to `my-app/resources` location.

**4. Referencing in HTML File** Once the files are copied, reference the Rich Text Editor’s scripts and styles into the **index.html** file.

Here’s an example of referencing the Rich Text Editor’s scripts and styles in an HTML file:

**a.Essential Dependency (Minimal Setup)**

This setup includes only the necessary scripts and styles required to render the Syncfusion Rich Text Editor. Use this setup for a lightweight application that requires basic Rich Text Editor functionality.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Rich Text Editor</title>
            <!-- Essential JS 2 Rich Text Editor's dependent tailwind3 theme -->
            <link href="resources/base/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/buttons/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/inputs/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/lists/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/navigations/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/popups/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/splitbuttons/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/filemanager/styles/tailwind3.css" rel="stylesheet" />
            <!-- Essential JS 2 Rich Text Editor's tailwind3 theme -->
            <link href="resources/richtexteditor/tailwind3.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Rich Text Editor's dependent script -->
            <script src="resources/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="resources/ej2-lists.min.js" type="text/javascript"></script>
            <script src="resources/ej2-navigations.min.js" type="text/javascript"></script>
            <script src="resources/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/ej2-splitbuttons.min.js" type="text/javascript"></script>
            <script src="resources/ej2-filemanager.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Rich Text Editor's global script -->
            <script src="resources/ej2-richtexteditor.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**b. Comprehensive Dependency (All Controls)**

This setup includes all possible dependencies for Syncfusion controls in a single comprehensive file, ensuring maximum compatibility and functionality. Use this setup for a complex application that utilizes a wide range of Syncfusion controls.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Rich Text Editor</title>
            <!-- Essential JS 2 tailwind3 theme -->
            <link href="resources/tailwind3.css" rel="stylesheet" type="text/css" />
            <!-- Essential JS 2 script -->
            <script src="resources/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

### Using CDN link for script and style reference

Using CDN link, you can directly refer the Rich Text Editor control’s script and style into the `index.html`.

Refer the Rich Text Editor’s CDN links as belows.

**Syntax:**
> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/tailwind3.css`

**Example:**
> Script: [`http://cdn.syncfusion.com/ej2/ej2-richtexteditor/dist/global/ej2-richtexteditor.min.js`](http://cdn.syncfusion.com/ej2/ej2-richtexteditor/dist/global/ej2-richtexteditor.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-richtexteditor/styles/tailwind3.css`](http://cdn.syncfusion.com/ej2/ej2-richtexteditor/styles/tailwind3.css)

Here’s an example of referencing the Rich Text Editor’s scripts and styles in an HTML file using CDN links:

**a.Essential Dependency (Minimal Setup)**

This setup includes only the necessary scripts and styles required to render the Syncfusion Rich Text Editor. Use this setup for a lightweight application that requires basic Rich Text Editor functionality.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Rich Text Editor</title>
            <!-- Essential JS 2 Rich Text Editor's dependent tailwind3 theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-buttons/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-inputs/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-lists/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-navigations/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-popups/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-splitbuttons/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-filemanager/styles/tailwind3.css" rel="stylesheet" type="text/css" />
            <!-- Essential JS 2 Rich Text Editor's global tailwind3 theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-richtexteditor/styles/tailwind3.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Rich Text Editor's dependent script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-filemanager/dist/global/ej2-filemanager.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Rich Text Editor's global script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-richtexteditor/dist/global/ej2-richtexteditor.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

**c. Comprehensive Dependency (All Controls)**

This setup includes all possible dependencies for Syncfusion controls in a single comprehensive file, ensuring maximum compatibility and functionality. Use this setup for a complex application that utilizes a wide range of Syncfusion controls.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Rich Text Editor</title>
            <!-- Essential JS 2 tailwind3 theme -->
            <link href="https://cdn.syncfusion.com/ej2/tailwind3.css" rel="stylesheet" type="text/css" />
            <!-- Essential JS 2 all script -->
            <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

## Adding Rich Text Editor control

To get started, add the Rich Text Editor control in index.js and index.html files. Rich Text Editor can be initialized through div element or textarea element.

Rich Text Editor can be initialized on div element as shown below

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Essential JS 2 Rich Text Editor</title>
      <!-- Essential JS 2 tailwind3 theme -->
      <link href="https://cdn.syncfusion.com/ej2/tailwind3.css" rel="stylesheet" type="text/css" />
      <!-- Essential JS 2 all script -->
      <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
</head>

<body>
    <!--Element which will render as Rich Text Editor-->
     <div id="editor">
     </div>
</body>
</html>
```

Place the following Rich Text Editor code in the `index.js` file.

`[src/index.js]`

```javascript
// initialize Rich Text Editor control
var editor = new ej.richtexteditor.RichTextEditor({ });
// render initialized Rich Text Editor
editor.appendTo("#editor");

```

Output will be displayed as follows

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/text-area-sample-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/text-area-sample-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/text-area-sample-cs3" %}

## Configure the Toolbar

Configure the toolbar with the tools using items field of the [toolbarSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarSettings#toolbarsettings) property as your application requires.

Place the following Rich Text Editor code in the `index.js` file.

`[src/index.js]`

```javascript
var editor = new ej.richtexteditor.RichTextEditor({
     toolbarSettings: {
      items: ['Undo', 'Redo', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', '|', 'FontName',
        'FontSize', 'FontColor', 'BackgroundColor', '|', 'SubScript', 'SuperScript', '|', 'LowerCase',
        'UpperCase', '|', 'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|', 'Indent',
        'Outdent', '|', 'CreateLink', 'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
    }
});

editor.appendTo("#editor");

```

> `|` and `-` can insert a vertical and horizontal separator lines in the toolbar.

## Run the application

Now, run the index.html in web browser, it will render the Essential JS 2 Rich Text Editor control.

Output will be displayed as follows.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/getting-started-cs22/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs22" %}

> You can refer to our [JavaScript Rich Text Editor](https://www.syncfusion.com/javascript-ui-controls/js-wysiwyg-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Rich Text Editor example](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/rich-text-editor/rich-text-editor.html) that shows how to render the rich text editor tools.

## See also

* [How to change the editor type](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/editor-types/editor-modes)
* [How to render the iframe](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/editor-types/iframe)
* [How to render the toolbar in inline mode](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/editor-types/inline-editing)
* [How to insert Emoticons](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/insert-emoticons)
* [Blog posting using Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/blog-posting)
* [Reactive Form with Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/reactive-form)
* [Accessibility in Rich text editor](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/accessibility)
* [Keyboard support in Rich text editor](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/keyboard-support)
* [Globalization in Rich text editor](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/globalization)
