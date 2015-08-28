block('scene')(
    js()(true),
    content().match(this.ctx.objs)(function() {
        return this.ctx.objs.map(function(row, j) {
            return row.map(function(obj, i) {
                return !obj || obj === ' ' ?
                    '' :
                    {
                        elem : 'obj',
                        x : i,
                        y : j,
                        content : obj
                    };
            })
        });
    }),
    elem('obj').attrs()(function() {
        return {
            style : 'top : ' + (this.ctx.y * 30) + 'px;' +
                'left : ' + (this.ctx.x * 30) + 'px;'
        }
    })
)
