ej.base.enableRipple = true;

var signature = new ej.inputs.Signature({backgroundColor:"rgb(103 58 183)", saveWithBackground: true}, '#signature');

var items = [
    {
        text: 'Png'
    },
    {
        text: 'Jpeg'
    },
    {
        text: 'Svg'
    }];

var splitBtn = new ej.splitbuttons.SplitButton({items: items, content: 'Save', select: onSelect}, '#save');

function onSelect(args) {
    signature.save(args.item.text, 'Signature');
}

document.getElementById('save').onclick = function () {
    signature.save();
}

