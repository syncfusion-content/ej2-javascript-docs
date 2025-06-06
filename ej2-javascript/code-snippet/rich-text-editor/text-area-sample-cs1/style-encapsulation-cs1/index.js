var editor1 = new ej.richtexteditor.RichTextEditor({
  value: `<p>The Syncfusion <strong>Rich Text Editor</strong>, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul>
  <li>
     <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p>
  </li>
  <li>
     <p>Bulleted and numbered lists.</p>
  </li>
  <li>
     <p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p>
  </li>
  <li>
     <p>Contains undo/redo manager. </p>
  </li>
</ul><div style="display: inline-block; width: 60%; vertical-align: top; cursor: auto;"></div> `,
  iframeSettings: {
    enable: true,
  },
});

// render initialized Rich Text Editor
editor1.appendTo('#editor1');

var editor2 = new ej.richtexteditor.RichTextEditor({
  value: `<p>The Syncfusion <strong>Rich Text Editor</strong>, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul>
    <li>
       <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p>
    </li>
    <li>
       <p>Bulleted and numbered lists.</p>
    </li>
    <li>
       <p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p>
    </li>
    <li>
       <p>Contains undo/redo manager. </p>
    </li>
  </ul><div style="display: inline-block; width: 60%; vertical-align: top; cursor: auto;"></div> `,
});

// render initialized Rich Text Editor
editor2.appendTo('#editor2');
