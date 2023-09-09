const redux = require('redux');
const createStore = redux.createStore;
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


const initialState = {
    numOfCakes: 10,
    numofIceCreams: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ... state,
            numOfCakes : state.numOfCakes-1
        }
        case BUY_ICE_CREAM: return {
            ... state,
            numofIceCreams : state.numofIceCreams-1
        }
        default: return state
    }
}

const store = createStore(reducer);
console.log("Initial State : ", store.getState())

const unsubscribe =  store.subscribe(()=>console.log("State Change : ", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe()
