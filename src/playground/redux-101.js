import { createStore } from 'redux';

// Action generator

const incrementAction = ({ incrementBy = 1 } = {} ) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementAction = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetAction = () => ({
  type: 'RESET'
})

const setAction = ({ count } ) => ({
  type: 'SET',
  count
});

// Reducers
// 1. Reducers are pure functions
// 2. Reducers never change state or action.

const countReducer = (state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy }
    case 'DECREMENT':
      return { count: state.count - action.decrementBy }
    case 'SET':
      return { count: action.count }
    case 'RESET':
      return { count: 0 }  
    default:
      return state
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(incrementAction({ incrementBy: 5 }));

store.dispatch(incrementAction());

store.dispatch(resetAction());

store.dispatch(decrementAction());

store.dispatch(decrementAction({decrementBy: 10}));

store.dispatch(setAction({count: 101}));