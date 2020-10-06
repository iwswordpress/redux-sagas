const initialState = {
  counter: 0,
  users: []
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'SHOW_CONGRATULATION':
      console.log('WELL DONE! 3 INCREMENTS');
      return state;
    case 'FETCH_SUCCEEDED':
      console.log('[REDUCER] FETCH_SUCCEEDED');
      console.log('[REDUCER] ACTION: ', action.type);
      console.log('[REDUCER] PAYLOAD: ', action.payload);
      return { ...state, users: action.payload };
    case 'FETCH_FAILED':
      console.log('[REDUCER] FETCH_FAILED');
      return state;
    default:
      return state;
  }
}
