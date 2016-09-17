import debounceFor from './debounceFor';

/**
 * Debounce a saga for 500ms
 *
 * @param {String|Array|Function} pattern
 * @param {Function} handler
 * @param {Array} args
 *
 * @return {Function}
 */
export default (pattern, handler, ...args) => debounceFor(pattern, handler, 500, ...args);
