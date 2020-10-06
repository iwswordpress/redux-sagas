3

We will install Redux Dev Tools

Add Redux Dev Tools Chrome extension https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en or search for Chrome Redux Dev Tools extension

1. npm install -D redux-devtools-extension
2. add import { composeWithDevTools } from 'redux-devtools-extension';
3. Replace const store = ... with
   const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));

This can be seen in index.js

We also change all buttons to ASYNC in sagas with their own watcher sagas.

This sets us up for chapter 3.
