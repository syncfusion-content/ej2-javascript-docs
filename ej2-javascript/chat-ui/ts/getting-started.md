---
layout: post
title: Getting started with ##Platform_Name## Chat UI control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Chat UI control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Chat UI
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with ##Platform_Name## Chat UI control

This section explains how to create a simple Chat UI control and configure its available functionalities in TypeScript, using Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli#commands). It requires Node.js `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started).

## Prerequisites

Before getting started, ensure the following tools are installed on your machine:

| Tool | Version / Notes |
|------|----------------|
| Node.js | v14.15.0 or higher |
| npm | Bundled with Node.js |
| Git | Required to clone the quickstart repository |
| Visual Studio Code | Recommended code editor |

You can verify your Node.js and npm versions by running:

```bash
node -v
npm -v
```

## Registering the license key

Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 controls require a valid license key from version **16.2.0.41** onwards. Using the controls without a license key will display a **license validation message** in the browser console.

**Steps to register the license key:**

1. Sign in to the [Syncfusion License Portal](https://www.syncfusion.com/account/downloads) and copy your license key.
2. Register the key in your `src/app/app.ts` file, before instantiating any Syncfusion control:

```ts
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY_HERE');
```

> For more details on obtaining and registering a license key, refer to the [License Key Generation](https://ej2.syncfusion.com/documentation/licensing/license-key-generation) and [License Key Registration](https://ej2.syncfusion.com/documentation/licensing/license-key-registration) documentation.

## Setup for local development

Clone the Essential<sup style="font-size:70%">&reg;</sup> JS 2 quickstart application project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) using the following command line scripts.

```bash
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack
cd ej2-quickstart-webpack
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Chat UI package

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

Use the following command to install the `@syncfusion/ej2-interactive-chat` package:

```bash
npm install @syncfusion/ej2-interactive-chat --save
```

Then, install the remaining dependent npm packages using the following command:

```bash
npm install
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Chat UI controls can be applied using CSS files provided through the [npm theme package](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-theme). Install the Fluent 2 theme package using the following command:

```bash
npm install @syncfusion/ej2-fluent2-theme --save
```

Then add the following CSS reference to the `src/styles/styles.css` file:

```css
@import "../../node_modules/@syncfusion/ej2-fluent2-theme/styles/chat-ui/index.css";
```

## Adding Chat UI control

Add the Chat UI control in **src/app/app.ts** file using the following code.

You can use the [messages](../api/chat-ui#messages) property to add messages and the [user](../api/chat-ui#user) property to configure the current user for the chat.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/default-messages/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/default-messages/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/default-messages" %}

## Run the application

The `npm start` command compiles the TypeScript source files and starts the webpack development server. Run the following command:

```bash
npm start
```

Open `http://localhost:8080` (or the port shown in the terminal) in a browser. You should see a Chat UI rendered with the default layout.
