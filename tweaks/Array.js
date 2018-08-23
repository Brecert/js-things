/**
 * Set the default value of an Array.
 * @param {Object} value - default value
 */
 // TODO: Refine code to be used in an extended version of Array, a safer way.
Object.defineProperty(Array.prototype, 'defaultValue', {
    value: function(...value) { return new Proxy(this, {
      get: (target, name) => {
        return this[name] || value
      }
    })}
});
