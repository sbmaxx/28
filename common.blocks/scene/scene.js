modules.define( 'scene', ['i-bem__dom', 'BEMHTML'], function(provide, BEMDOM, BEMHTML) {

provide(BEMDOM.decl(this.name, {
    add : function(obj, x, y) {
        return BEMDOM.append(
            this.domElem,
            BEMHTML.apply({
                block : 'scene',
                elem : 'obj',
                x : x,
                y : y,
                content : obj
            })
        );
    }
}));

});
