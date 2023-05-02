


import { Accordion, TreeView } from '@syncfusion/ej2-navigations';
import { DocDB, DownloadDB, PicDB} from 'datasource.ts'

  //Initialize Accordion component
    let acrdnObj: Accordion = new Accordion({
    expanding: expand,
    width: 400,
       items : [
           { header: 'Documents', expanded: true, content: '<div id="treeDoc"></div>' },
           { header: 'Downloads', content : '<div id="treeDownload"></div>' },
           { header: 'Pictures', content: '<div id="treePic"></div>' },
       ]
    });
    //Render initialized Accordion component
    acrdnObj.appendTo('#element');

    //Expanding Event function for Accordion component.
    function expand(e: ExpandEventArgs): void {
  if (e.name === 'expanding' && [].indexOf.call(this.items, e.item) === 0 && e.element.querySelector('#treeDoc').childElementCount === 0) {
    //Initialize TreeView component
        let treeObj: TreeView = new TreeView({
        fields: { dataSource: DocDB, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' },
        sortOrder: 'Ascending'
    });
    //Render initialized TreeView component
    treeObj.appendTo('#treeDoc');
  }
    if (e.name === 'expanding' && [].indexOf.call(this.items, e.item) === 1 && e.element.querySelector('#treeDownload').childElementCount === 0) {
        let treeObj: TreeView = new TreeView({
        fields: { dataSource: DownloadDB, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' },
        sortOrder: 'Ascending'
    });
    treeObj.appendTo('#treeDownload');
  }
      if (e.name === 'expanding' && [].indexOf.call(this.items, e.item) === 2 && e.element.querySelector('#treePic').childElementCount === 0) {
        let treeObj: TreeView = new TreeView({
        fields: { dataSource: PicDB, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' },
        sortOrder: 'Ascending'
    });
    treeObj.appendTo('#treePic');
  }
}



