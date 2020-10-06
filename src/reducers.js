export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'INCREMENT_IF_ODD':
      return state % 2 !== 0 ? state + 1 : state;
    case 'DECREMENT':
      return state - 1;
    case 'SHOW_CONGRATULATION':
      console.log('WELL DONE!');
      return state;
    case 'FETCH_SUCCEEDED':
      console.log('[REDUCER] FETCH_SUCCEEDED');
      console.log('[REDUCER] ACTION: ', action.type);
      console.log('[REDUCER] PAYLOAD: ', action.payload);
      return state;
    case 'FETCH_FAILED':
      console.log('[REDUCER] FETCH_FAILED');
      return state;
    default:
      return state;
  }
}
