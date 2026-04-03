// Fetch new tab title and content from input elements
var tabTitle = document.getElementById('tab-title').value;
var content = document.getElementById('tab-content').value;

// Create a tab item object using the input values
var item = { 
    header: { text: tabTitle }, 
    content: ej.base.createElement('pre', { innerHTML: content.replace(/\n/g, '<br>\n') }).outerHTML 
};

// Add the new tab at the specified index
tabObj.addTab([item], index);