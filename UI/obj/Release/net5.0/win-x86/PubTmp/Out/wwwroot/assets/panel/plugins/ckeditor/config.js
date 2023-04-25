/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	//config.uiColor = '#17a2b833';
	config.removeDialogTabs = 'image:advanced;image:Link;link:advanced;link:upload';
	config.filebrowserImageUploadUrl = '/panel/UploadImage' //Action for Uploding image  
 
};
