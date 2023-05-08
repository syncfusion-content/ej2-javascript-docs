var tooltip = new ej.popups.Tooltip({
    content: 'Drag me !!!',
    target: '#demoSmart',
    animation: { open: { effect: 'None' }, close: { effect: 'None' } }
}, '#targetContainer');
var ele = document.getElementById('demoSmart');
var drag = new ej.base.Draggable(ele, {
    clone: false,
    dragArea: '#targetContainer',
    drag: (args) => {
        tooltip.refresh(args.element);
    },
    dragStart: (args) => {
        tooltip.open(args.element);
    },
    dragStop: (args) => {
        tooltip.close();
    }
});


