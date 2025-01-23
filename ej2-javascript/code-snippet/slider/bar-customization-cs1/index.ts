import { Slider, SliderChangeEventArgs } from '@syncfusion/ej2-inputs';

// Initialize Range Slider Control
let heightSlider: Slider = new Slider({
    // Set the value for slider
    value: 30,
    min: 0, max: 100
});
heightSlider.appendTo('#height_slider');

// Initialize Range Slider Control
let gradientSlider: Slider = new Slider({
    // Set slider minimum and maximum values
    min: 0, max: 100,
    // Set the intial range values for slider
    value: 50,
    type: 'MinRange'
});
gradientSlider.appendTo('#gradient_slider');

let sliderTrack: HTMLElement;
let sliderHandle: HTMLElement;

// Initialize Range Slider Control
let dynamicColorSlider: Slider = new Slider({
    // Set slider minimum and maximum values
    min: 0, max: 100,
    value: 20,
    type: 'MinRange',
    // Handler used for slider created event
    created: () => {
        sliderTrack = (document.getElementById('dynamic_color_slider') as HTMLElement).querySelector('.e-range') as HTMLElement;
        sliderHandle = (document.getElementById('dynamic_color_slider') as HTMLElement).querySelector('.e-handle') as HTMLElement;
        (sliderHandle as HTMLElement).style.backgroundColor = 'green';
        (sliderTrack as HTMLElement).style.backgroundColor = 'green';
    },
    // Handler used for slider change event
    change: (args: SliderChangeEventArgs) => {
        if ((args.value as number) > 0 && (args.value as number) <= 25) {
            // Change handle and range bar color to green when
            (sliderHandle as HTMLElement).style.backgroundColor = 'green';
            (sliderTrack as HTMLElement).style.backgroundColor = 'green';
        } else if ((args.value as number) > 25 && (args.value as number) <= 50) {
            // Change handle and range bar color to royal blue
            (sliderHandle as HTMLElement).style.backgroundColor = 'royalblue';
            (sliderTrack as HTMLElement).style.backgroundColor = 'royalblue';
        } else if ((args.value as number) > 50 && (args.value as number) <= 75) {
            // Change handle and range bar color to dark orange
            (sliderHandle as HTMLElement).style.backgroundColor = 'darkorange';
            (sliderTrack as HTMLElement).style.backgroundColor = 'darkorange';
        } else if ((args.value as number) > 75 && (args.value as number) <= 100) {
            // Change handle and range bar color to red
            (sliderHandle as HTMLElement).style.backgroundColor = 'red';
            (sliderTrack as HTMLElement).style.backgroundColor = 'red';
        }
    }
});
dynamicColorSlider.appendTo('#dynamic_color_slider');