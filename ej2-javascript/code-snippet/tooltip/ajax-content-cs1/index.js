var tooltip = new ej.popups.Tooltip({
    content: 'Loading...',
    target: '.target',
    position: 'RightCenter',
    beforeRender: onBeforeRender
});
tooltip.appendTo('#targetContainer');
function onBeforeRender(args) {
    var ajax = new ej.base.Ajax('./tooltipdata.json', 'GET', true);
    ajax.send().then((result) => {
        result = JSON.parse(result);
        for (var i = 0; i < result.length; i++) {
            if (result[i].Id === args.target.getAttribute('data-content')) {
                this.content = "<div class='contentWrap'><div>" + result[i].Sports + "</div></div>";
            }
        }
        this.dataBind();
    }, (reason) => {
        this.content = reason;
        this.dataBind();
    });
}


