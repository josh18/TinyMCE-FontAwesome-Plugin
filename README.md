# TinyMCE FontAwesome Plugin

###### v2.0.6

A plugin that lets you insert FontAwesome icons via TinyMCE. Currently uses FontAwesome v4.6.0 and is tested on TinyMCE v4.3.11.


### Instructions
1. Make sure you have FontAwesome loaded on the page that contains TinyMCE.
2. Copy the `fontawesome` folder from this repository into your TinyMCE plugins folder.
3. Add this to your TinyMCE script:

    ```js
    tinymce.init({
        ...
        content_css: 'https://netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'
        ...
        plugins: 'fontawesome noneditable'
        ...
        toolbar: 'fontawesome'
        ...
    });
    ```

### Joomla Instructions
1. Make sure you have FontAwesome loaded on the page. If you don't add `http://netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css` to config administrative panel template
2. Copy the `fontawesome` folder from this repository into `/media/editors/tinymce/plugins/`.
3. Go to Joomla admin panel. In the top menu choose "Extensions" > "Plugins". Search for `Editor - TinyMCE` and then click on the result.
    1. Change "Functionality" to `Advanced`.
    2. In the "Custom CSS Classes" field add `https://netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css`.
    3. Go to "Advanced" tab.
    4. In the "Custom Plugin" field add `fontawesome noneditable`.
    5. In the "Custom Button" field add `fontawesome`.
    6. Save the plugin.

### Issues
If you find a bug or you want a feature added please create an issue. However there is no gurantee that I will work on issues as I don't have much spare time. If you create a pull request I will probably accept it.
