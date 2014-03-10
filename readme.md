## Micro implementation of commonjs modules

Everything you need to write modular javascript!

This implementation will work with ANY existing commonjs modules where almond or requirejs would work. This module is created because I am not using the most features of requirejs and because I can live without the most features of almond.

Now you can write a framework of any size modular from the beginning and provide a standalone version without overhead. Every module of your framework stays commonjs conform and can be used separately.

The best thing about it - control over module factory execution and execution order.

- Module factory is executed first, when a require() call for this module is executed. Almond and requirejs will execute factory of module A when module B depends on A and factory A gets executed. In fact, all modules depend on each other, so almond will execute all of them, regardless if they are really used or not.
- Commonjs conform.
- 500bytes minified and gzipped.


## Outside of this modules scope
- Relative path resolution. (Ids are format agnostic strings.)
- Remote loading
- Anything else you know from requirejs

## Api

### `define([id], factory)`

Define your dependency. Factory is executed when required, `this` points to exports.

    define('mymodule', function(require, exports, module) {
        module.id == 'mymodule' // true
        this === exports // true
        exports === module.exports // true
        require === window.require // true
        exports.test = '123'
    })

### `require(id)`

Require your dependency. Id is a format agnostic string.

    require('mymodule').test == '123' // true

### Define aliases

    define.modules.mymodule2 = define.modules.mymodule

## License

MIT

