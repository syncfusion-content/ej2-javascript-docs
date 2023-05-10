ej.base.enableRipple(true);

var ajax = new ej.base.Ajax('./ajax.html', 'GET', true);
ajax.send().then();
ajax.onSuccess = function (data) {
    var ctn2 = data;
    //Initialize Accordion component
    var accordion = new ej.navigations.Accordion({
        items: [
            { header: 'Department', content: '#acrdnContent1' },
            { header: 'Platform', content: '#acrdnContent2' },
            { header: 'Employee Details', content: ctn2 }
        ]
    });
    //Render initialized Accordion component
    accordion.appendTo('#element');
}

