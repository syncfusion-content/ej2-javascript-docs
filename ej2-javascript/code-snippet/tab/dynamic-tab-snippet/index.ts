// Fetch new tab title and content from input elements
let tabTitle: string = document.getElementById('tab-title').value;
let content: string = document.getElementById('tab-content').value;

// Create a tab item object using the input values
let item: Object = { 
    header: { text: tabTitle }, 
    content: createElement('pre', { innerHTML: content.replace(/\n/g, '<br>\n') }).outerHTML 
};

// Add the new tab at the specified index
tabObj.addTab([item], index);