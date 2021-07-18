import { combineReducers, createStore, applyMiddleware } from 'redux'
import  thunk  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllfoodsReducers } from './reducers/foodReducers'

const finalReducer = combineReducers({
    getAllfoodsReducers : getAllfoodsReducers
})

const initialState = {}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store