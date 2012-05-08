/**
 * Elipsee - a jQuery plugin to shorten (truncate) text
 * based on rquired amount of rows.
 * 
 * Usage
 * =========================================================
 * $(selector).elipsee(settings);
 * 
 * Settings
 * ==========================================================
 * rows         [int > 0 (default: 1)]       How many rows to support
 * suffix       [string (default: '...')]    What string to append to the end of the truncated text
 * fullTitle    [bool (default: true)]       Add a 'title' attribute containing the full unmodified text
 * 
 * 
 * @author Eli Sklar
 * @license http://sam.zoy.org/wtfpl/ WTFPL - Do What The Fuck You Want To Public License
 * 
 * @website https://github.com/elis/Elipsee http://elis.ws/
 * 
 * @version 1.0
 * 
 * @created 08 May 2012
 */

(function($){
    $.fn.elipsee = function (options) {
        var defaults = {
            rows: 1,
            suffix: '...',
            fullTitle: true
        };
        
        var options = $.extend(defaults, options);
        
        return this.each(function() {
            var obj = $(this),
                text = obj.text(),
                partial = obj.text(),
                lineHeight = 0;
            
            // Test the base height of the element
            obj.html('').text("X");
            lineHeight = obj.height();
            
            if (options.fullTitle) obj.attr('title', text);
            
            // Add a line break and check the lineHeight doubles
            obj.html(obj.html() + '<br/>X');
            if (obj.height() >= lineHeight * 2) {
                obj.text(text);
                
                while (obj.height() > lineHeight * (options.rows)) {
                    partial = partial.slice(0, -2);
                    obj.text(partial + options.suffix);
                    if (partial.length == 0) break;
                }
            }
        });
        
    };
}(jQuery));