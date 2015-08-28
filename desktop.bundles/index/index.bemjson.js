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
            content : 'move(1, 0);\nopen(1, 0, 123);'
        },
        right : { block : 'puzzle', content : 'puzzle' }
    }
};
