javascript:!function () {
    const a = 'github.com', b = 'gitter.im', h = location.host;
    h.includes(a) && (location.host = h.replace(a, b));
    h.includes(b) && (location.host = h.replace(b, a));
}();