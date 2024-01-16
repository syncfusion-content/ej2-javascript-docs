ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: 490,
        //Configrues hierarchical tree layout
        layout: {
            type: 'HierarchicalTree', margin: { left: 0, right: 0, top: 100, bottom: 0 },
            verticalSpacing: 40,
            getLayoutInfo: function (node, options) {
                if (options.level === 3) {
                    node.style.fill = '#3c418d';
                }
                if (options.level === 2) {
                    node.style.fill = '#108d8d';
                    options.type = 'Center';
                    options.orientation = 'Horizontal';
                }
                if (options.level === 1) {
                    node.style.fill = '#822b86';
                }
            }
        },
        //Sets the default values of nodes
        getNodeDefaults: function (obj) {
            obj.width = 80;
            obj.height = 40;
            obj.shape = { type: 'Basic', shape: 'Rectangle' };
            obj.style = { fill: '#048785', strokeColor: 'Transparent' };
        },
        //Sets the default values of connector
        getConnectorDefaults: function (connector) {
            connector.type = 'Orthogonal';
            connector.style.strokeColor = '#048785';
            connector.targetDecorator.shape = 'None';
        },
        //Configures data source
        dataSourceSettings: {
            id: 'Id', parentId: 'ParentId',
            dataSource: new DataManager(
                { url: 'https://services.syncfusion.com/js/production/api/RemoteData', crossDomain: true },
            ),
            //binds the external data with node
            doBinding: (nodeModel, data, diagram) => {
                nodeModel.annotations = [{
                    /* tslint:disable:no-string-literal */
                    content: data['Label'],
                    style: { color: 'white' }
                }];
            }
        },
        //Disables all interactions except zoom/pan
        tool: ej.diagrams.DiagramTools.ZoomPan,
        snapSettings: { constraints: 0 }
    });
    diagram.appendTo('#element');

