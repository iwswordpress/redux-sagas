This lessons gets us to have an ASYNC counter button.

The rootSaga is implemented.

When we click the Increment after 1 second button an action of 'INCREMENT_ASYNC' is disptachted using the action() method.

The saga has a watchIncrementAsync that 'listens' for this action and when it hears it fires the generator function watchIncrementAsync.

This is our base wiring for sagas.
