block('layout').content()(function() {
    return [
        {
            elem : 'header',
            content : this.ctx.top,
        },
        {
            elem : 'row',
            content : [
                { elem : 'col', content : this.ctx.left },
                { elem : 'col', content : this.ctx.right }
            ]
        }
    ]
})
