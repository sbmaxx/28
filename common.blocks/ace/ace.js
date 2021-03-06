modules.define( 'ace', ['i-bem__dom'], function(provide, BEMDOM) {

/* global ace */
/* borschik:include:../../libs/ace-min-noconflict/src-noconflict/ace.js */
/* borschik:include:../../libs/ace-min-noconflict/src-noconflict/mode-javascript.js */
/* borschik:include:../../libs/ace-min-noconflict/src-noconflict/theme-solarized_light.js */
ace.config.set('workerPath', '../../libs/ace-min-noconflict/src-min-noconflict/');

var editor;

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                editor = this.editor = ace.edit(this.domElem[0]);

                var theme = this.getMod('theme').replace('-', '_'),
                    mode = this.getMod('mode');

                theme && editor.setTheme('ace/theme/' + theme);
                mode && editor.getSession().setMode('ace/mode/' + mode);
            }
        }
    }
}, {
    getInstance: function() {
        return editor;
    }
}));

});
