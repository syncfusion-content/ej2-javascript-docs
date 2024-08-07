var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '700px',
      connectors: [
        {
          id: 'con1',
          type: 'Bezier',
          segments: [{ type: 'Bezier', point: { x: 150, y: 100 } }],
          sourcePoint: { x: 100, y: 100 },
          targetPoint: { x: 300, y: 100 },
          annotations: [
            {
              content: 'Adjust control point or end point to autoScroll',
              alignment: 'After',
            },
          ],
          constraints:
            ej.diagrams.ConnectorConstraints.Default |
            ej.diagrams.ConnectorConstraints.DragSegmentThumb,
        },
      ],
      nodes: [
        {
          id: 'node1',
          width: 100,
          height: 60,
          offsetX: 200,
          offsetY: 300,
          annotations: [
            { content: 'Drag or resize the node to activate autoscroll' },
          ],
        },
      ],
      //Enables ruler to see the scroll offset
      rulerSettings: { showRulers: true },
      scrollSettings: {
        scrollLimit: 'Infinity',
        //Enable autoScroll
        canAutoScroll: true,
        //Defines the autoScroll border of all the sides of diagram
        autoScrollBorder: { left: 100, right: 100, top: 100, bottom: 100 },
      },
    },
    '#element'
  );
  
  document.getElementById('zoomIn').onclick = () => {
    // Zoom options to zoom-in
    let zoomOptions = {
      type: 'ZoomIn',
      zoomFactor: 0.2,
      focusPoint: { x: 0.5, y: 0.5 },
    };
    diagram.zoomTo(zoomOptions);
    diagram.dataBind();
  };
  
  document.getElementById('zoomOut').onclick = () => {
    // Zoom options to zoom-out
    let zoomOptions = {
      type: 'ZoomOut',
      zoomFactor: 0.2,
      focusPoint: { x: 0.5, y: 0.5 },
    };
    diagram.zoomTo(zoomOptions);
    diagram.dataBind();
  };
  