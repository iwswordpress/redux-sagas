3.2

Added more action constants in actions.js.

Added auth reducer and store slices.

Added LOGIN/LOGOUT buttons and display status with some styling.

Restructure app with folders for components, sagas, etc...

Render users as cards.

Rename Counter component to DASHBOARD.

Added Users.js to display cards for each user.

Split sagas into separate sagas and have a root saga in index.js.

In src/index.js we now use: import rootSaga from './sagas/' as index.js is assumed in node.
