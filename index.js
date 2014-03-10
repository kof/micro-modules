/**
 * Micro implementation of commonjs modules.
 * Everything you need to write modular javascript!
 *
 * @copyright Oleg Slobodskoi 2014
 * @website https://github.com/kof/micro-modules
 * @license MIT
 */

(function(window) {
'use strict'

/**
 * Modules registry.
 *
 * @type {Object}
 * @api public
 */
var modules = define.modules = {}

/**
 * Define a module.
 *
 * @param {String} [id] - file path or any identifier
 * @param {Array} [deps] - optional dependencies for Commonjs conformance only
 * @param {Function} factory
 * @api public
 */
function define(id, deps, factory) {
    var module

    // define(function() {})
    if (typeof id == 'function') {
        factory = id
        id = null
    // define('id', function() {})
    } else if (typeof deps == 'function') {
        factory = deps
        deps = null
    }

    if (modules[id]) throw new Error('Module ' + id + ' already defined.')
    if (typeof factory != 'function') throw new Error('Module factory required.')

    module = {id: id, factory: factory}

    if (id) {
        modules[id] = module
    } else {
        module.exports = {}
        define.exec(module)
    }
}

window.define = define

/**
 * Execute the module factory.
 *
 * @param {Object} module
 * @api private
 */
define.exec = function(module) {
    return module.factory.call(module.exports, require, module.exports, module)
}

/**
 * Get the dependency. Executes factory if not already done.
 *
 * @param {String} id
 * @return {Mixed} module.exports
 * @api public
 */
function require(id) {
    var module = modules[id],
        newExports

    if (!module) throw new Error('Module ' + id + ' not found.')

    if (!module.exports) {
        module.exports = {}
        newExports = define.exec(module)
        if (newExports) module.exports = newExports
    }

    return module.exports
}

window.require = require

}(window))

