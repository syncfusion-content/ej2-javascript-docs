


import { Slider, SliderTooltipEventArgs, SliderTickEventArgs } from "@syncfusion/ej2-inputs";

// Initialize Slider component
let minRangeObj: Slider = new Slider({
  ticks: {
    placement: "After",
    largeStep: 20,
    smallStep: 10,
    showSmallTicks: true
  },
  tooltip: { placement: "Before", isVisible: true, showOn: "Always" },
  value: 30,
  step: 10,
  type: "MinRange",
  showButtons: true
});
// Render initialized Slider
minRangeObj.appendTo("#slider");

let weekdaysObj: Slider = new Slider({
  min: 0,
  max: 6,
  step: 1,
  value: 2,
  // Assigning ticks data
  ticks: {
    placement: "After",
    largeStep: 1
  },
  renderingTicks: function(args: SliderTickEventArgs) {
    // Weekdays Array
    let daysArr: string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thrusday",
      "Friday",
      "Saturday"
    ];
    // Customizing each ticks text into weeksdays
    args.value = daysArr[parseFloat(args.value as any).toString()];
  },
  // Assigning tooltip data
  tooltip: {
    placement: "Before",
    isVisible: true
  },
  tooltipChange: function(args: SliderTooltipEventArgs) {
    // Customizing tooltip to display the Day (in numeric) of the week
    args.text = "Day " + (Number(args.text) + 1).toString();
  }
});
// Render initialized Slider
weekdaysObj.appendTo("#slider1");



