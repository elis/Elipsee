Elipsee
=======

Tiny jQuery plugin to shorten text based on the number of rows required

Usage
=======

Include the elipsee.js in your project and fire up the plugin:

```javascript
$('#your .selector here').elipsee();
// Will truncate the text to a maximum of 1 row with '...' as the suffix

$('#another ::selector').elipsee({rows: 2});
// This one will limit the text to two rows

$('.just h1#title').elipsee({suffix: ' ]'});
// A custom suffix used in this case (" ]")

$('.no-title-attribute').elipsee({fullTitle: false});
// This setting will not add the title="" attribute containing
// the full orginal text
```

Notes
========

The plugin does not support HTML tags - it will assume text-only mode
and will delete any tags within the treated element.

Demo / Fiddle
=========

To test and play around head to: http://jsfiddle.net/QrmcS/2/

License
========

Free to use and redistribute commercially or otherwise.