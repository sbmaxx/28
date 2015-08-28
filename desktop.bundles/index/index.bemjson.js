var P = '🌳',
    F = '🌲',
    r = '🌹',
    t = '🌵',
    V = '🌺',
    k = '🌿',
    s = '🌻',
    g = '💃🏻',
    D = '🚪',
    W = '🎁',
    o = ' ';

module.exports = {
    block : 'page',
    mix : {
        block : '28',
        js: {
            scene : [
                'goDoFoookoooPoooFooo',
                'FkFoooFoooFoookoooFo',
                'PFkPFkFkFPkPFPFPPPFD',
                'ooosooosooosooosoooo',
                'DVooosooosooosoooskV',
                'okFPFPFPFPFPFtFPPPFP',
                'ooPFPoooFFFoootPFPPF',
                'FoooFoPooPPoFootPPFP',
                'tkFoFoFPooFoFPootrtr',
                'ttFoooFPFoooFPFooDoW'
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
            content : 'var a = 1;'
        },
        right : { block : 'puzzle', content : 'puzzle' }
    }
};
