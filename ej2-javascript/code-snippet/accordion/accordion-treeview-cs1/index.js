ej.base.enableRipple(true);

  var DocDB = [
    {
            nodeId: '03', nodeText: 'Documents', icon: 'folder',
            nodeChild: [
                { nodeId: '03-01', nodeText: 'Environment Pollution.docx', icon: 'docx' },
                { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx', icon: 'docx' },
                { nodeId: '03-03', nodeText: 'Global Warming.ppt', icon: 'ppt' },
                { nodeId: '03-04', nodeText: 'Social Network.pdf', icon: 'pdf' },
                { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf', icon: 'pdf' },
            ]
        },
    ]
    
  var DownloadDB = [
        {
            nodeId: '05', nodeText: 'Downloads', icon: 'folder',
            nodeChild: [
                { nodeId: '05-01', nodeText: 'UI-Guide.pdf', icon: 'pdf' },
                { nodeId: '05-02', nodeText: 'Tutorials.zip', icon: 'zip' },
                { nodeId: '05-03', nodeText: 'Game.exe', icon: 'exe' },
                { nodeId: '05-04', nodeText: 'TypeScript.7z', icon: 'zip' },
            ]
        }
    ]
    
  var PicDB = [
        {
            nodeId: '04', nodeText: 'Pictures', icon: 'folder', expanded: true,
            nodeChild: [
                {
                    nodeId: '04-01', nodeText: 'Camera Roll', icon: 'folder', expanded: true,
                    nodeChild: [
                        { nodeId: '04-01-01', nodeText: 'WIN_20160726_094117.JPG', image: 'http://npmci.syncfusion.com/development/demos/src/images/employees/9.png' },
                        { nodeId: '04-01-02', nodeText: 'WIN_20160726_094118.JPG', image: 'http://npmci.syncfusion.com/development/demos/src/images/employees/3.png' },
                    ]
                },
                { nodeId: '04-02', nodeText: 'Wind.jpg', icon: 'images' },
                { nodeId: '04-03', nodeText: 'Stone.jpg', icon: 'images' },
            ]
        }
    ]


//Initialize Accordion component

    var accordion = new ej.navigations.Accordion({    
    expanding: expand,
    width: 400,
       items : [
           { header: 'Documents', expanded: true, content: '<div id="treeDoc"></div>' },
           { header: 'Downloads', content : '<div id="treeDownload"></div>' },
           { header: 'Pictures', content: '<div id="treePic"></div>' },
       ]
    });

//Render initialized Accordion component
    accordion.appendTo('#element');

    function expand(e) {
  if (e.name === 'expanding' && [].indexOf.call(this.items, e.item) === 0 && e.element.querySelector('#treeDoc').childElementCount === 0) {
        let treeObj = new ej.navigations.TreeView({
        fields: { dataSource: DocDB, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' },
        sortOrder: 'Ascending'
    });
    treeObj.appendTo('#treeDoc');
  }
    if (e.name === 'expanding' && [].indexOf.call(this.items, e.item) === 1 && e.element.querySelector('#treeDownload').childElementCount === 0) {
        let treeObj = new ej.navigations.TreeView({
        fields: { dataSource: DownloadDB, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' },
        sortOrder: 'Ascending'
    });
    treeObj.appendTo('#treeDownload');
  }
  
      if (e.name === 'expanding' && [].indexOf.call(this.items, e.item) === 2 && e.element.querySelector('#treePic').childElementCount === 0) {
        let treeObj = new ej.navigations.TreeView({
        fields: { dataSource: PicDB, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' },
        sortOrder: 'Ascending'
    });
    treeObj.appendTo('#treePic');
  }
}

