const initialState = {
  users: []
};

export default function users(state = initialState, action) {
  switch (action.type) {
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
