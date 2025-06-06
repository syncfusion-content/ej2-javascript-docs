ej.diagrams.Diagram.Inject(
    ej.diagrams.DataBinding,
    ej.diagrams.HierarchicalTree
  );
  var data = [
    {
      Name: 'Steve-Ceo',
    },
    {
      Name: 'Kevin-Manager',
      ReportingPerson: 'Steve-Ceo',
    },
    {
      Name: 'Peter-Manager',
      ReportingPerson: 'Kevin-Manager',
    },
    {
      Name: 'John- Manager',
      ReportingPerson: 'Peter-Manager',
    },
    {
      Name: 'Mary-CSE ',
      ReportingPerson: 'Peter-Manager',
    },
  ];
  
  var items = new ej.data.DataManager(data, new ej.data.Query().take(7));
  
  var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '550px',
    //Uses layout to auto-arrange nodes on the Diagram page
    layout: {
      //Sets layout type
      type: 'HierarchicalTree',
      //set layout alignment
      horizontalSpacing: 25,
      verticalSpacing: 30,
      horizontalAlignment: 'Left',
      verticalAlignment: 'Top',
      margin: { left: 100, top: 100 },
    },
    dataSourceSettings: {
      id: 'Name',
      parentId: 'ReportingPerson',
      dataManager: items,
    },
    getNodeDefaults: (obj) => {
      obj.shape = {
        type: 'Text',
        content: obj.data.Name,
      };
      obj.style = {
        fill: 'None',
        strokeColor: 'none',
        strokeWidth: 2,
        bold: true,
        color: 'white',
      };
      obj.width = 100;
      obj.height = 40;
      obj.borderColor = 'white';
      obj.backgroundColor = '#6BA5D7';
      obj.borderWidth = 1;
      return obj;
    },
    getConnectorDefaults: (connector) => {
      connector.style = {
        strokeColor: '#6BA5D7',
        strokeWidth: 2,
      };
      connector.targetDecorator.style.fill = '#6BA5D7';
      connector.targetDecorator.style.strokeColor = '#6BA5D7';
      connector.type = 'Orthogonal';
      return connector;
    },
  });
  diagram.appendTo('#element');
  
  let marginLeft = document.getElementById('marginLeft');
  let marginTop = document.getElementById('marginTop');
  
  marginLeft.onchange = (args) => {
    let value = Number(args.target.value);
    if (value < 20) {
      value = 20;
    }
    if (value > 500) {
      value = 500;
    }
    marginLeft.value = value.toString();
    diagram.layout.margin.left = value;
    diagram.dataBind();
  };
  
  marginTop.onchange = (args) => {
    let value = Number(args.target.value);
    if (value < 20) {
      value = 20;
    }
    if (value > 500) {
      value = 500;
    }
    marginTop.value = value.toString();
    diagram.layout.margin.top = value;
    diagram.dataBind();
  };
  