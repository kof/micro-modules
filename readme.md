## Micro implementation of commonjs modules

Everything you need to write modular javascript!

This implementation will work with ANY existing commonjs modules where almond or requirejs would work. This module is created because I am not using the most features of requirejs and because I can live without the most features of almond.

But the main reason is - control over execution order of the modules.

- Absolutely minimalistic, few lines of code.
- Define your module.
- Require your module.
- Module factory executed only when required.
- You control the execution order by requiring modules!
- Define aliases.

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

