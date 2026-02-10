---
layout: post
title: Es5 getting started with ##Platform_Name## Barcode control | Syncfusion®
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Barcode control of Syncfusion Essential® JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# ES5 getting Started in ##Platform_Name## Barcode Control

The Essential® JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework that works directly in all modern web browsers without requiring any build tools or trans pilers. This makes it ideal for quick prototyping and simple web applications.

## Dependencies

The Following list of dependencies required to use the barcode component in your application..

```javascript
|-- @syncfusion/ej2-barcode-generator
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
```

## Component Initialization

There are two ways to set up the Barcode Generator component in your project. Choose the method that best fits your needs:

* **Local Setup**: Download files locally and reference them in your HTML page
* **CDN Setup**: Use hosted files directly from the cloud (faster, no downloads needed)

### Using local script references in a HTML page

**Step 1:** Create an app folder `myapp` for Essential® JS 2 JavaScript components.

**Step 2:** You can get the global scripts  from the [Essential Studio® JavaScript (Essential® JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Web(Essential JS 2)/javascript/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`


**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/32.1.19/Web(Essential JS 2)/javascript/ej2-barcode-generator/dist/global/ej2-barcode-generator.min.js`


**Step 3:** Inside your `myapp` folder, create a subfolder named `resources` and copy the script file into it.

**Step 4:** Create a HTML page (index.html) in `myapp` location and add the Essentials® JS 2 script  references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Barcode Generator Example</title>

            <!-- Essential JS 2 Barcode's dependent scripts -->
             <script src="resources/ej2-base.min.js" type="text/javascript"></script>

            <!-- Essential® JS 2 Barcode's global script -->
            <script src="resources/ej2-barcode-generator.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, update your `index.html` with the Barcode element and component code:

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Barcode Generator Example</title>

            <!-- Essential JS 2 Barcode's dependent scripts -->
             <script src="resources/ej2-base.min.js" type="text/javascript"></script>

            <!-- Essential® JS 2 Barcode's global script -->
            <script src="resources/ej2-barcode-generator.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!-- Container div where the barcode will be rendered -->
            <div id="element">Barcode</div>
            <script>
                // Create and initialize the barcode component
                var barcode = new ej.barcodegenerator.BarcodeGenerator({
                    width: '200px',
                    height: '150px',
                    mode: 'SVG',
                    type: 'Codabar',
                    value: '123456789',
                });
                // Mount the barcode component to the HTML element with id 'element'
                barcode.appendTo('#element');
            </script>
       </body>
  </html>
```

**Step 6:** Open the `index.html` file in your web browser. The Barcode Generator component should now display a barcode with the value "123456789".

### Using CDN Link for Script  Reference

This is the quickest way to get started. No downloads or local files needed—just add links to your HTML file.

**Step 1:** Create a project folder named `myapp` for your Barcode application.

**Step 2:** The Essential® JS 2 component's global scripts are already hosted in the below CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/dist/ej2.min.js`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/32.1.19/dist/min.js`](https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2.min.js)


**Step 3:** Create an HTML file named `index.html` in your `myapp` folder with the following code. This example uses the CDN links and creates a barcode:

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Barcode Generator Example</title>

            <!-- Essential® JS 2 Barcode's global script from CDN -->
            <script src="https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!-- Container div where the barcode will be rendered -->
            <div id="element">Barcode</div>
            <script>
                // Create and initialize the barcode component with configuration
                var barcode = new ej.barcodegenerator.BarcodeGenerator({
                    width: '200px',
                    height: '150px',
                    mode: 'SVG',
                    type: 'Codabar',
                    value: '123456789',
                });
                // Attach the barcode component to the HTML div element
                barcode.appendTo('#element');
            </script>
       </body>
  </html>
```

**Step 4:** Open the `index.html` file in your web browser. The Barcode Generator component should display immediately since all files are loaded from the CDN.


## Adding Barcode Generator control

You can start adding Essential® JS 2 barcode-generator component to the application. To get started, add the barcode component in `app.js` and `index.html` files using the following code.

Place the following barcode-generator  code in the `app.js`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/barcode/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/barcode/getting-started-cs4" %}

## Adding QR Generator control

You can add the QR code in our barcode generator component.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/barcode/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/barcode/getting-started-cs5" %}

## Adding Datamatrix Generator control

You can add the datamatrix code in our barcode generator component.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/barcode/getting-started-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/barcode/getting-started-cs6" %}