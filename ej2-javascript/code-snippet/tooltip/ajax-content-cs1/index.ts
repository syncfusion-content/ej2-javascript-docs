

import { Tooltip, TooltipEventArgs } from '@syncfusion/ej2-popups';
import { Ajax } from '@syncfusion/ej2-base';

let tooltip: Tooltip = new Tooltip({
        content: 'Loading...',
        target: '.target',
        position: 'RightCenter',
        beforeRender: onBeforeRender
});
tooltip.appendTo('#targetContainer');

function onBeforeRender(args: TooltipEventArgs): void {
    let ajax: Ajax = new Ajax('./tooltipdata.json', 'GET', true);
    ajax.send().then(
        (result: any) => {
            result = JSON.parse(result);
            for (let i: number = 0; i < result.length; i++) {
                if (result[i].Id === args.target.getAttribute('data-content')) {
                    this.content = "<div class='contentWrap'><div>" + result[i].Sports + "</div></div>";
                }
            }
            this.dataBind();
        },
        (reason: any) => {
            this.content = reason;
            this.dataBind();
        });
}



