1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    1: .map()

    4: .filter()

    3: .concat()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    actions: Actions are a js object that always contain a 'type' key value pair and possibly any number of payloads.

    reducers: Reducers take the data from an action and do something to state with it. 

    store: The store lives in the provider and connects the components in our app to a single source of truth that they can all send actions to.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application State: Application state is state that the whole application requires, for example, whether or not a user is logged in or how many likes a post has.

    Component State: Component state is state held by individual components, for example, form inputs

1.  What is middleware?

    Middleware: Middleware is some sort of function that holds a curent action and is executed before an action gets to the reducer

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux-thunk: redux-thunk is a middleware that allows our app to be asynchronous, with it, our action creators return functions instead of actions and use our store's dispatch method. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect()()
