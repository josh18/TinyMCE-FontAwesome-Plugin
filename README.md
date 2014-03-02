TinyMCE-Font-Awesome-Plugin
===========================

###### v1.0.0

A plugin that lets you insert FontAwesome icons via TinyMCE.


###Instructions
- Copy the fontawesome folder into your TinyMCE plugins folder.
- Make sure you have:

    ```html
    tinymce.init({
        ...
        plugins : 'fontawesome'
        ...
        extended_valid_elements: 'span[class]'
        ...
    });
    ```

- Test it and make sure it works.
- If you find some broken or if you have any suggestions feel free to create an issue.
