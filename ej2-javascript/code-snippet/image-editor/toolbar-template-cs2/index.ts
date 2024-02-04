

import { ImageEditor, ToolbarEventArgs } from '@syncfusion/ej2-image-editor';
import { Browser } from '@syncfusion/ej2-base';
import { ItemModel } from '@syncfusion/ej2-navigations';

//Image Editor items definition

let imageEditorObj: ImageEditor = new ImageEditor({
    width: '550px',
    height: '350px',
    toolbarUpdating: (args: ToolbarEventArgs) => {
        if (args.toolbarType === 'pen') {
            args.toolbarItems.forEach((item: ItemModel) => {
                if (item.align === 'Center' && (item.tooltipText === 'Stroke Width' || item.tooltipText === 'Remove' || item.type === 'Separator')) {
                    item.visible = false;
                }
            });
        }            
    },
    created: () => {
        if (Browser.isDevice) {
            imageEditorObj.open('bee-eater.png');
        } else {
            imageEditorObj.open('bee-eater.png');
            }
        }
    });
    imageEditorObj.appendTo('#imageeditor');


