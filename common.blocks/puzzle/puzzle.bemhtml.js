block('puzzle')(
    js()(true),
    content()(function() {
        return [
            {
                elem : 'value',
                content : {
                    block : 'input',
                    mods : { theme : 'islands', size : 'm', 'has-clear' : true },
                    val : ''
                }
            },
            {
                elem : 'input',
                content : {
                    block : 'radio-group',
                    mods : { theme : 'islands', size : 'm', type : 'button' },
                    name : 'radio-button',
                    options : this.ctx.parts.map(function(p) {
                        return { val : JSON.stringify(p), text : p.val }
                    })
                }
            },
            {
                elem : 'preview'
            }
        ]
    })
)
