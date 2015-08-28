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
    '.' : ''
};

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var editor = this.findBlockInside('ace').editor;
                editor.setValue(localStorage['28.code'] || '', 1);
                editor.focus();
                editor.getSession().on('change', function() {
                    localStorage['28.code'] = editor.getValue();
                });

                function move(dx, dy) {
                    console.log('?? move', arguments);
                    if(dx >= -1 && dx <= 1 && dy >= -1 && dy <= 1) {
                        var x = girlX + dx,
                            y = girlY + dy;
                        if(x < 0 || x > 9 || y < 0 || y > 19) throw Error('You can not move outside scene.');
                        if(walkways[y][x]) {
                            scene.move(girl, x, y);
                            girlX = x;
                            girlY = y;
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        throw Error('You can only move by 1 cell.')
                    }
                }

                function open(dx, dy, key) {
                    console.log('!! open', arguments);
                    if(dx >= -1 && dx <= 1 && dy >= -1 && dy <= 1) {
                        var x = girlX + dx,
                            y = girlY + dy;
                        if(x < 0 || x > 9 || y < 0 || y > 19) throw Error('You can not open outside scene.');
                        var door = doors[y][x];
                        if(door) {
                            BEMDOM.destruct(door);
                            doors[y][x] = undefined;
                            walkways[y][x] = true;
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        throw Error('You can only open by 1 cell.')
                    }
                }

                var scene = this.findBlockInside('scene')
                        .bindTo('click', function() {
                            new Function(
                                'move',
                                'open',
                                editor.getValue())(move, open);
                        }),
                    girl,
                    girlX,
                    girlY,
                    doors = [],
                    walkways = [];

                this.params.scene.forEach(function(row, j) {
                    var doorsRow = doors[j] = [],
                        walkwaysRow = walkways[j] = [];
                    row.split('').forEach(function(o, i) {
                        var obj = scene.add(graphics[o], i, j);
                        if(o === 'g') {
                            girl = obj;
                            girlX = i;
                            girlY = j;
                        } else if(o === 'D') {
                            doorsRow[i] = obj;
                        } else if(o === '.') {
                            walkwaysRow[i] = true;
                        }
                    });
                });

            }
        }
    }
}));

});
