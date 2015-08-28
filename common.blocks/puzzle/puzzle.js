modules.define( 'puzzle', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var value = this.findBlockInside('input'),
                    preview = this.elem('preview'),
                    input = this.findBlockInside('radio-group').on('change', function(e) {
                        var v = this.getVal();
                        if(v && (v = JSON.parse(v))) {
                            value.setVal(value.getVal() + v.val);
                            preview.css(v.css || {}).html(v.html || '');
                            this.setVal(undefined);
                        }
                    });
            }
        }
    }
}));

});
