/**
 * Rich Text Editor - File browser sample
 */

var hostUrl = 'https://services.syncfusion.com/js/production/';

var defaultRTE = new ej.richtexteditor.RichTextEditor({
	fileManagerSettings: {
		enable: true,
		path: '/Pictures/Food',
		ajaxSettings: {
			url: hostUrl + 'api/FileManager/FileOperations',
			getImageUrl: hostUrl + 'api/FileManager/GetImage',
			uploadUrl: hostUrl + 'api/FileManager/Upload',
			downloadUrl: hostUrl + 'api/FileManager/Download'
		}
	},
	toolbarSettings: {
		items: ['FileManager']
	}
});
defaultRTE.appendTo('#defaultRTE');

