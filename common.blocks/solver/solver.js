modules.define('solver', ['i-bem__dom'], function(provide, BEMDOM) {

    const GIRL = 'g';
    const DOOR = 'D';
    const FREE = '.';
    const FINISH = 'W';

    const LEFT = [-1, 0];
    const RIGHT = [1, 0];
    const UP = [0, -1];
    const DOWN = [0, 1];

    const SECRETS = [
        '11111111111',
        '415326',
        '2', // https://yadi.sk/d/JacSB5UGikhh9 "I belong to you"
        '3'
    ];

    provide(BEMDOM.decl(this.name, {
        onSetMod : {
            'js' : {
                'inited' : function() {

                    var page = this.findBlockOutside('page');
                    var level = page.findBlockInside('28').params.scene;
                    var editor = BEMDOM.blocks.ace.getInstance();
                    var scene = page.findBlockInside('scene');

                    var current,
                        finish;

                    level.some(function(row, y) {
                        var found = row.indexOf(GIRL);
                        if (found !== -1) {
                            current = [found, y];
                        }
                    });

                    level.some(function(row, y) {
                        var found = row.indexOf(FINISH);
                        if (found !== -1) {
                            finish = [found, y];
                        }
                    });

                    level.forEach(function(row) {
                        console.log(row);
                    });

                    console.log(current);

                    var priority = [RIGHT, DOWN, UP, LEFT];

                    var step,
                        x = current[0],
                        y = current[1],
                        point,
                        door = 0;

                    var solution = [],
                        iteration = 0,
                        visited = [];

                    while(current[0] !== finish[0] || current[1] !== finish[1]) {

                        //console.log('while %s, result %s', iteration, current[0] !== finish[0] && current[1] !== finish[1]);

                        for (var i = 0; i < priority.length; i++) {

                            step = priority[i];

                            x = current[0] + step[0];
                            y = current[1] + step[1];

                            try {
                                point  = level[y][x];
                            } catch(e) {
                                console.log('out of bounds x=%s, y=%s', x, y);
                                continue;
                            }

                            //console.log('trying.. x=%s, y=%s', x, y);
                            //console.log('current.x = %s, current.y = %s', current[0], current[1]);
                            //console.log('step.x = %s, step.y = %s', step[0], step[1]);

                            if (visited.indexOf('' + x + y) !== -1) {
                                //console.log('already visited x=%s, y=%s', x, y);
                                continue;
                            }

                            if (point === FREE || point === FINISH) {
                                solution.push(move(step));
                                current[0] = x;
                                current[1] = y;
                                visited.push('' + x + y);
                                break;
                            } else if (point === DOOR) {
                                solution.push(open(step, SECRETS[door]));
                                solution.push(move(step));
                                visited.push('' + x + y);
                                door++;
                                current[0] = x;
                                current[1] = y;
                                break;
                            }

                            iteration++;

                        }

                        if (iteration > 3000) {
                            console.log('num of iterations?');
                            break;
                        }

                    }

                    console.log('finished! %s', iteration);

                    editor.setValue(solution.join('\n'));

                    function move(step) {
                        return 'move(' + step[0] + ', ' + step[1] +  ');';
                    }

                    function open(step, secret) {
                        return 'open(' + step[0] + ', ' + step[1] +  ', "' + secret + '");';
                    }

                    this.findBlockInside('button').on('click', function() {
                        console.log('solve');
                    }, this);

                }
            }
        }
    }));

});
