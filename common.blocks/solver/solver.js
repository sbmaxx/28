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
        '32561662545',
        '23121321312313212131232132'
    ];

    const DEBUG = false;

    provide(BEMDOM.decl(this.name, {
        onSetMod : {
            'js' : {
                'inited' : function() {

                    var b28 = this.findBlockOutside('28');
                    var level = b28.params.scene;

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

                        debug('while %s, result %s', iteration, current[0] !== finish[0] && current[1] !== finish[1]);

                        for (var i = 0; i < priority.length; i++) {

                            step = priority[i];
                            iteration++;

                            x = current[0] + step[0];
                            y = current[1] + step[1];

                            try {
                                point  = level[y][x];
                            } catch(e) {
                                debug('out of bounds x=%s, y=%s', x, y);
                                continue;
                            }

                            debug('trying.. x=%s, y=%s', x, y);
                            debug('current.x = %s, current.y = %s', current[0], current[1]);
                            debug('step.x = %s, step.y = %s', step[0], step[1]);

                            if (visited.indexOf('' + x + y) !== -1) {
                                debug('already visited x=%s, y=%s', x, y);
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

                        }

                    }

                    console.log('Solved in %s iterations', iteration);

                    BEMDOM.blocks.ace.getInstance().setValue(solution.join('\n'));

                    b28.findBlockInside('scene').domElem.trigger('click');

                }
            }
        }
    }, {
        live: function() {
            this.liveInitOnBlockInsideEvent('click', 'button');
        }
    }));

    function move(step) {
        return 'move(' + step[0] + ', ' + step[1] +  ');';
    }

    function open(step, secret) {
        return 'open(' + step[0] + ', ' + step[1] +  ', "' + secret + '");';
    }

    function debug() {
        if (DEBUG) {
            console.log.apply(console, arguments);
        }
    }

});
