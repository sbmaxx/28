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
                editor.setValue(localStorage['28.code'] || editor.getValue(), 1);
                editor.focus();
                editor.getSession().on('change', function() {
                    localStorage['28.code'] = editor.getValue();
                });

                var step = 0;
                function move(dx, dy) {
                    step ++;
                    if(dx >= -1 && dx <= 1 && dy >= -1 && dy <= 1) {
                        var x = girlX + dx,
                            y = girlY + dy;
                        if(x < 0 || x > 19 || y < 0 || y > 9) {
                            console.log('cant do step %s', step);
                            return false;
                        }
                        if(walkways[y][x]) {
                            scene.move(girl, x, y);
                            girlX = x;
                            girlY = y;
                            return true;
                        } else {
                            console.log('cant do step %s', step);
                            return false;
                        }
                    } else {
                        console.log('cant do step %s', step);
                        return false;
                    }
                }

                function open(dx, dy, key) {
                    step ++;
                    if(dx >= -1 && dx <= 1 && dy >= -1 && dy <= 1) {
                        var x = girlX + dx,
                            y = girlY + dy;
                        if(x < 0 || x > 19 || y < 0 || y > 9) return false;
                        var door = doors[y][x];
                        if(door && (door = door(key))) {
                            BEMDOM.destruct(door);
                            doors[y][x] = undefined;
                            walkways[y][x] = true;
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }

                var scene = this.findBlockInside('scene')
                        .bindTo('click', function() {
                            new Function(
                                'move',
                                'open',
                                editor.getValue())(move, open);
                        }),
                    puzzles = this.findBlocksInside('puzzle'),
                    secrets = this.params.secrets,
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
                            walkwaysRow[i] = true;
                        } else if(o === 'D') {
                            var puzzle = puzzles.shift();
                            doorsRow[i] = puzzle.lock(
                                obj,
                                (function(curPuzzle, nextPuzzle) {
                                    return function() {
                                        curPuzzle.delMod('visible');
                                        nextPuzzle && nextPuzzle.setMod('visible');
                                    }
                                })(puzzle, puzzles[0]));
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
