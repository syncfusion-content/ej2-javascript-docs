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
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-richtexteditor/dist/global/ej2-richtexteditor.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-richtexteditor/styles/material.css`

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
            <!-- Essential JS 2 Rich Text Editor's dependent material theme -->
            <link href="resources/base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/buttons/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/lists/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/navigations/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/splitbuttons/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/filemanager/styles/material.css" rel="stylesheet" />
            <!-- Essential JS 2 Rich Text Editor's material theme -->
            <link href="resources/richtexteditor/material.css" rel="stylesheet" type="text/css"/>

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
            <!-- Essential JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css" />
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
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`http://cdn.syncfusion.com/ej2/ej2-richtexteditor/dist/global/ej2-richtexteditor.min.js`](http://cdn.syncfusion.com/ej2/ej2-richtexteditor/dist/global/ej2-richtexteditor.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-richtexteditor/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-richtexteditor/styles/material.css)

Here’s an example of referencing the Rich Text Editor’s scripts and styles in an HTML file using CDN links:

**a.Essential Dependency (Minimal Setup)**

This setup includes only the necessary scripts and styles required to render the Syncfusion Rich Text Editor. Use this setup for a lightweight application that requires basic Rich Text Editor functionality.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Rich Text Editor</title>
            <!-- Essential JS 2 Rich Text Editor's dependent material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-splitbuttons/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-filemanager/styles/material.css" rel="stylesheet" type="text/css" />
            <!-- Essential JS 2 Rich Text Editor's global material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-richtexteditor/styles/material.css" rel="stylesheet" type="text/css"/>

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
            <!-- Essential JS 2 material theme -->
            <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css" />
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
      <!-- Essential JS 2 material theme -->
      <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css" />
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
var editor = new ej.richtexteditor.RichTextEditor({
     value: '<p>The Rich Text Editor control is WYSIWYG ("what you see is what you get" ) editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p><p><b> Key features: </b></p ><ul><li><p>Provides IFRAME and DIV modes < /p></li ><li><p>Capable of handling markdown editing.< /p></li ><li><p>Contains a modular library to load the necessary functionality on demand.< /p></li ><li><p>Provides a fully customizable toolbar.< /p></li ><li><p>Provides HTML view to edit the source directly for developers.< /p></li ><li><p>Supports third - party library integration.< /p></li ><li><p>Allows preview of modified content before saving it.< /p></li ><li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.< /p></li ></ul>'
});

// render initialized Rich Text Editor
editor.appendTo("#editor");

```

Output will be displayed as follows

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/text-area-sample-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/text-area-sample-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/text-area-sample-cs2" %}

## Configure the Toolbar

Configure the toolbar with the tools using items field of the [toolbarSettings](../api/rich-text-editor/toolbarSettings/#toolbarsettings) property as your application requires.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/getting-started-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs10" %}

> `|` and `-` can insert a vertical and horizontal separator lines in the toolbar.

## Run the application

Now, run the index.html in web browser, it will render the Essential JS 2 Rich Text Editor control.

Output will be displayed as follows.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/getting-started-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs10" %}


> You can refer to our [JavaScript Rich Text Editor](https://www.syncfusion.com/javascript-ui-controls/js-wysiwyg-rich-text-editor) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Rich Text Editor example](https://ej2.syncfusion.com/javascript/demos/#/material/rich-text-editor/rich-text-editor.html) that shows how to render the rich text editor tools.

## See Also

* [How to change the editor type](./editor-modes)
* [How to render the iframe](./iframe)
* [How to render the toolbar in inline mode](./inline-mode)
* [How to insert Emoticons](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/insert-emoticons)
* [Blog posting using Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/blog-posting)
* [Reactive Form with Rich Text Editor](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/reactive-form)
* [Accessibility in Rich text editor](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/accessibility)
* [Keyboard support in Rich text editor](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/keyboard-support)
* [Globalization in Rich text editor](https://ej2.syncfusion.com/javascript/documentation/rich-text-editor/globalization)
