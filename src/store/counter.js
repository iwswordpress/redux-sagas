import * as actions from './actions';

const initialState = {
  counter: 0,
  prize: false
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actions.DECREMENT:
      return { ...state, counter: state.counter - 1, prize: false };
    case actions.SHOW_CONGRATULATION:
      console.log('WELL DONE! 3 INCREMENTS');
      return { ...state, prize: true };
    default:
      return state;
  }
}
