import { createStore } from 'redux'
import { rootReducer } from './reducers/root'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(rootReducer, composeWithDevTools())
// remove composeWithDevTools() when the project is ready for production, and it import