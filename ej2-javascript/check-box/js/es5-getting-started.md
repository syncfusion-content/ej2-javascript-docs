---
layout: post
title: Es5 getting started with ##Platform_Name## Check box control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Check box control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Check box control

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using either of the following ways.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Dependency Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\dist\global\{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Control Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\styles\material.css`
>
> Control Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\material.css`

**Example:**
> Dependency Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
>
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-buttons\dist\global\ej2-buttons.min.js`
>
> Dependency Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-base\styles\material.css`
>
> Control Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-buttons\styles\material.css`

The below located script and style file contains all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\material.css`

The [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific controls. This web tool is useful to combine the required control scripts and styles in a single file.

**Step 3:** Create a folder `~/quickstart/resources` and copy/paste the global scripts and styles from the above installed location to `~/quickstart/resources/package` corresponding package location.

**Step 4:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the Essential<sup style="font-size:70%">&reg;</sup> JS 2 script and style references.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>
        <!-- Essential JS 2 Base's material theme (Dependency Styles) -->
        <link href="resources/base/material.css" rel="stylesheet" type="text/css"/>
        <!-- Essential JS 2 CheckBox's material theme (Control Styles) -->
        <link href="resources/buttons/material.css" rel="stylesheet" type="text/css"/>

        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 CheckBox's global script (Control Script) -->
        <script src="resources/buttons/ej2-buttons.min.js" type="text/javascript"></script>
    </head>
    <body>
    </body>
</html>
```

**Step 5:** Now, add the `CheckBox` element and initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) CheckBox** controls in the `~/quickstart/index.html` by using following code

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
          <title>Essential JS 2</title>
          <!-- Essential JS 2 Base's material theme (Dependency Styles) -->
          <link href="resources/base/material.css" rel="stylesheet" type="text/css"/>
          <!-- Essential JS 2 CheckBox's material theme (Control Styles) -->
          <link href="resources/buttons/material.css" rel="stylesheet" type="text/css"/>

          <!-- Essential JS 2 Base's global script (Dependency Script) -->
          <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
          <!-- Essential JS 2 CheckBox's global script (Control Script) -->
          <script src="resources/buttons/ej2-buttons.min.js" type="text/javascript"></script>
      </head>
       <body>
            <!--element which is going to render-->
            <input id="element" type="checkbox"/>
            <script>
                // Initialize CheckBox control.
                var checkbox = new ej.buttons.CheckBox({ label: 'Default' });

                // Render initialized CheckBox.
                checkbox.appendTo('#element');
            </script>
       </body>
  </html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript CheckBox** control.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 control's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Dependency Script: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Control Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/styles/material.css`
>
> Control Styles: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js`](https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css`](https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the CDN link references. Now, add the `CheckBox` element and initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript CheckBox** control in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/check-box/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/check-box/es5-getting-started-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/check-box/es5-getting-started-cs1" %}

**Step 4:** Now, run the `index.html` in web browser, it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript CheckBox** control.

## Change the CheckBox state

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 CheckBox contains 3 different states visually, they are:
* Checked
* Unchecked
* Indeterminate

The CheckBox [`checked`](../api/check-box/#checked) property is used to handle the checked and unchecked state. In checked state a tick mark will be added to the visualization of CheckBox.

### Indeterminate

The CheckBox indeterminate state can be set through [`indeterminate`](../api/check-box/#indeterminate) property. CheckBox indeterminate state masks the real value of CheckBox visually. The Checkbox cannot be changed to indeterminate state through the user interface, this state can be achieved only through the property.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/check-box/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/check-box/es5-getting-started-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/check-box/es5-getting-started-cs2" %}
