---
layout: post
title: Gemini AI in ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about Integration of Gemini AI with ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: AI AssistView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Gemini AI With TypeScript AI AssistView control

The AI AssistView control integrates with Google’s [Gemini](https://ai.google.dev/gemini-api/docs) API to deliver intelligent conversational interfaces. It leverages advanced natural language understanding to interpret user input, maintain context throughout interactions, and provide accurate, relevant responses. By configuring secure authentication and data handling, developers can unlock powerful AI-driven communication features that elevate user engagement and streamline support experiences.

## Prerequisites

* **Node.js**: Version 16 or higher with npm.

* **Google Account**: For generating a Gemini API key.

* **Syncfusion AI AssistView**: Package [@syncfusion/ej2-interactive-chat](https://www.npmjs.com/package/@syncfusion/ej2-interactive-chat) installed.

* **Marked Library**: For parsing Markdown responses (`npm install marked --save`).

## Set Up the Environment

Follow the Syncfusion AI AssistView [Getting Started](../getting-started) guide to configure and render the AI AssistView control in your application.

## Install Dependencies

Install the required packages:

1. Google Generative AI SDK:

```bash

npm install @google/generative-ai

```
2. Marked Library:

```bash

npm install marked --save

```

## Generate API Key

1. **Access Google AI Studio**: Instructs users to sign into [Google AI Studio](https://aistudio.google.com/app/apikey) with a Google account or create a new account if needed.

2. **Navigate to API Key Creation**: Go to the `Get API Key` option in the left-hand menu or top-right corner of the dashboard. Click the `Create API Key` button. 

3. **Project Selection**: Choose an existing Google Cloud project or create a new one.

4. **API Key Generation**: After project selection, the API key is generated. Users are instructed to copy and store the key securely, as it is shown only once.

> `Security Note`: Advises against committing the API key to version control and recommends using environment variables or a secret manager in production.

## Configure Gemini AI with AI AssistView

Modify the `index.js` file to integrate the Gemini API with the AI AssistView control.

* Add your Gemini API key securely in the configuration:

```bash

const geminiApiKey = 'Place your API key here'; 

```

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/ai-integrations/gemini-ai/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/ai-integrations/gemini-ai/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/ai-integrations/gemini-ai" %}
