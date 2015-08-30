module.exports = {
    block : 'page',
    mix : {
        block : '28',
        js: {
            scene : [
                'g.D.F...k...P...F...',
                'FkF...F...F...k...F.',
                'PFkPFkFkFPkPFPFPPPFD',
                '...s...s...s...s....',
                'DV...s...s...s...skV',
                '.kFPFPFPFPFPFtFPPPFP',
                '..PFP...FFF...tPFPPF',
                'F...F.P..PP.F..tPPFP',
                'tkF.F.FP..F.FP..trtr',
                'ttF...FPF...FPF..D.W'
            ]
        }
    },
    title : '28',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    mods : { theme : 'islands' },
    content : {
        block : 'layout',
        top : { block : 'scene' },
        left : {
            block : 'ace',
            mods : { theme : 'solarized-light', mode : 'javascript' },
            content : [
                '// may returns false in case of impossible actions',
                'move(1, 0);',
                'open(1, 0, \'key from puzzle at right side\');'
            ].join('\n')
        },
        right : [
            {
                block : 'puzzle',
                mods : { visible : true },
                js : { secret : 'fU7rq3zjPyxdbYxiQMyP5l6hTNc=' },
                hint : '🌹 === 1',
                parts : [
                    { html : '🌹' },
                ]
            },
            {
                block : 'puzzle',
                js : { secret : 'SSM2ZwHyFzaf6DIPAlz9gHKQD18=' },
                hint : 'match them all',
                parts : [
                    { css : { 'background-position' : '100% 0', 'background-image': "url('/common.blocks/puzzle/g.jpg')" } },
                    { css : { 'background-position' : '0 0', 'background-image': "url('/common.blocks/puzzle/w.jpg')" } },
                    { css : { 'background-position' : '100% 0', 'background-image': "url('/common.blocks/puzzle/e.jpg')" } },
                    { css : { 'background-position' : '0 0', 'background-image': "url('/common.blocks/puzzle/g.jpg')" } },
                    { css : { 'background-position' : '0 0', 'background-image': "url('/common.blocks/puzzle/e.jpg')" } },
                    { css : { 'background-position' : '100% 0', 'background-image': "url('/common.blocks/puzzle/w.jpg')" } },
                ]
            },
            {
                block : 'puzzle',
                js : { secret : 'bsaK1JewL8AWY2TdS7gATVCDXPY=' },
                hint : 'http://j.mp/to-&lt;prev-key&gt;',
                parts : [
                    { html : 'a ' },
                    { html : 'b ' },
                    { html : 'i ' },
                    { html : 'm ' },
                    { html : 't ' },
                    { html : 'y ' }
                ]
            },
            {
                block : 'puzzle',
                js : { secret : 'nTC0lROlq1H7jcthZ7xBEbadqf4=' },
                hint : 'http://j.mp/to-&lt;prev-key&gt;',
                parts : [
                    { css : { 'background-color' : 'green' } },
                    { css : { 'background-color' : 'white' } },
                    { css : { 'background-color' : 'red' } }
                ]
            }
        ]
    }
};
