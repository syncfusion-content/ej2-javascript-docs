var tooltip = new ej.popups.Tooltip({
    content: 'Loading...',
    target: '.circletool',
    showTipPointer: false,
    beforeRender: onBeforeRender,
});

tooltip.appendTo('#box');
function onBeforeRender(args) { 
    this.content = 'Loading...';
    this.dataBind();
    var ajax = new ej.base.Ajax('./tooltip.json', 'GET', true);
    ajax.send().then(
        (result) => {
            result = JSON.parse(result);
            for (var i = 0; i < result.length; i++) {
                if (result[i].Id == args.target.id) {
                    /* tslint:disable */
                    this.content = result[i].Name;
                    /* tslint:enable */
                }
            }
            this.dataBind();
        },
        (reason) => {
            this.content = reason.message;
            this.dataBind();
        });
}

