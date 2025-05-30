ej.diagrams.Diagram.Inject(
    ej.diagrams.DataBinding,
    ej.diagrams.HierarchicalTree,
    ej.diagrams.LayoutAnimation
  );
  /**
   * hierarchical-model
   */
  //Click event for Appearance of the Property Panel.
  
  //sets node default value

  var hierarchicalTree = [
    {
      Name: 'Diagram',
      fillColor: '#916DAF',
    },
    {
      Name: 'Layout',
      Category: 'Diagram',
    },
    {
      Name: 'Tree Layout',
      Category: 'Layout',
    },
    {
      Name: 'Organizational Chart',
      Category: 'Layout',
    },
    {
      Name: 'Hierarchical Tree',
      Category: 'Tree Layout',
    },
    {
      Name: 'Radial Tree',
      Category: 'Tree Layout',
    },
    {
      Name: 'Mind Map',
      Category: 'Hierarchical Tree',
    },
    {
      Name: 'Family Tree',
      Category: 'Hierarchical Tree',
    },
    {
      Name: 'Management',
      Category: 'Organizational Chart',
    },
    {
      Name: 'Human Resources',
      Category: 'Management',
    },
    {
      Name: 'University',
      Category: 'Management',
    },
    {
      Name: 'Business',
      Category: 'Management',
    },
  ];

  function nodeDefaults(obj, diagram) {
    obj.style = {
      fill: '#659be5',
      strokeColor: 'none',
      color: 'white',
      strokeWidth: 2,
    };
    obj.borderColor = '#3a6eb5';
    obj.backgroundColor = '#659be5';
    obj.width = 150;
    obj.height = 50;
    obj.expandIcon = {
      height: 10,
      width: 10,
      shape: 'None',
      fill: 'lightgray',
      offset: { x: 0.5, y: 1 },
    };
    obj.expandIcon.verticalAlignment = 'Auto';
    obj.expandIcon.margin = { left: 0, right: 0, top: 0, bottom: 0 };
    obj.collapseIcon.offset = { x: 0.5, y: 1 };
    obj.collapseIcon.verticalAlignment = 'Auto';
    obj.collapseIcon.margin = { left: 0, right: 0, top: 0, bottom: 0 };
    obj.collapseIcon.height = 10;
    obj.collapseIcon.width = 10;
    obj.collapseIcon.padding.top = 5;
    obj.collapseIcon.shape = 'None';
    obj.collapseIcon.fill = 'lightgray';
    return obj;
  }
  //sets connector default value
  function connectorDefaults(connector, diagram) {
    connector.targetDecorator.shape = 'None';
    connector.type = 'Orthogonal';
    connector.style.strokeColor = '#6d6d6d';
    connector.constraints = 0;
    connector.cornerRadius = 5;
    return connector;
  }
  
  // tslint:disable-next-line:max-func-body-length
  
  //Initializes the nodes for the diagram
  var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '499px',
    snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
    //configures data source settings
    dataSourceSettings: {
      id: 'Name',
      parentId: 'Category',
      dataSource: new ej.data.DataManager(hierarchicalTree),
      doBinding: function (nodeModel, data, diagram) {
        nodeModel.shape = { type: 'Text', content: data.Name };
      },
    },
    //Disables all interactions except zoom/pan
    tool: ej.diagrams.DiagramTools.ZoomPan,
    //Configures automatic layout
    layout: {
      type: 'HierarchicalTree',
      verticalSpacing: 30,
      horizontalSpacing: 40,
      enableAnimation: true,
    },
    //Defines the default node and connector properties
    getNodeDefaults: function (obj, diagram) {
      return nodeDefaults(obj, diagram);
    },
    getConnectorDefaults: function (connector, diagram) {
      return connectorDefaults(connector, diagram);
    },
  });
  diagram.appendTo('#element');
  // Initializtion of the Overview.
  let overview = new ej.diagrams.Overview({
    width: '100%',
    height: '250px',
    sourceID: 'element',
  });
  overview.appendTo('#overview');
  