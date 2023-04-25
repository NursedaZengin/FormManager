/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	//config.uiColor = '#17a2b833';
	//config.extraPlugins = 'imageuploader';
	config.removeDialogTabs = 'image:advanced;image:Link;link:advanced;link:upload';
	config.filebrowserImageUploadUrl = '/panel/UploadCkImage' //Action for Uploding image
	config.filebrowserUploadUrl = '/uploader/upload.php';
	config.extraPlugins = 'uploadimage';
	//config.uploadUrl = '/uploader/upload.php';
	config.allowedContent = true;
	//config.extraPlugins = 'uploadimage';
	config.uploadUrl = '/panel/UploadCkImage';
	config.toolbar = 'MyToolbar';


    config.toolbar_MyToolbar =
        [
            { name: 'document', items: ['Source', '-', 'Save', 'NewPage', 'DocProps', 'Preview', 'Print', '-', 'Templates'] },
            { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
            { name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll', '-', 'SpellChecker', 'Scayt'] },
            { name: 'forms', items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'] },
            { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
            { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
            { name: 'colors', items: ['TextColor', 'BGColor'] },
            '/',
            { name: 'insert', items: ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe'] },
            { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl'] },
            { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] }

        ];
};
