import { createStore, combineReducers } from 'redux';

const counterReducer = (state = { red: 0, blue: 0 }, action)=> {
  switch(action.type){
    case 'INCREMENT_RED':
      state = Object.assign({}, state, { red: state.red + 1 });
      break;
    case 'INCREMENT_BLUE':
      state = Object.assign({}, state, { blue: state.blue + 1 });
      break;
  }
  return state;
}

const combined = combineReducers({
  counter: counterReducer
});

const store = createStore(combined);
store.subscribe(()=> console.log(store.getState()));


const incrementRed = ()=> ({ type: 'INCREMENT_RED'});
const incrementBlue = ()=> ({ type: 'INCREMENT_BLUE'});

export { incrementRed, incrementBlue };
export default store;


