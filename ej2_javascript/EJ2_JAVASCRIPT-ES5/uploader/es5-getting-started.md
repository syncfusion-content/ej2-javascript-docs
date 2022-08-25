# Getting Started  with JavaScript(ES5)

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Component Initialization

The Essential JS 2 JavaScript components can be initialized by using either of the following ways.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `myapp` for Essential JS 2 JavaScript components.

**Step 2:** You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-inputs/dist/global/ej2-inputs.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-inputs/styles/material.css`

**Step 3:** Create a folder `myapp/resources` and copy/paste the global scripts and styles from the above installed location to `myapp/resources` location.

**Step 4:** Create a HTML page (index.html) in `myapp` location and add the Essentials JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Uploader's global script -->
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `Uploader` and initiate the `Essential JS 2 Uploader` component in the `index.html` by using following code

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <ink href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Uploader's global script -->
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!-- Add the HTML <input> element  -->
              <input type="file" id="fileupload" name="UploadFiles">
            <script>
                // initialize Uploader component
            var uploadObj = new ej.inputs.Uploader({ });

                // Render initialized Uploader component.
                uploadObj.appendTo('#fileupload')
            </script>
       </body>
  </html>
```

{% tab template="uploader/es5-getting-started",sourceFiles="index.html %}

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential JS 2 Uploader** component.

## Adding drop area

By default, the uploader component allows to upload files by drag the files from file explorer, and drop into the drop area.  You can configure any other external element as drop target using [dropArea](../api/uploader/#droparea) property.

In the following sample, drop target is configured.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <ink href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Uploader's global script -->
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
            <div id="droparea"> </div>
            <!-- Add the HTML <input> element  -->
              <input type="file" id="fileupload" name="UploadFiles">
            <script>
                // initialize Uploader component
              var uploadObj = new Uploader({
                autoUpload: false,
                dropArea: document.getElementById('droparea');
            });
                // Render initialized Uploader component.
                uploadObj.appendTo('#fileupload');
            </script>
       </body>
  </html>
```

{% tab template="uploader/es5-getting-started", sourceFiles="index.html %}

## Configure asynchronous settings

The uploader component process the files to upload in Asynchronous mode by default. Define the properties [saveUrl](api-asyncSettingsModel.html?lang=typescript) and [removeUrl](api-asyncSettingsModel.html?lang=typescript) to handle the save and remove action as shown below.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <ink href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Uploader's global script -->
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
            <div id="droparea"> </div>
            <!-- Add the HTML <input> element  -->
              <input type="file" id="fileupload" name="UploadFiles">
            <script>
                // initialize Uploader component
              var uploadObj = new Uploader({
              asyncSettings: {
                  saveUrl:'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
                  removeUrl:'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
                  }
              });
            // Render initialized Uploader component.
            uploadObj.appendTo('#fileupload');
            </script>
       </body>
  </html>
```

{% tab template="uploader/es5-getting-started", sourceFiles="index.html %}

## Handle success and failed Upload

You can handle the success and failure actions using the [success](../api/uploader/#success) and [failure](../api/uploader/#failure) &nbsp;events. To handle these event, define the function and assign it to corresponding event as shown below.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <ink href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Uploader's global script -->
            <script src="resources/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
            <div id="droparea"> </div>
            <!-- Add the HTML <input> element  -->
              <input type="file" id="fileupload" name="UploadFiles">
            <script>
                // initialize Uploader component
              var uploadObj = new Uploader({
              asyncSettings: {
                  saveUrl:'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
                  removeUrl:'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
                  },
                  success: onUploadSuccess,
                  failure: onUploadFailure
              });
            // Render initialized Uploader component.
            uploadObj.appendTo('#fileupload');
          function onUploadSuccess(args) {
            if (args.operation === 'upload') {
                console.log('File uploaded successfully');
              }
          }
          function onUploadFailure(args) {
            console.log('File failed to upload');
          }
            </script>
       </body>
  </html>
```

{% endtab %}

### Using CDN link for script and style reference

**Step 1:** Create an app folder `myapp` for the Essential JS 2 Uploader component.

**Step 2:** The Essential JS 2 Uploader component's scripts and style are added based on the CDN link formats.

**Step 3:** Create a HTML page (index.html) in `myapp` location and add the CDN link references. Now, add the `Uploader` element and initiate the `Essential JS 2 Uploader` component in the index.html by using following code.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Dialog component</title>
            <!-- Essential JS 2 material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Uploader component's script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
    <div id='container' style="margin:0 auto; width:300px;">
        <!--element which is going to render the Uploader-->
    <input type="file" id='UploadFiles' />
    </div>
</body>
<script>
 var uploadObj = new ej.inputs.Uploader();
 // render initialized Uploader
uploadObj.appendTo('#UploadFiles');
</script>
</html>

```

**Step 4:** Now, run the index.html in web browser, it will render the Essential JS 2 Uploader component.

Output will be as follows:

{% tab template="uploader/es5-getting-started", sourceFiles="index.html" %}

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Dialog component</title>
            <!-- Essential JS 2 material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Uploader component's script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
        <body>
    <div id='container' style="margin:0 auto; width:300px;">
        <!--element which is going to render the Uploader-->
    <input type="file" id='UploadFiles' />
    </div>
</body>
<script>
 var uploadObj = new ej.inputs.Uploader();
 // render initialized Uploader
uploadObj.appendTo('#UploadFiles');
</script>
</body>
</html>

```

{% endtab %}

## Using CDN link for script and style reference for adding Drop Area

By default, the Uploader component allows to upload files by drag the files from file explorer, and drop into the drop area. You can configure any other external element as drop target using **dropArea** property.

In the following sample, drop target is configured.

{% tab template="uploader/es5-getting-started", sourceFiles="index.html,index.css" %}

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Uploader with Drop area</title>
            <!-- Essential JS 2 material theme -->
            <link href="index.css" rel="stylesheet">
            <link href="http://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Uploader component's script -->
           <script src="http://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
<div id='loader'>Loading....</div>
     <div id='container' style='width: 90%'>
      <div id='droparea'>Drop files here to upload</div>
     <div id='uploadfile' >
      <input type="file" id="fileupload" name="UploadFiles"/>
    </div>
</div>
<script>
    var uploadObj = new ej.inputs.Uploader({
    autoUpload: false,
    dropArea: document.getElementById('droparea')
});
 // render initialized Uploader
uploadObj.appendTo('#UploadFiles');
</script>
</body>
</html>

```

{% endtab %}

## Using CDN link for script and style reference to Configure Asynchronous Settings

The Uploader component process the files to upload in Asynchronous mode by default. Define the properties **saveUrl** and **removeUrl** to handle the save and remove action as shown below.

{% tab template="uploader/es5-getting-started", sourceFiles="index.html" %}

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Uploader with Drop area</title>
            <!-- Essential JS 2 material theme -->
            <link href="index.css" rel="stylesheet">
            <link href="http://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Uploader component's script -->
           <script src="http://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
   <div id='loader'>Loading....</div>
        <div id='container'>
            <input type="file" id="fileupload" name="UploadFiles"/>
        </div>
    </div>
<script>
// initialize Uploader component
var uploadObj = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
    }
});
 // render initialized Uploader
uploadObj.appendTo('#UploadFiles');
</script>
</body>
</html>

```

{% endtab %}

## Using CDN link for script and style reference to Handle Success and Failed Upload

You can handle the success and failure actions using the **success** and **failure** events. To handle these event, define the function and assign it to corresponding event as shown below.

{% tab template="uploader/es5-getting-started", sourceFiles="index.html" %}

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Uploader with Drop area</title>
            <!-- Essential JS 2 material theme -->
            <link href="index.css" rel="stylesheet">
            <link href="http://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Uploader component's script -->
           <script src="http://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
    <div id='loader'>Loading....</div>
        <div id='container'>
            <input type="file" id="UploadFiles" name="UploadFiles"/>
        </div>
    </div>
<script>
var uploadObj = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
    },
    success: onUploadSuccess,
    failure: onUploadFailure
});
// render initialized Uploader
uploadObj.appendTo('#UploadFiles');
function onUploadSuccess(args) {
    if (args.operation === 'upload') {
        console.log('File uploaded successfully');
    }
}
function onUploadFailure(args) {
    console.log('File failed to upload');
}
</script>
</body>
</html>

```

{% endtab %}
