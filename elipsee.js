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