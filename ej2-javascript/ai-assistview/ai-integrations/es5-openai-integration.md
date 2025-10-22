---
layout: post
title: Azure OpenAI in ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about Integration of Azure OpenAI with ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: AI AssistView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Azure OpenAI With JavaScript AI AssistView control 

The AI AssistView control integrates with [Azure OpenAI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai) to enable advanced conversational AI features in your applications. The control acts as a user interface, where user prompts are sent to the Azure OpenAI service via API calls, providing natural language understanding and context-aware responses.

## Prerequisites

Before starting, ensure you have the following:

* **Node.js**: Version 16 or higher with npm.

* **Azure Account**: With access to Azure OpenAI services and a generated API key.

* **Syncfusion AI AssistView**: Package [@syncfusion/ej2-interactive-chat](https://www.npmjs.com/package/@syncfusion/ej2-interactive-chat) installed.

* **Marked Library**: For parsing Markdown responses (`npm install marked --save`).

## Set Up the Environment

Follow the Syncfusion AI AssistView [Getting Started](../getting-started) guide to configure and render the AI AssistView control in your application.

## Install Dependency

To install the marked library, run `npm install marked --save` in your project directory to add it as a dependency in your package.json file.

## Generate Azure API Key

1. Log in to the [Azure Portal](https://portal.azure.com/#home) and navigate to your Azure OpenAI resource. 

2. Under resource management, select keys and endpoint to retrieve your API key and endpoint URL.  

3. Note the following values:
   - API key
   - Endpoint
   - API version (must be supported by your resource)
   - Deployment name (for example, gpt-4o-mini)

4. Store these values securely, as they will be used in your application.

> `Security Note`: Never expose your API key in client-side code for production applications. Use a server-side proxy or environment variables to manage sensitive information securely.

##  Configure Azure OpenAI with JavaScript AI AssistView control

Modify the `index.js` file to integrate the Azure OpenAI with the AI AssistView control.

* Update the following configuration values with Azure OpenAI details:

```bash

var azureOpenAIApiKey = 'Your_Azure_OpenAI_API_Key';
var azureOpenAIEndpoint = 'Your_Azure_OpenAI_Endpoint';
var azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version';
var azureDeploymentName = 'Your_Deployment_Name';

```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/ai-integrations/open-ai/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/ai-integrations/open-ai/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/ai-integrations/open-ai" %}
