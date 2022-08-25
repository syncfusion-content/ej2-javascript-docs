---
title: "Getting Started"
component: "Card"
description: "This section explains how to create a Card component in the TypeScript application with its basic features."
---

# Getting Started

This section explains how to create a simple **Card** using styles by configuring the structure for the header, content, using Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart.git) seed repository.

## Dependencies

The Card is pure CSS component so no other package dependencies are needed to render the Card.

```js
|-- @syncfusion/ej2-layouts
```

## Installation and configuration

* Clone the Essential JS 2 quickstart application project from
[GitHub](https://github.com/syncfusion/ej2-quickstart.git), and
install necessary npm packages using the following command line scripts.

```shell
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> By default, the project is configured with all the EJ2 dependencies. Since Card component is a pure CSS component so no need to configure `src/system.config.js` file.  For better understanding, remove that file.

* The Card CSS files are available in the `ej2-layouts` package folder.
This can be referenced in your application using the following code.

`[src/styles/styles.css]`

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-layouts/styles/material.css';
```

## Adding a simple Card

* Add the HTML `div` element with `e-card` class into your `index.html`.

`[src/index.html]`

```html
        <div class = "e-card">
          Sample Card
        </div>
```

## Adding a header and content

You can create Card with a header in a specific structure. For adding header you need to create a `div` element with `e-card-header` class added.

* You can include heading inside the Card header by adding a `div` element with `e-card-header-caption` class, and also content will be added by adding element with `e-card-content`. For detailed information, refer to the [Header and Content](./header-content/).

```html
    <div class = "e-card">                    --> Root Element
        <div class="e-card-header">           --> Root Header Element
            <div class="e-card-header-caption">    --> Root Heading Element
                <div class="e-card-header-title"></div>   --> Heading Title Element
            </div>
            <div class="e-card-content"></div>         --> Card content Element
        </div>
    </div>
```

* Now, run the application in the browser using the following command.

```shell
npm start
```

Output will be as follows:

{% tab template="card/card_header", isDefaultActive=true, sourceFiles="index.html,index.css" %}

{% endtab %}

## See Also

* [How to add a header and content](./header-content)