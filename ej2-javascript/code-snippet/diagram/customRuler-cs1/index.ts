import { Diagram } from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  rulerSettings: {
    showRulers: true,
    horizontalRuler: {
      interval: 8,
      segmentWidth: 100,
      thickness: 25,
      //Align horizontal ruler tick to the bottom side.
      tickAlignment: 'RightOrBottom',
    },
    verticalRuler: {
      interval: 10,
      segmentWidth: 200,
      thickness: 35,
      //Align vertical ruler tick to the left side.
      tickAlignment: 'LeftOrTop',
    },
  },
});
diagram.appendTo('#element');