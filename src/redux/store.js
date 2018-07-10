import {createStore, compose, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {responsiveStoreEnhancer} from 'redux-responsive'
import reducers from './reducers'

const store = createStore(reducers,
    compose(
        responsiveStoreEnhancer,
        applyMiddleware(thunkMiddleware, createLogger())
    )
)

export default store