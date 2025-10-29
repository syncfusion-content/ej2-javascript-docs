---
layout: post
title: Dialogflow With ##Platform_Name## Chat UI control | Syncfusion
description:  Checkout and learn about Integration of Google Dialogflow With ##Platform_Name## Chat UI control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chat UI
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Google Dialogflow Chat UI control

The Chat UI control integrates with [Google Dialogflow](https://cloud.google.com/dialogflow/docs) to enable advanced conversational AI features in your Angular applications. The control acts as a user interface for a support bot, where user prompts are sent to the Dialogflow service via API calls, providing natural language understanding and context-aware responses.


## Prerequisites

Before starting, ensure you have the following:

* **Node.js**: Version 16 or higher with npm.

* **Google Account**: To access [Google Dialogflow](https://cloud.google.com/dialogflow/docs) and [Google Cloud Console](https://console.cloud.google.com/).

* **Syncfusion Chat UI**: Package [@syncfusion/ej2-interactive-chat](https://www.npmjs.com/package/@syncfusion/ej2-interactive-chat) installed.

* Dialogflow Service Account with the `Dialogflow API Client` role and its JSON key file.

## Set Up the Environment

Follow the [Getting Started](../getting-started) guide to configure and render the Chat UI control in your application.

## Install Dependency

`Backend` dependencies for Dialogflow and server setup:

```bash

npm install express body-parser dialogflow cors

```

## Set Up the Dialogflow Agent

1. In the dialogflow console, create an [agent](https://cloud.google.com/agent-assist/docs), set a name (e.g., `MyChatBot`), and configure the default language (e.g., English - `en`).

2. Add intents with training phrases and responses (e.g., greetings, FAQs). Test using the dialogflow simulator.

3. In the Google Cloud Console, go to `APIs & Services` > `Credentials`, create a service account with the dialogflow API client role, and download the JSON key file.

> `Security Note`: Never commit the JSON key file to version control. Use environment variables or a secret manager (e.g., Google Cloud Secret Manager) for production.

## Configure Node.js Backend

Create `backend/service-acct.json` with your Dialogflow service account credentials:

{% tabs %}
{% highlight js tabtitle="service-acct.json" %}
{
  "type": "service_account",
  "project_id": "your-dialogflow-project-id",
  "private_key_id": "abc123xyz...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEv...",
  "client_email": "dialogflow-agent@your-dialogflow-project-id.iam.gserviceaccount.com",
  ...
}
{% endhighlight %}
{% endtabs %}

Set up an Express server in `backend/index.js` to handle Dialogflow requests:

{% tabs %}
{% highlight js tabtitle="index.js" %}

const express = require('express');
const { SessionsClient } = require('dialogflow');
const bodyParser = require('body-parser');
const cors = require('cors');
const serviceAccount = require('./service-acct.json');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const projectId = serviceAccount.project_id;
const sessionClient = new SessionsClient({ credentials: serviceAccount });

app.post('/api/message', async (req, res) => {
  const message = req.body.text;
  const sessionId = req.body.sessionId || 'default-session';

  const sessionPath = `projects/${projectId}/agent/sessions/${sessionId}`;

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'en-US',
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    res.json({ reply: result.fulfillmentText });
  } catch (err) {
    console.error('Dialogflow error:', err);
    res.status(500).json({ reply: "Error connecting to Dialogflow." });
  }
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));

{% endhighlight %}
{% endtabs %}

> Use a unique `sessionId` (e.g., UUID) for each user to maintain conversation context.

## Configure message send 

Use the Chat UI [messageSend](../api/chat-ui/#messagesend) event to exchanges message. Each time a user sends a message, this event will be invoked with details of the sent message.

### Forward Message to backend:

Upon message submission, a POST request is sent to your backend API endpoint (`/api/message`). This backend service forwards the user’s message to dialogflow and waits for a response.

### Displaying Bot response:

Modify the `index.js` file to integrate the Chat UI with the dialogflow backend:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/dialogflow/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/dialogflow/index.html %}
{% endhighlight %}
{% endtabs %}       

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/dialogflow/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/dialogflow/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## Run and Test

### Start the Backend server:

Navigate to your backend project folder and run the following command to start the Node.js server:

```bash

node index.js

```

### Start the frontend:

In a separate terminal window, navigate to your project folder and start the development server:

```bash

npm start

```
Open your app and chat with your dialogflow-powered bot.

![ChatUI with Dialogflow](../images/dialogflow.png)

## Troubleshooting:

* `Permission Denied`: Ensure the service account has the `Dialogflow API Client` role in the Google Cloud Console.
* `CORS Error`: Verify that the CORS origin in backend/index.js matches your frontend Host URL.
* `No Response`: Test intents in the Dialogflow Console simulator to ensure they are configured correctly.
* `Quota Exceeded`: Check Dialogflow API quotas in the Google Cloud Console.
* `Network Issues`: Confirm the backend server is running and the frontend is pointing to the correct Host URL.
* `Invalid Credentials`: Verify the service account JSON or environment variables are correctly configured.
