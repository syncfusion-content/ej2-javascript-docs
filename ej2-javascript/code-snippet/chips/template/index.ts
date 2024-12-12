


import { ChipList } from '@syncfusion/ej2-buttons';

let templateData: any = [
    {
        leadingIconCss: 'trendingIcon', 
        template: () => '<a href="https://timesofindia.indiatimes.com/news" target="_blank" class="anchorElement">#BreakingNews</a><span class="textElement">125k posts</span>'
    },
    {
        leadingIconCss: 'cameraIcon', 
        template: () => '<a href="https://blog.google/products/photos/" target="_blank" class="anchorElement">#PhotoOfTheDay</a>'
    },
    {
        leadingIconCss: 'trendingIcon', 
        template: () => '<a href="https://indianexpress.com/section/technology/" target="_blank" class="anchorElement">#TechNews</a><span class="textElement">107k posts</span>'
    }
];

// initialize template chip
new ChipList({ chips: templateData }, '#customTemplate');


