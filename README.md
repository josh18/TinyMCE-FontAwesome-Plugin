# TinyMCE FontAwesome Plugin

###### v2.0.0

A plugin that lets you insert FontAwesome icons via TinyMCE. Currently uses FontAwesome v4.5.0 and is tested on TinyMCE v4.3.1.


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
        content_css: '//netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css';
        ...
        toolbar: 'fontawesome';
        ...
    });
    ```
- Test it and make sure it works.
- If you find something broken or if you have any suggestions feel free to create an issue.
