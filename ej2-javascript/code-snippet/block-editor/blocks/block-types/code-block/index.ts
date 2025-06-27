import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        type: 'Code',
        content: [
            {
                type: ContentType.Text,  
                content: 'function greeting() {\n  console.log("Hello, world!");\n}'
            }
        ],
        codeSettings: {
            defaultLanguage: 'javascript',
            languages: [
                { language: 'javascript', label: 'JavaScript' },
                { language: 'typescript', label: 'TypeScript' },
                { language: 'html', label: 'HTML' },
                { language: 'css', label: 'CSS' }
            ]
        }
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
