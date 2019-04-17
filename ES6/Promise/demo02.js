const proxy = new Proxy({}, {
    get: function (tartget, property) {
        return 35;
    }
});

console.log(proxy.time);
console.log(proxy.name);
console.log(proxy.title);