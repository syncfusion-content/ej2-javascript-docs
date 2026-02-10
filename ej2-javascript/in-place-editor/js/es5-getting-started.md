---
layout: post
title: Getting started | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## In place editor control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# ES5 getting started in ##Platform_Name## In-place editor control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 In-Place editor and demonstrate the basic usage of the In-Place editor control in a JavaScript application.

## Dependencies

The list of dependencies required to use the In-Place editor component in your application is given below:

```js
|-- @syncfusion/ej2-inplace-editor
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-richtexteditor
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 In-Place editor control.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 In-Place editor control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style references in an HTML page

**Step 1:** Create an app folder `myapp` for Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls.

**Step 2:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-inplace-editor/dist/global/ej2-inplace-editor.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-inplace-editor/styles/material.css`

**Step 3:** Create a folder `myapp/resources` and copy/paste the global scripts and styles from the above installed location to `myapp/resources` location.

**Step 4:** Create an HTML page (index.html) in `myapp` location and add the Essential<sup style="font-size:70%">&reg;</sup> JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 - In-place Editor</title>
            <!-- Essential JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 In-place Editor's global script -->
            <script src="resources/ej2-inplace-editor.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `In-place Editor` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 In-place Editor** control in the `index.html` by using following code

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <ink href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 In-place Editor's global script -->
            <script src="resources/ej2-inplace-editor.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!-- Add the HTML <div> element  -->
             <div id="element"></div>
            <script>
                var editObj = new ej.inplaceeditor.InPlaceEditor({
                    type: 'Text',
                    value: 'Andrew',
                    model: {
                        placeholder: 'Enter employee name'
                    }
                });
                //Render initialized In-place Editor control
                editObj.appendTo('#element');
            </script>
       </body>
  </html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 In-place Editor** control.

### Using CDN link for the script and style reference

**Step 1:** Create an app folder `myapp` for the Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 control's global scripts and styles are already hosted in the following CDN link formats.

**Syntax:**
> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`http://cdn.syncfusion.com/ej2/ej2-inplace-editor/dist/global/ej2-inplace-editor.min.js`](http://cdn.syncfusion.com/ej2/ej2-inplace-editor/dist/global/ej2-inplace-editor.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-inplace-editor/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-inplace-editor/styles/material.css)

**Step 3:** Create an HTML page (index.html) in `myapp` location and add the CDN link references. Now, add the `In-place Editor` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 In-place Editor** control in the index.html by using the following code.

**Step 4:** Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 In-place Editor** control.

## Configuring DropDownList

You can render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 DropDownList by changing the [`type`](https://ej2.syncfusion.com/javascript/documentation/api/inplace-editor/inputtype) property as [`DropDownList`](../api/drop-down-list) and configure its properties and methods using the `model` property.

In the following sample, [`type`](https://ej2.syncfusion.com/javascript/documentation/api/inplace-editor/inputtype) and model values are configured to render the [`DropDownList`](../api/drop-down-list) control.

`[index.html]`

```html

<!DOCTYPE html>
<html lang="en">

    <head>
    <title>Essential JS 2 In-place Editor</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Typescript In-place Editor Control">
    <meta name="author" content="Syncfusion">
    <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-data/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-calendars/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-richtexteditor/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-inplace-editor/styles/material.css" rel="stylesheet" type="text/css" />

    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js"
        type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js"
        type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js"
        type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-calendars/dist/global/ej2-calendars.min.js"
        type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js"
        type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js"
        type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/ej2-richtexteditor/dist/global/ej2-richtexteditor.min.js"
        type="text/javascript"></script>
        <script src="https://cdn.syncfusion.com/ej2/ej2-inplace-editor/dist/global/ej2-inplace-editor.min.js"
        type="text/javascript"></script>
</head>
<body>
   <div id="element"></div>
   <script>
    var data = ['Australia', 'Bermuda', 'Canada', 'Cameroon', 'Denmark', 'Finland', 'Greenland', 'Poland'];
    var editObj = new ej.inplaceeditor.InPlaceEditor({
    type: 'DropDownList',
    model: {
        dataSource: data,
        placeholder: 'Select Country'
      }
    });
    editObj.appendTo('#element');
</script>
</body>
</html>

```

## Integrate DatePicker

You can render the Essential<sup style="font-size:70%">&reg;</sup> JS2 [DatePicker](https://ej2.syncfusion.com/javascript/documentation/api/datepicker/index-default) by changing the [`type`](https://ej2.syncfusion.com/javascript/documentation/api/inplace-editor/inputtype) property as [`Date`](https://ej2.syncfusion.com/javascript/documentation/api/inplace-editor/inputtype)  and also configure its properties and methods using the [`model`](https://ej2.syncfusion.com/javascript/documentation/api/inplace-editor/index-default#model) property.

In the following sample, [`type`](https://ej2.syncfusion.com/javascript/documentation/api/inplace-editor/inputtype) and [`model`](https://ej2.syncfusion.com/javascript/documentation/api/inplace-editor/index-default#model) values are configured to render the [DatePicker](https://ej2.syncfusion.com/javascript/documentation/api/datepicker/index-default) control.

`[index.html]`

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 In-place Editor</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Typescript In-place Editor Control">
    <meta name="author" content="Syncfusion">
    <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-data/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-calendars/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-richtexteditor/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-inplace-editor/styles/material.css" rel="stylesheet" type="text/css" />

    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js"
    type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js"
    type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js"
    type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js"
    type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js"
    type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js"
    type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js"
    type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-calendars/dist/global/ej2-calendars.min.js"
    type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js"
    type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js"
    type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-richtexteditor/dist/global/ej2-richtexteditor.min.js"
    type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-inplace-editor/dist/global/ej2-inplace-editor.min.js"
    type="text/javascript"></script>
</head>
<body>
    <div id="element"></div>
    <script>
    var editObj = new ej.inplaceeditor.InPlaceEditor({
      type: 'Date',
      value: new Date('04/12/2018'),
      model: {
          showTodayButton: true
      }
  });
  editObj.appendTo('#element');
</script>
</body>
</html>

```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/in-place-editor/getting-started-form-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/getting-started-form-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-form-cs1" %}

## Submitting data to the server (save)

You can submit editor value to the server by configuring the [`url`](https://ej2.syncfusion.com/javascript/documentation/api/inplace-editor/index-default#url), [`adaptor`](https://ej2.syncfusion.com/javascript/documentation/api/inplace-editor/adaptortype) and [`primaryKey`](https://ej2.syncfusion.com/javascript/documentation/api/inplace-editor/index-default#primarykey) property.

| Property   | Usage                                           |
|------------|---------------------------------------------------------|
| **`url`**        | Gets the URl for server submit action.        |
| **`adaptor`**    | Specifies the adaptor type that is used by DataManager to communicate with DataSource.                |
| **`primaryKey`** | Defines the unique primary key of editable field which can be used for saving data in the data-base.|

> The [`primaryKey`](https://ej2.syncfusion.com/javascript/documentation/api/inplace-editor/index-default#primarykey) property is mandatory. If it's not set, edited data are not sent to the server.

## Refresh In-place Editor with modified value

The edited data is submitted to the server and the updated values are reflected in the in-place editor.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/in-place-editor/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs1" %}

## See Also

* [Types of rendering the editor](./integration)
