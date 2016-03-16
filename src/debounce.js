import debounceFor from './debounceFor';

/**
 * Debounce a saga for 500ms
 *
 * @param {String|Array|Function} pattern
 * @param {Function} handler
 * @param {Array} args
 */
export default function debounce(pattern, handler, ...args) {
    return debounceFor(pattern, handler, 500, ...args);
}
