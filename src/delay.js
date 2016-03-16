/**
 * Creates a Promise with a delay of X milliseconds
 *
 * @param {Number} ms
 * 
 * @returns {Promise}
 */
export default function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
