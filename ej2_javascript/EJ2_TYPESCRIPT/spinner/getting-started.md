---
title: "Getting Started"
component: "Spinner"
description: "Helps to get started with the spinner component."
---

# Getting Started

Initialize the Spinner using `createSpinner` method and show/hide the spinner using `showSpinner` and `hideSpinner` methods accordingly. Set the target to the spinner to render it based on specific target.

The following steps explains you on how to create and how to show/hide your Spinner.

* Import the `createSpinner` method from `ej2-popups` library into your file as shown in below.

```typescript
import { createSpinner } from '@syncfusion/ej2-popups';
```

* Show and hide this spinner by using `showSpinner` and `hideSpinner` methods for loading in your page and import them in your file as shown in below.

```typescript
import { showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
```

## Create the Spinner globally

The Spinner can be render globally in a page using public exported functions of the `ej2-popups` package.

{% tab template="spinner/intro",sourceFiles="app.ts,index.html,styles.css", es5Template="default" %}

```typescript

import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';

//createSpinner() method is used to create spinner

 createSpinner({

  // Specify the target for the spinner to show

        target: document.getElementById('container')

    });

// showSpinner() will make the spinner visible

 showSpinner(document.getElementById('container'));

setInterval(function(){

  // hideSpinner() method used hide spinner
  hideSpinner(document.getElementById('container'));

}, 100000);

```

{% endtab %}