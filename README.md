# TinyMCE FontAwesome Plugin

###### v2.1.0

A plugin that lets you insert FontAwesome icons via TinyMCE. Currently uses FontAwesome v4.7.0 and is tested on TinyMCE v4.4.2.


### Instructions
1. Make sure you have FontAwesome loaded on the page that contains TinyMCE.
2. Copy the `fontawesome` folder from this repository into your TinyMCE plugins folder.
3. Add this to your TinyMCE script:
```js
tinymce.init({
    ...
    content_css: 'https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    noneditable_noneditable_class: 'fa',
    plugins: 'fontawesome noneditable',
    toolbar: 'fontawesome',
    extended_valid_elements: 'span[*]'
});
```

### Joomla Instructions
**Note: I'm not sure how to do add `noneditable_noneditable_class: 'fa'` to `tinymce.init()` in Joomla. I had a quick look but I couldn't see a way. Perhaps the Joomla TinyMCE plugin needs to be modified to include this option.**

1. Make sure you have FontAwesome loaded on the page that contains TinyMCE. If you don't add `http://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css` [directly to the template](https://docs.joomla.org/J3.x:Adding_JavaScript_and_CSS_to_the_page) or use [this plugin](https://thekrotek.com/joomla-extensions/admin-custom-css) to add it.
2. Copy the `fontawesome` folder from this repository into `/media/editors/tinymce/plugins/`.
3. Go to Joomla admin panel. In the top menu choose "Extensions" > "Plugins". Search for `Editor - TinyMCE` and then click on the result.
    1. Change "Functionality" to `Advanced`.
    2. In the "Custom CSS Classes" field add `https://netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css`.
    3. In the "Extended Valid Elements" field add `span[*]`.
    4. Go to the "Advanced" tab.
    5. In the "Custom Plugin" field add `fontawesome noneditable`.
    6. In the "Custom Button" field add `fontawesome`.
    7. Add `noneditable_noneditable_class: 'fa'` to `tinymce.init()`. *Not sure how to do this.*
    8. Save the plugin.

### Issues
If you find a bug or you want a feature added please create an issue. However there is no guarantee that I will work on issues as I don't have much spare time. If you create a pull request I will probably accept it.
