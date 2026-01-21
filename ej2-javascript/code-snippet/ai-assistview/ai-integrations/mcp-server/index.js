ej.base.enableRipple(true);
// Initialize AI AssistView component
var aiAssistView = new ej.interactivechat.AIAssistView({
  created: onAssistCreated,
  promptRequest: onPromptRequest,
  toolbarSettings: {
    items: [
      {
        iconCss: 'e-icons e-refresh',
        align: 'Right'
      }
    ],
    itemClicked: onToolbarItemClicked
  },
  stopRespondingClick: stopRespondingClick
});

aiAssistView.appendTo('#mcp-server');

var stopStreaming = false;

// Generate or restore session id
var sessionId =
  localStorage.getItem('assist_session') ||
  (globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function'
    ? globalThis.crypto.randomUUID()
    : String(Date.now()));

if (!localStorage.getItem('assist_session')) {
  localStorage.setItem('assist_session', sessionId);
}

function resetSession() {
  var prev = sessionId;
  sessionId =
    (globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function'
      ? globalThis.crypto.randomUUID()
      : String(Date.now()));
  localStorage.setItem('assist_session', sessionId);

  if (prev) {
    fetch('http://localhost:3000/assist/clear', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: prev })
    }).catch(function () {
      // ignore errors on clearing
    });
  }
}

function onToolbarItemClicked() {
  aiAssistView.prompts = [];
  stopStreaming = true;
  resetSession();
}

function onAssistCreated() {
  var inputArea = document.querySelector('.e-aiassistview [contenteditable="true"]');
  if (!inputArea) {
    return;
  }

  var files = [
    'src/main.ts',
    'src/app/app.ts',
    'src/app/app.html',
    'src/app/app.css',
    'src/styles.css'
  ];

  // Create Mention instance
  var mention = new ej.dropdowns.Mention({
    target: inputArea,
    showMentionChar: true,
    mentionChar: '@',
    dataSource: files,
    // No fields needed for string[] dataSource
    change: function () {
      // trigger AssistView input sync
      var inputEvent = new Event('input', { bubbles: true });
      inputArea.dispatchEvent(inputEvent);
    }
  });

  // Create a container and append the Mention popup to it
  var mentionContainer = document.createElement('div');
  document.body.appendChild(mentionContainer);
  mention.appendTo(mentionContainer);
}

function onPromptRequest(args) {
  fetch('http://localhost:3000/assist/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sessionId: sessionId,
      prompt: args.prompt,
      model: 'gpt-4o-mini',
      temperature: 0.2,
      max_tokens: 512
    })
  })
    .then(function (r) {
      return r.ok ? r.json() : r.text().then(function (t) { return Promise.reject(new Error(t)); });
    })
    .then(function (data) {
      var responseText = (data && data.content ? data.content : '').trim() || 'No response received.';
      stopStreaming = false;
      streamResponse(responseText);
    })
    .catch(function () {
      aiAssistView.addPromptResponse('⚠️ Failed to connect to server. Ensure MCP server is running at http://localhost:3000.', true);
      stopStreaming = true;
    });
}

// Robust Markdown rendering helper (works with different marked builds)
function renderMarkdown(md) {
  try {
    if (window.marked && typeof window.marked.parse === 'function') {
      return window.marked.parse(md);
    } else if (typeof window.marked === 'function') {
      return window.marked(md);
    }
  } catch (e) { /* ignore */ }
  return md;
}

async function streamResponse(response) {
  var lastResponse = '';
  var responseUpdateRate = 10;
  var i = 0;
  var responseLength = response.length;

  while (i < responseLength && !stopStreaming) {
    lastResponse += response[i];
    i++;
    if (i % responseUpdateRate === 0 || i === responseLength) {
      var htmlResponse = renderMarkdown(lastResponse);
      aiAssistView.addPromptResponse(htmlResponse, i === responseLength);
      aiAssistView.scrollToBottom();
    }
    await new Promise(function (resolve) { setTimeout(resolve, 15); });
  }
}

function stopRespondingClick() {
  stopStreaming = true;
}