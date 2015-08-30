modules.define( 'puzzle', ['i-bem__dom'], function(provide, BEMDOM) {

/* global Hashes */
/* borschik:include:../../libs/jshashes/hashes.js */
var SHA1 = new Hashes.SHA1();

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var puzzle = this,
                    secret = puzzle.params.secret,
                    preview = this.elem('preview'),
                    value = this.findBlockInside('input').on('change', function() {
                        puzzle.setMod('solved', SHA1.b64(value.getVal()) === secret);
                    });

                this.findBlockInside('radio-group').on('change', function() {
                    var v = this.getVal();
                    if(v && (v = JSON.parse(v))) {
                        preview.attr('style', '').css(v.css || {}).html(v.html || '');
                        value.setVal(value.getVal() + v.val);
                        this.setVal(undefined);
                    }
                });
            }
        }
    },

    lock : function(obj, onSuccess, onError) {
        var secret = this.params.secret;
        return function(key) {
            if(SHA1.b64(String(key)) === secret) {
                onSuccess && onSuccess(obj);
                return obj;
            } else {
                onError && onError(false);
                return false;
            }
        }
    }
}));

});
