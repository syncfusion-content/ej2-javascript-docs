ej.base.enableRipple(true);

var currentUserModel = {
    id: "user1",
    user: "Albert"
};
function getMime(file){
    return ((file?.rawFile?.type) || file?.type || '').toLowerCase();
}

function getType(file){
    var t = getMime(file);
    if (!t) return '';
    var parts = t.split('/');
    return parts.length > 1 ? parts[1].toUpperCase() : t.toUpperCase();
}

function getExt(file){
    var name = file?.name || '';
    var parts = name.split('.');
    return parts.length > 1 ? parts.pop()?.toUpperCase() || '' : '';
}

function isImage(file) {
    return getMime(file).startsWith('image/');
}

function isVideo(file) {
    return getMime(file).startsWith('video/');
}

function getHumanSize(file){
    var sizeBytes = file?.size || 0;
    if (sizeBytes < 1024) return sizeBytes + ' B';
    if (sizeBytes < 1024 * 1024) return (sizeBytes / 1024).toFixed(1) + ' KB';
    return (sizeBytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// FIX: Template functions must accept context/data parameter correctly
function attachmentTemplate(context) {
    // The file data comes in context.file or directly as context
    var file = context?.selectedFile || context;
    var isImg = isImage(file);
    var isVid = isVideo(file);
    
    // FIX: Use proper quote escaping in template strings
    var iconHtml = isImg
        ? `<img class="c-attach-img" src="${file.fileSource || ''}" alt="${file.name || ''}">`
        : isVid
        ? '<span class="e-icons e-video"></span>'
        : '<span class="e-icons e-chat-file-icon"></span>';
    
    var typeText = file?.type || file?.rawFile?.type || '';

    return `
        <div class="c-attach">
            <div class="c-attach-thumb">${iconHtml}</div>
            <div class="c-attach-body">
                <div class="c-attach-name" title="${file.name || ''}">${file.name || ''}</div>
                <div class="c-attach-meta">${typeText}</div>
            </div>
        </div>
    `;
}

function previewTemplate(context) {
    // The file data comes in context.file or directly as context
    var file = context.selectedFile || context;
    var badge = getExt(file) || getType(file) || 'FILE';
    var size = getHumanSize(file);
    
    var mediaHtml = isImage(file)
        ? `<img class="c-media-img" src="${file.fileSource || ''}" alt="${file.name || ''}">`
        : isVideo(file)
        ? `<video class="c-media-video" controls disablePictureInPicture playsInline preload="metadata" title="${file.name || ''}">
            <source src="${file.fileSource || ''}" type="${getMime(file)}">
        </video>`
        : '<div>No media content to display</div>';

    return `
        <div>
            <div class="c-preview--card">
                <div class="c-preview-card">
                    <div class="c-badge-row">
                        <span class="c-badge">${badge}</span>
                        <span>${size}</span>
                    </div>
                    <div class="c-media-frame">${mediaHtml}</div>
                    <div class="c-caption">
                        <span class="c-name" title="${file.name || ''}">${file.name || ''}</span>
                        <a class="c-btn-link" href="${file.fileSource || '#'}" target="_blank" rel="noopener noreferrer" download="${file.name || ''}">Download</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}
// Initializes the Chat UI control
var chatUI = new ej.interactivechat.ChatUI({
    user: currentUserModel,
    cssClass: 'chat-attachment-template',
    enableAttachments: true,
    attachmentSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
        attachmentTemplate: attachmentTemplate,  // Changed function name
        previewTemplate: previewTemplate          // Changed function name
    }
});

// Render initialized Chat UI.
chatUI.appendTo('#template');
