

import { ImageEditor } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';
import { TreeView, NodeClickEventArgs } from '@syncfusion/ej2-navigations';

const data: { [key: string]: Object }[] = [
    {
        "nodeId": "01", "nodeText": "Videos", "icon": "folder",
        "nodeChild": [
            { "nodeId": "01-01", "nodeText": "Naturals.mp4", "icon": "video" },
            { "nodeId": "01-02", "nodeText": "Wild.mpeg", "icon": "video" }
        ]
    },
    {
        "nodeId": "02", "nodeText": "Documents", "icon": "folder",
        "nodeChild": [
            { "nodeId": "02-01", "nodeText": "Environment Pollution.docx", "icon": "docx" },
            { "nodeId": "02-02", "nodeText": "Global Water, Sanitation, & Hygiene.docx", "icon": "docx" },
            { "nodeId": "02-03", "nodeText": "Global Warming.ppt", "icon": "ppt" },
            { "nodeId": "02-04", "nodeText": "Social Network.pdf", "icon": "pdf" },
            { "nodeId": "02-05", "nodeText": "Youth Empowerment.pdf", "icon": "pdf" }
        ]
    },
    {
        "nodeId": "03", "nodeText": "Pictures", "icon": "folder", "expanded": true,
        "nodeChild": [
            {
                "nodeId": "03-01", "nodeText": "Camera Roll", "icon": "folder", "expanded": true,
                "nodeChild": [
                    { "nodeId": "03-01-01", "nodeText": "WIN_20160726_094117.JPG", "image": "https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png" },
                    { "nodeId": "03-01-02", "nodeText": "WIN_20160726_094118.JPG", "image": "https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png" }
                ]
            },
        ]
    }
];

let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '330px',
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
        }
    }
});
imageEditorObj.appendTo('#imageeditor');

let treeViewInstance: TreeView = new TreeView({
    fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' },
    nodeClicked: (args: NodeClickEventArgs) => {
        let nodeId = args.node.getAttribute('data-uid');
        let nodeData = treeViewInstance.getTreeData(nodeId)[0];
        if (nodeData && nodeData.image) {
            imageEditorObj.open(nodeData.image as string);
        }
    }
});
treeViewInstance.appendTo("#tree");
