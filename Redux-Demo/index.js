const redux = require('redux');
const createStore = redux.createStore;
const combineReducers =  redux.combineReducers;
const applyMiddleware = redux.applyMiddleware
const ReduxLogger = require('redux-logger');

const logger = ReduxLogger.createLogger()

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

function buyCake() {
    return {
        type: BUY_CAKE
    }
}

function buyIceCream() {
    return {
        type: BUY_ICE_CREAM
    }
}


const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numofIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ... state,
            numOfCakes : state.numOfCakes-1
        }
        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM: return {
            ... state,
            numofIceCreams : state.numofIceCreams-1
        }
        default: return state
    }
}


const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State : ", store.getState())

// const unsubscribe =  store.subscribe(()=>console.log("State Change : ", store.getState()))
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe()
