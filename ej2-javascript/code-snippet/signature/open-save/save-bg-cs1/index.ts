

import { Signature, SignatureFileType } from '@syncfusion/ej2-inputs';
import { SplitButton, ItemModel, MenuEventArgs } from '@syncfusion/ej2-splitbuttons';

let signature: Signature = new Signature({saveWithBackground: true, backgroundColor:"rgb(103 58 183)"});
signature.appendTo('#signature');

let items: ItemModel[] = [
    {
        text: 'Png'
    },
    {
        text: 'Jpeg'
    },
    {
        text: 'Svg'
    }];

let splitBtn: SplitButton = new SplitButton({iconCss: 'e-sign-icons e-save', items: items, content: 'Save', select: onSelect }, '#save');

function onSelect(args: MenuEventArgs): void {
    signature.save(args.item.text as SignatureFileType, 'Signature');
}

document.getElementById('save').onclick = function () {
    signature.save();
}



