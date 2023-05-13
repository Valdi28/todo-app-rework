import { createStore } from 'redux'
import { rootReducer } from './reducers/root'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(rootReducer, composeWithDevTools())