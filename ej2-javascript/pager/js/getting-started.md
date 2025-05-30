---
layout: post
title: Getting started with ##Platform_Name## Pager control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Pager control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Pager control

This section explains you the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Pager and demonstrate the basic usage of the Pager control in a JavaScript application.

## Dependencies

Below is the list of minimum dependencies required to use the Pager.

```javascript
|-- @syncfusion/ej2-base
|-- @syncfusion/ej2-grids
```

## Setup for local environment

Refer the following steps for setup your local environment.

**Step 1:** Create a root folder `myapp` for your application.

**Step 2:** Create `myapp/resources` folder to store local scripts and styles files.

**Step 3:** Create `myapp/index.js` and `myapp/index.html` files for initializing Essential<sup style="font-size:70%">&reg;</sup> JS 2 Pager control.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Pager control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style

You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/account/manage-trials/downloads) build installed location.

After installing the Essential<sup style="font-size:70%">&reg;</sup> JS 2 product build, you can copy the pager and its dependencies scripts and style file into the `resources/scripts` and `resources/styles` folder.

Refer the below code to find location pager's script and style file.

**Syntax:**

> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-grids/dist/global/ej2-grids.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-grids/styles/material.css`

After copying the files, then you can refer the pager's scripts and styles into the `index.html` file.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Pager</title>
            <!-- Essential JS 2 material base style -->
            <link href="resources/styles/base/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 material theme -->
            <link href="resources/styles/grid/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 Pager's dependent global script -->
            <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Pager's global script -->
            <script src="resources/scripts/ej2-grids.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

### Using CDN link for script and style

Using CDN link, you can directly refer the pager control's script and style into the `index.html`.

Refer the pager's CDN links as below

**Syntax:**

> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: [`http://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js`](http://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css)

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Pager</title>
            <!-- Essential JS 2 base material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 pager material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Pager's dependent global script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Pager's global script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

## Adding Pager control

Now, you can start adding Pager control in the application. For getting started, add a `div` element for Pager control in `index.html`. Then refer the `index.js` file into the `index.html` file.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Pager</title>
            <!-- Essential JS 2 base material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 pager material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Pager's dependent global script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Pager's global script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for pager  -->
             <div id="Pager"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>

```

Place the following pager code in the `index.js`.

```javascript

var pager = ej.grids.Pager();
pager.appendTo('#Pager');

```

## Page Size

`pageSize` value defines the number records to be displayed per page. The default value for the `pageSize` is 12.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pager/pager-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pager/pager-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pager/pager-cs1" %}

## Page sizes

The [pageSizes](https://ej2.syncfusion.com/javascript/documentation/api/pager#pagesizes) property in the Syncfusion<sup style="font-size:70%">&reg;</sup> Pager control allows you to control the number of records displayed per page through a `DropDownList` integrated into the pager. This feature enhances the experience by providing flexibility in data viewing.

**Enabling Page Sizes**

To enable the `pageSizes` property, follow these steps:

1. Inject the `PagerDropDown` into the `Pager` module to enable the `DropDownList` in the pager.

2. Configure the `pageSizes` property by setting it to either **true** or providing an array of custom values to define the available page size options.

The following example demonstrates how to include the `pageSizes` property in the pager control.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pager/pager-dropdown-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pager/pager-dropdown-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pager/pager-dropdown-cs1" %}

## Page Count

`pageCount` value defines the number of pages to be displayed in the pager component for navigation. The default value for `pageCount` is 10 and value will be updated based on `totalRecordsCount` and [`pageSize`](#pagesize) values.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pager/pager-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pager/pager-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pager/pager-cs2" %}

## Run the application

Now, run the `index.html` in web browser, it will render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Pager control.

Output will be appears as follows.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pager/pager-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pager/pager-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pager/pager-cs3" %}
