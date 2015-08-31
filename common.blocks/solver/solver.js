modules.define('solver', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.findBlockInside('button').on('click', function() {
                        console.log('solve');
                    }, this);
                }
            }
        }
    }));

});
