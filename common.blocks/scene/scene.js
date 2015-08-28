modules.define( 'scene', ['i-bem__dom', 'BEMHTML'], function(provide, BEMDOM, BEMHTML) {

provide(BEMDOM.decl(this.name, {
    add : function(obj, x, y) {
        if(obj) return BEMDOM.append(
            this.domElem,
            BEMHTML.apply({
                block : 'scene',
                elem : 'obj',
                x : x,
                y : y,
                content : obj
            })
        );
    },

    move : function(obj, x, y) {
        obj.css({ top : y * 30, left : x * 30 });
    }
}));

});
