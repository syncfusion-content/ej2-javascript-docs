---
layout: post
title: Update npm package in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about Update npm package in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Updating Syncfusion<sup style="font-size:70%">&reg;</sup> npm packages

Keeping Syncfusion<sup style="font-size:70%">&reg;</sup> packages up to date ensures access to new features, bug fixes, performance improvements, and security patches.

The recommended tool for bulk updates is [`npm-check-updates`](https://www.npmjs.com/package/npm-check-updates) (`ncu`), which safely updates version ranges in `package.json`.

```bash
npm install -g npm-check-updates
```

Next, use the `ncu` command to update the `package.json` file to the latest version for all `@syncfusion` packages,

```bash
ncu -u -f /^@syncfusion/
```

Finally, run the following commands to update the packages in `node_modules` and remove any duplicate packages that have been installed,

```bash
npm update
npm dedupe
```

## Updating a specific npm package

You can also update a specific npm package by running the following commands from the command prompt in the root of your application,

```bash
npm update @syncfusion/ej2-grids
npm dedupe
```

This will update the specific package you have provided and run npm dedupe command which will remove any duplicate package.