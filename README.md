TinyMCE-Font-Awesome-Plugin
===========================

###### v1.0.0

A plugin that lets you insert FontAwesome icons via TinyMCE.


###Instructions
- Copy the fontawesome folder into your TinyMCE plugins folder.
- Add this to your TinyMCE script:

    ```html
    tinymce.init({
        ...
        plugins: 'fontawesome'
        ...
        extended_valid_elements: 'span[class]'
        ...
        content_css: '//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css';
    });
    ```
- Test it and make sure it works.
- If you find something broken or if you have any suggestions feel free to create an issue.
