import { createStore } from 'redux'
import movieReducer from './moviesReducer'
import { devToolsEnhancer } from 'redux-devtools-extension'

export default createStore(movieReducer, devToolsEnhancer())