## Micro implementation of commonjs modules

Everything you need to write modular javascript!

This implementation will work with ANY existing commonjs modules where almond or requirejs would work.

Now you can write a framework of any size modular from the beginning and provide a standalone version without overhead. Every module in your framework stays commonjs conform and can be used separately.

The best thing about it - control over module factory execution and its order.

- Module factory is executed first, when a require() call for this module is executed. Almond and requirejs will execute factory of module A when module B depends on A and factory A gets executed. In fact, all modules depend on each other, so almond will execute all of them, regardless if they are really used or not.
- Commonjs conform.
- 500bytes minified and gzipped.

## Who needs this

- Packaged builds where all modules are already loaded.
- Mobile apps where no need for lazy load of javascript at all.
- Frameworks, which need a minimal module system to write modular code without ugly files concatenation.

## Outside of this modules scope
- Relative path resolution. Ids are format agnostic strings. You can still use relative paths, but you need to make them absolute during the build step.
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

