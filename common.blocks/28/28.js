modules.define( '28', ['i-bem__dom'], function(provide, BEMDOM) {

var graphics = {
    P : '🌳',
    F : '🌲',
    r : '🌹',
    t : '🌵',
    V : '🌺',
    k : '🌿',
    s : '🌻',
    g : '💃🏻',
    D : '🚪',
    W : '🎁',
    o : ' '
};

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var scene = this.findBlockInside('scene'),
                    girl;
                this.params.scene.forEach(function(row, j) {
                    row.split('').forEach(function(o, i) {
                        var obj = scene.add(graphics[o], i, j);
                        o === 'g' && (girl = obj);
                    });
                });
            }
        }
    }
}));

});
