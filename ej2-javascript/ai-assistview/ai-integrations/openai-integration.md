---
layout: post
title: Open AI in ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about Integration of ChatGPT Open AI with ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: AI AssistView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Integration of Open AI With ##Platform_Name## AI AssistView control 

The Syncfusion AI AssistView supports integration with [OpenAI](https://platform.openai.com/docs/overview), enabling advanced conversational AI features in your React applications.

## Getting Started with the ##Platform_Name## AI AssistView control

Before integrating Open AI, ensure that the Syncfusion AI AssistView control is correctly rendered in your React app:

[##Platform_Name## Getting Started Guide](../getting-started)

## Prerequisites

* Requires `Node.js` (v16 or higher) and `npm`.
* OpenAI account to generate an API key for accessing the `OpenAI` API
* Syncfusion AI AssistView for ##Platform_Name## `@syncfusion/ej2-interactive-chat` installed in your project.

## Install Dependencies

Install the Syncfusion AI AssistView in your project

```bash 

npm install @syncfusion/ej2-react-interactive-chat --save

```

## Generate API Key

1. Go to [Open AI](https://platform.openai.com/docs/overview) and sign in with your Google account. If you don’t have one, create a new account. 

2. Once logged in, click on your profile icon in the top-right corner and select `API Keys` from the dropdown menu.  

3. Click the `+ Create new secret key` button. You’ll be prompted to name the key (optional). Confirm to generate the key. 

4. Your API key will be displayed once. Copy it and store it securely, as it won’t be shown again.

> `Security Note`: Never commit the API key to version control. Use environment variables or a secret manager for production.

##  Integration Open AI with ##Platform_Name## AI AssistView control

Create ##Platform_Name## application to integrate the Open AI with AI AssistView component with the respective files

* Add your generated `API Key` at the line 

```bash

const openaiApiKey = 'Place your API key here'; 

```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/ai-integrations/open-ai/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/ai-integrations/open-ai/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/ai-integrations/open-ai" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/ai-integrations/open-ai/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/ai-integrations/open-ai/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/ai-integrations/open-ai" %}
{% endif %}

## Run and Test 

Run the application in the browser using the following command.

```bash

npm start

```

Open `http://localhost:3000` to interact with your Open AI for dynamic response.
