# redux-saga debounce effect

A small `debounce` effect for redux-saga

## Usage

```js
import {debounce, debounceFor} from 'redux-saga-debounce-effect';

// Using the default of 500ms
yield debounce(pattern, saga, ...args);

// Or specifying the debounce period yourself
yield debounceFor(pattern, saga, ms, ...args);
```

