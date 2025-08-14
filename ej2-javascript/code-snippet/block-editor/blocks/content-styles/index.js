let blocksData = [
    {
        type: 'Heading',
        props: { level: 2},
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Content Styling Options'
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Bold text: ',
                props:{
                styles: { 
                    bold: true,
                    color: '#1976d2'
                }
            }
            },
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'This text is bold.',
                props:{
                styles: { 
                    bold: true 
                }
            }
        }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Italic text: ',
                props:{
                styles: { 
                    bold: true,
                    color: '#1976d2'
                }
            }
            },
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'This text is italicized.',
                props:{
                styles: { 
                    italic: true 
                }
            }
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Text with color: ',
                props:{
                styles: { 
                    bold: true,
                    color: '#1976d2'
                }
            }
            },
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'This text has custom color.',
                props:{
                styles: { 
                    color: '#e91e63' 
                }
            }
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Text with background: ',
                props:{
                styles: { 
                    bold: true,
                    color: '#1976d2'
                }
            }
            },
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'This text has background color.',
                props:{
                styles: { 
                    bgColor: '#fff9c4' 
                }
            }
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Multiple styles: ',
                props:{
                styles: { 
                    bold: true,
                    color: '#1976d2'
                }
            }
            },
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'This text combines multiple styles.',
                props:{
                styles: { 
                    bold: true,
                    italic: true,
                    underline: true,
                    color: '#4caf50'
                }
            }
            }
        ]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
