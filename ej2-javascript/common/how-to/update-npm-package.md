---
layout: post
title: How to Update NPM Package in ##Platform_Name## Controls | Syncfusion
description: Update Syncfusion ##Platform_Name## npm packages with npm-check-updates, then run npm update and npm dedupe to keep dependencies current and remove duplicates.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to Update NPM Packages in Syncfusion® ##Platform_Name## Controls

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