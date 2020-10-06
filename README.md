3.2

The store is now set up to have a counter slice and a users slice which is an array.

We load the store with the counter and the users.

We split reducer into two files and locate in store.

We use combineReducers in index.js

In the previous lessons the payload from randomuser.me had both the results and info arrays. This has been amended so that the users store has just an array of users.

We also ouput users as JSON.stringify for debug rather than presentation.
