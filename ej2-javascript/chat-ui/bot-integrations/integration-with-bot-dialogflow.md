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

# Google Dialogflow Chat UI control

The Syncfusion Chat UI supports integration with [Google Dialogflow](https://cloud.google.com/dialogflow/docs), enabling advanced conversational AI features in your  applications.

## Getting Started With the ChatUI control

Before integrating Dialogflow, ensure that the Syncfusion Chat UI control is correctly rendered in your application:
[ Getting Started Guide](../getting-started)

## Prerequisites

* Google account to access `Dialogflow` and `Google Cloud Console`.
* Backend requires `Node.js` (v16 or higher) and `npm`.
* Syncfusion Chat UI for `@syncfusion/ej2-interactive-chat` installed in your project.
* Dialogflow Service Account with the `Dialogflow API Client` role and its JSON key file.

## Install Dependencies

* Install `backend` dependencies for Dialogflow and server setup:

```bash

npm install express body-parser dialogflow cors

```
* Install the Syncfusion Chat UI in your  project:

```bash

npm install @syncfusion/ej2-interactive-chat --save

```

## Set Up the Dialogflow Agent

1. In the dialogflow console, create an [agent](https://cloud.google.com/agent-assist/docs), set a name (e.g., `MyChatBot`), and configure the default language (e.g., English - `en`).

2. Add intents with training phrases and responses (e.g., greetings, FAQs). Test using the dialogflow simulator.

3. In the Google Cloud Console, go to `APIs & Services` > `Credentials`, create a Service Account with the dialogflow API client role, and download the JSON key file.

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

Use the Chat UI `messageSend` event to exchanges  message. Each time a user sends a message, this event will be invoked with details of the sent message.

### Forward Message to backend:

Upon message submission, a POST request is sent to your backend API endpoint (`/api/message`). This backend service forwards the user’s message to dialogflow and waits for a response.

### Displaying Bot response:

You can add the below respective files in your application:

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