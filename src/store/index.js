import { createStore } from 'redux';
import reducer from './reducer';
import state from './state';


const store = createStore(
    reducer,//这里有严格顺序要求，要先reducer，后state
    state
)

export default store