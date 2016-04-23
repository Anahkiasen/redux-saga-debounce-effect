import 'babel-polyfill';
import expect from 'expect';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {put} from 'redux-saga/effects';
import debounce from '../src/debounce';

const increment = field => ({type: 'INCREMENT', field});

describe('debounce', () => {
    it('can debounce action', () => {
        const reducer = (state = 0, action) => action.type === 'INCREMENT' ? {...state, [action.field]: state[action.field] + 1} : state;
        const sagaMiddleware = createSagaMiddleware();
        const initialState = {
            count: 0,
            saga: 0,
        };

        const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));
        sagaMiddleware.run(function *() {
            yield debounce('INCREMENT', function *() {
                console.log('SAGA');
                yield put(increment('saga'));
            });
        });

        store.dispatch(increment('count'));
        store.dispatch(increment('count'));

        // Wait for debounce
        setTimeout(() => {
            expect(store.getState().count).toEqual(2);
            expect(store.getState().saga).toEqual(1);
        }, 500);
    });
});
