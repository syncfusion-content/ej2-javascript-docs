

import { ProgressBar, ProgressAnnotation } from "@syncfusion/ej2-progressbar";
ProgressBar.Inject(ProgressAnnotation);

let percentageProgress: ProgressBar = new ProgressBar({
  type: "Circular",
  innerRadius: "190%",
  trackThickness: 80,
  cornerRadius: "Round",
  trackColor: "#FFD939",
  annotations: [
    {
      content:
        '<div id="point1" style="font-size:20px;font-weight:bold;color:#ffffff;fill:#ffffff"><span>60%</span></div>'
    }
  ]
});
percentageProgress.appendTo("#percentage");



