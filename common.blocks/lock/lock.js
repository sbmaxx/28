modules.define('lock', function(provide) {

/* global Hashes */
/* borschik:include:../../libs/jshashes/hashes.js */

var SHA1 = new Hashes.SHA1();

provide(function(obj, secret) {
    return function(key) {
        return SHA1.b64(String(key)) === secret ? obj : false;
    }
});

});
