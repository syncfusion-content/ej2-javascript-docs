var editor = new ej.richtexteditor.RichTextEditor({
    value: `
<blockquote>
        <p><strong>Outer Quote:</strong> The Rich Text Editor provides a flexible way to format quotations.</p>
        <blockquote>
            <p><em>Inner Quote:</em> You can even nest blockquotes to represent quoted replies or layered citations.</p>
            <blockquote>
                <p><em>Deep Quote:</em> This is useful in forums, emails, or academic writing where multiple levels of quoting are needed.</p>
            </blockquote>
        </blockquote>
    </blockquote>
`,
    toolbarSettings: {
        items: ['Blockquote', 'Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|', 'Undo', 'Redo']
    }});
editor.appendTo('#editor');