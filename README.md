# TinyMCE FontAwesome Plugin

###### v2.0.6

A plugin that lets you insert FontAwesome icons via TinyMCE. Currently uses FontAwesome v4.6.0 and is tested on TinyMCE v4.3.11.


### Instructions
- Make sure you have FontAwesome loaded on the page that contains TinyMCE.
- Copy the fontawesome folder into your TinyMCE plugins folder.
- Add this to your TinyMCE script:

    ```js
    tinymce.init({
        ...
        plugins: 'fontawesome noneditable'
        ...
        extended_valid_elements: 'span[class]'
        ...
        content_css: '//netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css';
        ...
        toolbar: 'fontawesome';
        ...
    });
    ```    
** Installation TinyMCE-FontAwesome-Plugin on Jooma/
1. Copy folder “fontawesome” from archive TinyMCE-FontAwesome-Plugin-master.zip to [HOME_DIR]:/media/editors/tinymce/plugins/
2. Go to joomla admin panel, Choose at main menu “Extensions”>” Plugins”, search “Editor - TinyMCE”, open it config, to field “Valid Elements” add this (+a[],+i[],+em[],+li[],+span[],+div[]) without()!
3. To field “Custom CSS Classes” add: (http://netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css) without(), prefix “http://” is important.
4. Go to “Advanced” tab and to field “Custom Plugin” add word (fontawesome) without() too.
5. Save plugins config. 
6. If you do not see icons in the toolbar of TinyMCE, add the line (http://netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css) without() to config administrative panel template
**
- Test it and make sure it works.
- If you find something broken or if you have any suggestions feel free to create an issue.

