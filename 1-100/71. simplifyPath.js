/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const parr = path.split('/');
    // console.log(path)
    const pnew = []
    for (const s of parr) {
        if (s === '' || s === '.') continue;
        if (s === '..') {
            pnew.pop();
            continue;
        }
        pnew.push(s);
    }
    return '/' + pnew.join('/');
};