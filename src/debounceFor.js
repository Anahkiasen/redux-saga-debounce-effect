import {take, cancel, call, fork} from 'redux-saga/effects';
import delay from './delay';

/**
 * Debounce a saga for X milliseconds
 *
 * @param {String|Array|Function} pattern
 * @param {Function} saga
 * @param {Number} ms
 * @param {Array} args
 */
export function *debounceFor(pattern, saga, ms, ...args) {
    function* delayedSaga(input) {
        yield call(delay, ms);
        yield call(saga, input);
    }

    let task;
    while (true) {
        const {input} = yield take(pattern);
        if (task) {
            yield cancel(task);
        }

        task = yield fork(delayedSaga, input, ...args);
    }
}
