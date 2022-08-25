---
title: "Getting Started"
component: "Sidebar"
description: "This getting started section briefly explains how to create a sidebar component in application."
---

# Getting Started

This section briefly explains how to create a simple **Sidebar** component, and
configure it in TypeScript using Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart)
 &nbsp;seed repository.

## Dependencies

The following list of dependencies are required to use the Sidebar component in your application.

```js
|-- @syncfusion/ej2-navigations
  |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-build
  |-- @syncfusion/ej2-lists
  |-- @syncfusion/ej2-data
  |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-splitbuttons
  |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
```

## Installation and configuration

* Clone the Essential JS 2 quickstart application project from [GitHub](https://github.com/syncfusion/ej2-quickstart), and
install the necessary npm packages using the following command.

```shell
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> By default, the project is configured with all the Essential JS 2 dependencies. For better understanding, remove all the dependencies from
`src/system.config.js` to get started with the Sidebar component.

* Refer to the [Sidebar component dependencies](./getting-started#dependencies) in the `system.config.js` configuration file.

`[src/system.config.js]`

```js
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');

```

## Adding Style sheet to the Application

To render the Sidebar component, need to import sidebar and its dependent component's styles as given below in `style.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
```

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Initialize Sidebar using HTML elements

A Sidebar can be initialized using any HTML element. Most probably the `<aside>` tag is used to render Sidebar as it contains secondary content aside from the main content. The immediate sibling element of the Sidebar will be considered as the main content.

To render the Sidebar, refer to the following structure of the HTML elements:

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Sidebar</title>
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
        <div id='container'>
        <aside id="default">
            <div class="title"> Sidebar </div>
        </aside>
        <!-- end of sidebar element -->
        <!-- main content declaration -->
        <div>
            <div class="title">Main content</div>
            <div class="sub-title"> Content goes here</div>
        </div>
    </div>
</body>

</html>

```

* Import the Sidebar component to your `app.ts` file, and initialize it to the `#default` as follows:

`[src/app/app.ts]`

```typescript

import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let defaultSidebar: Sidebar = new Sidebar();
defaultSidebar.appendTo('#default');
    //end of sidebar initialization

```

## Run the application

The `Essential JS 2 quickstart` application project is configured to compile and run the application in browser.
Use the following command to run the application.

```cmd
npm start
```

{% tab template="sidebar/default", es5Template="es5_sidebar_template", sourceFiles="app.ts,index.html,styles.css" %}

```typescript

import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let defaultSidebar: Sidebar = new Sidebar({
});
defaultSidebar.appendTo('#default');
    //end of sidebar initialization

```

{% endtab %}

> Sidebar will, by default, fit the size of its content. There is also an option to set a certain width using the [`width`](../api/sidebar/#width) property.

## Enable backdrop

Enabling the [`showBackdrop`](../api/sidebar/#showbackdrop) in the Sidebar component will prevent
the main content from user interactions, when it is in expanded state.
Here, the DOM elements will not get changed. It only closes the main content by covering with a black backdrop overlay and focuses the Sidebar in the screen. Sidebar can be rendered with specific width by setting `width` property.

The following example shows a Sidebar component with enabled backdrop.

{% tab template="sidebar/sidebar-howTo", es5Template="es5_sidebar_nested", sourceFiles="app.ts,index.html,styles.css" %}

```typescript

import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let defaultSidebar: Sidebar = new Sidebar({
    showBackdrop: true, type: "Push",width: '280px'
});
defaultSidebar.appendTo('#default-sidebar');
//end of Sidebar initialization

// Toggle(Open/Close) the Sidebar
document.getElementById('toggle').onclick = (): void => {
    defaultSidebar.toggle();
};

// Close the Sidebar
document.getElementById('close').onclick = (): void => {
    defaultSidebar.hide();
};

```

{% endtab %}

## Position

Positioning the Sidebar to the right or left of the main content can be achieved by using the [`position`](../api/sidebar/#position) property. If the position is not set, the Sidebar will expand from the left to the body element. `enablePersistence` will persist the component's state between page reloads. `change` event will be triggered when the state(expand/collapse) of the component is changed.

In the following sample, the position of the Sidebar can be changed using the radio buttons in the main content.

{% tab template="sidebar/position", es5Template="es5_sidebar_single", sourceFiles="app.ts,index.html,styles.css"%}

```typescript

import { Sidebar } from '@syncfusion/ej2-navigations';
import { Button,RadioButton,ChangeArgs } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
//Sidebar initialization
 let defaultSidebar: Sidebar = new Sidebar({
    width: "280px",
    type: "Push",
    enablePersistence: true,
    target:<HTMLElement> document.querySelector('.maincontent')
    });
    defaultSidebar.appendTo('#default-sidebar');
    //end of Sidebar initialization

//toggle button initialization
let togglebtn: Button = new Button({iconCss: 'e-icons burg-icon', isToggle: true, content:'Open'}, '#toggle');

//Click Event.
document.getElementById('toggle').onclick = (): void => {
        if (document.getElementById('toggle').classList.contains('e-active')) {
            togglebtn.content = 'Close';
            defaultSidebar.show();
        } else {
            togglebtn.content = 'Open';
            defaultSidebar.hide();
        }
    };

    // Close the Sidebar
    document.getElementById('close').onclick = (): void => {
        defaultSidebar.hide();
        document.getElementById('toggle').classList.remove('e-active');
        togglebtn.content = 'Open'
    };

let positionLeft: RadioButton = new RadioButton({ label: 'Left', name: 'state', checked: true,change:Change });
positionLeft.appendTo('#left');

//unchecked state.
let positionRight: RadioButton = new RadioButton({ label: 'Right', name: 'state',change:Change });
positionRight.appendTo('#right');

function Change(args: ChangeArgs) {
  defaultSidebar.position = ((<HTMLInputElement>args.event.target).id == "left") ? "Left" : "Right";
}

```

{% endtab %}

## Animate

Animation transitions can be set while expanding or collapsing the Sidebar using the `animate` property. By default , `animate` property is set to true. `enableRTL` will display the sidebar in the right-to-left direction.

{% tab template="sidebar/animate", es5Template="es5_sidebar_animate", sourceFiles="app.ts,index.html,styles.css"%}

```typescript

import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let defaultSidebar: Sidebar = new Sidebar({
    type: "Push",width: '280px',animate: false, enableRtl: true
});
defaultSidebar.appendTo('#default-sidebar');
//end of Sidebar initialization

// Toggle(Open/Close) the Sidebar
document.getElementById('toggle').onclick = (): void => {
    defaultSidebar.toggle();
};

// Close the Sidebar
document.getElementById('close').onclick = (): void => {
    defaultSidebar.hide();
};

```

{% endtab %}

## Close on document click

Sidebar can be closed on document click by setting `closeOnDocumentClick` to true. If this property is not set, the Sidebar will not close on document click since its default value is false. Sidebar can be kept opened during rendering using `isOpen` property.

{% tab template="sidebar/document-click", es5Template="es5_sidebar_click", sourceFiles="app.ts,index.html,styles.css"%}

```typescript

import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let defaultSidebar: Sidebar = new Sidebar({
    type: "Push",width: '280px',closeOnDocumentClick: true,isOpen: true
});
defaultSidebar.appendTo('#default-sidebar');
//end of Sidebar initialization

// Toggle(Open/Close) the Sidebar
document.getElementById('toggle').onclick = (): void => {
    defaultSidebar.show();
};


```

{% endtab %}

## Enable gestures

Expand or collapse the Sidebar while swiping in touch devices using `enableGestures` property. By default, `enableGestures` is set to true.

{% tab template="sidebar/gestures", es5Template="es5_sidebar_gestures", sourceFiles="app.ts,index.html,styles.css"%}

```typescript

import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

let defaultSidebar: Sidebar = new Sidebar({
    type: "Push",width: '280px',enableGestures:false
});
defaultSidebar.appendTo('#default-sidebar');
//end of Sidebar initialization

// Toggle(Open/Close) the Sidebar
document.getElementById('toggle').onclick = (): void => {
    defaultSidebar.toggle();
};

// Close the Sidebar
document.getElementById('close').onclick = (): void => {
    defaultSidebar.hide();
};

```

{% endtab %}

## See Also

* [Sidebar with navigation menu](https://ej2.syncfusion.com/demos/#/material/sidebar/sidebar-menu.html)
* [Sidebar responsive panel](https://ej2.syncfusion.com/demos/#/material/sidebar/responsive-panel.html)
* [Sidebar with listView](./how-to/sidebar-with-list-view/)
* [Usecase sample](https://ej2.syncfusion.com/showcase/typescript/webmail/#/home)