block('layout').content()(function() {
    return [
        {
            elem : 'header',
            content : this.ctx.top,
        },
        {
            elem : 'row',
            content : [
                { elem : 'col', content : this.ctx.topLeft },
                { elem : 'col', content : this.ctx.topRight }
            ]
        },
        {
            elem : 'row',
            content : [
                { elem : 'col', content : this.ctx.bottomLeft },
                { elem : 'col', content : this.ctx.bottomRight }
            ]
        }
    ]
})
